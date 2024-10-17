import { NextRequest, NextResponse } from 'next/server'
import { getSlugs } from './data/slugs';

const PUBLIC_FILE = /\.(.*)$/
const slugs = getSlugs();

function redirectbyCookie(req: NextRequest, lang?: string) {
  console.log(">>> cookie is present")
  if (lang === 'ro') {
    console.log(">>> language is romanian")

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
    console.log(">>> language is english")

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
}



export async function middleware(req: NextRequest) {
  // if(process.env.VERCEL) {
    if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api/') || PUBLIC_FILE.test(req.nextUrl.pathname)) {
      return NextResponse.next();
    }

    console.log(">>> on VERCEL >>> starting redirects")
  
    const lang = req.cookies.get('AFK_LOCALE')?.value;
  
    if (lang) {
      redirectbyCookie(req, lang);
    } else {
      console.log(">>> cookie not present")
      //check the country, set cookie and redirect to romanian
      const country = req.headers.get('X-Vercel-IP-Country');
      console.log(`>>> Country detected: ${country}`);

      if (country === 'RO' || country === 'ro') {
        console.log('>>> set ro cookie')
        const response = NextResponse.next();
        response.cookies.set('AFK_LOCALE', 'ro', { path: '/', maxAge: 60 * 60 * 24 * 365 }); // 1 year
        
        console.log('>>> redirecting to ro')
        redirectbyCookie(req, 'ro');
      }
    }
  // }
}