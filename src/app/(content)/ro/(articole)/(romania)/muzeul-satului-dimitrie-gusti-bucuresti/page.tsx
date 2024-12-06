import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import muzeulSatului2 from "../../../../../../../public/muzeul-satului/muzeul-satului-roman-2.jpeg"
import muzeulSatului3 from "../../../../../../../public/muzeul-satului/muzeul-satului-roman-3.jpeg"
import muzeulSatului4 from "../../../../../../../public/muzeul-satului/muzeul-satului-roman-4.jpeg"

const article = getArticle(26);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muzeulSatului2} alt="O plimbare prin Muzeul Naţional al Satului Dimitrie Gusti din Bucureşti" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Pe 6 iunie 2023, noi am avut o zi liberă în timpul săptămânii, când restul era la lucru. Iniţial am plecat să dăm o tură de parc, dar apoi, ne-a venit ideea să mergem în vizită la Muzeul Naţional al Satului “Dimitrie Gusti”.</p>
        <p>Muzeul în aer liber se află pe malul lacului Herăstrău, în mijlocul capitalei şi reprezintă o evadare din tumultul oraşului. Are mai multe intrări şi, pentru că cea de lângă Arcul de Triumf era închisă, am intrat pe cea de pe Şoseaua Kiseleff, nr. 28. Am plătit pe un bilet suma de 30 de lei. Toate detaliile sunt disponibile <LinkExternal link="https://muzeul-satului.ro/acces-muzeu/" title="Link to catre Muzeul Naţional al Satului Dimitrie Gusti" text="aici" />.</p>
        <p>Deschiderea oficială a Muzeului Satului a avut loc la data de 10 mai 1936, în prezenţa regelui Carol al II-lea. A scăpat de relocare sau distrugere în timpul comunismului, iar acum cuprinde gospodării, biserici şi alte construcţii din secolul al XVII-lea până la începutul secolului XX din diferite zone etnografice pe o suprafaţă de aproximativ 10 hectare.</p>
        <p>În interiorul muzeului se găsesc, printre exponate, hărţi, panouri informative, toalete, bănci, un restaurant unde îţi poţi reîncărca bateriile şi un magazin cu suveniruri. De asemenea, noi ne-am bucurat de prezenţa unor pisici, unele plictisite, altele jucăuşe, precum şi de cea a unei broaşte ţestoase care se plimba prin iarbă. Am văzut inclusiv casa ilustrată pe bancnota de 10 lei.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muzeulSatului3} alt="Muzeul Național al Satului Dimitrie Gusti din București - În interiorul muzeului în aer liber" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>O listă a gospodariilor cu informaţii despre fiecare poate fi găsită chiar pe <LinkExternal link="https://muzeul-satului.ro/despre-noi/patrimoniul-muzeului/expozitia-permanenta-in-aer-liber/" title="Link către Muzeul Național al Satului Dimitrie Gusti - O listă a gospodăriilor" text="site-ul muzeului" />.</p>
        <p>De menţionat ar fi şi faptul că în interiorul muzeului se organizează expoziţii şi diverse evenimente.</p>
        <p>Noi am alocat o ora şi 30 de minute pentru această vizită, dar puteam petrece mult mai mult timp plimbându-ne pe alei printre căsuţele ţărăneşti, pozându-le şi citind despre fiecare în parte.</p>
        <p>Muzeul Naţional al Satului “Dimitrie Gusti” reprezintă fără îndoială o atracţie de neratat în Bucureşti.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={muzeulSatului4} alt="Muzeul Național al Satului Dimitrie Gusti din București - Gospodărie" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
      </main>
    </div>
  );
}