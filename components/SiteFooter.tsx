export default function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-3xl border-t border-[#c7d8fb] px-4 py-10 text-xs leading-relaxed text-slate-400">
      <div className="space-y-1">
        <p className="mb-3 text-sm font-semibold text-slate-300">
          주식회사 마인스탁
        </p>
        <p>대표자: 김학기</p>
        <p>법인등록번호: 110111-7655339</p>
        <p>
          주소: 인천광역시 중구 큰골목길 69, 2층 201호(전동, 스마트스페이스)
        </p>
        <p>
          이메일:{" "}
          <a
            href="mailto:minestock@naver.com"
            className="text-[#1f66ff] hover:underline"
          >
            minestock@naver.com
          </a>
        </p>
        <p>
          전화번호:{" "}
          <a
            href="tel:010-9093-7425"
            className="text-[#1f66ff] hover:underline"
          >
            010-9093-7425
          </a>
        </p>
      </div>
      <p className="mt-6 text-slate-500">
        © {new Date().getFullYear()} 주식회사 마인스탁. All rights reserved.
      </p>
      <p className="mt-3">
        <a href="/privacy" className="text-[#1f66ff] hover:underline">
          개인정보처리방침
        </a>
      </p>
      <p className="mt-2 text-slate-600">
        본 내용은 투자 손실에 대한 책임을 지지 않으며, 과거 수익률이 미래
        수익을 보장하지 않습니다.
      </p>
      <div className="mt-6 rounded-xl border border-[#bfd2ff] bg-[#f3f8ff] p-4 text-[#31527f]">
        <p className="text-sm font-bold text-[#1249bc]">※ 유의사항</p>
        <p className="mt-2 text-xs leading-relaxed">
          - 대상 : 해당 이벤트 페이지를 방문한
          <br />
          <br />
          마인스탁은 금융투자업자가 아닌 정보제공자로서,
          <br />
          투자자문 계약상 자금운용은 불가능합니다.
          <br />
          투자결정은 본인의 투자판단에 따라 손실이 발생할 수 있으며,
          <br />그 손실은 투자자에게 귀속됩니다.
        </p>
      </div>
    </footer>
  );
}
