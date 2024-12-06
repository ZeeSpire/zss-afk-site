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
        <p>Art Safari, celebra expoziție de artă din capitala României, a ajuns la cea de-a zecea ediție.</p>
        <p>După vizitarea ediției cu numărul 9, despre care poți afla mai multe informații <Link prefetch={false} href="/ro/art-safari-o-expozitie-temporara-de-arta-in-bucuresti" title="Art Safari - o expoziție temporară de artă în București - ediția 9" className="text-blue-600 underline hover:text-blue-800">aici</Link> ne-am propus să ajungem și la următoarele ediții sau cel puțin să încercăm.</p>
        <p>Așadar am fost weekendul trecut la Art Safari organizat și de această dată în incinta Palatului Dacia-România din strada Lipscani.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={palatulDaciaRomaniaLight} alt="Palatul Dacia România" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Cele cinci expoziții sunt:</p>
        <div className="mb-6">
          <b>Ștefan Popescu</b><br />
          <b>Povestea călătoriilor</b><br />
          <span>Pavilionul românesc</span><br /><br />

          <b>Mihai Mureșan</b><br />
          <b>Lucruri mărunte</b><br />
          <span>Pavilionul românesc</span><br /><br />

          <b>Lilian Theil</b><br />
          <b>O bătrână care zâmbește</b><br />
          <span>Pavilionul românesc</span><br /><br />

          <b>Seeking Truth: The Art of John Constable</b><br />
          <span>Pavilionul internațional</span><br /><br />

          <b>Korean Beauty in Poster Art</b><br />
          <span>Pavilionul internațional</span><br /><br />
        </div>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari2} alt="Art Safari - ediția 10, explicatii" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariLight} alt="Art Safari - ediția 10, tablouri din interior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Nu suntem experți sau cunoscători, dar nouă ne-a plăcut mai mult ediția 9. Cred că din cadrul ediției cu numărul 10, expoziția preferată a fost Ștefan Popescu - Povestea călătoriilor.</p>
        <p>Poți merge la Art Safari, ediția 10, în perioada 23 septembrie – 11 decembrie 2022. Există mai multe tipuri de bilete. Detalii despre tipurile de bilete <LinkExternal link="https://tickets.artsafari.ro/e?lang=ro" title="Link catre bilete la Art Safari" text="aici" />.</p>
        <p>Noi am optat, ca data trecută, pentru biletul cu acces de o zi la cele cinci expoziții. Am cumpărat biletele de Black Friday cu 50% reducere, prețul întreg al unui bilet fiind de 120 lei, cu 50% mai mult ca la ediția precedentă.</p>
        <p>Așteptăm cu interes ediția 11.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari3} alt="Art Safari - ediția 10, tablouri din interior" width={1248} height={370} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari4} alt="Art Safari - ediția 10, tablouri din interior" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari5} alt="Art Safari - ediția 10, tablouri din interior" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}