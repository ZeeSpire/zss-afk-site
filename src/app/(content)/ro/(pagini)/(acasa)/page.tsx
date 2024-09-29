import Image from "next/image";

import Link from "next/link";
import { Article } from "@/app/model/article";
import { getPaginatedArticles } from "../../data/data";
import { Pagination } from "@/app/components/ro/pagination/Pagination";
import Navbar from "@/app/components/ro/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Cele mai prețioase momente din viață se petrec offline.",
  description: "Informații de călătorie. Ce să vizitezi, unde să mănânci, cum să-ți petreci timpul liber și sărbătorile.",
  keywords: ['afkology', 'călătorie', 'idei de călătorie', 'ghid de călătorie', 'ghid de restaurante', 'călătorii în europa', 'restaurante', 'locuri de vizitat'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/ro',
    languages: {
      'ro-RO': '/ro',
      'en-US': '/',
    },
  },
  openGraph: {
    title: "AFKology | Cele mai prețioase momente din viață se petrec offline.",
    description: "Informații de călătorie. Ce să vizitezi, unde să mănânci, cum să-ți petreci timpul liber și sărbătorile.",
    url: 'https://www.afkology.com',
    siteName: 'AFKology',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: 'https://www.afkology.com/logo.png',
        width: 190,
        height: 107,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  // verification: {
  //   google: 'ADDD CODEE',
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | Cele mai prețioase momente din viață se petrec offline.",
  "description": "Informații de călătorie. Ce să vizitezi, unde să mănânci, cum să-ți petreci timpul liber și sărbătorile.",
  "url": "https://www.afkology.com/ro",
  "author": {
    "@type": "Organization",
    "name": "AFKology",
    "url": "https://www.afkology.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AFKology",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.afkology.com/logo.png"
    }
  },
  "mainEntityOfPage": "https://www.afkology.com/ro"
}

export default function Page() {
  const articlesPerPage = 9;

  const { articles, total } = getPaginatedArticles({
    page: 1,
    limit: articlesPerPage,
  });

  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar enUrl="/" />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl" key={article.slug}>
              <figure>
                <Link href={`/${article.slug}`}>
                  <Image src={article.featured} alt={article.title}
                    width={705}
                    height={705}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw"
                  />
                </Link>
              </figure>
              <div className="card-body">
                <Link href={`/${article.slug}`}><h2 className="card-title">{article.title}</h2></Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination baseUrl="/ro/pagina" page={1} perPage={articlesPerPage} total={total} />
      </main>
    </div>
  );
}