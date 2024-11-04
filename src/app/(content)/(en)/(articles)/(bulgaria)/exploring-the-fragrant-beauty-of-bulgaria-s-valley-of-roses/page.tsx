import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import bulgariaValleyofRosesFourthOfJuly from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-fourth-of-july-rose.jpeg"
import bulgariaValleyofRosesDamascRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-damasc-rose.jpg"
import bulgariaValleyofRosesRoseFestival from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-rose-festival.jpg"
import bulgariaValleyofRosesDoubleDelightRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-double-delight-rose.jpg"
import bulgariaValleyofRosesGoldenCelebrationRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-golden-celebration-rose.jpg"
import bulgariaValleyofRosesOrangeRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-orange-rose.jpg"
import bulgariaValleyofRosesWhiteRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-white-rose.jpg"
import Image from "next/image";
import Link from "next/link";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";

const article = getArticle(34);

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
        <Image className="mb-4" src={bulgariaValleyofRosesFourthOfJuly} alt="Exploring the Fragrant Beauty of Bulgaria's Valley of Roses" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority/>
        <p>Last year, at the end of May, we had the pleasure of attending the Rose Festival in Bulgaria, located in the Kazanlak region, famously known as the Valley of Roses. We’ve shared more details about our accommodations and the places we visited in <Link prefetch={false} href="/bulgaria-rose-valley-rose-festival" className="text-blue-600 underline hover:text-blue-800">this article</Link>.</p>
        <p>Since we captured so many stunning roses during that trip, we felt compelled to dedicate an entire article solely to them — this is that article.</p>
        <p>Surrounding the villages of Yasenovo, Rozovo, Kanchevo, and Cherganovo, one can find lush bushes of Damask roses. These villages annually participate in the Rose Festival, meticulously preparing to host tourists for the traditional rose-picking rituals.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d187912.2364613692!2d25.1957492079984!3d42.616226544634884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x40a8504cec906a33%3A0xa00a014cd0f0860!2sRozovo%2C%20Stara%20Zagora%2C%20Bulgaria!3m2!1d42.5621953!2d25.4135182!4m5!1s0x40a9abd2dca92ba9%3A0xa00a014cd0f68e0!2zNjE0NyDQr9GB0LXQvdC-0LLQviwgQnVsZ2FyaWE!3m2!1d42.6874365!2d25.2508172!4m5!1s0x40a8500981a07b1f%3A0xa00a014cd0e80e0!2sKanchevo%2C%206164%2C%20Bulgaria!3m2!1d42.5438055!2d25.4512783!4m5!1s0x40a850b97d3cc6d9%3A0xa00a014cd0f48c0!2sCherganovo%2C%206139%2C%20Bulgaria!3m2!1d42.585661699999996!2d25.470294799999998!5e0!3m2!1sen!2sro!4v1713780784256!5m2!1sen!2sro" />
        <p>The Damask rose, known scientifically as Rosa damascena, originates from the Middle East, but it found a perfect home in the climate and soil of Bulgaria’s Rose Valley, where conditions are ideal for its cultivation.</p>
        <Image className="mb-4" src={bulgariaValleyofRosesDamascRose} alt="Bulgaria Valley of Roses - Damasc Rose" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Bulgaria is one of the world’s largest producers of rose oil, which is distilled from the petals of the Damask rose. The oil is highly prized in the perfume industry due to its rich, multifaceted scent and its intricate balance of sweet, spicy, and floral notes. The labor-intensive process of extracting the oil, along with the large number of rose petals needed (approximately 3,000 kilograms of petals to produce just 1 kilogram of rose oil), makes it one of the most expensive essential oils in the world.</p>
        <p>The cultivation of Damask roses and production of rose oil are vital to the Bulgarian economy, particularly in the regions around Kazanlak and Karlovo. The annual Rose Festival in Kazanlak attracts thousands of tourists and is a significant cultural event, celebrating the rose-picking season with parades, folk music, and dancing.</p>
        <Image className="mb-4" src={bulgariaValleyofRosesRoseFestival} alt="Bulgaria Valley of Roses - Rose Festival" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Damask roses are edible. The petals of Rosa damascena are commonly used in various culinary traditions around the world.</p>
        <p>From rose petals, syrups and jams can be made, and rose water can be used in pastry making. Additionally, rose buds can be used for tea or to flavor various drinks, such as lemonade.</p>
        <Image className="mb-4" src={bulgariaValleyofRosesDoubleDelightRose} alt="Bulgaria Valley of Roses - Double Delight Rose" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Another location where we admired dozens of rose varieties was the Damascena Ethnographic Complex. Outside the complex lies a field with bushes of Damask roses, while inside, roses of various varieties are showcased. Among the varieties seen, I recall: White Pet, Double Delight, Golden Celebration, Camille Pissarro, and Fourth of July.</p>
        <Image className="mb-4" src={bulgariaValleyofRosesGoldenCelebrationRose} alt="Bulgaria Valley of Roses - Golden Celebration Rose" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Our favorite spot for admiring, photographing, and smelling roses was the Rose Museum in Kazanlak. In the museum’s outdoor garden, rose bushes of various varieties were artfully arranged in circular patterns. Each rose exuded an enchanting fragrance, characterized by unique, subtle, and delightful notes that left us captivated. We could have stayed there for hours just to smell the roses.</p>
        <Image className="mb-4" src={bulgariaValleyofRosesOrangeRose} alt="Bulgaria Valley of Roses - Orange Rose" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Unfortunately, I’m not skilled at describing the delightful scents of the roses. Some had a stronger fragrance, while others had a more subtle aroma. I detected sweet notes similar to whipped cream, lightly fruity, perhaps hints of strawberry, raspberry, or peach, as well as more intriguing notes of tea or almonds.</p>
        <p>Disconnecting from our daily concerns and reconnecting with nature proved to be an immensely relaxing experience for us, one we would eagerly and joyfully repeat at any opportunity.</p>
        <Image className="mb-4" src={bulgariaValleyofRosesWhiteRose} alt="Bulgaria Valley of Roses - White Rose" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
      </main>
    </div>
  );
}
