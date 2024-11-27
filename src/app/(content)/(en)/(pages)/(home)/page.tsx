import Image from "next/image";

import Link from "next/link";
import { Article } from "../../../../../model/article";
import { getArticle, getPaginatedArticles } from "../../../../../data/articles";
import { Pagination } from "@/components/en/pagination/Pagination";
import Navbar from "../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import { getPage } from "@/data/pages";

const page = getPage(1);

export const metadata: Metadata = {
  title: `${page.title}`,
  description: `${page.description}`,
  keywords: `${page.keywords}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${page.slug?.en}`,
    languages: {
      'en-US': `${page.slug?.en}`,
      'ro-RO': `${page.slug?.ro}`,
    },
  },
  openGraph: {
    title: `${page.title}`,
    description: `${page.description}`,
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `${page.title}`,
  "description": `${page.description}`,
  "url": "https://www.afkology.com",
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
      "url": "https://www.afkology.com/logo.png",
      "width": 190,
      "height": 107,
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.afkology.com`
  }
  // "potentialAction": {  // Optional: specifies actions a user might take
  //   "@type": "SearchAction",
  //   "target": "https://www.afkology.com/search?q={search_term_string}",  // Example of a site search action
  //   "query-input": "required name=search_term_string"
  // }
}

export default function Page() {
  const { articles } = getPaginatedArticles({
    page: 1,
    limit: page.itemsPerPage,
    offset: page.offset
  });

  const latestArticle = getArticle(page.totalItems);
  const oneBeforeLatestArticle = getArticle(page.totalItems - 1);
  const twoBeforeLatestArticle = getArticle(page.totalItems - 2);
  const threeBeforeLatestArticle = getArticle(page.totalItems - 3);
  const fourBeforeLatestArticle = getArticle(page.totalItems - 4);

  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl={`${page.slug?.ro}`} />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="card bg-base-100 shadow-xl col-span-1 lg:col-span-2 lg:row-span-2">
            <figure>
              <Link prefetch={false} href={`${latestArticle.slug?.en}`}>
                <Image src={latestArticle.featured} alt={latestArticle.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" priority />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-5">
              <span className={`uppercase text-xs ${latestArticle.category?.color}`}> {latestArticle.category?.name}</span>
              <Link prefetch={false} href={`${latestArticle.slug?.en}`}><span className="card-title">{latestArticle.title}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link prefetch={false} href={`${oneBeforeLatestArticle.slug?.en}`}>
                <Image className="hidden lg:block" src={oneBeforeLatestArticle.featuredLandscape} alt={oneBeforeLatestArticle.title} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={oneBeforeLatestArticle.featured} alt={oneBeforeLatestArticle.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${oneBeforeLatestArticle.category?.color}`}> {oneBeforeLatestArticle.category?.name} </span>
              <Link prefetch={false} href={`${oneBeforeLatestArticle.slug?.en}`}><span className="card-title text-lg leading-6">{oneBeforeLatestArticle.title}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link prefetch={false} href={`${twoBeforeLatestArticle.slug?.en}`}>
                <Image className="hidden lg:block" src={twoBeforeLatestArticle.featuredLandscape} alt={twoBeforeLatestArticle.title} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={twoBeforeLatestArticle.featured} alt={twoBeforeLatestArticle.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${twoBeforeLatestArticle.category?.color}`}> {twoBeforeLatestArticle.category?.name} </span>
              <Link prefetch={false} href={`${twoBeforeLatestArticle.slug?.en}`}><span className="card-title text-lg leading-6">{twoBeforeLatestArticle.title}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link prefetch={false} href={`${threeBeforeLatestArticle.slug?.en}`}>
                <Image className="hidden lg:block" src={threeBeforeLatestArticle.featuredLandscape} alt={threeBeforeLatestArticle.title} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={threeBeforeLatestArticle.featured} alt={threeBeforeLatestArticle.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${threeBeforeLatestArticle.category?.color}`}> {threeBeforeLatestArticle.category?.name} </span>
              <Link prefetch={false} href={`${threeBeforeLatestArticle.slug?.en}`}><span className="card-title text-lg leading-6">{threeBeforeLatestArticle.title}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link prefetch={false} href={`${fourBeforeLatestArticle.slug?.en}`}>
                <Image className="hidden lg:block" src={fourBeforeLatestArticle.featuredLandscape} alt={fourBeforeLatestArticle.title} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={fourBeforeLatestArticle.featured} alt={fourBeforeLatestArticle.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${fourBeforeLatestArticle.category?.color}`}> {fourBeforeLatestArticle.category?.name} </span>
              <Link prefetch={false} href={`${fourBeforeLatestArticle.slug?.en}`}><span className="card-title text-lg leading-6">{fourBeforeLatestArticle.title}</span></Link>
            </div>
          </div>

          {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl col-span-1 block lg:hidden" key={article.id}>
              <figure>
                <Link prefetch={false} href={`${article.slug?.en}`}>
                  <Image src={article.featured} alt={article.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" />
                </Link>
              </figure>
              <div className="card-body pt-4 pb-4">
                <span className={`uppercase text-xs ${article.category?.color}`}> {article.category?.name} </span>
                <Link prefetch={false} href={`${article.slug?.en}`}><span className="card-title text-lg leading-6">{article.title}</span></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl col-span-1 hidden lg:block" key={article.id}>
              <figure>
                <Link prefetch={false} href={`${article.slug?.en}`}>
                  <Image src={article.featured} alt={article.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" />
                </Link>
              </figure>
              <div className="card-body pt-4 pb-4">
                <span className={`uppercase text-xs ${article.category?.color}`}> {article.category?.name} </span>
                <Link prefetch={false} href={`${article.slug?.en}`}><span className="card-title text-lg leading-6">{article.title}</span></Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination baseUrl="/page" page={1} perPage={page.itemsPerPage} total={page.totalItems} />
      </main>
    </div>
  );
}
