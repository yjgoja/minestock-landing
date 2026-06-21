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

  window.fbq("track", "Lead", {}, testOptions);
}
