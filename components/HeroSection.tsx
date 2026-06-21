import LandingForm from "@/components/LandingForm";

type HeroSectionProps = {
  source: "main" | "01";
};

export default function HeroSection({ source }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#c7d8fb]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/source/lounge-01.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(244,248,255,0.9)_66%,rgba(244,248,255,0.98)_100%)]" />
      <div className="relative mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
        <div className="rounded-3xl border border-[#b7cdff] bg-[rgba(255,255,255,0.88)] p-6 shadow-2xl backdrop-blur-sm md:p-9">
          <p className="landing-eyebrow">LAST CHANCE MAINSTOCK</p>
          <h1 className="mt-4 text-3xl font-black leading-tight text-[#0e2a52] md:text-5xl">
            마지막 기회 마인스탁
          </h1>
          <p className="mt-3 text-lg font-bold text-[#1f66ff] md:text-2xl">
            마지막 기회를 잡아보시겠어요?
          </p>
          <p className="mt-2 text-base font-semibold text-[#1a458f] md:text-lg">
            감이 아닌 퀀트트레이딩
          </p>
        </div>
        <div className="mt-6 rounded-3xl border border-[#b7cdff] bg-[rgba(255,255,255,0.92)] p-5 shadow-2xl md:p-8">
          <LandingForm source={source} />
        </div>
      </div>
    </section>
  );
}
