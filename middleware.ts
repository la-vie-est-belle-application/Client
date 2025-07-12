import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@entities/supabase/lib";

export async function middleware(request: NextRequest) {
  console.log("🔥 미들웨어 작동:", request.nextUrl.pathname);
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
