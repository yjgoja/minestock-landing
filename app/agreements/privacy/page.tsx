import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 수집 및 이용동의 | 마인스탁",
};

export default function PrivacyAgreementPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-10 text-slate-100">
      <h1 className="text-2xl font-bold text-white md:text-3xl">
        개인정보 수집 및 이용동의 (필수)
      </h1>
      <p className="mt-3 text-sm text-slate-300">
        주식회사 마인스탁은 상담 신청 접수 및 서비스 제공을 위해 아래와 같이
        개인정보를 수집·이용합니다.
      </p>
      <section className="mt-8 space-y-4 rounded-2xl border border-[#c7d8fb] bg-white p-6 text-sm leading-7 text-slate-700">
        <p>
          <strong className="text-[#1f66ff]">1. 수집 항목</strong>
          <br />
          이름, 휴대폰 번호, 주식/선물 투자 경험, 동의 여부
        </p>
        <p>
          <strong className="text-[#1f66ff]">2. 수집 및 이용 목적</strong>
          <br />
          투자 상담 서비스 제공, 상담 일정 안내, 서비스 개선
        </p>
        <p>
          <strong className="text-[#1f66ff]">3. 보유 및 이용 기간</strong>
          <br />
          상담 완료일로부터 1년 이내 또는 즉시 파기
        </p>
        <p>
          <strong className="text-[#1f66ff]">4. 동의 거부 권리</strong>
          <br />
          이용자는 개인정보 수집·이용 동의를 거부할 권리가 있습니다. 다만
          필수 항목 동의 거부 시 상담 신청이 제한될 수 있습니다.
        </p>
      </section>
      <section className="mt-8 rounded-2xl border border-[#c7d8fb] bg-white p-6 text-sm leading-7 text-slate-700">
        <h2 className="text-base font-bold text-[#0e2a52]">사업자 정보</h2>
        <p className="mt-3">상호명: 주식회사 마인스탁</p>
        <p>대표자: 김학기</p>
        <p>사업자등록번호: 110111-7655339</p>
        <p>
          주소: 인천광역시 중구 큰골목길 69, 2층 201호(전동, 스마트스페이스)
        </p>
        <p>이메일: minestock@naver.com</p>
        <p>전화번호: 010-9093-7425</p>
      </section>
    </main>
  );
}
