"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaLead() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", "Lead", {
    content_name: "마인스탁 상담신청",
    content_category: "meta_landing_01",
  });

  window.fbq("track", "CompleteRegistration", {
    content_name: "마인스탁 상담신청",
    status: "complete",
  });
}
