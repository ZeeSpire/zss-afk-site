import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";

import nouaBar1 from "../../../../../../../public/noua-bar/noua-bar-1.jpeg"
import nouaBar2 from "../../../../../../../public/noua-bar/noua-bar-2.jpeg"
import nouaBar3 from "../../../../../../../public/noua-bar/noua-bar-3.jpeg"
import nouaBar4 from "../../../../../../../public/noua-bar/noua-bar-4.jpeg"
import nouaBar6 from "../../../../../../../public/noua-bar/noua-bar-6.jpeg"
import nouaBar7 from "../../../../../../../public/noua-bar/noua-bar-7.jpeg"
import nouaBar10 from "../../../../../../../public/noua-bar/noua-bar-10.jpeg"
import nouaBar11 from "../../../../../../../public/noua-bar/noua-bar-11.jpeg"
import nouaBarBreakfast from "../../../../../../../public/noua-bar/noua-bar-breakfast.jpeg"
import nouaBarOutside from "../../../../../../../public/noua-bar/noua-bar-outside.jpeg"

const article = getArticle(25);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBarOutside} alt="Noua B.A.R. - unul din restaurantele noastre preferate din Bucureşti şi de ce ne-a impresionat" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Noua B.A.R este fratele mai mic al restaurantului <Link prefetch={false} href="/ro/noua-bucatarie-romaneasca" title="Noua - Un restaurant la alt nivel în București" className="text-blue-600 underline hover:text-blue-800">Noua Bucătărie Românească</Link> deschis de chef Alex Petricean, finalist MasterChef România şi desemnat de către Ghidul Gault & Millau Bucătarul Anului în 2018, 2020 şi 2022.</p>
        <p>B.A.R. este acronimul pentru Bucătărie Aproape Românească şi prin urmare ne aşteptăm să găsim în meniu preparate care conţin atât ingrediente locale cum ar fi slăninuţa, trufele negre, puiul de ţară, florile de soc sau mugurii de brad, cât şi ingrediente internaţionale precum calamar, caracatiţă sau jamon iberico.</p>
        <p>Noua B.A.R. se află pe Bulevardul Ion Mihalache, nr. 16, București, într-o casă cu două etaje decorată cu obiecte tradiţionale româneşti. Atmosfera este una intimă, pe fiecare masă se află o vază cu flori proaspete, iar muzica se potriveşte întocmai cu decorul.</p>
        <p>Deşi restaurantul a fost deschis la finalul anului 2022, noi i-am făcut o vizită de abia în mai 2023, dar credem că este începutul unei idile între noi şi mâncarea demenţial de gustoasă de la Noua BAR. Şi nu se putea să fie altfel având în vedere experienţa avută la <Link prefetch={false} href="/ro/noua-bucatarie-romaneasca" title="Noua - Un restaurant la alt nivel în București" className="text-blue-600 underline hover:text-blue-800">Noua</Link>.</p>
        <Youtube videoId="bDxHi3RKaEA" />
        <p>În zilele de sâmbătă şi duminică, restaurantul este deschis şi pentru mic dejun. Întâmplarea a făcut să fim în zonă de dimineaţă şi să nu fi luat micul dejun acasă. Am intrat, ne-am aşezat la o masă pe terasă şi am bifat cu un creion câte cinci preparate care ne făceau cu ochiul.</p>
        <p>Meniul se schimbă constant. Atât preparatele, cât şi preţurile. Pentru a-ţi face o idee, la micul dejun am putut opta între 5 variante (59 RON) sau 7 variante (77 RON) din aproximativ 20 de variante disponibile din diferite categorii: brutărie, lactate, verdeţuri, proteine, dulciuri.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBarBreakfast} alt="Noua B.A.R. - mic dejun în grădină" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Noi am ales:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Coş cu două tipuri de pâine (pâine cu maia şi foccacia) şi unt, dar nu orice fel de unt, ci un unt bătut, cremos şi aerat care se întindea uşor pe pâinea caldă şi se topea în gură.</li>
          <li>Cremă de telemea cu roşii cherry.</li>
          <li>Avocado (o jumătate) cu o cremă făcută din migdale, lime şi ulei iuţit cu chilli. Avocado era perfect, copt atât cât trebuie, cremos, atât de delicios în combinaţie cu celelalte ingrediente.</li>
          <li>Cartofi noi copţi presăraţi cu sare şi ceapă verde.</li>
          <li>Omletă cremoasă cu chives şi caşcaval afumat.</li>
          <li>Sandviş cu omletă japoneză şi castravete.</li>
          <li>Cârnat de casă cu muştar. OK, a fost unul dintre cei mai buni cârnaţi mâncaţi vreodată. A fost atât de bun, că nici nu mai mi-aduc aminte de alţi cârnaţi.</li>
          <li>Granola de casă cu iaurt grecesc şi căpşune. Yummy.</li>
          <li>Prăjitura din săptămâna respectivă, o combinaţie între cremă de zahăr ars, plăcintă cu brânză şi griş cu lapte. Nu ştiu să spun ce era, dar era delicioasă.</li>
          <li>Vafe cu frişcă, stafide şi cardamom. Cred că frişca era de-aia bătută manual cum îmi făcea bunica mea când eram mică.</li>
        </ul>
        <p>De băut, am băut o socată răcoritoare cu un gust suav şi delicat de flori de soc.</p>
        <p>Ce ne-a impresionat cel mai mult, în afară de mâncare, despre care am stabilit deja că a întrecut toate aşteptările, a fost atmosfera plăcută şi faptul că nimeni nu fuma. Nu ştiu dacă am avut noi noroc să nu stea nici un fumător lângă noi sau dacă este interzis fumatul pe terasă, dar m-aş bucura să fie aşa. Cred că fumul de ţigară, inhalat în timp ce gustam şi mă minunam de cât de bună este pâinea sau cât de aromate sunt căpşunile, mi-ar fi stricat întreaga experienţă. Noi ne ferim de fumul altora şi preferăm să mâncăm înăuntru unde nu se fumează decât să stăm pe terasă. A fost atât de bine să putem sta şi noi la soare în aer curat!</p>
        <p>Micul acesta dejun ne-a ridicat nivelul de serotonină pentru întreaga zi.</p>
        {/* image weird */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar11} alt="Noua B.A.R. - în interiorul restaurantului" width={1248} height={475} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am fost de cateva ori si la cină la Noua B.A.R. La prânz şi cină, meniul este diferit. Poţi alege chiar şi un singur fel, fiecare fel de mâncare având preţul său. Repet, meniul şi preţurile se schimbă destul de des din ce mi-am putut da seama. Aşadar, la finalul lunii mai 2023 când am trecut noi pragul restaurantului, un preparat din categoria “înainte de toate” costa 37 RON, un preparat din categoria “pentru început” costa 45 RON, un fel principal din categoria “să continue iar și iar” costa 58 RON, iar un desert costa 34 RON.</p>
        <p>Şi meniul de băuturi ne-a impresionat deoarece am găsit apă infuzată (15 RON sticla), compot (18 RON), limonade (21 RON), cocktail-uri cu denumiri desprinse din basme şi alte combinaţii interesante (de la 35 RON). O băautura deosebită este Cenuşăreasa care conţine borş, lămâie, violete şi muşeţel. Nu am simţit aroma de muşeţel, însă mi-a plăcut mult.</p>
        <p>Cina a început cu un preparat care ne-a dat lumea peste cap: icre de ştiucă în smântână afumată cu chives, pătrunjel şi scoverguţe calde. Ne-am bucurat ca doi copii mici să mâncăm scoverguţele scăldate în smântânica sărată de icrele de ştiucă.</p>
        <p>Am comandat şi pâinea casei cu caş afumat, unt, slăninuţă şi trufe negre. Nu am simţit gustul de trufă, dar am văzut-o răzuită pe deasupra. Pâinica asta caldă şi crocantă cu interior plin de caşcaval topit a fost incredibilă.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar4} alt="Noua B.A.R. - Coş cu două tipuri de pâine (pâine cu maia şi foccacia) şi unt" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am continuat cu o porţie de mici făcuţi din carne de vită-oaie în crustă de cartofi prăjiţi, alături de castraveţi muraţi şi muştar de casă. I-am savurat pe fiecare în parte.</p>
        <p>Deoarece suntem mari fani burrata de când am călătorit prin Puglia (vor veni articole şi de-acolo), am comandat şi burrata de casă cu salată de la Grădina Corbilor. A fost deosebită şi am apreciat-o. Se vedea că este de casă, casă românească. Nu era ca cea din Italia, dar era mai aproape de noi, de ce mâncăm noi, probabil de la laptele folosit.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar10} alt="Noua B.A.R. - Burrata de casă cu salată din Grădina Corbilor" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Şi am continuat cu un burger reinterpretat, dar şi cu o porţie generoasă de şniţel de pui cu sos de ciuperci şi salată verde. Totul a fost bun, sărat, aromat, gustos. Iar şniţelul era crocant, aşa cum trebuie să fie orice şniţel.</p>
        <p>Cu o altă ocazie am gustat din caracatiţa cu morcovi în sos de creveţi cu gulie şi icre de păstrăv. A fost bună, însă şi mai mult mi-a plăcut puiul de ţară îmbrăcat în seminţe însoţit de un cartof triplu prăjit cu ketchup de sfeclă roşie şi maioneză de casă. Am înţeles că se porţionează puiul în cinci şi primeşti partea care urmează la service. Noi am nimerit pieptul şi o aripă. A fost cel mai fraged piept de pui pe care ţi-l poţi imagina, deloc înnecăcios.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar2} alt="Noua B.A.R. - Snitel de pui cu sos de ciuperci și salată verde" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am încercat toate cele trei deserturi disponibile în meniu şi absolut toate au fost demenţiale. Îngheţata de soc a fost parfumată şi surprinzătoare. Deliciul de texturi cu rubarbă la borcan a conţinut, pe lângă rubarbă, bezea şi cremă de vanilie. Iar la OBOR-MI-SU (versiunea Noua de TIRA-MI-SU), pe lângă farfuria care arăta spectaculos, am avut parte şi de o poveste a preparatului care ne-a făcut să-l apreciem şi mai mult. Pudra verde presărată peste prăjitură sunt verdeţuri (mărar, pătrunjel, leuştean, etc.) deshidratate şi tocate mărunt. Primul miros pe care l-am simţit a fost cel de leuştean. Şi am rămas uimiţi să vedem cât de bine se potrivesc aromele între ele! Iar sosul a fost un sirop făcut doar din căpşune (fără zahăr) şi a fost adăugat după ce am ascultat întreaga poveste a preparatului pentru o notă de spectaculozitate.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar3} alt="Noua B.A.R. - Înghețată cu flori de soc" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Dacă ar fi să aleg doar un desert din cele trei, nu aş putea. Toate mi-au plăcut. Totul a fost desăvârşit.</p>
        <p>Servirea a fost foarte bună, ospătarii au fost atenţi, au răspuns tuturor întrebărilor, ne-au povestit despre mâncare. Cu siguranţă am reveni pentru că iubim mâncarea, iar mâncarea de la Noua B.A.R. este făcută să fie iubită, savurată şi apreciată.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar7} alt="Noua B.A.R. - în interiorul restaurantului 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar1} alt="Noua B.A.R. - în interiorul restaurantului 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar6} alt="Noua B.A.R. - în interiorul restaurantului 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
      </main>
    </div>
  );
}