import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import artSafari2 from "../../../../../../../public/art-safari-2/art-safari-2.jpg";
import artSafari3 from "../../../../../../../public/art-safari-2/art-safari-3.jpg";
import artSafari4 from "../../../../../../../public/art-safari-2/art-safari-4.jpg";
import artSafari5 from "../../../../../../../public/art-safari-2/art-safari-5.jpg";
import artSafariLight from "../../../../../../../public/art-safari-2/art-safari-light.jpg";
import palatulDaciaRomaniaLight from "../../../../../../../public/art-safari-2/palatul-dacia-romania-light.jpg";

const article = getArticle(19);

export const metadata: Metadata = {
  title: `AFKology | ${article.titleRo}`,
  description: `${article.descriptionRo}`,
  keywords: `${article.keywordsRo}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${article.slug?.ro}`,
    languages: {
      'ro-RO': `${article.slug?.ro}`,
      'en-US': `${article.slug?.en}`,
    },
  },
  openGraph: {
    title: `AFKology | ${article.titleRo}`,
    description: `${article.descriptionRo}`,
    url: `https://www.afkology.com${article.slug?.ro}`,
    siteName: 'AFKology',
    locale: 'ro_RO',
    type: 'article',
    publishedTime: `${article.createdDate}`,
    modifiedTime: `${article.lastModified}`,
    tags: `${article.keywordsRo}`,
    images: [
      {
        url: `https://www.afkology.com${article.featured.src}`,
        width: `${article.featured.width}`,
        height: `${article.featured.height}`,
      },
      {
        url: `https://www.afkology.com${article.featuredLandscape.src}`,
        width: `${article.featuredLandscape.width}`,
        height: `${article.featuredLandscape.height}`,
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
  "@type": "Article",
  "headline": `${article.titleRo}`,
  "description": `${article.descriptionRo}`,
  "url": `https://www.afkology.com${article.slug?.ro}`,
  "datePublished": `${article.createdDate}`,
  "dateModified": `${article.lastModified}`,
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
      "height": 107
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": `https://www.afkology.com${article.featured.src}`,
    "width": `${article.featured.width}`,
    "height": `${article.featured.height}`
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.afkology.com${article.slug?.ro}`
  },
  "articleBody": `${article.textRo}`,
  "keywords": `${article.keywordsRo}`
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar enUrl={`${article.slug?.en}`} />
      <main className="flex-grow">
        <h1 className="text-center mb-8">{article.titleRo}</h1>
        <p>Art Safari, the famous art exhibition in the capital of Romania, has reached its tenth edition.</p>
        <p>After visiting the ninth edition, about which you can find out more information <Link prefetch={false} href="/art-safari-a-temporary-art-exhibition-in-bucharest" title="Art Safari - a temporary art exhibition in Bucharest - 9th edition" className="text-blue-600 underline hover:text-blue-800">here</Link> we set out to reach in the next editions or at least to try.</p>
        <p>So last weekend we went to Art Safari housed in the Dacia-România Palace in Lipscani street.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={palatulDaciaRomaniaLight} alt="Dacia Palace Romania 1" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>The 5 exhibitions are:</p>
        <div className="mb-6">
          <b>Ștefan Popescu</b><br />
          <b>Travel stories</b><br />
          <span>Romanian pavilion</span><br /><br />

          <b>Mihai Mureșan</b><br />
          <b>Small things</b><br />
          <span>Romanian pavilion</span><br /><br />

          <b>Lilian Theil</b><br />
          <b>A smiling old woman</b><br />
          <span>Romanian pavilion</span><br /><br />

          <b>Seeking Truth: The Art of John Constable</b><br />
          <span>International pavilion</span><br /><br />

          <b>Korean Beauty in Poster Art</b><br />
          <span>International pavilion</span><br /><br />
        </div>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari2} alt="Art Safari 10th Edition 1" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariLight} alt="Art Safari 10th Edition 2" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We are no experts or connoisseurs, but we liked the ninth edition more. I think that from the tenth edition, our favorite exhibition was Ștefan Popescu - Travel stories.</p>
        <p>You can go to Art Safari 10th edition from September 23 to December 11, 2022. There are several types of tickets. Details about ticket types <LinkExternal link="https://tickets.artsafari.ro/e?lang=ro" title="Link to Art Safari" text="here" />.</p>
        <p>We opted, as last time, for the ticket with one-day access to all five exhibitions. I bought the tickets on Black Friday with a 50% discount, the full price of a ticket being 120 RON (24 EUR), 50% more than the previous edition.</p>
        <p>We look forward to the 11th edition.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari3} alt="Art Safari 10th Edition 3" width={1248} height={370} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari4} alt="Art Safari 10th Edition 4" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari5} alt="Art Safari 10th Edition 5" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}