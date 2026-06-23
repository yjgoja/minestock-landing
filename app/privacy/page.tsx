import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 마인스탁",
  description: "주식회사 마인스탁 개인정보처리방침",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff]">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1f66ff] hover:underline"
        >
          ← 홈으로
        </Link>

        <h1 className="mt-6 text-2xl font-black text-[#0e2a52] md:text-3xl">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#31527f]">
          주식회사 마인스탁(이하 &quot;회사&quot;)은 「개인정보 보호법」 등
          관련 법령을 준수하며, 이용자의 개인정보를 보호하고 이와 관련한
          고충을 신속하게 처리하기 위해 다음과 같이 개인정보처리방침을
          수립·공개합니다.
        </p>
        <p className="mt-2 text-sm text-[#7f93b8]">시행일: 2026년 6월 22일</p>

        <div className="mt-8 space-y-6">
          <PolicySection title="1. 개인정보의 처리 목적">
            회사는 다음 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는
            아래 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는
            경우 「개인정보 보호법」에 따라 별도의 동의를 받습니다.
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>투자 상담 신청 접수 및 상담 일정 안내</li>
              <li>서비스 제공, 문의 응대 및 고객 상담</li>
              <li>마케팅·프로모션 안내(별도 동의한 경우에 한함)</li>
              <li>서비스 품질 개선 및 통계 분석</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. 수집하는 개인정보 항목">
            <p className="font-semibold text-[#0e2a52]">필수 항목</p>
            <p className="mt-1">이름, 휴대폰 번호, 주식·선물 투자 경험 여부</p>
            <p className="mt-4 font-semibold text-[#0e2a52]">
              자동 수집 항목
            </p>
            <p className="mt-1">
              IP 주소, 쿠키, 접속 일시, 서비스 이용 기록, 유입 경로, 기기
              정보(브라우저/OS 등)
            </p>
          </PolicySection>

          <PolicySection title="3. 개인정보의 처리 및 보유기간">
            회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터
            개인정보를 수집 시 동의받은 보유·이용 기간 내에서 개인정보를
            처리·보유합니다.
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>상담 신청 정보: 상담 완료일로부터 1년</li>
              <li>
                관련 법령에 따라 보존이 필요한 경우: 해당 법령에서 정한 기간
              </li>
            </ul>
            보유기간 경과 또는 처리 목적 달성 시 지체 없이 해당 개인정보를
            파기합니다.
          </PolicySection>

          <PolicySection title="4. 개인정보의 제3자 제공">
            회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
            않습니다. 다만, 아래의 경우에는 예외로 합니다.
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>정보주체가 사전에 동의한 경우</li>
              <li>법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 요청이 있는 경우</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. 개인정보 처리 위탁">
            회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리업무를
            위탁할 수 있습니다.
            <div className="mt-3 overflow-x-auto rounded-xl border border-[#bfd2ff]">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-[#eef4ff] text-[#0e2a52]">
                  <tr>
                    <th className="px-4 py-3 font-bold">수탁업체</th>
                    <th className="px-4 py-3 font-bold">위탁 업무</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d9e7ff]">
                  <tr>
                    <td className="px-4 py-3">Google LLC (Google Sheets)</td>
                    <td className="px-4 py-3">상담 신청 데이터 저장·관리</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Vercel Inc.</td>
                    <td className="px-4 py-3">웹사이트 호스팅</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Meta Platforms, Inc.</td>
                    <td className="px-4 py-3">광고 성과 측정(픽셀)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Google LLC (Tag Manager)</td>
                    <td className="px-4 py-3">광고·분석 태그 관리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PolicySection>

          <PolicySection title="6. 정보주체의 권리·의무 및 행사방법">
            정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련
            권리를 행사할 수 있습니다.
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="mt-3">
              권리 행사는 아래 연락처로 서면, 이메일 등을 통해 하실 수 있으며,
              회사는 지체 없이 조치하겠습니다.
            </p>
          </PolicySection>

          <PolicySection title="7. 개인정보의 파기">
            회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>전자적 파일: 복구 불가능한 방법으로 영구 삭제</li>
              <li>종이 문서: 분쇄 또는 소각</li>
            </ul>
          </PolicySection>

          <PolicySection title="8. 개인정보의 안전성 확보조치">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다.
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>개인정보 접근 권한 최소화</li>
              <li>개인정보 처리 시스템 접근통제</li>
              <li>전송 구간 암호화(HTTPS)</li>
              <li>개인정보 취급자 교육</li>
            </ul>
          </PolicySection>

          <PolicySection title="9. 쿠키 및 자동 수집 장치">
            회사는 이용자에게 맞춤형 서비스와 광고 성과 측정을 위해 쿠키 및
            유사 기술을 사용할 수 있습니다. 이용자는 브라우저 설정을 통해
            쿠키 저장을 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수
            있습니다.
          </PolicySection>

          <PolicySection title="10. 개인정보 보호책임자">
            <div className="mt-3 rounded-xl border border-[#bfd2ff] bg-[#f3f8ff] p-4">
              <p>
                <strong className="text-[#0e2a52]">성명:</strong> 김학기
              </p>
              <p>
                <strong className="text-[#0e2a52]">직책:</strong> 대표
              </p>
              <p>
                <strong className="text-[#0e2a52]">연락처:</strong>{" "}
                <a
                  href="mailto:minestock@naver.com"
                  className="text-[#1f66ff] hover:underline"
                >
                  minestock@naver.com
                </a>
                ,{" "}
                <a
                  href="tel:010-9093-7425"
                  className="text-[#1f66ff] hover:underline"
                >
                  010-9093-7425
                </a>
              </p>
            </div>
          </PolicySection>

          <PolicySection title="11. 개인정보처리방침의 변경">
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 회사 정책
            변경에 따라 내용이 추가·삭제·수정될 수 있습니다. 변경 시 웹사이트
            공지사항을 통해 안내합니다.
          </PolicySection>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#c7d8fb] bg-white p-6 text-sm leading-7 text-[#31527f]">
      <h2 className="text-base font-bold text-[#0e2a52]">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
