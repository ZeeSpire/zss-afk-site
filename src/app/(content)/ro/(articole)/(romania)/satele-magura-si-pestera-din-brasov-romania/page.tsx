import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Youtube from "@/components/youtube/Youtube";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import magura1 from "../../../../../../../public/magura/IMG_20211010_113305_zcuzus.jpeg";
import maguraPin1 from "../../../../../../../public/magura/pin1_zuxpxv.jpeg";
import maguraPin2 from "../../../../../../../public/magura/pin2_ivbksh.jpeg";
import magura2 from "../../../../../../../public/magura/IMG_20211010_113741_yufvam.jpeg";
import maguraDrone1 from "../../../../../../../public/magura/DJI_0115_fayob4-square.jpeg";
import maguraDrone2 from "../../../../../../../public/magura/DJI_0142_rfm1qt-square.jpeg";
import magura3 from "../../../../../../../public/magura/IMG_20211009_135725_rc5ktb.jpeg";
import magura4 from "../../../../../../../public/magura/IMG_20211009_130910_uzkeba.jpeg";
import maguraDrone3 from "../../../../../../../public/magura/DJI_0101_cc05bn-square.jpeg";
import magura5 from "../../../../../../../public/magura/IMG_20211009_113543_ct8jiq.jpeg";

const article = getArticle(1);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura2} alt="Satele Măgura și Peștera din judetul Brașov" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Măgura și Peștera sunt două sate pitorești într-un cadru spectaculos în care timpul pare că trece mai încet. Prima dată când am ajuns aici am crezut că am ajuns în Rai, aceasta a fost prima impresie asupra locului.</p>
        <p>Măgura înseamnă deal mare, rotund și izolat, de obicei împădurit.</p>
        <p>Ambele sate sunt situate la aproximativ 1000-1100 de metri altitudine, la poalele munților Piatra Craiului, în județul Brașov. Ai nevoie de o mașină pentru a ajunge acolo. Cel mai ușor drum spre Măgura este din Zărnești. Drumul este asfaltat până la Fântâna lui Botorog, apoi urmează un drum de pământ prin pădure. Până la Peștera se ajunge din Moieciu de Jos pe un drum asfaltat. Drumurile sunt proaste, mai ales cele din Măgura, dar se pot parcurge cu mașina, deși ideal ar fi ca mașina să aibă paza înaltă. Este nevoie de multă răbdare și pricepere pentru a ajunge la Măgura pentru că drumurile sunt pline de gropi, iar iarna pot fi chiar impracticabile. Distanța dintre cele două sate este de aproximativ 6 kilometri care pot fi parcurși pe jos.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura5} alt="Satele Măgura și Peștera, două sate pitorești într-un decor spectaculos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Cel mai bun moment pentru a vizita</h2>
        <p>Am vizitat zona atât vara când vremea este potrivită pentru drumeții mai lungi sau mai scurte în funcție de cât de mult poți merge, cât și toamna când peisajul este de vis, copacii au frunzele galbene sau ruginii, crestele munților sunt albe, iar ceața dansează prin văi. Dacă adaugi la această imagine o felie de pâine de casă cu unt și gem și un ceai fierbinte sau un măr copt cu scorțișoară după o plimbare pe-afară în aerul curat și rece, vei descoperi definiția perfectă pentru termenul danez „hygge”. Fiecare anotimp are farmecul lui până la urmă.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraDrone3} alt="Satele Măgura și Peștera - peisaj frumos" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraDrone1} alt="Satele Măgura și Peștera - natură frumoasă" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraDrone2} alt="Satele Măgura și Peștera - pădure în ceață" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Opțiuni de cazare și restaurante</h2>
        <p>Prima dată când am vizitat zona nu am fost cazați în niciunul dintre cele două sate pentru că există mai multe opțiuni de cazare în zonele mai turistice din apropiere precum Bran, Râșnov sau Moieciu. Dar ne-am dorit foarte mult să ne întoarcem și să rămânem în Măgura. Prima noastră opțiune ar fi fost <LinkExternal link="https://www.booking.com/hotel/ro/samedru-magura8.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Samedru" text="Samedru" />, dar pentru că nu am găsit niciun weekend disponibil, am ales să ne cazăm la <LinkExternal link="https://www.booking.com/hotel/ro/mosorel-moieciu-de-jos.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Mosorel" text="Mosorel" /> cu 4.8* din peste 200 de recenzii pe Google, dar am spune că un rating mai potrivit pentru Mosorel ar fi maxim 2* în comparație și cu alte opțiuni din zonă.</p>
        <p>A treia oara cand am vizitat, am stat în sfârșit la Samedru care ne-a depașit așteptările mai ales dupa ce am stat la Mosorel. Camera pe care am primit-o avea o priveliște frumoasă, era curata și avea tot ce ne trebuia. Restaurantul avea o selecție bună de vinuri locale, un vin alb de casă bun și un vin fiert foarte bun. Mâncarea a fost foarte gustoasă și porțiile enorme. De asemenea, micul dejun tip bufet include multe opțiuni. Deci putem spune că Samedru merită 5*.</p>
        <p>Nu sunt multe restaurante în aceste două sate. Cele mai multe cazări oferă diferite tipuri de pensiune, cum ar fi mic dejun inclus, demipensiune sau o bucătărie unde oaspeții își pot pregăti singuri mesele. Cel mai bine este să discuți în prealabil cu gazda despre opțiunile de luat masa dacă nu ai de gând să iei mașina până în zonele în care sunt mai multe restaurante (Bran sau Moieciu de exemplu). Mosorel oferă micul dejun și cina, dar pentru că nu am fost mulțumiți de micul dejun, am decis să luăm cina la restaurantul Brandeberg din Șimon și să luăm următorul mic dejun la Panner Bakery din Bran.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura3} alt="Măgura și Peștera, sate pitorești" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Lucruri de făcut și de văzut</h2>
        <p>Aici timpul pare să stea pe loc, liniștea este întreruptă doar de clopoțeii văcuțelor care pasc liniștite sau de cântecul cocoșilor dimineața devreme, aerul este curat, iar peisajele sunt deosebite. Este locul perfect pentru a te deconecta. Literalmente, pentru că acoperirea rețelei de telefonie mobilă și internet nu este prea bună. Chiar dacă stai doar un weekend, vei părăsi acest loc plin de energie, deoarece te îndeamnă efectiv la relaxare. Natura este în starea sa cea mai pură, nu rămâne decât să-i admiri frumusețea.</p>
        <Youtube videoId="PpNKnzD_3vo" />
        <p>În zonă există trasee montane care pot fi parcurse atât pe jos, cât și cu bicicleta. Traseul Peștera-Măgura-Șirnea este apreciat de pasionații de mountain bike și poate fi parcurs chiar și de începători.</p>
        <p>În Peștera este Peștera Liliecilor care adăpostește specii rare de lilieci. Am făcut o drumeție până acolo, dar nu am intrat pentru că nu este o peșteră amenajată.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura4} alt="Măgura și Peștera, peisaje cetoase" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Traseul care pornește de la Fântâna lui Botorog prin Cheile Zărneștilor și urcă până la Cabana Curmătura este incredibil de frumos și ușor de urmat. Coborârea se poate face prin Poiana Zănoaga. Toate traseele sunt bine marcate. Zona este apreciată și de turiștii străini. Ne-am împrietenit cu un grup de nemți cazați în Măgura în drum spre Cabana Curmătura ceea ce a facut traseul și mai plăcut.</p>
        <p>Pentru mai multe informații despre traseele de drumeții, despre fauna și flora din Parcul Național Piatra Craiului, dar și pentru a afla regulile de vizitare, poți accesa <LinkExternal link="https://www.pcrai.ro/" title="Link către Parcul Național Piatra Craiului" text="site-ul oficial" />.</p>
        <p>Daca vreti să vedeți mai multe fotografii din calătoriile noastre, dați follow <LinkExternal link="https://www.instagram.com/afkology/" title="Link catre afkinmagura" text="#afkinmagura" /> pe <LinkExternal link="https://www.instagram.com/afkology/" title="Link catre Instagram Afkology " text="Instagram" /> și <LinkExternal link="https://www.instagram.com/afkology/reels/" title="Link catre Afkology Reels" text="Reels" />.</p>
        <p>În aceste sate izolate, localnicii sunt primitori și prietenoși. A fost o plăcere pentru noi să descoperim lucrul acesta! Ne uitam spre cer pentru că urma să aterizăm drona, când s-a apropiat un bătrânel care îmi amintea de bunicul meu și curios fiind, ne-a întrebat la ce ne uităm. Așa a început o conversație cu adevărat încântătoare. Vom reveni cu plăcere în zonă, ca de fiecare dată.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura1} alt="Măgura și Peștera, peisaje de toamnă" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraPin1} alt="Măgura & Peștera - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraPin2} alt="Măgura & Peștera - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}