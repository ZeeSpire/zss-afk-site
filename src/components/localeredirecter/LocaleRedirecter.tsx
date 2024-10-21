import { getSlugs } from "@/data/slugs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from 'js-cookie';

const PUBLIC_FILE = /\.(.*)$/
const slugs = getSlugs();

// export async function LocaleRedirecter() {
//     // if(process.env.VERCEL) {
//       if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api') || PUBLIC_FILE.test(req.nextUrl.pathname)) {
//         return NextResponse.next(); // Skip middleware
//       } else {
//         console.log(">>> on VERCEL >>> starting redirects")

//         const lang = req.cookies.get('AFK_LOCALE')?.value;

//         if (lang) {
//           redirectbyCookie(req, lang);
//         } else {
//         //   console.log(">>> cookie not present")
//         //   //check the country, set cookie and redirect to romanian
//         //   const country = req.headers.get('X-Vercel-IP-Country');
//         //   console.log(`>>> Country detected: ${country}`);

//         //   if (country === 'RO' || country === 'ro') {
//         //     console.log('>>> set ro cookie')
//         //     const response = NextResponse.next();
//         //     response.cookies.set('AFK_LOCALE', 'ro', { path: '/', maxAge: 60 * 60 * 24 * 365 }); // 1 year

//         //     console.log('>>> redirecting to ro')
//         //     redirectbyCookie(req, 'ro');
//         //   }
//         // }
//       }

//     }
//   }

const LocaleRedirecter: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const lang = Cookies.get('AFK_LOCALE');
        const currentPath = router.pathname;
        function redirectbyCookie(currentPath: string, lang?: string) {
            if (lang === 'ro') {
                console.log(">>> language is romanian")

                //paginations
                for (const slug of slugs) {
                    if (slug.paginationEn && slug.paginationRo) {
                        const lastSlashIndex = currentPath.lastIndexOf('/');
                        const pageNumber = currentPath.substring(lastSlashIndex + 1);
                        const baseUrl = currentPath.substring(0, lastSlashIndex);

                        if (baseUrl === slug.paginationEn) {
                            // return NextResponse.redirect(, req.url));
                            router.push(new URL(`${slug.paginationRo}/${pageNumber}`))
                        }
                    }

                    //articles, pages, categories
                    if (currentPath === `${slug.en}`) {
                        router.push(new URL(`${slug.ro}`))

                    }
                }
            } else {
                console.log(">>> language is english")

                //paginations
                for (const slug of slugs) {
                    if (slug.paginationEn && slug.paginationRo) {
                        const lastSlashIndex = currentPath.lastIndexOf('/');
                        const pageNumber = currentPath.substring(lastSlashIndex + 1);
                        const baseUrl = currentPath.substring(0, lastSlashIndex);

                        if (baseUrl === slug.paginationRo) {
                            router.push(new URL(`${slug.paginationEn}/${pageNumber}`))
                        }
                    }

                    //articles, pages, categories
                    if (currentPath === `${slug.ro}`) {
                        router.push(new URL(`${slug.en}`))
                    }
                }

            }
        }

        if (lang) {
            // If a language cookie is found, redirect based on it
            redirectbyCookie(currentPath, lang);
        } else {

        }
    }, [router]);

    return null; // Returning null for components that don't render visible UI
};

export default LocaleRedirecter;