import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import theArtist1 from "../../../../../../../public/the-artist/the-artist-bucharest-1.jpeg"
import theArtist2 from "../../../../../../../public/the-artist/the-artist-bucharest-2.jpeg"
import theArtist3 from "../../../../../../../public/the-artist/the-artist-bucharest-3.jpeg"
import theArtist4 from "../../../../../../../public/the-artist/the-artist-bucharest-4.jpeg"
import theArtist5 from "../../../../../../../public/the-artist/the-artist-bucharest-5.jpeg"
import theArtist6 from "../../../../../../../public/the-artist/the-artist-bucharest-6.jpeg"
import theArtist7 from "../../../../../../../public/the-artist/the-artist-bucharest-7.jpeg"
import theArtist8 from "../../../../../../../public/the-artist/the-artist-bucharest-8.jpeg"
import theArtist9 from "../../../../../../../public/the-artist/the-artist-bucharest-9.jpeg"
import theArtist10 from "../../../../../../../public/the-artist/the-artist-bucharest-10.jpeg"
import theArtist11 from "../../../../../../../public/the-artist/the-artist-bucharest-11.jpeg"
import theArtist12 from "../../../../../../../public/the-artist/the-artist-bucharest-12.jpeg"

const article = getArticle(30);

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
        <p>On a bustling and rainy November evening, we chose to step into The Artist restaurant for a unique culinary experience. In this article, we tell about how we found the atmosphere, reception, service and food in the restaurant with the title of the best restaurant in Romania.</p>
        <p>We had made a reservation three days prior and were pleased to secure a table for two so swiftly, especially considering it was a holiday. The restaurant, situated in an old house on Calea Victoriei in one of the prime areas of Bucharest, boasts a terrace during the warmer seasons.</p>
        <p>Regrettably, our initial greeting did not meet our expectations in terms of seriousness. The reception featured a group of distracted and noisy staff who seemed unattentive. Nevertheless, we were promptly seated at a table upstairs, in a somewhat sparse and rather cold-atmosphere room. However, a fresh flower on the table was a thoughtful touch, always appreciated by us.</p>
        <p>What we knew about this restaurant were basically the things specified on their <LinkExternal link="https://theartist.ro/" title="Link to The Artist" text="website" />, where we discovered it was featured on <LinkExternal link="https://www.theworlds50best.com/discovery/search-results.html?town=Bucharest&country=Romania" title="Link to theworlds50best.com" text="theworlds50best.com" /> and held a commendable rating in the Gault and Millau guide. Most importantly, we were intrigued by the menu.</p>
        <p>The menu presented at the table mirrored that on the website, a sign that they keep their website updated. We had already decided on our order, opting for the five-course menu priced at 305 RON per person (approx. 61 EUR).</p>
        <p>Our culinary journey began with an amuse-bouche: two types of bread with flavored butter and two choux filled with cream cheese, presented on a plate with dry ice. The visual effect was captivating, setting an exciting tone for the evening.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-4" src={theArtist1} alt="Dinner at The Artist - Logo" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-4" src={theArtist2} alt="Dinner at The Artist - Drings" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        {/* image 16/9 */}
        <Image className="mb-4" src={theArtist12} alt="Dinner at The Artist - Food 1" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>For our cold appetizers, we enjoyed baked beetroot and celery with Romanian brie cheese, figs, walnuts, and avocado, along with a confit duck leg in a brioche with red cabbage, cranberries, and sweet potato. Both dishes were well-executed, with one of us favoring the beetroot for its nuanced flavors, while the other relished the duck brioche.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={theArtist3} alt="Dinner at The Artist - Food 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={theArtist4} alt="Dinner at The Artist - Food 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={theArtist5} alt="Dinner at The Artist - Food 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>The Romanian “bulz”, in the interpretation of chef Paul Oppenkamp who runs The Artist kitchen, followed, featuring a polenta ball stuffed with bladderwrack cheese, parsnip puree, and a fried quail egg. Despite the unexpected parsnip twist, it proved to be a delightful innovation. We also savored the pan-fried salmon, accompanied by a fusion of borscht, miso, ginger, and Nori seaweed.</p>
        <p>Moving on to the ravioli and coquelet, the beef-filled ravioli in Feteasca Neagra wine sauce showcased skilled cooking, though the pumpkin flavor was somewhat subdued. Unfortunately, the coquelet chicken in barbecue sauce left a less favorable impression due to an initial bite dominated by chicken skin covered in the sauce.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={theArtist6} alt="Dinner at The Artist - Food 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={theArtist7} alt="Dinner at The Artist - Food 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={theArtist8} alt="Dinner at The Artist - Food 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>For dessert, we both chose the cucumber sorbet, a visually stunning and uniquely flavored dish that was a personal favorite. The chocolate mousse, however, fell short. The excessively sweet mousse clashed with the extremely bitter espresso cream, and the presence of what seemed like a caramel in a plastic wrap was a confusing detail. After taking the plates, the waiter informed us that everything we had on the plate was edible, including the “plastic” wrap, but without telling us what it actually was. Unfortunately, we received this information a little too late, and I would have appreciated more attention to detail from both the chef and the waiter.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={theArtist9} alt="Dinner at The Artist - Food 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={theArtist10} alt="Dinner at The Artist - Food 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={theArtist11} alt="Dinner at The Artist - Food 11" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>In conclusion, our experience at The Artist was visually pleasing but left us wanting more in terms of taste. Considering the restaurant’s awards and positive reviews, we wondered if our evening might have been an exception. Nonetheless, The Artist recently earned the title of the best restaurant in Romania by the World Culinary Awards and is undoubtedly worth experiencing at least once.</p>
      </main>
    </div>
  );
}
