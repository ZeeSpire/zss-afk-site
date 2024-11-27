import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import divineCave1 from "../../../../../../../public/divine-cave/cave1_jqqfhf.jpg";
import divineCaveS3 from "../../../../../../../public/divine-cave/s_3_q1gobm.jpg";
import divineCaveS2 from "../../../../../../../public/divine-cave/s_2_t39mbc.jpg";
import divineCave5 from "../../../../../../../public/divine-cave/5_p6lq7j.jpg";
import divineCave2 from "../../../../../../../public/divine-cave/2_r3hqid.jpg";
import divineCaveSunset from "../../../../../../../public/divine-cave/e-IMG_20210710_203541_pnixfz.jpg";
import divineCave0 from "../../../../../../../public/divine-cave/0_jp5koh.jpeg";
import divineCaveS1 from "../../../../../../../public/divine-cave/s_1_botpcu.jpg";
import divineCave2Alt from "../../../../../../../public/divine-cave/cave2_lqx5cb.jpg";
import divineCave1Alt from "../../../../../../../public/divine-cave/1_zkmujs.jpg";

const article = getArticle(12);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave0} alt="Our Divine Cave Experience in Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>I felt I had to dedicate an entirely separate article to one of the accommodations we had in Santorini because it was the most beautiful accommodation we have ever stayed in, and it was an experience in itself. We booked through <LinkExternal link="https://www.booking.com/hotel/gr/divine-cave-experience.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Divine Cave Experience accomodation in Santorini" text="booking.com" /> and we were so happy that we found this place in the peak season at a reasonable price.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave1Alt} alt="Our Divine Cave Experience in Santorini, view of the caldera" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Divine Cave Experience is a hotel located in Imerovigli right next to the trailing path that leads to Oia and was inaugurated in 2021 which makes it a rather new hotel, with only nine rooms. It has a swimming pool, a pool bar, and a SPA, and each room has its own jacuzzi with a wonderful view of the caldera as well as a separate lounge. For all the amenities check out their <LinkExternal link="https://www.divinesuites.com/" title="Link to Divine Cave Experience website in Santorini" text="website" />.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave2} alt="Our Divine Cave Experience in Santorini, inside the rooms" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>From the moment you arrive, you feel like you entered the gate to another world. You are greeted with a delicious, iced tea, and the well-trained receptionists take you on an incursion in the Divine Cave Experience.</p>
        <p>In the room, you will find everything you need from a bathrobe and slippers to a sewing kit and toothbrushes. The piece of resistance for me was the shower products from Guerlain that smelled wonderfully nice, but also the Nespresso machine that is always a nice touch.</p>
        <p>Even though we didn’t use the TV, we appreciated the fact that it had Netflix. We also liked the Sony speaker to which we connected via Bluetooth, and which helped us to create a romantic atmosphere.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveS3} alt="Divine Cave Experience in Santorini - promotional materials" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveS1} alt="Divine Cave Experience in Santorini - inside the rooms" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveS2} alt="Divine Cave Experience in Santorini - bath kit" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>The bed and especially the pillows were so comfortable that we looked at the label to see where we could buy them. They were from <LinkExternal link="https://matt-royal.gr/products-pillows.html" title="Link to Matt-Royal" text="Matt-Royal" /> and were made in Greece which is to be appreciated.</p>
        <p>You can also leave with a souvenir from the hotel, namely a beach bag. I think it is a common practice in other hotels as well, as I saw this kind of beach bag inscribed with the names of other hotels on several people walking through Oia.</p>
        <p>Breakfast was delicious, and we were able to opt for fresh fruit and freshly squeezed orange juice which gave us an energy boost.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave5} alt="Divine Cave Experience in Santorini, breakfast" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Divine Cave Experience is “a concealed sanctuary” as they say but also is so much more. We felt amazingly good in our short stay. Everything was impeccable and thought out in detail. The design of the entire hotel exudes a lot of good taste, fitting perfectly into the landscape of Santorini. In fact, the Divine Cave Experience is not just a hotel, but it truly is an experience, a divine one.</p>
         {/* image 16/9 */}
         <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveSunset} alt="Divine Cave Experience, the best sunset in Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
         {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave1} alt="Divine Cave Experience Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave2Alt} alt="Divine Cave Experience Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
