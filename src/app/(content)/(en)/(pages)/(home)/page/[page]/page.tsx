import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getArticles, getPaginatedArticles } from "../../../../../../../data/articles";
import Link from "next/link";
import { Article } from "../../../../../../../model/article";
import { Pagination } from "@/components/en/pagination/Pagination";
import Navbar from "../../../../../../../components/en/navbar/Navbar";
import { Params } from "@/model/params";
import { getPage, getPageTitle } from "@/data/pages";

const pageConfig = getPage(1);

export function generateMetadata({ params }: { params: Params }) {
  const currentPage = params.page
  return {
    title: getPageTitle(1, 'en', currentPage),
    description: `${pageConfig.description}`,
    keywords: `${pageConfig.keywords}`,
    metadataBase: new URL('https://www.afkology.com'),
    alternates: {
      canonical: `${pageConfig.slug?.paginationEn}/${currentPage}`,
      languages: {
        'en-US': `${pageConfig.slug?.paginationEn}/${currentPage}`,
        'ro-RO': `${pageConfig.slug?.paginationRo}/${currentPage}`,
      },
    },
    openGraph: {
      title: getPageTitle(1, 'en', currentPage),
      description: `${pageConfig.description}`,
      url: `https://www.afkology.com${pageConfig.slug?.paginationEn}/${currentPage}`,
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
  }
}

function getJsonLd(page: number) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": getPageTitle(1, 'en', page.toString()),
    "description": `${pageConfig.description}`,
    "url": `https://www.afkology.com${pageConfig.slug?.paginationEn}/${page}`,
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
      "@id": `https://www.afkology.com${pageConfig.slug?.paginationEn}/${page}`
    }
  }
}

export default function Page({ params }: { params: { page: number } }) {
  let { page } = params;

  page = Number(page);

  if (page < 1) notFound();

  if (page == 1) redirect('/');

  const { articles } = getPaginatedArticles({ page: page, limit: pageConfig.itemsPerPage, offset: pageConfig.offset });

  if (!articles.length) notFound();

  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(page)) }} />
      </section>
      <Navbar roUrl={`${pageConfig.slug?.paginationRo}/${page}`} />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: Article, index: number) => (
            <div className="card bg-base-100 shadow-xl" key={article.id}>
              <figure>
                <Link  prefetch={false} href={`${article.slug?.en}`}>
                  <Image src={article.featured} alt={article.title} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" priority={index === 0}/>
                </Link>
              </figure>
              <div className="card-body">
                <span className={`uppercase text-xs ${article.category?.color}`}> {article.category?.name} </span>
                <Link  prefetch={false} href={`${article.slug?.en}`}><span className="card-title text-lg leading-6">{article.title}</span></Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination baseUrl="/page" page={page} perPage={pageConfig.itemsPerPage} total={pageConfig.totalItems} offset={pageConfig.offset} />
      </main>
    </div>
  );
}

export function generateStaticParams() {
  const articles = getArticles();
  const pages = Math.ceil(articles.length / pageConfig.itemsPerPage);

  return [...Array(pages)].map((_, i) => ({
    page: `${i + 1}`,
  }));
}
