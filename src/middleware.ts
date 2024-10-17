import { NextRequest, NextResponse } from 'next/server'
import { getSlugs } from './data/slugs';
import { addAfkLanguageCookie } from './components/languageswitcher/LanguageSwitcher';

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
  if(process.env.VERCEL) {
    console.log(">>> on VERCEL >>> starting redirects")
    if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api/') || PUBLIC_FILE.test(req.nextUrl.pathname)) {
      return
    }
  
    const lang = req.cookies.get('AFK_LOCALE')?.value;
  
    if (lang) {
      redirectbyCookie(req, lang);
    } else {
      console.log(">>> cookie not present")
      //check the country, set cookie and redirect to romanian
      if (req.headers.get('X-Vercel-IP-Country') === 'RO') {
        console.log('>>> set ro cookie')
        addAfkLanguageCookie('ro')
        console.log('>>> redirecting to ro')
        redirectbyCookie(req, 'ro');
      } else {
        console.log('>>> set en cookie')
        addAfkLanguageCookie('en')
        console.log('>>> redirecting to en')
        redirectbyCookie(req, 'en');
      }
    }
  }
}