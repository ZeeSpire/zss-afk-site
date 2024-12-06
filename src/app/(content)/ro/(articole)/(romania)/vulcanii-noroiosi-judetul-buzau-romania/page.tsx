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
        <p>Când spui “vulcan” te gândești automat la un vulcan magmatic, fiind mai populari si mai comuni. Deși există peste 1500 de vulcani magmatici pe uscat și probabil mai mult de 1 milion sub apă, există doar 700 de vulcani noroioși în întreaga lume.</p>
        <p>Vulcanii noroioși din județul Buzău, România, sunt cei mai mari din Europa și sunt spectaculoși pentru că erup o dată la câteva minute sau chiar secunde.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyDrone1} alt="Vulcanii noroioși, județul Buzău, România" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Unii vulcani noroioși formează conuri, în timp ce alții formează lacuri care emit gaze (cazane sau fierbători). Diferența dintre ele este dată de noroi. Dacă noroiul este mai vâscos, va curge încet și va forma conuri. Dacă noroiul este mai lichid va forma lacuri.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyDrone2} alt="Vulcanii noroioși - vedere din drona" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Cei mai cunoscuți vulcani noroioși din județul Buzău sunt: Pâclele Mari, Pâclele Mici, Fierbătorile de la Berca și Fierbătorile de la Beciu.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m36!1m8!1m3!1d89729.91251157537!2d26.6539393!3d45.3476058!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x40b3e59dcbfa6a81%3A0x134fc65bd402885d!2sFierbatorile%20De%20La%20Berca%2C%20Berca!3m2!1d45.296574899999996!2d26.694639!4m5!1s0x40b3f00168630157%3A0xc97143c6ce00a966!2sVulcanii%20Noroio%C8%99i%20P%C3%A2clele%20Mici%2C%20Scor%C8%9Boasa!3m2!1d45.3394093!2d26.7061852!4m5!1s0x40b3f06c6baa3049%3A0xe3fd287f24779b2e!2sVulcanii%20Noroio%C8%99i%20P%C3%A2clele%20Mari%2C%20P%C3%A2clele!3m2!1d45.3594064!2d26.7134713!4m5!1s0x40b3f124c06b4fc1%3A0x7cf127da9796d048!2sFierbatorile%20de%20la%20Beciu%2C%20Beciu!3m2!1d45.377323999999994!2d26.7058468!5e0!3m2!1sen!2sro!4v1649599266995!5m2!1sen!2sro" />
        <p>În excursia noastră de o zi cu plecare din București, am vizitat doar Pâclele Mari și Pâclele Mici și ni s-a părut că cel mai spectaculos peisaj este probabil la Pâclele Mici, dar ambele locuri merită vizitate. Plănuim să le vizităm și pe celelalte două.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyDrone3} alt="Vulcanii noroioși - vedere din drona 2" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Există o mică taxă de intrare de 5 lei per adult pentru fiecare din cele doua situri cu vulcani noroioși și cred ca cel mai bine ar fi să ai numerar la tine. Taxa de intrare este prea mică după părerea mea.</p>
        <p>I-am vizitat într-o zi însorită și destul de caldă de februarie și a fost perfect pentru că eram aproape singurii vizitatori din acea zi și am putut pilota drona fără probleme. Nu cred că este indicat să vizitezi vulcanii când plouă sau dacă a plouat și este încă umed, deoarece este obligatoriu să mergi doar pe porțiunile uscate.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyGround1} alt="Vulcanii noroioși - peisaj ca in desert" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Trebuie să ții cont de faptul că acești vulcani transformă constant terenul, fiind în același timp atât de fragili. Cel mai bine este să eviți să te apropii prea mult de ei, nu numai pentru că noroiul este coroziv și toxic, iar vulcanii te pot stropi atunci când nu te aștepți. Nu este doar pentru curățenia și siguranța ta, ci pentru a proteja vulcanii noroioși. De ce ai vrea să riști să îi distrugi?</p>
        <p>La intrarea în rezervație, vei găsi panouri informative din care vei afla că ar trebui să mergi numai prin zonele uscate, nu și pe zonele gri umede. Dacă nu este posibil să te apropii de vulcani fără să-ți murdărești pantofii de noroi, atunci ar trebui să-i admiri de la distanță.</p>
        <p>Bucură-te de peisajele selenare!</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyGround2} alt="Vulcanii noroioși - peisaj lunar" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyPin1} alt="Vulcanii noroioși - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={muddyPin2} alt="Vulcanii noroioși - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}