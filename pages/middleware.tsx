import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  return NextResponse.rewrite(req.nextUrl);
}

export const config = {
  matcher: [
    '/mercury',
    '/venus',
    '/earth',
    '/mars',
    '/jupiter',
    '/saturn',
    '/uranus',
    '/neptune',
    '/pluto',
  ],
};
