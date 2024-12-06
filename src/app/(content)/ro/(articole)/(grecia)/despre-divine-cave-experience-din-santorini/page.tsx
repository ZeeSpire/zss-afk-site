import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave0} alt="Despre Divine Cave Experience din Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Am simțit că trebuie să dedic un articol separat uneia dintre cazările pe care le-am avut în Santorini pentru că a fost cea mai frumoasă cazare în care am stat vreodată și a fost o experiență în sine. Am rezervat prin intermediul <LinkExternal link="https://www.booking.com/hotel/gr/divine-cave-experience.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Divine Cave Experience din Santorini" text="booking.com" /> și am fost atât de fericiți că am găsit disponibilitate în plin sezon la un preț rezonabil.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave1Alt} alt="Our Divine Cave Experience în Santorini, vedere spre caldeiră" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Divine Cave Experience este un hotel situat în Imerovigli, chiar lângă poteca care duce spre Oia, și a fost inaugurat în 2021, ceea ce îl face un hotel destul de nou, cu doar nouă camere. Dispune de o piscină, un bar la piscină și un centru SPA, iar fiecare cameră are propria cadă cu hidromasaj cu o vedere minunată către caldera, precum și o cameră de zi separată. Pentru toate facilitățile, consultați <LinkExternal link="https://www.divinesuites.com/" title="Link catre Divine Cave Experience din Santorini" text="site-ul lor" />.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave2} alt="Our Divine Cave Experience in Santorini, În interiorul camerelor" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>De îndată ce ajungi, simți că ai intrat pe poarta spre o altă lume. Ești întâmpinat cu un ceai delicios cu gheață, iar recepționerele bine instruite te conduc într-o incursiune în Divine Cave Experience.</p>
        <p>În cameră, vei găsi tot ce ai nevoie, de la halat și papuci la un set de cusut și periuțe de dinți. Piesa de rezistență pentru mine a fost reprezentată de produsele de duș de la Guerlain care miroseau minunat, dar și espressorul de la Nespresso, întotdeauna un detaliu plăcut.</p>
        <p>Chiar dacă nu am folosit televizorul, am apreciat faptul că avea Netflix. Ne-a plăcut și boxa de la Sony la care ne-am conectat prin Bluetooth, și care ne-a ajutat să creăm o atmosferă romantică.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveS3} alt="Divine Cave Experience din Santorini - materiale promoționale" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveS1} alt="Divine Cave Experience din Santorini - în interiorul camerelor" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveS2} alt="Divine Cave Experience din Santorini - set de baie" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Patul și, în special pernele erau atât de confortabile încât ne-am uitat pe etichetă să vedem de unde le putem cumpăra. Erau de la <LinkExternal link="https://matt-royal.gr/products-pillows.html" title="Link catre Matt-Royal" text="Matt-Royal" /> și erau fabricate în Grecia, lucru de apreciat.</p>
        <p>Poți pleca și cu un suvenir de la hotel, și anume o geantă de plajă. Cred că este o practică obișnuită și în alte hoteluri, deoarece am văzut astfel de genți de plajă inscripționate cu numele altor hoteluri pe la mai mulți oameni care se plimbau prin Oia.</p>
        <p>Micul dejun a fost delicios şi se poate opta pentru fructe proaspete și suc de portocale proaspăt stors pentru un plus de energie.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave5} alt="Divine Cave Experience din Santorini, mic dejun" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Divine Cave Experience este “un sanctuar ascuns”, așa cum spun ei, dar este mult mai mult decât atât. Ne-am simțit uimitor de bine în scurta noastră ședere. Totul a fost impecabil și gândit în detaliu. Designul întregului hotel emană mult bun gust, încadrându-se perfect în peisajul din Santorini. De fapt, Divine Cave Experience nu este doar un hotel, ci este cu adevărat o experiență, una divină.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCaveSunset} alt="Divine Cave Experience, the best sunset in Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave1} alt="Divine Cave Experience din Santorini - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={divineCave2Alt} alt="Divine Cave Experience din Santorini - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}