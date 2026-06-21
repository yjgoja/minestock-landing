"use client";

import { getMetaTrackOptions } from "@/lib/meta-pixel";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaLead() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  const testOptions = getMetaTrackOptions();

  window.fbq(
    "track",
    "Lead",
    {
      content_name: "마인스탁 상담신청",
      content_category: "meta_landing_01",
    },
    testOptions
  );

  window.fbq(
    "track",
    "CompleteRegistration",
    {
      content_name: "마인스탁 상담신청",
      status: "complete",
    },
    testOptions
  );
}
