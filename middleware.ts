import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { pathname } = request.nextUrl;

  if (pathname === "/01" || pathname.startsWith("/01/")) {
    requestHeaders.set("x-meta-pixel", "1");
  }

  if (pathname === "/complete") {
    requestHeaders.set("x-google-ads-conversion", "1");
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/01", "/01/:path*", "/complete"],
};
