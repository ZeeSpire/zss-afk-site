import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";

import bulgariaValleyofRosesFourthOfJuly from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-fourth-of-july-rose.jpeg"
import bulgariaValleyofRosesDamascRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-damasc-rose.jpg"
import bulgariaValleyofRosesRoseFestival from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-rose-festival.jpg"
import bulgariaValleyofRosesDoubleDelightRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-double-delight-rose.jpg"
import bulgariaValleyofRosesGoldenCelebrationRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-golden-celebration-rose.jpg"
import bulgariaValleyofRosesOrangeRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-orange-rose.jpg"
import bulgariaValleyofRosesWhiteRose from "../../../../../../../public/bulgaria-rose-valley-roses/bulgaria-rose-valley-roses-white-rose.jpg"

const article = getArticle(34);

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
      {/* image 16/9 */}
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesFourthOfJuly} alt="Explorând frumusețea parfumată a Văii Trandafirilor din Bulgaria" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority/>
        <p>Anul trecut, la sfârșitul lunii mai, am avut plăcerea de a participa la Festivalul Trandafirilor din Bulgaria, situat în regiunea Kazanlak, cunoscută sub numele de Valea Trandafirilor. Am împărtășit mai multe detalii despre cazarea noastră și locurile pe care le-am vizitat în <Link prefetch={false} href="/ro/bulgaria-valea-trandafirilor-festivalul-trandafirilor" title="O călătorie fermecătoare prin Valea Trandafirilor din Bulgaria" className="text-blue-600 underline hover:text-blue-800">acest articol</Link>.</p>
        <p>Deoarece am fotografiat atât de mulți trandafiri impresionanți în timpul acelei călătorii, ne-am simțit obligați să dedicăm un întreg articol exclusiv lor — acesta este acel articol.</p>
        <p>În jurul satele Yasenovo, Rozovo, Kanchevo și Cherganovo, se pot găsi tufe de trandafiri de Damasc. Aceste sate participă an de an la Festivalul Trandafirilor, pregătindu-se meticulos pentru a primi turiști la ritualurile tradiționale de culegere a trandafirilor.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d187912.2364613692!2d25.1957492079984!3d42.616226544634884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x40a8504cec906a33%3A0xa00a014cd0f0860!2sRozovo%2C%20Stara%20Zagora%2C%20Bulgaria!3m2!1d42.5621953!2d25.4135182!4m5!1s0x40a9abd2dca92ba9%3A0xa00a014cd0f68e0!2zNjE0NyDQr9GB0LXQvdC-0LLQviwgQnVsZ2FyaWE!3m2!1d42.6874365!2d25.2508172!4m5!1s0x40a8500981a07b1f%3A0xa00a014cd0e80e0!2sKanchevo%2C%206164%2C%20Bulgaria!3m2!1d42.5438055!2d25.4512783!4m5!1s0x40a850b97d3cc6d9%3A0xa00a014cd0f48c0!2sCherganovo%2C%206139%2C%20Bulgaria!3m2!1d42.585661699999996!2d25.470294799999998!5e0!3m2!1sen!2sro!4v1713780784256!5m2!1sen!2sro" />
        <p>Trandafirul de Damasc, cunoscut științific sub denumirea de Rosa damascena, își are originea în Orientul Mijlociu, dar a găsit un mediu ideal în clima și solul Văii Trandafirilor din Bulgaria, unde condițiile sunt ideale pentru cultivarea sa.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesDamascRose} alt="Bulgaria, Valea Trandafirilor - Trandafirul de Damasc" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Bulgaria este unul dintre cei mai mari producători de ulei de trandafir din lume, care este distilat din petalele trandafirului de Damasc. Uleiul este foarte apreciat în industria parfumurilor datorită aromei sale si a și echilibrului său complex de note dulci, picante și florale. Procesul greoi de extragere a uleiului, precum și cantitatea mare de petale necesare (aproximativ 3,000 de kilograme de petale pentru a produce doar 1 kilogram de ulei de trandafir), îl face unul dintre cele mai scumpe uleiuri esențiale din lume.</p>
        <p>Cultivarea trandafirilor de Damasc și producția de ulei de trandafir sunt vitale pentru economia Bulgariei, în special în regiunile Kazanlak și Karlovo. Festivalul anual al Trandafirilor din Kazanlak atrage mii de turiști și este un eveniment cultural semnificativ, celebrând sezonul de cules al trandafirilor cu parade, muzică populară și dansuri.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesRoseFestival} alt="Bulgaria, Valea Trandafirilor - Festivalul Trandafirilor" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Trandafirii Damasc sunt comestibili. Petalele de Rosa damascena sunt utilizate frecvent în diverse tradiții culinare din întreaga lume.</p>
        <p>Din petalele de trandafir se pot face siropuri și dulcețuri, iar apa de trandafir poate fi folosită în patiserie. De asemenea, bobocii de trandafir pot fi folosiți pentru ceai sau pentru a aroma diverse băuturi, cum ar fi limonada.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesDoubleDelightRose} alt="Bulgaria, Valea Trandafirilor - Trandafirul Double Delight" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Un alt loc unde am admirat zeci de soiuri de trandafiri a fost Complexul Etnografic Damascena. În afara complexului se află un câmp cu tufe de trandafiri de Damasc, iar în interiorul complexului sunt expuse trandafiri de diverse soiuri. Printre soiurile văzute, amintesc: White Pet, Double Delight, Golden Celebration, Camille Pissarro, or Fourth of July.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesGoldenCelebrationRose} alt="Bulgaria, Valea Trandafirilor - Trandafirul Golden Celebration" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Locul nostru preferat pentru a admira, fotografia și mirosi trandafirii a fost Muzeul Trandafirilor din Kazanlak. În grădina exterioară a muzeului, tufele de trandafiri de diverse soiuri erau aranjate sub formă circulară. Fiecare trandafir emana un parfum încântător, caracterizat prin note unice, subtile și plăcute, de care nu ne mai puteam sătura. Am fi putut sta acolo ore în șir doar pentru a mirosi trandafirii.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesOrangeRose} alt="Bulgaria, Valea Trandafirilor - Trandafirul Portocaliu" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Din păcate, nu mă pricep să descriu parfumurile încântătoare ale trandafirilor. Unii aveau un parfum mai puternic, în timp ce alții aveau o aromă mai subtilă. Am detectat note dulci, asemănătoare cu frișca, ușor fructate, poate de căpșune, zmeură sau piersici, dar și note mai intrigante de ceai sau migdale.</p>
        <p>Deconectarea de la preocupările noastre zilnice și reconectarea cu natura s-a dovedit a fi o experiență extrem de relaxantă pentru noi, una pe care am repeta-o cu entuziasm și bucurie oricând.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaValleyofRosesWhiteRose} alt="Bulgaria, Valea Trandafirilor - Trandafirul Alb" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
    </main>
  </div>
  );
}