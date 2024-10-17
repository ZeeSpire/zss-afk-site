import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getArticles, getPaginatedArticles } from "../../../../../../../data/articles";
import Link from "next/link";
import { Article } from "../../../../../../../model/article";
import { Pagination } from "@/components/ro/pagination/Pagination";
import Navbar from "../../../../../../../components/ro/navbar/Navbar";
import { Params } from "@/model/params";
import { getPage, getPageTitle } from "@/data/pages";

const pageConfig = getPage(1);

export function generateMetadata({ params }: { params: Params }) {
  const currentPage = params.page
  return {
    title: getPageTitle(1, 'ro', currentPage),
    description: `${pageConfig.descriptionRo}`,
    keywords: `${pageConfig.keywordsRo}`,
    metadataBase: new URL('https://www.afkology.com'),
    alternates: {
      canonical: `${pageConfig.slug?.paginationRo}/${currentPage}`,
      languages: {
        'ro-RO': `${pageConfig.slug?.paginationRo}/${currentPage}`,
        'en-US': `${pageConfig.slug?.paginationEn}/${currentPage}`,
      },
    },
    openGraph: {
      title: getPageTitle(1, 'ro', currentPage),
      description: `${pageConfig.descriptionRo}`,
      url: `https://www.afkology.com${pageConfig.slug?.paginationRo}/${currentPage}`,
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
      index: true, // Allows indexing of page 2.
      follow: true, // Follow links on page 2.
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
    "name": getPageTitle(1, 'ro', page.toString()),
    "description": `${pageConfig.descriptionRo}`,
    "url": `https://www.afkology.com${pageConfig.slug?.paginationRo}/${page}`,
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
      "@id": `https://www.afkology.com${pageConfig.slug?.paginationRo}/${page}`
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
      <Navbar enUrl={`${pageConfig.slug?.paginationEn}/${page}`} />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: Article) => (
            <div className="card bg-base-100 shadow-xl" key={article.id}>
              <figure>
                <Link  prefetch={false} href={`${article.slug?.ro}`}>
                  <Image src={article.featured} alt={article.titleRo} width={705} height={705} sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 25vw" />
                </Link>
              </figure>
              <div className="card-body">
                <span className={`uppercase text-xs ${article.category?.color}`}> {article.category?.nameRo} </span>
                <Link  prefetch={false} href={`${article.slug?.ro}`}><span className="card-title text-lg leading-6">{article.titleRo}</span></Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination baseUrl="/ro/pagina" page={page} perPage={pageConfig.itemsPerPage} total={pageConfig.totalItems} />
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
