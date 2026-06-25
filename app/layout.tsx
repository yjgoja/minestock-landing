import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { GTM_HEAD_SCRIPT, GTM_NOSCRIPT_URL } from "@/lib/gtm";
import {
  GOOGLE_ADS_CONVERSION_INLINE,
  GOOGLE_ADS_GTAG_INLINE,
  GOOGLE_ADS_ID,
} from "@/lib/google-ads";
import { META_PIXEL_ID, META_PIXEL_SCRIPT } from "@/lib/meta-pixel";
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
  const showMetaPixel = headersList.get("x-meta-pixel") === "1";
  const showGoogleConversion =
    headersList.get("x-google-ads-conversion") === "1";

  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: GTM_HEAD_SCRIPT }} />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: GOOGLE_ADS_GTAG_INLINE }} />
        {/* End Google tag (gtag.js) */}
        {showGoogleConversion && (
          <>
            {/* Event snippet for 리드 양식 제출 conversion page */}
            <script
              dangerouslySetInnerHTML={{
                __html: GOOGLE_ADS_CONVERSION_INLINE,
              }}
            />
          </>
        )}
        {showMetaPixel && (
          <script dangerouslySetInnerHTML={{ __html: META_PIXEL_SCRIPT }} />
        )}
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
        {showMetaPixel && (
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
