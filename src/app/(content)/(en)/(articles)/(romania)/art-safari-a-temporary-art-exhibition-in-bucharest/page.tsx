import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
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
  title: `AFKology | ${article.title}`,
  description: `${article.description}`,
  keywords: `${article.keywords}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${article.slug?.en}`,
    languages: {
      'en-US': `${article.slug?.en}`,
      'ro-RO': `${article.slug?.ro}`,
    },
  },
  openGraph: {
    title: `AFKology | ${article.title}`,
    description: `${article.description}`,
    url: `https://www.afkology.com${article.slug?.en}`,
    siteName: 'AFKology',
    locale: 'en_US',
    type: 'article',
    publishedTime: `${article.createdDate}`,
    modifiedTime: `${article.lastModified}`,
    tags: `${article.keywords}`,
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
  "headline": `${article.title}`,
  "description": `${article.description}`,
  "url": `https://www.afkology.com${article.slug?.en}`,
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
    "@id": `https://www.afkology.com${article.slug?.en}`
  },
  "articleBody": `${article.text}`,
  "keywords": `${article.keywords}`
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl={`${article.slug?.ro}`} />
      <main className="flex-grow">
        <h1 className="text-center mb-8">{article.title}</h1>
        <p>We went to Art Safari today for the first time, although the event has reached its ninth edition this year. After today we will probably try to go to every edition. Visiting Art Safari is a good way to spend a few quality hours on the weekends.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari2} alt="Art Safari - a temporary art exhibition in Bucharest - 9th edition" width={1248} height={577} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>For the ninth edition, there are 5 different exhibitions that can be visited until August 7, 2022.</p>
        <div className="mb-6">
          <b>Theodor Aman (1831 – 1891)</b><br />
          <b>First Modern Romanian Artist</b><br />
          <span>Museum Pavilion</span><br /><br />

          <b>Picasso, Dalí & Falla.</b><br />
          <b>Le Tricorne</b><br />
          <span>Central Pavilion</span><br /><br />

          <b>Irina Dragomir</b><br />
          <b>Red, Yellow and Blue</b><br />
          <span>Contemporary Pavilion</span><br /><br />

          <b>Marcel Iancu</b><br />
          <b>Reconstructing the Arts. Romania - Israel</b><br />
          <span>Invited Pavilion</span><br /><br />

          <b>Barbara Klemm</b><br />
          <b>Light and Dark. Photographs from Germany</b><br />
          <span>Anniversary Pavilion</span><br /><br />
        </div>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariMain} alt="Romania, Art Safari - Paintings 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariGallery2} alt="Romania, Art Safari - Paintings 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafariGallery1} alt="Romania, Art Safari - Paintings 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>The tickets can also be purchased online from <LinkExternal link="https://tickets.artsafari.ro/e?lang=en" title="Link to Art Safari" text="here" />. At the time of writing this article, a day access ticket costs 80 lei (16 euros), and a night tour costs 130 lei (26 euros).</p>
        <p>Art Safari is temporarily housed in the superb Dacia-Romania Palace on Lipscani Street, a historic space built in the late 1890s.</p>
        <p>We went there wanting to see Theodor Aman’s artwork which did not disappoint, but we were also pleasantly surprised by Irina Dragomir’s first solo exhibition.</p>
        <p>The exhibits are very well highlighted due to the special lighting, but the descriptions of the artworks are hardly visible in low light, this is something that can be improved. Other than that, we only have words of praise.</p>
        <p>Update: We also visited 10th edition. Check it out <Link prefetch={false} href="/art-safari-a-temporary-art-exhibition-in-bucharest-10th-edition" title="Art Safari - a temporary art exhibition in Bucharest - 10th edition" className="text-blue-600 underline hover:text-blue-800">here</Link>.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari5} alt="Romania, Art Safari - Paintings 4" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari6} alt="Romania, Art Safari - Paintings 5" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={artSafari4} alt="Romania, Art Safari - Paintings 6" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
      </main>
    </div>
  );
}
