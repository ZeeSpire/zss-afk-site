import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import frederiksborgMain from "../../../../../../../public/copenhaga/frederiksborg1_woowdi.jpeg";
import frederiksborgExterior from "../../../../../../../public/copenhaga/frederiksborg2_pxlnfh.jpeg";
import frederiksborgGarden from "../../../../../../../public/copenhaga/frederiksborg3_jsuw6z.jpeg";
import frederiksborgInterior from "../../../../../../../public/copenhaga/frederiksborg4_cqpvqq.jpeg";
import frederiksborgView from "../../../../../../../public/copenhaga/frederiksborg5_b3hre1.jpeg";
import castleView1 from "../../../../../../../public/copenhaga/castel1_ikpkmm.jpeg";
import castleView2 from "../../../../../../../public/copenhaga/castel2_u8gjx9.jpeg";

const article = getArticle(5);

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
      <Youtube videoId="Tj6d47OGhjY" />
        <p>Having a 5 days vacation in Copenhagen, we set out for a one-day trip outside the city to experience more of Denmark’s beauties.</p>
        <p>We had to choose between lots of one-day trips, like visiting Kronborg Castle, the idyllic fishing village Dragør, the Louisiana Museum of Modern Art, Dyrehaven (“the deer park”), the oldest amusement park in the world - Bakken, the Viking Ship Museum and the Cathedral in Roskilde, the birthplace of H.C. Andersen - Odense, Mons Klint, and many more.</p>
        <p>And we would have visited all of them if we stayed at least two weeks, but we had to choose only one. And the winner was… Frederiksborg Castle.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgMain} alt="Frederiksborg Castle - 1-day trip from Copenhagen" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>It’s very easy to get there. From Copenhagen Central Station you take the S-train (line A) to Hillerød Station. In 45 minutes, you’ll arrive.</p>
        <p>The train ticket is covered by Copenhagen Card. In this article, I’ve written more about <Link prefetch={false} href="/tips-for-visiting-copenhagen-for-the-first-time" title="Tips for visiting Copenhagen for the first time" className="text-blue-600 underline hover:text-blue-800">Copenhagen Card</Link>.</p>
        <p>Hillerød is approximately 35 km to the north of Copenhagen, and it is a charming little town with pedestrian streets full of shops, restaurants, and cafes. From Hillerød Station there is a 15 to 20 minutes walk to the castle (1.5 km).</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgExterior} alt="Frederiksborg Castle - outside" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Frederiksborg Castle is situated on the Slotssøen which means Castle Lake, it was built by King Christian IV in the early decades of the 17th century and is the largest Renaissance complex in the Nordic region.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4469.78731777407!2d12.2989364!3d55.9338814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524097762941e1%3A0x12c6a634246b6152!2sFrederiksborg%20Castle!5e0!3m2!1sen!2sro!4v1646067896516!5m2!1sen!2sro" />
        <p>Since 1878 Frederiksborg Castle has housed The Museum of National History, which presents 500 years of Danish history with a collection of portraits, history paintings, furniture, and applied art.</p>
        <p>An adult ticket costs 90 DKK which is approximately 12 EUR / 13.5 USD. The entry is free if you have the Copenhagen Card.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgGarden} alt="Frederiksborg Castle - inside" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>The visit wouldn’t be complete without a walk through the Castle’s Gardens. The gardens alone are worth a visit.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgInterior} alt="Frederiksborg Castle - Garden view from the drone" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>There is a symmetrically constructed Baroque Garden with perfectly straight hedges. There is also a romantic, English-style garden, where the small Bath House Castle is located. There are many small lakes and each one is unique and has its own beauty. You can also enjoy a delicious brunch at Cafe Havehuset located in the gardens. Here is their <LinkExternal link="https://cafehavehuset.dk/en/menu/" title="Link to Cafe Havehuset" text="menu" />.</p>
        <p>After a full, but very pleasant day, we returned to Copenhagen, and we kindly recommend to anyone who has a spare day to visit Frederiksborg Castle.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgView} alt="Frederiksborg Castle - Garden view" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={castleView2} alt="Frederiksborg Castle - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={castleView1} alt="Frederiksborg Castle - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}