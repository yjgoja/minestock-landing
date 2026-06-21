import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "마인스탁 | 퀀트 투자 상담 신청",
  description:
    "감이 아닌 퀀트 투자 전략으로 수익을 만들어보세요. 무료 투자 상담을 신청해보세요.",
};

export default function Landing01Page() {
  return (
    <main className="min-h-screen bg-[#f4f8ff]">
      <HeroSection source="01" />
      <SiteFooter />
    </main>
  );
}
