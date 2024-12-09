import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import december2024 from "../../../../../../../public/december-2024/december-2024-offers-landscape.jpg"

const article = getArticle(36);

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
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={december2024} alt="Special Offers for the Saint Andrew and December 1st Weekend at Guesthouses in Romania (2024)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Every year, Romanians have reasons to celebrate both on November 30th and December 1st, which are also public holidays. In 2024, these celebrations will fall on a weekend, specifically on Saturday and Sunday.</p>
        <p>On November 30th, Romanians celebrate Saint Andrew, the protector of Romania and the “Apostle of the Romanians,” who brought Christianity to the territory of modern-day Romania.</p>
        <p>Romania’s National Day is celebrated on December 1st, marking the Great Union of 1918. On this historic day, the National Assembly in Alba Iulia voted to unite Transylvania, Banat, Crișana, and Maramureș with Romania, completing the unification of all Romanian-inhabited provinces.</p>
        <p>We’ve gathered some special offers from guesthouses in Romania, created especially for this festive weekend.</p>
        <h2>Razelm Luxury Resort</h2>
        <p>The special package for the December 1st weekend includes two nights of accommodation with breakfast, a traditional dinner on November 30th accompanied by live music that captures the charm of Romanian holidays. Enjoy a campfire, roasted marshmallows, and traditional shots to warm up the atmosphere and complete an unforgettable experience!</p>
        <p>Price: <LinkExternal link="https://razelmluxuryresort.ro/oferte-speciale/" title="Link to Razelm Luxury Resort" text="from 1500 RON / room" /></p>
        <h2>Grigorescu Mansion</h2>
        <p>At Grigorescu Mansion (Conacul Grigorescu), Chef Juranda, your co-host, will meticulously prepare the finest dishes using local ingredients, specially crafted for this celebratory weekend. The package includes, in addition to two nights’ accommodation, a welcome drink, two breakfasts, and two dinners, with Saturday’s dinner being a festive one.</p>
        <p>Price: <LinkExternal link="https://conacul-grigorescu-terra-carpatica.pynbooking.direct/" title="Link to Grigorescu Mansion" text="from 2100 RON / room" /></p>
        <h2>Hotel Ozone</h2>
        <p>The offer for the St. Andrew and December 1st mini-holiday includes two nights of accommodation with full board, access to the spa, a traditional welcome with cozonac and afinată, as well as a special artistic program.</p>
        <p>Price: <LinkExternal link="https://www.o3zone.ro/oferte-speciale/" title="Link to Hotel Ozone" text="from 2100 RON / room" /></p>
        <h2>Hadar Chalet</h2>
        <p>This package includes two nights’ accommodation (November 29th – December 1st), full board (breakfast, lunch, and dinner), access to all the resort’s facilities, an unforgettable campfire, and a festive dinner to celebrate the occasion.</p>
        <p>Price: <LinkExternal link="https://hadarchalet.ro/" title="Link to Hadar Chalet" text="from 2400 RON / room" /></p>
        <h2>Potcoava Mountain Hideaway</h2>
        <p>This package offers a two-night stay with full board, including activities for all ages: a pony carriage ride for children, a campfire, a craft workshop, and access to the SPA. Adults can also enjoy a one-hour horseback ride, perfect for exploring the beauty of the mountains.</p>
        <p>Price: <LinkExternal link="https://potcoava.ro/pachete-de-vacanta/" title="Link to Potcoava Mountain Hideaway" text="from 2726.5 RON / room" /></p>
        <h2>Atra Doftana</h2>
        <p>The package includes two nights’ accommodation (November 29th – December 1st) with breakfast and two special dinners: one with 3 courses and the other with 5 courses. After dinner on November 29th, you can enjoy a cozy campfire with mulled wine, while the gourmet dinner on November 30th will feature a fine dining experience, carefully paired with wines.</p>
        <p>Price: <LinkExternal link="https://atradoftana.ro/" title="Link to Atra Doftana" text="from 2950 RON / room" /></p>
        <h2>Casa Timiș</h2>
        <p>This package offers a 3-night stay (November 29th – December 2nd) with half-board and access to the SPA. In addition to relaxation, the offer includes a wine tasting, a farm tour with dairy tastings, a yoga session for adults, interactive activities for children organized by animators, live music during dinner, and a campfire accompanied by folk music and traditional snacks.</p>
        <p>Price: <LinkExternal link="https://casatimis.ro/" title="Link to Casa Timis" text="from 7400 RON / room" /></p>
      </main>
    </div>
  );
}
