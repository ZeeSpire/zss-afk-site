import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import primavara from "../../../../../../../public/oferte-paste/primavara.jpeg";

const article = getArticle(22);

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
        <p>Anul acesta, Paştele ortodox pică în data de 16 aprilie, iar ofertele dedicate acestei sărbători au început să apară deja. Majoritatea ofertelor includ 3 nopţi de cazare, mic dejun, cine deosebite, preparate tradiţionale de Paşte, dar şi alte opţionale pentru a atrage oaspeţii, cum ar fi excursii, foc de tabără sau vânătoare de ouă pentru cei mici. Preţurile încep cam de pe la 3000 lei pentru doi adulţi.</p>
        <p>Mai jos găseşti cele mai atrăgătoare oferte.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={primavara} alt="Oferte de Paşte în România (2023)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <h2>Easter Time la Valea Verde cu influenţe culturale nemţeşti</h2>
        <p>Ce este inclus:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 3 nopţi</li>
          <li>welcome drink</li>
          <li>3 mic dejunuri</li>
          <li>Easter brunch în ziua de Paşte</li>
          <li>o cină cu 3 feluri vineri, o cină BBQ sâmbătă şi o cină festivă duminică</li>
          <li>foc de tabără cu gustare dulce</li>
          <li>atelier de pictură pe ouă/vânătoare de ouă</li>
        </ul>
        <p>Preţ: 2800 lei/2 adulţi. <LinkExternal link="https://www.valeaverde.com/oferte/" title="Link catre Valea Verde" text="Detalii" /></p>

        <h2>Mini vacanţă de Paşte la Cincşor Transilvania case de oaspeți</h2>
        <p>Ce este inclus:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 4 nopţi</li>
          <li>întâmpinare cu plăcintă săseasca şi palincă</li>
          <li>3 mic dejunuri</li>
          <li>prânz vegetarian în ziua de sâmbătă şi brunch de primăvară duminica</li>
          <li>4 cine</li>
          <li>foc de tabără</li>
          <li>excursii ghidate la biserica fortificată din Cincşor, la mânăstirea brâncovenească de la Sâmbăta de Sus şi la fosta abaţie cisterciană de la Cârţa. De asemenea la biserica fortificată din Biertan şi la cea din Richiş, precum şi o vizită la Cetatea Mediaş.</li>
        </ul>
        <p>Preţ: de la 3800 lei/2 adulţi. <LinkExternal link="https://transilvania-cincsor.ro/en/offers/" title="Link catre Cincsor" text="Detalii" /></p>

        <h2>Ofertă de Paşte la Conacul Grigorescu</h2>
        <p>Ce este inclus:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 3 nopţi</li>
          <li>mic dejun sâmbătă şi luni</li>
          <li>cină cu 3 feluri vineri, cină cu 3 feluri sâmbătă urmată de o petrecere la pool bar</li>
          <li>brunch pascal şi masă festivă duminică</li>
          <li>vânătoare de ouă şi cadouri de la iepuraş</li>
        </ul>
        <p>Preţ: de la 2990 lei/2 adulţi. <LinkExternal link="https://conaculgrigorescu.com/ro/events/oferta-de-paste-14-17-aprilie-2023/" title="Link catre Conacul Grigorescu" text="Detalii" /></p>

        <h2>Sărbătoarea Paştelui la Casa Timiş</h2>
        <p>Ce este inclus în pachetul “Family Stay & Brunch Pascal”:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 3 nopţi</li>
          <li>mic dejun</li>
          <li>sesiune yoga de grup pentru adulți și copii peste 10 ani</li>
          <li>foc de tabără cu platouri tradiționale, vin și ţuică fiartă / ceai pentru cei mici</li>
          <li>brunch pascal</li>
        </ul>
        <p>Preţ: de la 3150 lei/2 adulţi. <LinkExternal link="https://casatimis.ro/oferte/" title="Link catre Casa Timis" text="Detalii" /></p>

        <h2>Paşte la castel la Zabola</h2>
        <p>Ce este inclus:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 3 nopţi</li>
          <li>mic dejun sâmbătă şi luni</li>
          <li>welcome drink</li>
          <li>prânz cu trei feluri sâmbăta, gustare în noaptea de înviere, brunch pascal duminica</li>
          <li>cină cu trei feluri vineri, cină cu trei feluri şi muzica live sâmbătă, proţap şi bulz în grădină duminică</li>
          <li>workshop de vopsit ouă roşii</li>
          <li>plimbare cu căruţa</li>
          <li>cadouri de la iepuraş</li>
          <li>activităţi pentru copii</li>
        </ul>
        <p>Preţ: 6000 lei/2 adulţi. <LinkExternal link="https://www.zabola.com/articles/special-offers" title="Link catre Zabola Castle" text="Detalii" /></p>

        <h2>Paşte la Potcoava Mountain Hideaway</h2>
        <p>Ce este inclus:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 3 nopţi</li>
          <li>pensiune completă 3 zile cu mic dejun tradiţional de Paşte şi cină festivă</li>
          <li>atelier de olărit pentru copii şi părinţi</li>
          <li>plimbare cu trăsura în manej pentru copii</li>
          <li>petrecere pentru copii</li>
          <li>1 ora de drumeţie călare pentru copiii cu vârsta între 4 şi 14 ani</li>
          <li>1 ora drumeţie călare/adult</li>
          <li>acces la zona SPA</li>
          <li>foc de tabără</li>
        </ul>
        <p>Preţuri <LinkExternal link="https://potcoava-mountain.pynbooking.direct/offers/?checkin=2023-04-14&checkout=2023-04-17" title="Link catre preturile de la Potcoava Mountain Hideaway" text="aici" />. <LinkExternal link="https://www.potcoava.ro/pachete-tematice/" title="Link catre Potcoava Mountain Hideaway" text="Detalii" /></p>

        <h2>Sărbători pascale la Atra Doftana</h2>
        <p>What is included:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>cazare 3 nopţi</li>
          <li>trei micuri dejun</li>
          <li>welcome drink şi platou cu produse tradiţionale de bun venit</li>
          <li>cină fine dining vineri cu trei feluri de mâncare</li>
          <li>cină fine dining sâmbătă cu cinci preparate şi asociere de vin</li>
          <li>bufet tradiţional de Paşte cu open bar</li>
          <li>cină fine dining cu trei preparate</li>
          <li>masaj / saună</li>
          <li>atelier de creaţie</li>
          <li>muzică live, foc de tabără</li>
        </ul>
        <p>Preţ: de la 4350 lei/2 adulţi. <LinkExternal link="https://www.atradoftana.ro/oferte-de-vacanta-valea-doftanei/" title="Link catre Atra Doftana" text="Detalii" /></p>
      </main>
    </div>
  );
}