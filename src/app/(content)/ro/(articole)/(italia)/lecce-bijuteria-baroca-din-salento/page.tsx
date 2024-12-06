import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import lecceABaroqueGemInSalento from "../../../../../../../public/lecce/lecce-a-baroque-gem-in-salento.jpeg"
import lecceAperitivo1 from "../../../../../../../public/lecce/lecce-aperitivo-1.jpg"
import lecceAperitivo2 from "../../../../../../../public/lecce/lecce-aperitivo-2.jpg"
import lecceAperitivo3 from "../../../../../../../public/lecce/lecce-aperitivo-3.jpg"
import lecceAperitivo4 from "../../../../../../../public/lecce/lecce-aperitivo-4.jpg"
import lecceBalcony from "../../../../../../../public/lecce/lecce-balcony.jpg"
import lecceBaroqueBuilding from "../../../../../../../public/lecce/lecce-baroque-building.jpg"
import lecceBasilicaDiSantaCroce1 from "../../../../../../../public/lecce/lecce-basilica-di-santa-croce-1.jpg"
import lecceBasilicaDiSantaCroce2 from "../../../../../../../public/lecce/lecce-basilica-di-santa-croce-2.jpg"
import lecceBasilicaDiSantaCroce3 from "../../../../../../../public/lecce/lecce-basilica-di-santa-croce-3.jpg"
import lecceCafeLaccese from "../../../../../../../public/lecce/lecce-cafe-laccese.jpg"
import lecceLuxattico from "../../../../../../../public/lecce/lecce-luxattico.jpg"
import leccePalazzoDelSeminario from "../../../../../../../public/lecce/lecce-palazzo-del-seminario.jpg"
import leccePiazzaDelDuomo from "../../../../../../../public/lecce/lecce-piazza-del-duomo.jpg"
import leccePin1 from "../../../../../../../public/lecce/lecce-pin-1.jpg"
import leccePin2 from "../../../../../../../public/lecce/lecce-pin-2.jpg"
import lecceRomanAmphitheatre from "../../../../../../../public/lecce/lecce-roman-amphitheatre.jpg"
import lecceStrollStreets from "../../../../../../../public/lecce/lecce-stroll-streets.jpg"

