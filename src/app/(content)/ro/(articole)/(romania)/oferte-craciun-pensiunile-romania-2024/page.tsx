import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import christmas2024 from "../../../../../../../public/christmas-offers-2024/christmas-offers-2024-landscape.jpg"
import christmas2024_2 from "../../../../../../../public/christmas-offers-2024/christmas-offers-guesthouses-romania-2024-1.jpg"
import christmas2024_3 from "../../../../../../../public/christmas-offers-2024/christmas-offers-guesthouses-romania-2024-2.jpg"

const article = getArticle(37);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={christmas2024} alt="Oferte de Crăciun la pensiunile din România (2024)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Explorează o selecție atentă de pachete magice de Crăciun în locații uimitoare din România. Fiecare pachet oferă experiențe unice, inclusiv mese festive tradiționale, divertisment live și activități pentru toate vârstele. Fie optezi pentru o retragere confortabilă în munți sau o ședere luxoasă pe malul Dunării, aceste pachete de sărbători promit momente de neuitat pline de bucurie și sărbătoare. Răsfață-te cu delicii locale, bucură-te de peisaje pitorești și creează amintiri de neprețuit alături de cei dragi în acest sezon festiv.</p>
        <p>Am selectat pentru tine oferte de la diverse pensiuni din România. Această selecție nu este completă, ci reflectă pur și simplu preferințele mele personale. În acest articol, am inclus pachetele care mi s-au părut cele mai interesante și le-am ordonat crescător, în funcție de preț. Prețurile afișate sunt cele de pe site-urile pensiunilor la momentul redactării acestui articol și se referă la cele mai mici tarife disponibile pentru o cameră dublă. Am inclus doar locurile care au camere disponibile la momentul publicării, dar acestea se pot epuiza rapid. Sper să găsești o ofertă pe placul tău și să ai parte de un Crăciun minunat!</p>
        <h2>Atra Doftana</h2>
        <p>Pachetul special de 3 nopți la Atra Doftana oferă o experiență de neuitat. Include trei mic dejunuri tip bufet suedez, o primire caldă cu vin fiert, țuică și alte produse tradiționale, seara la foc de tabără și surprize pentru copiii cuminti. De asemenea, pachetul include o cină festivă de fine dining în Ajun, cu o selecție de vinuri atent asociate.</p>
        <p>La plecare, veți primi un cadou special ce conține zacuscă, gem, o sticlă de vin și alte delicioase bunătăți.</p>
        <p>Preț: <LinkExternal link="https://atradoftana.ro/oferte-de-vacanta-valea-doftanei/" title="Link catre Atra Doftana" text="de la 3500 lei / cameră" /></p>
        <h2>Portal Village Sibiel</h2>
        <p>Descoperă magia Crăciunului la Portal Village, cu un pachet special care include minim două nopți de cazare, mic dejun, prânz și cină. Bucură-te de seri la foc de tabără și festinuri tematice de Ajun și în ziua de Crăciun, cu băuturi nealcoolice incluse.</p>
        <p>În fiecare zi, ai o oră de relaxare la Vortex Spa (saună și ciubăr) și un ritual terapeutic de masaj inclus în pachet.</p>
        <p>Crăciunul la Portal Village este plin de activități și surprize: sesiuni de yoga, Forest Bathing, atelier de cozonaci pe 24 decembrie și un moment magic de colinde în Ajun, cu copii din Mărginimea Sibiului în costume tradiționale.</p>
        <p>Preț: <LinkExternal link="https://portalvillage.ro/pachete-experiente-inedite-premium/" title="Link catre Portal Village" text="de la 3875 lei / două nopți / cameră sau de la 5582 lei / 3 nopți / cameră" /></p>
        <h2>Potcoava Mountain Hideaway</h2>
        <p>Pachetul de Crăciun include 3 nopți de cazare cu pensiune completă, precum și o masă festivă de Crăciun. Copiii se vor bucura de plimbări cu trăsura trasă de ponei, de drumeții călare, și de diverse ateliere meșteșugărești. În plus, va fi organizată o petrecere specială dedicată lor, pentru a adăuga și mai multă magie acestei perioade festive.</p>
        <p>Preț: <LinkExternal link="https://atradoftana.ro/oferte-de-vacanta-valea-doftanei/" title="Link catre Potcoava Mountain Hideaway" text="de la 3880 lei / cameră" /></p>
        <h2>Green Village</h2>
        <p>Petrece Crăciunul în inima Deltei Dunării, la Green Village, cu un pachet special de 3 nopți de cazare, ce include mic dejun, primire festivă cu preparate tradiționale pe 23 decembrie, cină în seara de 23 decembrie și o cină festivă în Ajunul Crăciunului, urmată de o altă cină pe 25 decembrie.</p>
        <p>Pe 24 decembrie, la cina festivă, vei avea incluse apă, băuturi răcoritoare, o sticlă de vin per cameră și bere draft nelimitată. Petrecerea va fi animată cu live entertainment și DJ pentru o atmosferă plină de bucurie.</p>
        <p>În timpul șederii, te vei putea bucura de facilitățile resortului: Lotus Spa (saună uscată), entertainment center (cinematograf, biliard, table, darts) și kids club pentru cei mici.</p>
        <p>Fiind situat pe brațul Sfântul Gheorghe al Deltei Dunării, pachetul include transferul cu barca rapidă pe ruta Murighiol - Sfântu Gheorghe, dus-întors, pentru un început și sfârșit de vacanță relaxant.</p>
        <p>Preț: <LinkExternal link="https://www.greenvillage.ro/oferte-speciale/" title="Link catre Green Village" text="de la 3960 lei / cameră" /></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={christmas2024_2} alt="Oferte de Crăciun la pensiunile din România 2024, pomul de craciun" width={720} height={960} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={christmas2024_3} alt="Oferte de Crăciun la pensiunile din România 2024, ren" width={720} height={960} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h2>Valea Verde</h2>
        <p>Bucură-te de un Crăciun de poveste în satul Cund, cu trei nopți de cazare într-una dintre casele restaurate, unde tradiția și confortul se întâlnesc armonios. Fiecare dimineață începe cu un mic dejun generos, urmat de două prânzuri tip bufet și două cine rafinate, fiecare cu câte cinci feluri de mâncare. Seara de Ajun aduce o cină festivă cu friptură de curcan și șampanie, pentru a celebra în mod special sărbătoarea.</p>
        <p>Spiritul Crăciunului va fi animat de focul de tabără și de un concert de colinde, completând atmosfera festivă.</p>
        <p>Am avut parte de două experiențe la Valea Verde: un weekend de vânătoare de trufe și petrecerea de Revelion pentru trecerea în anul 2024. Am detaliat ambele experiențe pe larg <Link prefetch={false} href="/ro/valea-verde-o-poveste-de-succes-a-reinvierii-unui-sat-transilvanean-uitat" title="Valea Verde - o poveste de succes a reînvierii unui sat transilvănean uitat" className="text-blue-600 underline hover:text-blue-800">aici</Link> și <Link prefetch={false} href="/ro/valea-verde" title="Experiența completă de Revelion la Valea Verde Retreat: de la Transilvania veșnică la realitatea crudă" className="text-blue-600 underline hover:text-blue-800">aici</Link>.</p>
        <p>Preț: <LinkExternal link="https://www.valeaverde.com/oferte/" title="Link catre Valea Verde" text="de la 4000 lei / cameră" /></p>
        <h2>Hotel Jelna</h2>
        <p>Pachetul de sărbători include trei nopți de cazare cu pensiune completă într-un hotel elegant, parte din Crama Jelna, unde te vei putea bucura de degustări de vinuri locale de excepție. Hotelul oferă o zonă SPA complet echipată, cu piscină, saună umedă și uscată, bazin pentru copii, bazin cu apă sărată și o zonă dedicată masajelor, pentru o experiență de relaxare completă.</p>
        <p>Preț: <LinkExternal link="https://hoteljelna.ro/oferte/" title="Link catre Hotel Jelna" text="de la 4050 lei / cameră" /></p>
        <h2>Conacul Archia</h2>
        <p>Pachetul special de Crăciun include 3 nopți cu demi-pensiune și activități festive pentru a te introduce în atmosfera sărbătorilor. Printre acestea se numără tăierea porcului, colindători, foc de tabără cu muzică lăutărească live, venirea lui Moș Crăciun și diverse activități pentru copii, toate menite să creeze momente de neuitat în această perioadă magică.</p>
        <p>Preț: <LinkExternal link="https://hoteljelna.ro/oferte/" title="Link catre Conacul Archia" text="de la 4190 lei / cameră" /></p>
        <h2>Vatra Boiereasca</h2>
        <p>Pachetul include trei nopți de cazare. Fiecare dimineață începe cu un mic dejun servit începând cu ora 9:00 și continuând până târziu în zi, oferind o experiență de brunch perfectă pentru cei care preferă să se trezească mai târziu.</p>
        <p>Seara, oaspeții se pot bucura de cine deosebite, cu preparate tradiționale bucovinene, ce aduc un omagiu gastronomiei locale.</p>
        <p>În Ajunul Crăciunului, se va desfășura tradiționala tăiere a porcului, urmată de servirea Pomanei Porcului, o mâncare specifică acestei perioade festive.</p>
        <p>Pe mesele festive nu vor lipsi sarmalele, purcelul la proțap și plăcintele „poale-n brâu”, servite alături de lapte acru, toate pregătite cu dragoste și respect pentru tradiție.</p>
        <p>Preț: <LinkExternal link="https://www.vatraboiereasca.ro/oferte/" title="Link catre Vatra Boiereasca" text="de la 5300 lei / cameră" /></p>
        <h2>Casa Timiș</h2>
        <p>Pachetul “Crăciun de Poveste” include 3 nopți de cazare cu demipensiune.</p>
        <p>Sejurul începe cu o cină festivă în Ajunul Crăciunului, acompaniată de muzică live și colindători, urmată de un foc de tabără cu băuturi calde, gustări tradiționale și melodii folk.</p>
        <p>În ziua de Crăciun, programul include un mic dejun, urmat de un brunch de Crăciun cu muzică live și activități organizate pentru copii.</p>
        <p>Pe 26 decembrie, după micul dejun, familiile vor avea ocazia să participe la un „Treasure Hunt” cu premii, iar la cină, preparatele vor fi acompaniate de o degustare de vinuri fine.</p>
        <p>Pe 27 decembrie, oaspeții pot savura un mic dejun delicios înainte de a pleca spre casă.</p>
        <p>Preț: <LinkExternal link="https://casatimis.ro/winterwonderland/" title="Link catre Casa Timiș" text="de la 8400 lei / cameră" /></p>
        <h2>Matca Relais & Châteaux</h2>
        <p>La Matca Relais & Châteaux, pachetul de Crăciun include două nopți de cazare, o băutură de bun venit și o cină festivă în seara de 24 decembrie. În ziua de Crăciun, veți savura un mic dejun delicios, un prânz festiv și o masă cu open bar, iar dimineața zilei de 26 decembrie, un alt mic dejun vă va aștepta pentru a încheia această experiență de neuitat.</p>
        <p>Pe lângă cazarea superbă și priveliștile încântătoare, vă puteți răsfăța la SPA, care include piscină, jacuzzi, saune și diverse zone de relaxare, oferindu-vă o evadare perfectă din rutina zilnică.</p>
        <p>Preț: <LinkExternal link="https://matcahotel.com/ro/home-romana/" title="Link catre Matca Relais & Châteaux" text="de la 10500 lei / cameră" /></p>
      </main>
    </div>
  );
}