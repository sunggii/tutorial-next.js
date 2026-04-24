import { NextResponse } from "next/server"

export function middleware(request) {
    console.log("Middleware executed for path:", request.nextUrl.pathname)
    return NextResponse.next()
    //return NextResponse.redirect(new URL("/", request.url)) // จะเตะเลย
} 

export const config = {
    matcher: "/content/:path*",
}   