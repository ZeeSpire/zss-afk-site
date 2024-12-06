import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import santoriniE2Sunset from "../../../../../../../public/santorini/e2-IMG_20210714_203245_stzjz0.jpeg";
import santorini2 from "../../../../../../../public/santorini/santorini2_qmsaoe.jpg";
import santoriniNight from "../../../../../../../public/santorini/e-IMG_20210708_203101_copy_xj2k2n.jpg";
import santoriniSunset1 from "../../../../../../../public/santorini/e-IMG_20210710_203541_jspgxr.jpg";
import santorini1 from "../../../../../../../public/santorini/sanotrini1_ux262e.jpg";
import santoriniEvening2 from "../../../../../../../public/santorini/e-IMG_20210712_202809_rujnzt.jpg";
import santoriniSunset2 from "../../../../../../../public/santorini/e-IMG_20210714_203716_copy_tjmd2z.jpg";
import santoriniNight3 from "../../../../../../../public/santorini/e-IMG_20210711_203255_p2btyw.jpg";


const article = getArticle(14);

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
        <p>Încep prin a spune că Santorini este un loc recunoscut mondial pentru apusurile sale frumoase și că mulți turiști merg în Santorini special pentru acest lucru.</p>
        <p>Desigur, soarele apune la o oră diferită și într-un loc diferit, în funcție de perioada anului în care vizitezi această insulă uimitoare. Noi am vizitat insula în mijlocul verii, dar aceste recomandări pot fi aplicate indiferent de anotimp, iar dacă vrei să știi ora exactă la care are loc apusul în Santorini, poți verifica <LinkExternal link="https://www.timeanddate.com/sun/greece/santorini" title="Link catre ora din Santorini" text="acest site" />.</p>
        <p>Am făcut o listă de locuri de unde am privit apusul. L-am găsit la fel de special și spectaculos din fiecare dintre aceste locuri.</p>
        <h2>Oia</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniE2Sunset} alt="Santorini - Apus văzut din Oia, cu vedere asupra orașului" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Toată lumea cunoaște fotografiile frumoase făcute la apus, cu casele albe răsfirate pe caldera din Oia. Este, până la urmă, cea mai cunoscută imagine a insulei Santorini, poate chiar a întregii Grecii.</p>
        <p>Dacă vrei să vezi cu proprii tăi ochi imaginile splendide ale soarelui apunând în marea nesfârșită, în timp ce casele albe sunt scăldate în lumina caldă a apusului, trebuie să știi că majoritatea acestor fotografii sunt făcute din zona ruinele castelului din Oia.</p>
        <p>Dar te avertizez că nu vei fi singur. În funcție de sezon, sute, dacă nu mii de turiști se adună în zonă, toți dornici să facă fotografii cu apusul sau să-și facă un selfie perfect. Ar fi o idee bună să ajungi acolo cu cel puțin două ore înainte de apus pentru a-ți alege locul preferat. Poți să iei cu tine o sticlă de vin local sau o bere și să te bucuri pur și simplu așteptând un apus memorabil.</p>
        <p>Deși am ajuns acolo cu două ore mai devreme, când a venit momentul apusului, oamenii nu ne-au respectat spațiul personal, s-a aglomerat foarte repede, deși eram în mijlocul pandemiei de covid.</p>
        <p>Dacă ajungi puțin mai târziu și nu găsești un loc bun de unde să admiri apusul, dar nici nu vrei să invadezi spațiul personal al altora, poți coborî câțiva pași care duc la Portul Ammoudi. Vederea de acolo este la fel de fermecătoare.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight3} alt="Santorini - Apus văzut din Oia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>În apropierea ruinelor Castelului din Oia se află Casa Castro, care este de asemenea un loc foarte popular pentru fotografii la orice oră din zi. Poți să te bucuri de apus și câțiva pași mai sus de Casa Castro.</p>
        <h2>Plaja Katharos</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEvening2} alt="Santorini - Apus văzut de pe Plaja Katharos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Lângă Oia, la aproximativ 1.5 kilometri (0.93 mile) sau 20 de minute de mers pe jos de la ruinele Castelului din Oia, se află plaja Katharos, care este o plajă sălbatică, cu pietriș și este spectaculoasă, în special la apus.</p>
        <p>Am ajuns acolo cu câteva ore mai devreme pentru a ne bucura de plaja în sine (aduceți încălțăminte pentru înot). Înconjurați de stânci, fără alte persoane în jur, chiar dacă era vârful sezonului turistic, am asistat la un apus de soare de neuitat.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEvening2} alt="Santorini - Plaja Katharos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Acesta a fost locul nostru preferat pentru că ne-am bucurat de spectacolul naturii ca singurii spectatori. Deci, pentru un apus de soare cu adevărat romantic fără mulțimile din Oia, optați pentru plaja Katharos.</p>
        <h2>Imerovigli</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSunset1} alt="Santorini - Apus văzut din Imerovigli" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Pe traseul de drumeție între Imerovigli și Oia, poți admira un apus de soare extraordinar de frumos, cu Oia răsfirată pe caldera în dreapta, soarele în centru coborând în marea albastră și vulcanul în stânga. O imagine valorează mai mult decât o mie de cuvinte.</p>
        <p>Am avut norocul să asistăm la acest apus de soare uimitor din cazarea noastră - Divine Cave Experience <Link prefetch={false} href="/ro/despre-divine-cave-experience-din-santorini" title="Despre Divine Cave Experience din Santorini" className="text-blue-600 underline hover:text-blue-800">(citește despre asta aici)</Link>.</p>
        <p>De asemenea, îl poți privi de pe Stânca Skaros.</p>
        <h2>Farul din Akrotiri</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight} alt="Santorini - Apus văzut de la Farul Akrotiri" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Farul Akrotiri se află în partea sudică a insulei, la aproximativ 14 kilometri (8.69 mile) de capitala insulei - Fira.</p>
        <p>În apropierea farului, vei găsi diferite poteci prin iarbă care te conduc în locuri de unde poți vedea cum soarele apune în marea de un albastru intens, ireal. Noi am găsit un loc care a fost perfect pentru că am putut încadra apusul și farul în aceeași imagine. Am urcat pe dealul chiar înainte de taverna de lângă far. De acolo am avut o vedere panoramică asupra întregii insule scăldate în lumina apusului, iar în fotografiile pe care le-am făcut, farul este un detaliu frumos.</p>
        <h2>Admirați apusul de pe barcă sau din elicopter</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSunset2} alt="Santorini - Admiră apusul din barcă sau elicopter" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>În Santorini sunt nenumărate opțiuni de agenții sau operatori privați care oferă excursii de tip “croazieră la apus”. Ar trebui să le căutați online sau să întrebați la recepția hotelului și să alegeți ceea ce vi se potrivește cel mai bine. Unele oferă transport de la hotel, altele pleacă din portul Fira sau din Golful Ammoudi sau Vlychada sau orice alt port, unele oferă cină și băuturi, unele oferă tururi private sau semi-private, și așa mai departe. Aceasta de la <LinkExternal link="https://www.santosails.com/sailing-cruises/sunset-sailing-cruise/" title="Link catre Santorini Santo Sails" text="Santo Sails" /> este doar un exemplu de croazieră la apus.</p>
        <p>Dacă doriți ceva chiar mai special, puteți opta pentru un zbor cu elicopterul la apus.</p>
        <p>Există și alte locuri de unde puteți admira apusuri splendide pe insula Santorini, pe care noi nu am reușit să le bifăm. Unul dintre ele este în satul Pyrgos, pe terasa lui Franco’s Cafè, de exemplu. Am fost acolo în mijlocul zilei și am vrut să ne întoarcem pentru apus, dar planurile noastre s-au schimbat.</p>
        <p>Indiferent de loc, apusurile de pe insula Santorini sunt romantice și merită să fie savurate cu un pahar de vin din Santorini și alături de persoana iubită.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santorini1} alt="Santorini - Apus - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santorini2} alt="Santorini - Apus - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}