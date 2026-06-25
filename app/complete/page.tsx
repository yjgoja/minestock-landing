import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import ThankYouCard from "@/components/ThankYouCard";

export const metadata: Metadata = {
  title: "상담 신청 완료 | 마인스탁",
  robots: { index: false, follow: false },
};

export default function CompletePage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff]">
      <section className="relative isolate overflow-hidden border-b border-[#c7d8fb]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/source/lounge-01.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(244,248,255,0.9)_66%,rgba(244,248,255,0.98)_100%)]" />
        <div className="relative mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
          <div className="rounded-3xl border border-[#b7cdff] bg-[rgba(255,255,255,0.92)] p-5 shadow-2xl md:p-8">
            <ThankYouCard />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
