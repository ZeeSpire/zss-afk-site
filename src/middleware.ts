import { NextRequest, NextResponse } from 'next/server'
import { getSlugs } from './data/slugs';

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  const lang = req.cookies.get('AFK_LOCALE')?.value;
  const slugs = getSlugs();

  if (lang) {
    console.log("cookie is present")
    if (lang === 'ro') {
      console.log("language is romanian")

      //homepage
      if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(
          new URL(`/ro`, req.url)
        )
      }

      //homepage pagination
      const pageMatch = req.nextUrl.pathname.match(/^\/page\/(\d+)$/);
      if (pageMatch) {
        const pageNumber = pageMatch[1];
        return NextResponse.redirect(
          new URL(`/pagina/${pageNumber}`, req.url)
        );
      }

      //articles
      for (const slug of slugs) {
        if (req.nextUrl.pathname === `/${slug.en}`) {
          return NextResponse.redirect(new URL(`/${slug.ro}`, req.url));
        }
      }
    } else {
      console.log("language is english")

      //homepage
      if (req.nextUrl.pathname === '/ro') {
        return NextResponse.redirect(new URL(`/`, req.url));
      }

      //homepage pagination
      const paginiMatch = req.nextUrl.pathname.match(/^\/ro\/pagina\/(\d+)$/);
      if (paginiMatch) {
        const number = paginiMatch[1]; // Extract the number from the matched pattern
        return NextResponse.redirect(new URL(`/page/${number}`, req.url));
      }

      //articles
      for (const slug of slugs) {
        if (req.nextUrl.pathname === `/${slug.ro}`) {
          return NextResponse.redirect(new URL(`/${slug.en}`, req.url));
        }
      }

    }
  } else {
    console.log("cookie not present")
    //check the country, set cookie and redirect to romanian
  }
}