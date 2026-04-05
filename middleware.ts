import { NextResponse, type NextRequest } from "next/server";

/**
 * After auth is implemented, redirect unauthenticated users away from
 * /patient, /doctor, and /admin (see GET /api/auth/me).
 */
export function middleware(request: NextRequest) {
  void request;
  return NextResponse.next();
}

export const config = {
  matcher: ["/patient/:path*", "/doctor/:path*", "/admin/:path*"],
};
