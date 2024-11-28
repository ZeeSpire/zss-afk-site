import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import apogeumWineGlass from "../../../../../../../public/apogeum/IMG_20220402_174005_uzppq9.jpg";
import apogeumBreakfast from "../../../../../../../public/apogeum/IMG_20220403_100222_voiz79.jpg";
import apogeumDinner from "../../../../../../../public/apogeum/IMG_20220401_181023_ltbfsz.jpg";
import apogeumWineBottle from "../../../../../../../public/apogeum/IMG_20220401_180031_kzrjti.jpg";
import apogeumExterior1 from "../../../../../../../public/apogeum/DSCF3138_fdfbi3.jpg";
import apogeumAerial from "../../../../../../../public/apogeum/DJI_0013_gx9nrv.jpg";
import apogeumEvening from "../../../../../../../public/apogeum/IMG_20220402_200514_r_x92noy.jpg";
import apogeumInterior1 from "../../../../../../../public/apogeum/DSCF3260_e3gw7o.jpg";
import apogeumExterior2 from "../../../../../../../public/apogeum/DSCF3137_r_nyb54u.jpeg";
import apogeumWinery2 from "../../../../../../../public/apogeum/apogeum2_rzo1uv.jpg";
import apogeumMains from "../../../../../../../public/apogeum/DSCF3072_r2_kdzmaw.jpeg";
import apogeumInterior2 from "../../../../../../../public/apogeum/DSCF3248-2_meiph0.jpg";
import apogeumWineDisplay from "../../../../../../../public/apogeum/IMG_20220401_180113_haftqf.jpg";
import apogeumWinery1 from "../../../../../../../public/apogeum/apogeum1_kecbim.jpg";
import apogeumTasting from "../../../../../../../public/apogeum/IMG_20220402_171649_f0huz1.jpg";

