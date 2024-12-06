import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import artSafariMain from "../../../../../../../public/art-safari/1656765898834_e7sitf.jpg";
import artSafari6 from "../../../../../../../public/art-safari/art-safari-6_n1hl2f.jpg";
import artSafariGallery1 from "../../../../../../../public/art-safari/1656765409878_ja19oj.jpg";
import artSafari5 from "../../../../../../../public/art-safari/art-safari-5_itnoc3.jpg";
import artSafari4 from "../../../../../../../public/art-safari/art-safari-4_cbkvpt.jpg";
import artSafari2 from "../../../../../../../public/art-safari/art-safari-2_n4ypzf.jpg";
import artSafariGallery2 from "../../../../../../../public/art-safari/1656764973819_e30uha.jpg";

const article = getArticle(10);

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
        <p>Astăzi am fost pentru prima dată la Art Safari cu toate că evenimentul a ajuns anul acesta la ediția cu numărul 9. După vizita de astăzi probabil vom încerca să mergem la fiecare ediție deoarece ne-a plăcut foarte mult.</p>
        <p>O vizită la Art Safari este o modalitate bună de a petrece câteva ore de calitate în weekend.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari2} alt="Art Safari - o expoziție temporară de artă în București - ediția 9" width={1248} height={577} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Pentru cea de-a noua ediție, există 5 expoziții diferite care pot fi vizitate până pe 7 august 2022.</p>
        <div className="mb-6">
          <b>Theodor Aman (1831 – 1891)</b><br />
          <b>Primul artist român modern</b><br />
          <span>Pavilionul Muzeului</span><br /><br />

          <b>Picasso, Dalí & Falla.</b><br />
          <b>Pălăria cu trei colțuri</b><br />
          <span>Pavilionul Central</span><br /><br />

          <b>Irina Dragomir</b><br />
          <b>Roșu, galben și albastru</b><br />
          <span>Pavilionul Contemporan</span><br /><br />

          <b>Marcel Iancu</b><br />
          <b>Reconstruind artele România – Israel</b><br />
          <span>Pavilionul Invitat</span><br /><br />

          <b>Barbara Klemm</b><br />
          <b>Light and Dark. Photographs from Germany</b><br />
          <span>Pavilionul Aniversar</span><br /><br />
        </div>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariMain} alt="Romania, Art Safari - Tablouri 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariGallery2} alt="Romania, Art Safari - Tablouri 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariGallery1} alt="Romania, Art Safari - Tablouri 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Biletele pot fi achiziționate și online de <LinkExternal link="https://tickets.artsafari.ro/e?lang=en" title="Link catre site-ul Art Safari" text="aici" />. Un bilet cu acces de o zi la toate cele cinci expoziții costa la data scrierii acestui articol 80 de lei (16 euro), iar un tur de noapte costa 130 de lei (26 de euro).</p>
        <p>Art Safari este găzduit temporar în superbul Palat Dacia-România de pe strada Lipscani, un spațiu istoric construit la sfârșitul anilor 1890.</p>
        <p>Noi am fost în special pentru opera lui Theodor Aman care nu ne-a dezamăgit, dar am fost plăcut surprinși și de prima expoziție personală a Irinei Dragomir.</p>
        <p>Exponatele sunt foarte bine puse în evidență datorită luminii deosebite care cade pe fiecare exponat în parte, dar descrierile operelor de artă sunt greu vizibile tocmai din această cauză. Chiar și-așa, avem doar cuvinte de laudă la adresa Art Safari.</p>
        <p>Actualizare: Am vizitat de asemenea ediția numărul 10. Impresiile noastre <Link prefetch={false} href="/ro/art-safari-o-expozitie-temporara-de-arta-in-bucuresti-editia-10" title="Art Safari - o expoziție temporară de artă în București - ediția 10" className="text-blue-600 underline hover:text-blue-800">aici</Link>.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari5} alt="Romania, Art Safari - Tablouri 4" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari6} alt="Romania, Art Safari - Tablouri 5" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari4} alt="Romania, Art Safari - Tablouri 6" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
      </main>
    </div>
  );
}