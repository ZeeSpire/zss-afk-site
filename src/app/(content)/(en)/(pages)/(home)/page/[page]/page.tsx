import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getArticles, getPaginatedArticles } from "../../../../data/data";
import Link from "next/link";
import { Article } from "@/app/model/article";
import { Pagination } from "@/app/components/ro/pagination/Pagination";
import Navbar from "@/app/components/en/navbar/Navbar";
import { Params } from "@/app/model/params";

const articlesPerPage = 9;

export function generateMetadata({ params }: { params: Params }) {
  const currentPage = params.page
  return {
    title: `AFKology | Page ${currentPage} - The most precious moments in life happen offline.`,
    description: "Travel information. What to visit, where to eat, how to spend your free time and holidays.",
    keywords: ['afkology', 'travel', 'cinematic travel', 'travel ideas', 'travel guide', 'food guide', 'travel europe', 'restaurants', 'places to visit'],
    metadataBase: new URL('https://www.afkology.com'),
    alternates: {
      canonical: `/page/${currentPage}`,
      languages: {
        'en-US': `/page/${currentPage}`,
        'ro-RO': `/ro/page/${currentPage}`,
      },
    },
    openGraph: {
      title: `AFKology | Page ${currentPage} - The most precious moments in life happen offline.`,
      description: 'Continue discovering amazing travel guides and tips. More recommendations for what to visit, where to eat, and how to enjoy your holidays.',
      url: `https://www.afkology.com/page/${currentPage}`,
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
    // verification: {
    //   google: 'ADDD CODEE',
    // },
  }
}

function getJsonLd(page: number) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `AFKology | Page ${page} - The most precious moments in life happen offline.`,
    "description": "Travel information. What to visit, where to eat, how to spend your free time and holidays.",
    "url": `https://www.afkology.com/page/${page}`,
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
    "mainEntityOfPage": `https://www.afkology.com/page/${page}`
  }
}

export default function Page({ params }: { params: { page: number } }) {
  let { page } = params;

  page = Number(page);

  if (page < 1) notFound();

  if (page == 1) redirect('/');

  const { articles, total } = getPaginatedArticles({ page: page, limit: articlesPerPage, });

  if (!articles.length) notFound();

  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(page)) }} />
      </section>
      <Navbar roUrl={`/ro/pagina/${page}`} />
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

        <Pagination baseUrl="/page" page={page} perPage={articlesPerPage} total={total} />
      </main>
    </div>


  );
}

export function generateStaticParams() {
  const articles = getArticles();
  const pages = Math.ceil(articles.length / articlesPerPage);

  return [...Array(pages)].map((_, i) => ({
    page: `${i + 1}`,
  }));
}
