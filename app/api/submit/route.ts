import { NextRequest, NextResponse } from "next/server";

type SubmitBody = {
  experience: string;
  name: string;
  phone: string;
  consentPrivacy: boolean;
  consentMarketing: boolean;
  source?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: SubmitBody = await request.json();

    const { experience, name, phone, consentPrivacy, consentMarketing, source } =
      body;

    if (!experience || !name || !phone) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    if (!consentPrivacy) {
      return NextResponse.json(
        { error: "개인정보 수집 및 이용 동의가 필요합니다." },
        { status: 400 }
      );
    }

    if (!/^01[0-9]-\d{3,4}-\d{4}$/.test(phone)) {
      return NextResponse.json(
        { error: "휴대폰 번호 형식이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not configured");
      return NextResponse.json(
        { error: "서버 설정 오류입니다. 관리자에게 문의해주세요." },
        { status: 500 }
      );
    }

    const resolvedSource = source ?? "main";
    const isMeta = resolvedSource === "01";
    const sheetNumber = isMeta ? 2 : 1;
    const sheetName = isMeta ? "시트2" : "시트1";

    const payload = {
      timestamp: new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      }),
      experience: experience === "yes" ? "있음" : "없음",
      name,
      phone,
      consentPrivacy: consentPrivacy ? "동의" : "미동의",
      consentMarketing: consentMarketing ? "동의" : "미동의",
      source: resolvedSource,
      sheetNumber,
      sheetName,
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Google Script error:", text);
      return NextResponse.json(
        { error: "데이터 저장에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json(
      { error: "제출 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
