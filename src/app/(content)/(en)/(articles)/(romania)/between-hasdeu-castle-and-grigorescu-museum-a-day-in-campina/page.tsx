import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import campina1 from "../../../../../../../public/campina/campina-1-muzeul-memorial-bogdan-petriceicu-hasdeu.jpg";
import campina2 from "../../../../../../../public/campina/campina-2-muzeul-memorial-bogdan-petriceicu-hasdeu.jpg";
import campina3 from "../../../../../../../public/campina/campina-3-muzeul-memorial-bogdan-petriceicu-hasdeu.jpg";
import campina4 from "../../../../../../../public/campina/campina-4-muzeul-memorial-bogdan-petriceicu-hasdeu.jpg";
import campina5 from "../../../../../../../public/campina/campina-5-muzeul-memorial-bogdan-petriceicu-hasdeu.jpg";
import campina6 from "../../../../../../../public/campina/campina-6-muzeul-memorial-nicolae-grigorescu.jpg";
import campina7 from "../../../../../../../public/campina/campina-7-lacul-bisericii.jpg";

const article = getArticle(38);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={campina1} alt="Between Hașdeu Castle and Grigorescu Museum: A Day in Câmpina" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>In search of weekend getaway ideas, we opened Google Maps and decided to visit a place about 100 kilometers from Bucharest: Câmpina.</p>
        <p>We set off from Bucharest to Câmpina by car, and the journey, on a fairly good road, can be completed in up to two hours, depending on traffic. However, Câmpina is also accessible by express train, which takes about an hour from Gara de Nord, with a second-class ticket costing only 36 lei for an adult.</p>
        <h2>First Stop in Câmpina: Bogdan Petriceicu Hasdeu Memorial Museum</h2>
        <p>Bogdan Petriceicu Hasdeu (1838–1907), known as a philologist, historian, writer, folklorist, and politician, was born in Cristinești, Bessarabia (now in Ukraine), and spent his final years in Câmpina.</p>
        <p>After the death of his daughter, Iulia (or Julia) Hasdeu, B.P. Hasdeu became fascinated with occultism and spiritism, convinced he could communicate with her spirit. It’s said that, between 1894 and 1896, he built Hasdeu Castle, whose design was “dictated” to him by his daughter from the afterlife.</p>
        <p>Iulia Hasdeu was born in 1869 and was a prodigy: by just two and a half years old, she could read and recite poetry; at 8, she spoke fluent French, German, and English; and at 16, she obtained her baccalaureate in literature and enrolled at the Faculty of Letters and Philosophy at the Sorbonne. Unfortunately, in 1888, at just 19, Iulia passed away from tuberculosis, leaving her grieving parents and numerous writings behind, including poems, stories, reflections, and impressions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina2} alt="Bogdan Petriceicu Hasdeu Memorial Museum - logo" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina3} alt="Bogdan Petriceicu Hasdeu Memorial Museum - inside the museum" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>The temple-like castle is filled with symbols and has an eccentric but impressive appearance, with a distinctive energy. The entrance fee is 15 lei for an adult, and visitors receive a remote control that allows access to an audio guide for various rooms and objects.</p>
        <p>Among the rooms visited, notable ones include the dining room with portraits of the family painted in medallions on the walls, the Castle’s Temple with a statue of Jesus, B.P. Hasdeu’s study, and the Dark Room – the place where spiritism sessions were held.</p>
        <p>For more details about the museum, including visiting hours, we invite you to visit the official website: <LinkExternal link="https://www.muzeulhasdeu.ro/" title="Link to Bogdan Petriceicu Hasdeu Memorial Museum" text="muzeulhasdeu.ro" />.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina4} alt="Bogdan Petriceicu Hasdeu Memorial Museum - inside the museum" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina5} alt="Bogdan Petriceicu Hasdeu Memorial Museum - inside the museum" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h2>Second Stop: Nicolae Grigorescu Memorial Museum</h2>
        <p>Just 500 meters from the Hasdeu Museum is the Nicolae Grigorescu Memorial Museum, which we visited next. The entrance fee is 12 lei for an adult, and the photography fee is 50 lei. Since the rooms were fairly dimly lit, and flash photography isn’t allowed, we chose not to take photos indoors – another reason to return and visit again.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={campina6} alt="Nicolae Grigorescu Memorial Museum" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>The house, a historic monument, is where Nicolae Grigorescu (1838–1907), considered the founder of modern Romanian painting, spent his last years. Although the original house burned down in 1918, it was rebuilt in 1954 and now serves as a museum. It displays paintings by Grigorescu, period furniture, and other personal items of the artist.</p>
        <p>“Car cu boi” (“Cart with Oxen”) is Grigorescu’s most famous work and one of the most beloved images in Romanian painting. The painting exists in several versions, each reflecting the artist’s mastery of capturing the essence of rural life. At the Nicolae Grigorescu Memorial Museum, you can admire a few of these versions, each evoking an authentic, emotional landscape of Romanian village life.</p>
        <h2>Relaxing by Lacul Bisericii (Church Lake) and in Gogoșica Park</h2>
        <p>After our dose of culture, we strolled along the shore of Lacul Bisericii, walked around the lake, and enjoyed a short walk in Gogoșica Park, thus concluding our mini-trip to Câmpina.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={campina7} alt="Relaxing by Lacul Bisericii" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
      </main>
    </div>
  );
}
