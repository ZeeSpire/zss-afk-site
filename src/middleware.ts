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

      //paginations
      for (const slug of slugs) {
        if (slug.paginationEn && slug.paginationRo) {
          const visitedPath = req.nextUrl.pathname;
          const lastSlashIndex = visitedPath.lastIndexOf('/');
          const pageNumber = visitedPath.substring(lastSlashIndex + 1);
          const baseUrl = visitedPath.substring(0, lastSlashIndex);

          if (baseUrl === slug.paginationEn) {
            return NextResponse.redirect(new URL(`${slug.paginationRo}/${pageNumber}`, req.url));
          }
        }

        //articles, pages, categories
        if (req.nextUrl.pathname === `${slug.en}`) {
          return NextResponse.redirect(new URL(`${slug.ro}`, req.url));
        }
      }
    } else {
      console.log("language is english")

      //paginations
      for (const slug of slugs) {
        if (slug.paginationEn && slug.paginationRo) {
          const visitedPath = req.nextUrl.pathname;
          const lastSlashIndex = visitedPath.lastIndexOf('/');
          const pageNumber = visitedPath.substring(lastSlashIndex + 1);
          const baseUrl = visitedPath.substring(0, lastSlashIndex);

          if (baseUrl === slug.paginationRo) {
            return NextResponse.redirect(new URL(`${slug.paginationEn}/${pageNumber}`, req.url));
          }
        }

        //articles, pages, categories
        if (req.nextUrl.pathname === `${slug.ro}`) {
          return NextResponse.redirect(new URL(`${slug.en}`, req.url));
        }
      }

    }
  } else {
    console.log("cookie not present")
    //check the country, set cookie and redirect to romanian
    console.log(req.headers.get('X-Vercel-IP-Country'))
  }
}