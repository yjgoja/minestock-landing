"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** 상담 신청 완료 시 Meta Lead 전환 (/01/complete) */
export function trackConversion(source: "main" | "01") {
  if (typeof window === "undefined") return;

  if (source === "01" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}
