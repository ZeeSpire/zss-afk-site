import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import frederiksborgMain from "../../../../../../../public/copenhaga/frederiksborg1_woowdi.jpeg";
import frederiksborgExterior from "../../../../../../../public/copenhaga/frederiksborg2_pxlnfh.jpeg";
import frederiksborgGarden from "../../../../../../../public/copenhaga/frederiksborg3_jsuw6z.jpeg";
import frederiksborgInterior from "../../../../../../../public/copenhaga/frederiksborg4_cqpvqq.jpeg";
import frederiksborgView from "../../../../../../../public/copenhaga/frederiksborg5_b3hre1.jpeg";
import castleView1 from "../../../../../../../public/copenhaga/castel1_ikpkmm.jpeg";
import castleView2 from "../../../../../../../public/copenhaga/castel2_u8gjx9.jpeg";

const article = getArticle(5);

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
      <Youtube videoId="Tj6d47OGhjY" />
        <p>Petrecând o vacanță de 5 zile în Copenhaga, am putut strecura şi o excursie de o zi în afara orașului pentru a experimenta şi mai mult din frumusețile Danemarcei.</p>
        <p>Am avut de ales între numeroase excursii de o zi, cum ar fi vizitarea Castelului Kronborg, satul pescaresc idilic Dragør, Muzeul de Artă Modernă Louisiana, Dyrehaven (“parcul cerbilor”), cel mai vechi parc de distracții din lume - Bakken, Muzeul Navelor Vikingilor și Catedrala din Roskilde, locul de naștere al lui H.C. Andersen - Odense, Mons Klint și multe altele.</p>
        <p>Și le-am fi vizitat pe toate dacă am fi avut la dispoziţie cel puțin două săptămâni, dar a trebuit să alegem doar una. Și câștigătoarea a fost… Castelul Frederiksborg.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgMain} alt="Castelul Frederiksborg - Excursie de o zi din Copenhaga" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Este foarte ușor să ajungi la acest castel. De la Gara Centrală din Copenhaga iei trenul S (linia A) către stația Hillerød. În 45 de minute vei ajunge.</p>
        <p>Biletul de tren este acoperit de Copenhagen Card. În acest articol, am scris mai multe despre <Link prefetch={false} href="/ro/sfaturi-pentru-prima-vizita-in-copenhaga" title="Sfaturi pentru prima vizită în Copenhaga" className="text-blue-600 underline hover:text-blue-800">Copenhagen Card</Link>.</p>
        <p>Hillerød este la aproximativ 35 km la nord de Copenhaga și este un mic oraș fermecător cu străzi pietonale pline de magazine, restaurante și cafenele. De la stația Hillerød faci cam 15-20 de minute până la castel (1.5 km).</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgExterior} alt="Castelul Frederiksborg - exterior" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Castelul Frederiksborg este situat pe Slotssøen, ceea ce înseamnă Lacul Castelului, a fost construit de regele Christian al IV-lea în primele decenii ale secolului al XVII-lea și este cel mai mare complex renascentist din regiunea nordică.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4469.78731777407!2d12.2989364!3d55.9338814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524097762941e1%3A0x12c6a634246b6152!2sFrederiksborg%20Castle!5e0!3m2!1sen!2sro!4v1646067896516!5m2!1sen!2sro" />
        <p>Din 1878, Castelul Frederiksborg adăpostește Muzeul de Istorie Națională, care prezintă 500 de ani de istorie daneză, cu o colecție de portrete, picturi istorice, mobilier și artă aplicată.</p>
        <p>Un bilet pentru adulți costă 90 DKK, aproximativ 12 EUR / 13.5 USD. Intrarea este gratuită cu Copenhagen Card.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgGarden} alt="Castelul Frederiksborg - interior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Vizita nu ar fi completă fără o plimbare prin Grădinile Castelului. Grădinile însele sunt demne de o vizită.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgInterior} alt="Castelul Frederiksborg - Vederea grădinii din dronă" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Există o grădină barocă construită simetric, cu garduri perfect drepte. Mai este, de asemenea, şi o grădină romantică în stil englezesc, unde se află micul Bath House Castle. Există multe lacuri mici, iar fiecare este unic și are propria sa frumusețe. De asemenea, poți savura un brunch delicios la <LinkExternal link="https://cafehavehuset.dk/en/menu/" title="Link catre Cafe Havehuset" text="Cafe Havehuset" /> situat în grădini.</p>
        <p>După o zi plină, dar foarte plăcută, ne-am întors la Copenhaga, și recomandăm cu căldură oricui are posibilitatea să viziteze Castelul Frederiksborg.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederiksborgView} alt="Castelul Frederiksborg - Vedere din grădina" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={castleView2} alt="Castelul Frederiksborg - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={castleView1} alt="Castelul Frederiksborg - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}