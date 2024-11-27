import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import muzeulSatului2 from "../../../../../../../public/muzeul-satului/muzeul-satului-roman-2.jpeg"
import muzeulSatului3 from "../../../../../../../public/muzeul-satului/muzeul-satului-roman-3.jpeg"
import muzeulSatului4 from "../../../../../../../public/muzeul-satului/muzeul-satului-roman-4.jpeg"

const article = getArticle(26);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muzeulSatului2} alt="A walk through the Dimitrie Gusti National Village Museum in Bucharest" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>On the sixth of June, 2023, we had a day off during the week when the rest were at work. Initially, we went to take a tour of the Herăstrău Park, but then we had the idea to visit the “Dimitrie Gusti” National Village Museum.</p>
        <p>The open-air museum is located on the banks of the Herăstrău Lake, in the middle of the capital, and represents an escape from the tumult of the city. It has several entrances and, because the one near the Triumphal Arch was closed, we went to the one on Kiseleff Road, no. 28. We paid 30 RON (6 EUR) per ticket. All details are available <LinkExternal link="https://muzeul-satului.ro/en/acces-muzeu/" title="Link to Dimitrie Gusti National Village Museum" text="here" />.</p>
        <p>The official opening of the Village Museum took place on the 10th of May, 1936, in the presence of King Charles II of Romania. It escaped relocation or destruction during communism and now includes households, churches, and other constructions from the 17th century to the beginning of the 20th century from different ethnographic areas on an area of approximately 10 hectares.</p>
        <p>Inside the museum, there are, among the actual exhibits, maps, information boards, toilets, benches, a restaurant where you can recharge your batteries, and a souvenir shop. We also enjoyed the presence of some cats, some bored, others playful, as well as that of a turtle walking through the grass. We also saw the house illustrated on the 10 RON banknote.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muzeulSatului3} alt="Dimitrie Gusti National Village Museum in Bucharest - Inside the open air museum" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>A list of households with information about each one can be found right on <LinkExternal link="https://muzeul-satului.ro/en/despre-noi/patrimoniul-muzeului/expozitia-permanenta-in-aer-liber/" title="Link to Dimitrie Gusti National Village Museum - A list of households" text="the museum website" />.</p>
        <p>Exhibitions and various events are organized inside the museum so be sure to check this out as well before visiting.</p>
        <p>We allocated an hour and 30 minutes for this visit, but we could have spent much more time walking along the alleys among the houses, taking photos, and reading about each one.</p>
        <p>The “Dimitrie Gusti” National Village Museum is undoubtedly a must-see attraction in Bucharest.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muzeulSatului4} alt="Dimitrie Gusti National Village Museum in Bucharest - Household" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
    </main>
  </div>
  );
}
