"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/** 상담 신청 완료 시 전환 추적 (Meta=/01, Google=/main) */
export function trackConversion(source: "main" | "01") {
  if (typeof window === "undefined") return;

  if (source === "01" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
    return;
  }

  if (source === "main") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lead_submit" });
  }
}
