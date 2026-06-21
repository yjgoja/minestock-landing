import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTM_HEAD_SCRIPT, GTM_NOSCRIPT_URL } from "@/lib/gtm";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "마인스탁 | 퀀트 투자 상담 신청",
  description:
    "감이 아닌 퀀트 투자 전략으로 수익을 만들어보세요. 무료 투자 상담을 신청해보세요.",
  openGraph: {
    title: "마인스탁 | 퀀트 투자 상담 신청",
    description: "감이 아닌 퀀트 투자 전략, 무료 상담 신청",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: GTM_HEAD_SCRIPT }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={GTM_NOSCRIPT_URL}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
