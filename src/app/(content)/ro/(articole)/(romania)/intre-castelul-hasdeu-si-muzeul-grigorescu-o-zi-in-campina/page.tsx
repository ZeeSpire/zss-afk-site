import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={campina1} alt="Între Castelul Hașdeu și Muzeul Grigorescu: O zi în Câmpina" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>În căutare de idei pentru petrecerea weekendului, am deschis Google Maps și am ales să vizităm un loc la aproximativ 100 de kilometri de București: Câmpina.</p>
        <p>Am pornit din București către Câmpina cu mașina, iar drumul, destul de bun, se parcurge în maxim două ore, în funcție de trafic. Totuși, Câmpina este accesibilă și cu trenul rapid, care face aproximativ o oră din Gara de Nord, iar un bilet la clasa a doua pentru un adult costă doar 36 de lei.</p>
        <h2>Prima oprire în Câmpina: Muzeul Memorial Bogdan Petriceicu Hașdeu</h2>
        <p>Bogdan Petriceicu Hașdeu (1838–1907), cunoscut ca filolog, istoric, scriitor, folclorist și om politic, s-a născut la Cristinești, Basarabia (astăzi în Ucraina) și și-a petrecut ultimii ani în Câmpina.</p>
        <p>După moartea fiicei sale, Iulia (sau Julia) Hașdeu, B.P. Hașdeu a devenit fascinat de ocultism și spiritism, convins că poate comunica cu spiritul ei. Se spune că, astfel, între 1894 și 1896, a construit Castelul Hașdeu, al cărui plan i-ar fi fost “dictat” de către fiica sa în lumea de dincolo.</p>
        <p>Iulia Hașdeu s-a născut în 1869 și s-a dovedit un copil-minune: la doar doi ani și jumătate, știa să citească și să recite poezii, la 8 ani vorbea fluent franceza, germana și engleza, iar la 16 ani și-a obținut bacalaureatul în litere și s-a înscris la Facultatea de Litere și Filosofie de la Sorbona. Din nefericire, în 1888, la doar 19 ani, Iulia s-a stins din viață din cauza tuberculozei, lăsând în urmă părinți îndurerați și numeroase scrieri: poezii, povestiri, impresii și reflecții.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina2} alt="Muzeul Memorial Bogdan Petriceicu Hașdeu - logo" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina3} alt="Muzeul Memorial Bogdan Petriceicu Hașdeu - poza din muzeu" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>Castelul-templu este plin de simboluri și are un aspect bizar, dar impresionant, cu o energie deosebită. Biletul de intrare costă 15 lei pentru un adult, iar vizitatorii primesc o telecomandă cu ajutorul căreia pot accesa un ghid audio pentru diverse camere și obiecte.</p>
        <p>Printre sălile vizitate, amintesc sufrageria, cu portretele familiei pictate în medalioane pe pereți, Templul Castelului, unde se află statuia lui Iisus, biroul de lucru al lui B.P. Hașdeu și Camera Obscură – locul unde se țineau ședințele de spiritism.</p>
        <p>Pentru mai multe detalii despre muzeu, inclusiv programul de vizitare, vă invităm să accesați site-ul oficial: <LinkExternal link="https://www.muzeulhasdeu.ro/" title="Link catre Muzeul Memorial Bogdan Petriceicu Hașdeu" text="muzeulhasdeu.ro" />.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina4} alt="Muzeul Memorial Bogdan Petriceicu Hașdeu - fotografie din interiorul muzeului" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={campina5} alt="Muzeul Memorial Bogdan Petriceicu Hașdeu - poza din interiorul muzeului" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h2>A doua oprire: Muzeul Memorial Nicolae Grigorescu</h2>
        <p>La doar 500 de metri de Muzeul Hașdeu se află Muzeul Memorial Nicolae Grigorescu, pe care l-am vizitat în continuare. Biletul de intrare costă 12 lei pentru un adult, iar taxa foto este de 50 lei. Fiindcă încăperile erau destul de întunecate, iar fotografiatul cu blitz nu este permis, am ales să nu facem poze în interior – un motiv în plus pentru a reveni și cu altă ocazie.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={campina6} alt="Muzeul Memorial Nicolae Grigorescu" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Casa, monument istoric, este locul în care Nicolae Grigorescu (1838–1907), considerat fondatorul picturii moderne românești, și-a trăit ultimii ani de viață. Deși casa originală a ars în 1918, aceasta a fost reconstituită în 1954 și servește astăzi drept muzeu. Aici sunt expuse picturi realizate de Grigorescu, mobilier de epocă și alte obiecte personale ale artistului.</p>
        <p>„Car cu boi” este cea mai faimoasă lucrare a lui Nicolae Grigorescu și una dintre cele mai îndrăgite imagini din pictura românească. Tabloul există în mai multe versiuni, fiecare reflectând măiestria artistului de a surprinde esența vieții rurale. La Muzeul Memorial Nicolae Grigorescu, puteți admira câteva dintre aceste variante, fiecare evocând un peisaj autentic și plin de emoție al satului românesc.</p>
        <h2>Relaxare pe malul Lacului Bisericii și în Parcul Gogoșica</h2>
        <p>După ce ne-am luat porția de cultură, ne-am plimbat pe malul Lacului Bisericii, am făcut un tur al lacului și ne-am bucurat de o scurtă plimbare prin Parcul Gogoșica, încheind astfel mini-excursia noastră în Câmpina.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={campina7} alt="Relaxare pe malul Lacului Bisericii" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
      </main>
    </div>
  );
}