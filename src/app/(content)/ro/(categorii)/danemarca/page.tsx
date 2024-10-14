import { getArticleForCategory } from "@/data/articles";
import { getCategory } from "@/data/categories";
import Navbar from "../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/model/article";

const category = getCategory(5);

export const metadata: Metadata = {
  title: `${category.titleRo}`,
  description: `${category.descriptionRo}`,
  keywords: `${category.keywordsRo}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${category.slugRo}`,
    languages: {
      'ro-RO': `${category.slugRo}`,
      'en-US': `${category.slug}`,
    },
  },
  openGraph: {
    title: `${category.titleRo}`,
    description: `${category.descriptionRo}`,
    url: `https://www.afkology.com/${category.slugRo}`,
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
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `${category.titleRo}`,
  "description": `${category.descriptionRo}`,
  "url": `https://www.afkology.com/${category.slugRo}`,
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
    "@id": `https://www.afkology.com/${category.slugRo}`
  }
}

export default function Page() {
  // const articles: Article[] = getArticlesForCategory(5);

  const latestArticle: Article = getArticleForCategory(0, 5);
  const oneBeforeLatestArticle: Article = getArticleForCategory(1, 5);
  const twoBeforeLatestArticle: Article = getArticleForCategory(2, 5);
  const threeBeforeLatestArticle: Article = getArticleForCategory(3, 5);
  // const fourBeforeLatestArticle: Article = getArticleForCategory(4, 5);

  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar enUrl={`${category.slug}`} />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="card bg-base-100 shadow-xl col-span-1 lg:col-span-2 lg:row-span-2">
            <figure>
              <Link href={`/${latestArticle.slug?.ro}`}>
                <Image src={latestArticle.featured} alt={latestArticle.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-5">
              <span className={`uppercase text-xs ${latestArticle.category?.color}`}> {latestArticle.category?.nameRo}</span>
              <Link href={`/${latestArticle.slug?.ro}`}><span className="card-title">{latestArticle.titleRo}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link href={`/${oneBeforeLatestArticle.slug?.ro}`}>
                <Image className="hidden lg:block" src={oneBeforeLatestArticle.featuredLandscape} alt={oneBeforeLatestArticle.titleRo} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={oneBeforeLatestArticle.featured} alt={oneBeforeLatestArticle.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${oneBeforeLatestArticle.category?.color}`}> {oneBeforeLatestArticle.category?.nameRo} </span>
              <Link href={`/${oneBeforeLatestArticle.slug?.ro}`}><span className="card-title text-lg leading-6">{oneBeforeLatestArticle.titleRo}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link href={`/${twoBeforeLatestArticle.slug?.ro}`}>
                <Image className="hidden lg:block" src={twoBeforeLatestArticle.featuredLandscape} alt={twoBeforeLatestArticle.titleRo} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={twoBeforeLatestArticle.featured} alt={twoBeforeLatestArticle.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${twoBeforeLatestArticle.category?.color}`}> {twoBeforeLatestArticle.category?.nameRo} </span>
              <Link href={`/${twoBeforeLatestArticle.slug?.ro}`}><span className="card-title text-lg leading-6">{twoBeforeLatestArticle.titleRo}</span></Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link href={`/${threeBeforeLatestArticle.slug?.ro}`}>
                <Image className="hidden lg:block" src={threeBeforeLatestArticle.featuredLandscape} alt={threeBeforeLatestArticle.titleRo} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={threeBeforeLatestArticle.featured} alt={threeBeforeLatestArticle.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${threeBeforeLatestArticle.category?.color}`}> {threeBeforeLatestArticle.category?.nameRo} </span>
              <Link href={`/${threeBeforeLatestArticle.slug?.ro}`}><span className="card-title text-lg leading-6">{threeBeforeLatestArticle.titleRo}</span></Link>
            </div>
          </div>

          {/* <div className="card bg-base-100 shadow-xl">
            <figure>
              <Link href={`/${fourBeforeLatestArticle.slug?.ro}`}>
                <Image className="hidden lg:block" src={fourBeforeLatestArticle.featuredLandscape} alt={fourBeforeLatestArticle.titleRo} width={296} height={166} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 20vw, 10vw" />
                <Image className="block lg:hidden" src={fourBeforeLatestArticle.featured} alt={fourBeforeLatestArticle.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 25vw" />
              </Link>
            </figure>
            <div className="card-body pt-4 pb-4">
              <span className={`uppercase text-xs ${fourBeforeLatestArticle.category?.color}`}> {fourBeforeLatestArticle.category?.nameRo} </span>
              <Link href={`/${fourBeforeLatestArticle.slug?.ro}`}><span className="card-title text-lg leading-6">{fourBeforeLatestArticle.titleRo}</span></Link>
            </div> 
          </div> */}

          {/* {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl col-span-1 block lg:hidden" key={article.id}>
              <figure>
                <Link href={`/${article.slug?.ro}`}>
                  <Image src={article.featured} alt={article.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" />
                </Link>
              </figure>
              <div className="card-body pt-4 pb-4">
                <span className={`uppercase text-xs ${article.category?.color}`}> {article.category?.nameRo} </span>
                <Link href={`/${article.slug?.ro}`}><span className="card-title text-lg leading-6">{article.titleRo}</span></Link>
              </div>
            </div>
          ))} */}
        </div>

        {/* <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl col-span-1 hidden lg:block" key={article.id}>
              <figure>
                <Link href={`/${article.slug?.ro}`}>
                  <Image src={article.featured} alt={article.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" />
                </Link>
              </figure>
              <div className="card-body pt-4 pb-4">
                <span className={`uppercase text-xs ${article.category?.color}`}> {article.category?.nameRo} </span>
                <Link href={`/${article.slug?.ro}`}><span className="card-title text-lg leading-6">{article.titleRo}</span></Link>
              </div>
            </div>
          ))} 
        </div> */}
      </main>
    </div>
  );
}
