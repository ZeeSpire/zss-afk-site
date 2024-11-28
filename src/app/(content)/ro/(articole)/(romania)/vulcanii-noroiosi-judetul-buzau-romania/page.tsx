import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";

import muddyDrone1 from "../../../../../../../public/muddy-volcanoes/DJI_0046_gjd2fi.jpeg";
import muddyDrone2 from "../../../../../../../public/muddy-volcanoes/DJI_0023_kn16nq.jpg";
import muddyDrone3 from "../../../../../../../public/muddy-volcanoes/DJI_0087_me6ymd.jpg";
import muddyGround1 from "../../../../../../../public/muddy-volcanoes/IMG_20220122_134046_c9jvzi.jpg";
import muddyGround2 from "../../../../../../../public/muddy-volcanoes/IMG_20220122_134506_wjvkju.jpg";
import muddyPin1 from "../../../../../../../public/muddy-volcanoes/muddy1_gtvr1d.jpg";
import muddyPin2 from "../../../../../../../public/muddy-volcanoes/muddy2_we4ma0.jpg";

const article = getArticle(6);

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
        <Youtube videoId="YXcX60DSbUs" />
        <p>When you say “volcano” you automatically think of a magmatic volcano, they are more popular and more common. While there are more than 1500 magmatic volcanoes on land and probably more than 1 million of them underwater, there are only 700 mud volcanoes worldwide.</p>
        <p>The mud volcanoes in Buzău county, Romania, are the largest in Europe and are spectacular because they erupt once every few minutes or even seconds.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyDrone1} alt="The Muddy Volcanoes, Buzău County, Romania" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Some mud volcanoes form cones while others form lakes that emit gases (boilers). The difference between them is given by the mud. If the mud is more viscous, it will flow slowly and will form cones. If the mud it’s more liquid, it will form lakes.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyDrone2} alt="The Muddy Volcanoes - drone view" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>The best-known muddy volcanoes in Buzău county are: The Large Mud Volcanoes (Pâclele Mari), The Small Mud Volcanoes (Pâclele mici), The Boilers From Berca (Fierbătorile de la Berca), and The Boilers from Beciu (Fierbătorile de la Beciu).</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m36!1m8!1m3!1d89729.91251157537!2d26.6539393!3d45.3476058!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x40b3e59dcbfa6a81%3A0x134fc65bd402885d!2sFierbatorile%20De%20La%20Berca%2C%20Berca!3m2!1d45.296574899999996!2d26.694639!4m5!1s0x40b3f00168630157%3A0xc97143c6ce00a966!2sVulcanii%20Noroio%C8%99i%20P%C3%A2clele%20Mici%2C%20Scor%C8%9Boasa!3m2!1d45.3394093!2d26.7061852!4m5!1s0x40b3f06c6baa3049%3A0xe3fd287f24779b2e!2sVulcanii%20Noroio%C8%99i%20P%C3%A2clele%20Mari%2C%20P%C3%A2clele!3m2!1d45.3594064!2d26.7134713!4m5!1s0x40b3f124c06b4fc1%3A0x7cf127da9796d048!2sFierbatorile%20de%20la%20Beciu%2C%20Beciu!3m2!1d45.377323999999994!2d26.7058468!5e0!3m2!1sen!2sro!4v1649599266995!5m2!1sen!2sro" />
        <p>On our one-day trip from Bucharest, we only visited Pâclele Mari and Pâclele Mici and it seemed to us that the most spectacular landscape is probably at Pâclele Mici, but both places are worth a visit. And we plan to visit the other two as well.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyDrone3} alt="The Muddy Volcanoes - drone view 2" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>There is a small admission fee (approx. 1 euro per adult) for each site and it’s best to carry cash. The admission fee is too small in my opinion.</p>
        <p>We visited them on a sunny and quite warm day in February and it was perfect because we were almost the only people there and we could fly the drone without any issues. I don’t think they can be visited when it’s raining or if it rained and it’s still wet as you should walk only on dry land.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyGround1} alt="The Muddy Volcanoes - desert view" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>You must keep in mind that these volcanoes are constantly transforming the terrain, at the same time being so fragile. It is best to avoid going too near to them, not only because the mud is corrosive and toxic, and the volcanoes can splash you when you’re not expecting it. It’s not just for your cleanliness and safety, but to preserve the muddy volcanoes. Why would you want to risk destroying them?</p>
        <p>At the entrance of the reservation, you’ll find information panels. Please read them. You’ll find out that you should only walk in dry areas, not on the gray wet patches. If it’s not possible to go near a volcano without getting your shoes dirty with mud, then you should admire them from a distance.</p>
        <p>Enjoy the lunar landscapes!</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyGround2} alt="The Muddy Volcanoes - lunar landscapes" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyPin1} alt="The Muddy Volcanoes - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyPin2} alt="The Muddy Volcanoes - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}