const article = getArticle(24);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceABaroqueGemInSalento} alt="Lecce - bijuteria barocă din Salento" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Lecce este situat în regiunea Salento, la 150 de kilometri de Bari, la 40 de kilometri de Gallipoli și la 45 de kilometri de Otranto. Gallipoli și Otranto sunt două orașe turistice de la malul mării care merită să fie vizitate. De asemenea, se află la 25 de kilometri de coasta Mării Adriatice și la 35 de kilometri de coasta Mării Ionice. Deci poate reprezenta un bun punct de plecare în explorarea “tocului” Italiei.</p>
        <p>Am mers acolo cu mașina închiriată și pentru că accesul în centrul istoric este restricționat, dar și pentru că ne-am dorit să găsim cât mai ușor un loc de parcare, am optat pentru o cazare în afara centrului vechi al orașului. Am înnoptat în acest apartament drăguț, <LinkExternal link="https://www.booking.com/hotel/it/luxattico-b-amp-b.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre LuxAttico B&B" text="LuxAttico B&B" />, deținut de Maria Luisa, care a fost o gazdă extraordinară și ne-a oferit o mulțime de recomandări despre ce să vedem în oraș sau unde să mâncăm.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceLuxattico} alt="Lecce - LuxAttico B&B" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Trebuie să recunoaștem totuși că ne-ar fi plăcut să stăm într-unul dintre aceste hoteluri luxoase din inima orașului Lecce:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.booking.com/hotel/it/palazzo-de-noha.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Palazzo De Noha - Boutique Hotel" text="Palazzo De Noha - Boutique Hotel" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/patria-palace.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Patria Palace Lecce" text="Patria Palace Lecce" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/palazzo-lecce.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Palazzo Lecce - Epoca Collection" text="Palazzo Lecce - Epoca Collection" /></li>
        </ul>
        <p>Am petrecut doar o zi în acest loc vibrant, turistic, plin de istorie și regretăm că nu am putut sta mai mult pentru că ne-a plăcut foarte mult timpul petrecut aici. Practic, ne-am plimbat pe străzile din “centro storico”, am intrat în biserici (deschise până târziu) și am vizitat muzee. Dar cea mai plăcută activitate pe care o poţi face în Lecce este să stai pe o terasă, să mănânci brânzeturi locale și să admiri piețele pline de turiști și localnici care socializează.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceBaroqueBuilding} alt="Lecce - Clădire barocă" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>O plimbare prin centrul istoric este o călătorie prin timp și cultură. Străzile înguste își croiesc drum printr-un labirint de clădiri în stil baroc pline de sculpturi complicate și balcoane ornamentate.</p>
        <p>Am început ziua cu o cafea leccese, care este o băutură tradițională făcută cu espresso, lapte de migdale și zahăr sau miere și este adesea servită cu gheață. Laptele de migdale folosit în rețetă este de obicei făcut din migdale proaspăt măcinate, dând cafelei o aromă cremoasă de nucă. Caffe Leccese este o băutură locală populară și poate fi găsită în cafenelele și restaurantele din Lecce și din regiunea înconjurătoare.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceCafeLaccese} alt="Lecce - Cafe Laccese" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceStrollStreets} alt="Lecce - Plimbare pe străzi" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceBalcony} alt="Lecce - Balcon" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>În timp ce te plimbi pe străzi, vei trece pe lângă piețe pline de viață, unde localnicii și turiștii se adună deopotrivă pentru a savura cafea, a mânca gelato și a se bucura de atmosferă. În aer răsună sunetul clopotelor de la biserică și zumzetul oamenilor care își desfășoară viața de zi cu zi. La fiecare colț de stradă dai peste o nouă surpriză, fie că este o curte ascunsă, o biserică veche de secole sau un mic magazin care vinde suveniruri lucrate manual.</p>
        <p>În ciuda atmosferei agitate, există un sentiment de liniște și calm care străbate orașul. Acesta este un loc în care oamenii își iau răgaz în primul rând pentru a savura plăcerile simple ale vieții, de la o plimbare pe străzi până la un moment liniștit de reflecție într-una dintre numeroasele biserici ale orașului. O plimbare prin centrul istoric al orașului Lecce este o experiență care implică toate simțurile, lăsându-te cu amintiri care vor dura toată viața.</p>
        <p>Iată câteva din obiectivele vizitate:</p>
        <p>Piazza del Duomo - o piață centrală în care se află impresionanta Catedrală din Lecce în stil baroc Cattedrale Maria Santissima Assunta e S.Oronzo, Campanile del Duomo, Palazzo Arcivescovile și Palazzo del Seminario.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={leccePiazzaDelDuomo} alt="Lecce - Piazza del Duomo" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Basilica di Santa Croce - o biserică uimitoare din secolul al XVII-lea, cu sculpturi elaborate în piatră.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceBasilicaDiSantaCroce1} alt="Lecce - Basilica di Santa Croce, interior 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceBasilicaDiSantaCroce2} alt="Lecce - Basilica di Santa Croce, interior 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceBasilicaDiSantaCroce3} alt="Lecce - Basilica di Santa Croce, interior 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Amfiteatrul Roman - o arenă bine conservată, folosită pentru jocuri cu gladiatori și alte evenimente publice.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceRomanAmphitheatre} alt="Lecce - Amfiteatrul Roman" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p><LinkExternal link="https://museo.diocesilecce.org/il-palazzo-del-seminario/" title="Link catre Palazzo del Seminario" text="Palazzo del Seminario" /> - o clădire în stil baroc care găzduiește mai multe instituții culturale importante, inclusiv Muzeul Provincial de Artă Sacră, Biblioteca Provincială și Academia de Arte Frumoase.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={leccePalazzoDelSeminario} alt="Lecce - Palazzo del Seminario" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am încheiat ziua cu un aperitiv tipic din Salento la Bottega del Corso. Am fi putut opta pentru un vin autohton precum Primitivo sau Negroamaro, dar am ales din nou celebrul Aperol spriţ. Mâncarea a fost foarte bună și a constat în brânzeturi locale (preferata noastră a fost burrata), mezeluri, măsline, bruschette și taralli. Taralli sunt covrigei mici, crocanți, care sunt de obicei aromați cu semințe de fenicul și ulei de măsline. Taralli pot fi găsiţi în multe brutării și magazine alimentare din Lecce și din regiunea Puglia și sunt adesea serviţi ca o gustare alături de un pahar de vin local. Atenție: taralli creează dependență, astfel încât odată ce începi să ronţăi, nu te mai poți opri!</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceAperitivo1} alt="Lecce - Aperitivo 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceAperitivo2} alt="Lecce - Aperitivo 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceAperitivo3} alt="Lecce - Aperitivo 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={lecceAperitivo4} alt="Lecce - Aperitivo 4" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>A fost o zi de neuitat! Ceea ce ne-a impresionat cel mai mult la Lecce au fost clădirile în culori calde și atmosfera primitoare din tot orașul. Nu e de mirare că Lecce este considerat unul dintre cele mai frumoase orașe din Italia.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={leccePin1} alt="Lecce - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={leccePin2} alt="Lecce - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}