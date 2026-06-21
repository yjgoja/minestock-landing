export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1038089281989595";

export const META_TEST_EVENT_CODE =
  process.env.NEXT_PUBLIC_META_TEST_EVENT_CODE ?? "";

export function getMetaTrackOptions():
  | { test_event_code: string }
  | undefined {
  if (!META_TEST_EVENT_CODE) return undefined;
  return { test_event_code: META_TEST_EVENT_CODE };
}

/** fbq('track', 'EventName' ...) 4th argument for inline script */
export function getMetaTrackOptionsScriptSuffix(): string {
  if (!META_TEST_EVENT_CODE) return "";
  return `, {}, { test_event_code: '${META_TEST_EVENT_CODE}' }`;
}
