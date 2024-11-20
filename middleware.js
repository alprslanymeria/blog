import { NextResponse } from 'next/server';

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  const cookies = request.cookies;
  let userId = cookies.get('user-id');

  if (!userId) {
    userId = `user-${Date.now()}`;

    // Yeni cookie ayarla
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set('user-id', userId, {
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  }


  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: '/:path*',
};
