import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Youtube from "@/components/youtube/Youtube";

import aFlowerFromCismigiuPark from "../../../../../../../public/cismigiu-park/a-flower-from-cismigiu-park.jpeg"
import cismigiuPark from "../../../../../../../public/cismigiu-park/cismigiu-park.jpeg"

const article = getArticle(27);

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
        <Image className="mb-4" src={cismigiuPark} alt="Escape to Cişmigiu Garden, the oldest park in Bucharest" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>I was thinking recently, why not promote more the city where we spend most of our time, namely - Bucharest?</p>
        <p>We will try to do this more often because we like to go for a walk around the city. And if it’s about walking, why not talk about Cişmigiu?</p>
        <p>The Cişmigiu Garden is the oldest public garden in Bucharest, having been established more than 170 years ago by draining the pond in the respective area.</p>
        <p>In which Romanian word do you think the name Cişmigiu originates? <br/> A. Cizmă (boot)<br/>B. Ciumagiu (worm)<br/>C. Cişmea (fountain)</p>
        <p>Read till the end to find out the correct answer.</p>
        <p>The landscaper of German origin Carl Friedrich Wilhelm Meyer, who also worked on the imperial gardens in Vienna, was in charge of designing the garden. The public garden has been modified since then, but most of it has remained the same.</p>
        <p>During the summer, you can go boating on the Cişmigiu Lake, and during the winter, you can go to the ice rink. Also, there are playgrounds for children, a special area for dogs, and many more.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={aFlowerFromCismigiuPark} alt="Cişmigiu Garden - A flower" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We can appreciate that it is a park with many species of plants, trees, and shrubs. We admired the wisterias, in May, when they bloom, but also the Ginkgo Biloba tree.</p>
        <p>Of course, there are many things to improve, but we want to appreciate the beauty of a place and not highlight the negative things.</p>
        <p>Rather than telling you about what you can see in the park, wouldn’t it be better to show you? We were inspired by Cişmigiu and each of us created a short video that we posted on our <LinkExternal link="https://www.youtube.com/channel/UC6cO4CO-T5PGkeXWc8Sf1lw" title="Link to AFKology YouTube channel" text="YouTube channel" />.</p>
        <p>Option 1:</p>
        <Youtube videoId="rDqrwzKbg6s" />
        <p>Option 2:</p>
        <Youtube videoId="Pa3HHX7K61g" />
        <p>What do you think? Which of the two options do you prefer? Interact with us on <LinkExternal link="https://www.instagram.com/afkology/" title="Link to AFKology Instagram" text="Instagram" /> or <LinkExternal link="https://www.facebook.com/afkology/" title="Link to AFKology Facebook" text="Facebook" />.</p>
        <p>Ah, it was about to slip my mind. The correct answer is C.</p>
      </main>
    </div>
  );
}
