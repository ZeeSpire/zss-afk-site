import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import primavara from "../../../../../../../public/oferte-paste/primavara.jpeg";

const article = getArticle(22);

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
        <p>This year, Orthodox Easter falls on the 16th of April, and the offers dedicated to this holiday have already started to appear. Most of the offers include 3 or 4 nights of accommodation, with the possibility of extending the stay, breakfast, special dinners, and traditional Easter dishes, but also other options to attract guests, such as trips, campfires, or egg-hunting for the children. Prices start from around 3000 RON (600 EUR) for two adults. To make it easier to convert from RON to EUR, I considered that 1 EUR = 5 RON.</p>
        <p>Below you can find the offers that I found attractive.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={primavara} alt="Easter offers 2023" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <h2>Easter Time at Valea Verde with German cultural influences</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>3 nights of accommodation</li>
          <li>welcome drink</li>
          <li>3 breakfasts</li>
          <li>Easter brunch on Easter day</li>
          <li>a 3-course dinner on Friday, a BBQ dinner on Saturday, and a festive dinner on Sunday</li>
          <li>campfire with a sweet snack</li>
          <li>egg painting workshop/egg hunt</li>
        </ul>
        <p>Price: 2800 RON (560 EUR)/2 adults. <LinkExternal link="https://www.valeaverde.com/en/offers/" title="Link to Valea Verde" text="Details" /></p>

        <h2>Easter at Cincsor Transylvania Guesthouses</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>4 nights of accommodation</li>
          <li>welcome with Saxon pie and palincă</li>
          <li>3 breakfasts</li>
          <li>vegetarian lunch on Saturday and spring brunch on Sunday</li>
          <li>4 dinners</li>
          <li>campfire</li>
          <li>guided tours</li>
        </ul>
        <p>Price: from 3800 RON (760 EUR)/2 adults. <LinkExternal link="https://transilvania-cincsor.ro/en/offers/" title="Link to Cincsor" text="Details" /></p>

        <h2>Easter offer at Conacul Grigorescu</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>3 nights of accommodation</li>
          <li>breakfast on Saturday and Monday</li>
          <li>3-course dinner on Friday, 3-course dinner on Saturday, party with snacks at the pool bar</li>
          <li>Easter brunch and festive meal on Sunday</li>
          <li>egg hunting and gifts from the bunny</li>
        </ul>
        <p>Price: from 2990 RON (598 EUR)/2 adults. <LinkExternal link="https://conaculgrigorescu.com/ro/events/oferta-de-paste-14-17-aprilie-2023/" title="Link to Conacul Grigorescu" text="Details" /></p>

        <h2>Easter celebration at Casa Timis</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>3 nights of accommodation</li>
          <li>3 breakfasts</li>
          <li>group yoga session for adults and children above 10 years</li>
          <li>campfire with traditional dishes, wine and ţuică / tea for children</li>
          <li>Easter Brunch</li>
        </ul>
        <p>Price: from 3150 RON (630 EUR)/2 adults. <LinkExternal link="https://casatimis.ro/oferte/" title="Link to Casa Timis" text="Details" /></p>

        <h2>Easter at Zabola Castle</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>3 nights of accommodation</li>
          <li>breakfast on Saturday and Monday</li>
          <li>welcome drink</li>
          <li>three-course lunch on Saturday, snack on Easter night, Easter brunch on Sunday</li>
          <li>three-course dinner on Friday, three-course dinner and live music on Saturday, party in the garden on Sunday</li>
          <li>egg dyeing workshop</li>
          <li>carriage ride</li>
          <li>gifts from the bunny</li>
          <li>activities for children</li>
        </ul>
        <p>Price: 6000 RON (1200 EUR)/2 adults. <LinkExternal link="https://www.zabola.com/articles/special-offers" title="Link to Zabola Castle" text="Details" /></p>

        <h2>Easter at Potcoava Mountain Hideaway</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>3 nights of accommodation</li>
          <li>full board for 3 days with traditional Easter breakfast and festive dinner</li>
          <li>pottery workshop for children and parents</li>
          <li>carriage ride in the playpen for children</li>
          <li>children’s party</li>
          <li>1 hour of horseback riding for children between the ages of 4 and 14</li>
          <li>1 hour horseback riding/adult</li>
          <li>access to the SPA area</li>
          <li>campfire</li>
        </ul>
        <p>Prices <LinkExternal link="https://potcoava-mountain.pynbooking.direct/offers/?checkin=2023-04-14&checkout=2023-04-17" title="Link to Potcoava Mountain Hideaway prices" text="here" />. <LinkExternal link="https://www.potcoava.ro/pachete-tematice/" title="Link to Potcoava Mountain Hideaway" text="Details" /></p>

        <h2>Easter holidays at Atra Doftana</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>3 nights of accommodation</li>
          <li>three breakfasts</li>
          <li>welcome drink and platter with traditional products</li>
          <li>fine dining dinner on Friday with three courses</li>
          <li>fine dining dinner on Saturday with five courses and wine pairing</li>
          <li>traditional Easter buffet with an open bar</li>
          <li>fine dining dinner with three dishes</li>
          <li>massage/sauna</li>
          <li>workshop</li>
          <li>live music, campfire</li>
        </ul>
        <p>Price: from 4350 RON (870 EUR)/2 adults. <LinkExternal link="https://www.atradoftana.ro/oferte-de-vacanta-valea-doftanei/" title="Link to Atra Doftana" text="Details" /></p>
      </main>
    </div>
  );
}