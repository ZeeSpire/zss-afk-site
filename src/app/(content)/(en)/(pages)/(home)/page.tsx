import Image from "next/image";

import Link from "next/link";
import { Article } from "@/app/model/article";
import { getPaginatedArticles } from "../../data/data";
import { Pagination } from "@/app/components/ro/pagination/Pagination";
import Navbar from "@/app/components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | The most precious moments in life happen offline.",
  description: "Travel information. What to visit, where to eat, how to spend your free time and holidays.",
  keywords: ['afkology', 'travel', 'cinematic travel', 'travel ideas', 'travel guide', 'food guide', 'travel europe', 'restaurants', 'places to visit'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ro-RO': '/ro',
    },
  },
  openGraph: {
    title: 'AFKology | The most precious moments in life happen offline.',
    description: 'Travel information. What to visit, where to eat, how to spend your free time and holidays.',
    url: 'https://www.afkology.com',
    siteName: 'AFKology',
    locale: 'en_US',
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
  verification: {
    google: 'ADDD CODEE',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | The most precious moments in life happen offline.",
  "description": "Travel information. What to visit, where to eat, how to spend your free time and holidays.",
  "url": "https://www.afkology.com/",
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
  "mainEntityOfPage": "https://www.afkology.com/"
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
      <Navbar roUrl="/ro" />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl" key={article.slug}>
              <figure>
                <Link href={`/${article.slug}`}><Image src={article.featured} alt={article.title} /></Link>
              </figure>
              <div className="card-body">
                <Link href={`/${article.slug}`}><h2 className="card-title">{article.title}</h2></Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination baseUrl="/page" page={1} perPage={articlesPerPage} total={total} />
      </main>
    </div>
  );
}
