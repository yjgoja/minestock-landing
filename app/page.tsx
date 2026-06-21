import HeroSection from "@/components/HeroSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff]">
      <HeroSection source="main" />
      <SiteFooter />
    </main>
  );
}
