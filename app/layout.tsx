import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { META_PIXEL_ID } from "@/lib/meta-pixel";
import { META_PIXEL_SCRIPT } from "@/lib/meta-pixel-script";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const enablePixel = headersList.get("x-enable-meta-pixel") === "1";

  return (
    <html lang="ko">
      <head>
        {enablePixel && (
          <>
            <link rel="preconnect" href="https://connect.facebook.net" />
            <script
              dangerouslySetInnerHTML={{ __html: META_PIXEL_SCRIPT }}
            />
          </>
        )}
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {enablePixel && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
