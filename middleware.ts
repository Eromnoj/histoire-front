import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  if(!req.cookies.has('token')){
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/userinterface/:path*', '/book/write/:path*']
}