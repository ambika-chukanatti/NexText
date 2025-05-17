import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/","/chat/*"];
const publicRoutes = ["/sign-in", "/sign-up"];

export default async function middleware(req: NextRequest) {

  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute =
    protectedRoutes.some((route) =>
      route === "/" ? path === "/" : path.startsWith(route)
    );

  const cookiePromise = await cookies()

  const cookie = cookiePromise.get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}