const article = getArticle(8);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumMains} alt="Apogeum Winery & the best Feteasca Neagra in Romania" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>In February we were on a one-day trip in Buzău County to visit the Muddy Volcanoes and we really liked it, we arrived relatively quickly at the destination and the road was rather good. So, we decided to return in the area, this time to visit a winery. If you are curious to see spectacular views from the Muddy Volcanoes check out this <Link prefetch={false} href="/the-muddy-volcanoes-buzau-county-romania" title="The Muddy Volcanoes, Buzău County, Romania" className="text-blue-600 underline hover:text-blue-800">article</Link>.</p>
        <p>I did some research on the internet and I found out that between Ploiești and Buzău counties are lots of wineries, some even offering accommodation, restaurant, and wine tastings. So, our weekend getaway had every chance of being amazing.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumAerial} alt="Apogeum Winery - drone view" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We chose to go on the first weekend of April to Apogeum Winery, the younger sister of Tohani wineries. Apogeum Winery is in Gura Vadului, at an equal distance between Ploiești and Buzău, in the renowned vine area - Dealul Mare. From Bucharest there are about 85 kilometers (about 52.82 mi) that can be covered in an hour and a half by car.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumDinner} alt="Apogeum Winery - in the yard" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Accommodation</h2>
        <p>Apogeum winery offers several types of rooms, all with private bathroom starting from 350 RON/night (~71 EUR/night) with breakfast included.</p>
        <p>We booked a double room through <LinkExternal link="https://www.booking.com/hotel/ro/crama-apogeum.ro.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Apogeum Winery" text="booking.com" /> and although it seemed a little too small at first, it was all we needed for a two-night stay.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWineBottle} alt="Apogeum Winery - the rooms" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWineDisplay} alt="Apogeum Winery - the rooms" width={720} height={1270} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>First of all, I must point out that both the room and the bathroom were extremely clean. Seriously, impeccably clean. I don’t know if that’s always the case or we were just extremely lucky, but I really appreciated this aspect. Although the room and the bathroom were very small, they were beautifully decorated, and in the bathroom, we found everything we could have needed: liquid soap, shower gel, shampoo, cleansing disks, toothbrushes and toothpaste, slippers, towels.</p>
        <h2>The Restaurant</h2>
        <p>The breakfast was buffet style, but the sunny-side-up eggs and the scrambled eggs were prepared on the spot according to everyone’s preferences. I like it when this happens because I prefer to eat a freshly fried egg. In addition, they have options such as cheese, dried salami, ham, tomatoes, cucumbers, bell peppers, boiled eggs, yogurt, cereals, coffee, milk, orange juice, grape juice. But also, options for sweet lovers: croissants and other types of sweetened pastries, jam, fruit.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumExterior1} alt="Apogeum Winery - inside the restaurant" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>In the same restaurant you can have lunch and dinner at certain times. We had dinner one evening and opted for the poultry borsch with homemade noodles (35 RON / 7.1 EUR), veal in Fetească Neagră sauce with puree (85 RON / 17.2 EUR), Osso buco in wine sauce with vegetables (75 RON / 15.2 EUR), and at dessert we had crème brûlée with sponge cake, apples, and caramel (25 RON/5 EUR). So, let’s just say we had a feast. All the dishes were super tasty, but we especially liked the borsch and the veal in wine sauce.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumExterior2} alt="Apogeum Winery - inside the restaurant, the fireplace" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumEvening} alt="Apogeum Winery - inside the restaurant, the fireplace" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>Now let’s move on to the most interesting part, the reason for our trip: the wine tasting.</p>
        <h2>The Wine Tasting</h2>
        <p>On Apogeum Winery’s website you can find some information about wine tourism / wine tastings: <LinkExternal link="https://crama-apogeum.ro/#enoturism" title="Link to Apogeum Winery enoturism" text="https://crama-apogeum.ro/#enoturism" />. We initially thought we would be the only two people there and we were prepared to pay extra to be able to have a wine tasting, but to our surprise there were 18 people in our group! And there were two distinct groups, not just one. I noticed that there were people in team buildings there. Many from our group had been all day at various wine cellars in the area, we certainly could not cope with so much alcohol.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumInterior2} alt="Apogeum Winery - inside the winery, wine tasting experience" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>When we made the reservation, we opted for a certain tasting package, but being so many people participating, our preference was not considered, but the specialist proposed a selection of wines which was perfectly fine with us.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumBreakfast} alt="Apogeum Winery - outside the winery" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumTasting} alt="Apogeum Winery - wine tasting experience" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>First, we visited the cellar where we were told about how the Apogeum’s Fetească Neagră is made, we continued with the visit of the manor where the restaurant is, then we ended with the wine tasting in the winery. We sat at a long table, in front of each sit were three types of glasses, and for each couple there was a plate of cheese, nuts, crackers and salami. The oenologist told us about each wine and guided us in tasting them, shared tips & tricks about wines and told us what to combine the wine with from the plate to extract the maximum of taste.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWineGlass} alt="Apogeum Winery - food for the wine tasting, wine tasting experience" width={1248} height={845} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Here are some ideas from the wine tasting:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>When we eat our taste buds get used to the taste after the first 4-5 bites and we no longer feel the same pleasure as at the first mouthful. The role of wine is to reset the taste buds.</li>
          <li>You should hold your glass by the stem and not the bowl.</li>
          <li>The more distant the wine can be smelled, the more intense its aroma is.</li>
          <li>The better the wine, the longer its aroma develops in the mouth. If the development comes to an end in 3 seconds, it means that it is not a good wine. An extraordinary wine develops its aroma even after 8-9 seconds.</li>
        </ul>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumInterior1} alt="Apogeum Winery - bottles of wine for the wine tasting, wine tasting experience" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>After the first glass of wine, we were all relaxed and the tasting became more interactive, more jovial. It was an experience I highly recommend. And we definitely want to come back to Apogeum Winery.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWinery2} alt="Apogeum Winery - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWinery1} alt="Apogeum Winery - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}