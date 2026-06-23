import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마케팅 활용 및 수신동의 | 마인스탁",
};

export default function MarketingAgreementPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-10 text-slate-100">
      <h1 className="text-2xl font-bold text-white md:text-3xl">
        마케팅 활용 및 수신동의 (선택)
      </h1>
      <p className="mt-3 text-sm text-slate-300">
        주식회사 마인스탁은 투자 정보 및 이벤트 안내를 위해 아래와 같이
        개인정보를 활용할 수 있습니다.
      </p>
      <section className="mt-8 space-y-4 rounded-2xl border border-[#c7d8fb] bg-white p-6 text-sm leading-7 text-slate-700">
        <p>
          <strong className="text-[#1f66ff]">1. 활용 항목</strong>
          <br />
          이름, 휴대폰 번호
        </p>
        <p>
          <strong className="text-[#1f66ff]">2. 활용 목적</strong>
          <br />
          투자 정보 제공/세미나/이벤트/프로모션 안내 및 관련 서비스 제공
        </p>
        <p>
          <strong className="text-[#1f66ff]">3. 수신 방법</strong>
          <br />
          전화, 문자메시지(SMS)
        </p>
        <p>
          <strong className="text-[#1f66ff]">4. 보유 및 이용 기간</strong>
          <br />
          동의일로부터 1년 또는 동의 철회 시까지
        </p>
        <p>
          <strong className="text-[#1f66ff]">5. 동의 거부 권리</strong>
          <br />본 동의는 선택 사항이며, 거부하셔도 상담 신청은 가능합니다.
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
