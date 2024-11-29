import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Youtube from "@/components/youtube/Youtube";

import aFlowerFromCismigiuPark from "../../../../../../../public/cismigiu-park/a-flower-from-cismigiu-park.jpeg"
import cismigiuPark from "../../../../../../../public/cismigiu-park/cismigiu-park.jpeg"

const article = getArticle(27);

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
      {/* image 16/9 */}
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={cismigiuPark} alt="Evadează în Parcul Cișmigiu, cea mai veche gradină publică din Bucureşti" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Mă gândeam recent, de ce să nu promovăm mai mult oraşul în care ne petrecem cea mai mare parte a timpului şi anume - Bucureşti?</p>
        <p>Vom încerca să facem asta mai des, deoarece ne place să ieşim la plimbare prin oraş. Şi dacă tot este vorba despre plimbare, de ce să nu povestim despre Cişmigiu?</p>
        <p>Grădina Cişmigiu este cea mai veche grădină publică din Bucureşti fiind înfiinţată acum mai bine de 170 de ani prin secarea bălţii aflate pe domeniul respectiv.</p>
        <p>În care cuvânt crezi că-şi are originea numele de Cişmigiu? <br/>A. Cizmă<br/>B. Ciumagiu<br/>C. Cişmea</p>
        <p>Citeşte până la final pentru a afla răspunsul corect.</p>
        <p>Parcul se află în centrul Bucureştiului, aproape de Palatul Regal care găzduieşte Muzeul Naţional de Artă, de biserica Kretzulescu, de Casa Poporului, dar şi de Opera Naţională din Bucureşti.</p>
        <p>Însărcinat cu amenajarea grădinii a fost peisagistul de origine germana Carl Friedrich Wilhelm Meyer care a lucrat şi la grădinile imperiale din Viena. Grădina publică a mai fost modificată de atunci, însă cea mai mare parte a rămas la fel.</p>
        <p>Pe timpul verii, te poţi plimba cu barca pe lacul Cişmigiu, iar în timpul iernii, poţi merge la patinoar. De asemenea, există locuri de joacă pentru copii, o zonă specială pentru câini și multe altele.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={aFlowerFromCismigiuPark} alt="Grădina Cișmigiu - O floare" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Putem aprecia că este un parc cu multe specii de plante, arbori şi arbuşti. Am admirat îndelung glicinele, în mai, când înfloresc, dar şi un Ginkgo Biloba.</p>
        <p>Desigur, sunt multe lucruri de îmbunătăţit, dar vrem să apreciem frumuseţea unui loc şi să nu evidenţiem lucrurile negative.</p>
        <p>În loc să-ţi povestim despre ce poţi vedea în parc, nu mai bine îţi arătăm? Ne-am lăsat inspiraţi de Cişmigiu şi am creat fiecare dintre noi câte un mic clip pe care l-am postat pe canalul nostru de <LinkExternal link="https://www.youtube.com/channel/UC6cO4CO-T5PGkeXWc8Sf1lw" title="Link catre canalul AFKology de YouTube" text="YouTube" />.</p>
        <p>Varianta nr. 1:</p>
        <Youtube videoId="rDqrwzKbg6s" />
        <p>Varianta nr. 2:</p>
        <Youtube videoId="Pa3HHX7K61g" />
        <p>Ce părere ai? Care dintre cele două variante este pe placul tău? Haide pe <LinkExternal link="https://www.instagram.com/afkology/" title="Link catre contul AFKology de Instagram" text="Instagram" /> sau <LinkExternal link="https://www.facebook.com/afkology/" title="Link catre contul AFKology de Facebook" text="Facebook" />.</p>
        <p>Ah, era să uit. Răspunsul corect este C.</p>
    </main>
  </div>
  );
}