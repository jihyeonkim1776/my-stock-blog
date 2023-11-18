import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export const config = { matcher: ["/admin/:path*", "/user/:path*"] };

// export async function middleware(req: NextRequest) {
//   const session = await getToken({ req, secret: process.env.JMT_SECRET });
//   const pathname = req.nextUrl.pathname;

//   //로그인 안한 유저
//   if (pathname.startsWith("/user") && !session) {
//     return NextResponse.redirect(new URL("/api/auth/login"), req.url);
//   }
//   //어드민 유저아닐 경우
//   if (pathname.startsWith("/admin") && session?.role !== "admin") {
//     return NextResponse.redirect(new URL("/"), req.url);
//   }
//   //로그인 한 유저
//   if (session) {
//     return NextResponse.redirect(new URL("/"), req.url);
//   }
//   //원하는 곳으로 이동
//   return NextResponse.next();
// }
