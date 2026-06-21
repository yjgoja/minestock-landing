"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/track-conversion";

type CompleteTrackerProps = {
  source: "main" | "01";
};

export default function CompleteTracker({ source }: CompleteTrackerProps) {
  useEffect(() => {
    trackConversion(source);
  }, [source]);

  return null;
}
