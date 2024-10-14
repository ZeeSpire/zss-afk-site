import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import Link from "next/link";
import Youtube from "@/components/youtube/Youtube";
import truffles1 from "../../../../../../../public/grigorescu-2/IMG_1505.jpeg"
import truffles2 from "../../../../../../../public/grigorescu-2/PINGRIGORESCU6.jpeg"
import truffles3 from "../../../../../../../public/grigorescu-2/PINGRIGORESCU7.jpeg"
import Image from "next/image";
import { Metadata } from "next";

const article = getArticle(20);

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
    url: `https://www.afkology.com/${article.slug?.en}`,
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
  "url": `https://www.afkology.com/${article.slug?.en}`,
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
    "@id": `https://www.afkology.com/${article.slug?.en}`
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
        <p>In Romania, there are more and more offers that include, in addition to accommodation, various types of experiences, from gastronomic incursions, wine tastings, courses where you can learn something new, to outdoor activities. This is also the case with truffle hunting.</p>
        <p>We participated in the truffle hunt organized by Terra Carpatica, at the end of October 2022. Although we were told that it was mostly dry weather in the past months and it is possible that the truffles did not grow, we were lucky to find quite a lot of truffles. Besides the hunting itself, we also participated in a gastronomic experience based on truffles and we highly recommend this type of experience to anyone. Read about it in <Link href="/truffle-hunting-and-a-special-culinary-experience-at-grigorescu-mansion" className="text-blue-600 underline hover:text-blue-800">this article</Link>.</p>
        <Youtube videoId="zGxKL-WEkdA" />
        <p>In the forests of Romania, there is a variety of truffles, which can be harvested between June and February. Their aroma and color differ depending on the season. Summer truffles have a more subtle smell and aroma than winter ones.</p>
        <p>We are therefore in a forest in Buzau County, on the same latitude as the Piedmont area in Italy, a renowned truffle area, thus having favorable climatic conditions and abundant forests.</p>
        <p>We were guided on a two-hour expedition through the forest by two professional truffle hunters and their dogs specially trained for this purpose. The most famous dog breed for this activity is Lagotto Romagnolo, but dogs from other breeds such as Pointer or Vizsla can also be trained to search for truffles.</p>
        <Image className="mb-4" src={truffles1} alt="Truffle hunting" width={1248} height={702} sizes="(max-width: 1280px) 100vw, 70vw" />
        <p>The dogs came to do the job for which they were trained. We were not allowed to play with them or distract them in any way. They were running through the forest when suddenly they were starting to dig if they smelled a truffle. They were very focused on their task. The truffles found differed in size. The smaller ones were picked up by the dog in its mouth and left in the hands of the owner. For the bigger ones, the truffle hunter carefully picked them up from the ground, with care not to break or puncture them. After that, the place was covered with leaves so that the area near the roots of the tree didn’t dry out. After each finding, the dogs were waiting for their reward, usually a small treat.</p>
        <p>It is a well-known fact that truffles are very expensive, but the job of a truffle hunter is also a difficult and dangerous one. In the forest, all kinds of dangers lurk, some so small that you would not initially think of. Such as ticks or wasps.</p>
        <p>The truffle, also called “the black gold”, “the black diamond”, “the diamond of the forest”, or “the diamond of the kitchen”, is a fungus that lives in the ground in symbiosis with a tree. The host trees can be oaks, hazelnuts, beeches, poplars, hornbeams, and others. The truffles are connected to the roots and provide nutrients and minerals for the tree. They grow at depths between 5 and 40 cm. This is also the reason why you can find them only with specially trained dogs.</p>
        <p>It’s said that if you want to make a truffle farm, then you have to plant a forest.</p>
        <p>Their smell is what helps them to perpetuate the species. Animals are attracted by their smell and rummage in the ground in order to eat them. In this way, they spread their spores. Animals that like truffles include mice, wild boars, foxes, deer, bears, and even dogs.</p>
        <p>Truffles are used as a condiment. They have a very strong aroma, and a small amount is enough to flavor your food. The truffles can be used in risotto, pasta dishes, purees, and steaks, but they are also used to flavor butter, oil, or salt.</p>
        <p>Besides all these, truffles have various health benefits because they are rich in antioxidants, vitamins, and minerals.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-4" src={truffles2} alt="Truffle Hunting Pin 01" width={720} height={1200} sizes="(max-width: 768px) 100vw, 35vw" /></div>
          <div><Image className="mb-4" src={truffles3} alt="Truffle Hunting Pin 02" width={720} height={1200} sizes="(max-width: 768px) 100vw, 35vw" /></div>
        </div>
      </main>

    </div>
  );
}
