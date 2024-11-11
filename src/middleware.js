
import { NextResponse } from "next/server"

export const middleware = (request) => {
    const user = true;
    // const user = false;

    const coo = 'next-hero' //set this cookies value to the local cookies storage.

    //we can use if condition instaed of matcher method.
    // if (request.nextUrl.pathname.startsWith("/about"))

    // return NextResponse.rewrite(new URL('/about/mission', request.url));

    // if (!user) {
    const cookies = request.cookies.get("token")
    console.log(cookies);

    if (!cookies || cookies.value !== coo) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/service", '/contact']
}