import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nouaRestaurant1 from "../../../../../../../public/noua-restaurant/noua-restaurant-20.jpg"
import nouaRestaurant2 from "../../../../../../../public/noua-restaurant/noua-restaurant-28.jpeg"
import nouaRestaurant3 from "../../../../../../../public/noua-restaurant/noua-restaurant-29.jpeg"

import nouaRestaurant4 from "../../../../../../../public/noua-restaurant/noua-restaurant-2.jpeg"
import nouaRestaurant5 from "../../../../../../../public/noua-restaurant/noua-restaurant-3.jpeg"
import nouaRestaurant6 from "../../../../../../../public/noua-restaurant/noua-restaurant-4.jpeg"

import nouaRestaurant7 from "../../../../../../../public/noua-restaurant/noua-restaurant-5.jpeg"
import nouaRestaurant8 from "../../../../../../../public/noua-restaurant/noua-restaurant-7.jpeg"
import nouaRestaurant9 from "../../../../../../../public/noua-restaurant/noua-restaurant-8.jpeg"

import nouaRestaurant10 from "../../../../../../../public/noua-restaurant/noua-restaurant-9.jpeg"
import nouaRestaurant11 from "../../../../../../../public/noua-restaurant/noua-restaurant-10.jpeg"
import nouaRestaurant12 from "../../../../../../../public/noua-restaurant/noua-restaurant-11.jpeg"

import nouaRestaurant13 from "../../../../../../../public/noua-restaurant/noua-restaurant-13.jpeg"
import nouaRestaurant14 from "../../../../../../../public/noua-restaurant/noua-restaurant-15.jpeg"
import nouaRestaurant15 from "../../../../../../../public/noua-restaurant/noua-restaurant-16.jpeg"

import nouaRestaurant16 from "../../../../../../../public/noua-restaurant/noua-restaurant-17.jpeg"
import nouaRestaurant17 from "../../../../../../../public/noua-restaurant/noua-restaurant-18.jpeg"
import nouaRestaurant18 from "../../../../../../../public/noua-restaurant/noua-restaurant-19.jpeg"

const article = getArticle(31);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant1} alt="Simfonie Culinară Excepțională: O Călătorie Gastronomică la Noua Bucătărie Românească" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Noua Bucătărie Românească este locul din Bucureşti pe care trebuie să-l vizitezi dacă îţi doreşti să descoperi mâncarea românească într-o interpretare modernă, fine dining, cu respect faţă de ingredientele folosite, cu o servire demnă de stele Michelin, dar la un preţ corect.</p>
        <p>Noua este cel mai apreciat restaurant de către noi, nu doar din Bucureşti, ci din toate locurile în care am fost până acum.</p>
        <p>Prima noastră vizită la Noua Bucătărie Românească a fost în aprilie 2022. Puteți citi despre acea experiență <Link prefetch={false} href="/ro/noua-bucatarie-romaneasca" title="Noua - Un restaurant la alt nivel în București" className="text-blue-600 underline hover:text-blue-800">în articolul</Link> pe care i l-am dedicat. Am fost plăcut surprinşi să descoperim că nu au scăzut calitatea mâncării sau a servirii, ci chiar au îmbunătăţit-o. Mai mult, pe parcursul acestei perioade, i-am urmărit pe rețelele de socializare, și astfel știm că au participat activ la competiții, au câștigat premii, au organizat sau au fost invitați la diverse evenimente culinare, atât în România, cât și în străinătate, implicându-se în schimburi valoroase cu alți bucătari recunoscuți.</p>
        <p>La finalul anului 2022, a apărut pe lume şi fratele mai mic: <Link prefetch={false} href="/ro/noua-bar-bucuresti" title="Noua B.A.R. - unul din restaurantele noastre preferate din Bucureşti şi de ce ne-a impresionat" className="text-blue-600 underline hover:text-blue-800">Noua B.A.R.</Link> (abrevierea de la Bucătărie Aproape Românească). Dacă nu-ţi doreşti o experienţa fine dining cu un meniu de degustare aşa cum oferă Noua Restaurant, atunci poţi opta pentru Noua B.A.R. unde se poate comanda à la carte.</p>
        <p>Dar gata cu introducerea, voi trece direct la subiectul de interes: cina la Noua. Meniul se schimbă constant în raport cu sezonalitatea ingredientelor. Consultă <LinkExternal link="https://nouarestaurant.ro/" title="Link catre site-ul Noua Restaurant" text="site-ul lor" /> pentru meniul actualizat. Noi am fost în noiembrie 2023, preţul pentru meniul de degustare pe care-l voi detalia mai jos a costat 320 lei de persoană. Adiţional, se poate opta pentru pairing cu vinuri sau cu sucuri pentru suma de 275 lei de persoană.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant2} alt="Noua Bucatarie Romaneasca Restaurant - Interior" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant3} alt="Noua Bucatarie Romaneasca Restaurant - Vin" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>După ce am fost aşezaţi la masă (am dorit de această dată o masă la etaj pentru a vedea în bucătăria deschisă), ni s-a explicat în ce constă meniul şi am fost întrebaţi dacă avem alergii sau intoleranţe alimentare. Apoi ne-au fost aduse prosoape infuzate cu diverse arome (muşeţel, de exemplu), pentru a ne şterge cu ele pe maini.</p>
        <p>Cina a început cu șapte mini-preparate (sau amuse-bouche), șase dintre ele reprezentând principalele regiuni geografice ale țării. Fiecare preparat a fost prezentat pe o piesă de puzzle care, atunci când erau asamblate, formau harta României. A șaptea piesă de puzzle a fost introdusă, simbolizând preparatul din Basarabia.</p>
        <p>Cele şapte amuse bouche au fost după cum urmează:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Ravioli cu gulie, brânză de capră şi leuştean - am putut repera mai multe arome, fără ca unele să le acopere pe celelalte. Am simţit foarte bine gulia şi mi s-a părut că are un gust extraordinar, iar leuşteanul a adus o aromă surprinzatoare în acea combinaţie.</li>
          <li>Roată cu trei texturi de roşii - roata aceasta crocantă este umplută cu un sos de roşii dulce-acrişor şi cred că puteam mânca lejer o duzină.</li>
          <li>Coşulet din cartof cu gogonele - foarte bun şi acesta, uşor sărat.</li>
          <li>Mămăligă prăjită sub formă de ciupercuţă umplută cu caş afumat, cu un strat de vită şi cu trufe de sezon. Yum!</li>
          <li>Bine-cunoscuţii mici puşi pe o frigăruie din viţă de vie, prinşi între doi cartofi-evantai prăjiţi cu muştar de casă.</li>
          <li>O sărmăluţă cu viţă de vie umplută cu legume şi arpacaş peste care s-a pus o smântână uşor picantă cu hrean şi un sfert de agrişa murată.</li>
          <li>Sandviş cu kale, varză murată şi chips din piele de pui. Ce bună e pielea de pui făcută de cei de la Noua. Altfel, recunosc că nu o mănânc.</li>
        </ul>
        <p>După ce am terminat cu puzzle-ul, a urmat aperitivul constând în mămăligă cu şuncă friptă, smântână şi zăpadă de urdă. Cred că mămăliga cu brânză şi smântână este unul din felurile preferate ale românilor, precum şi unul din felurile de mâncare musai de încercat de către turiştii străini.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant4} alt="Noua Bucatarie Romaneasca Restaurant - Cina 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant5} alt="Noua Bucatarie Romaneasca Restaurant - Cina 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant6} alt="Noua Bucatarie Romaneasca Restaurant - Cina 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant7} alt="Noua Bucatarie Romaneasca Restaurant - Cina 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant8} alt="Noua Bucatarie Romaneasca Restaurant - Cina 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant9} alt="Noua Bucatarie Romaneasca Restaurant - Cina 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant10} alt="Noua Bucatarie Romaneasca Restaurant - Cina 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant11} alt="Noua Bucatarie Romaneasca Restaurant - Cina 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant12} alt="Noua Bucatarie Romaneasca Restaurant - Cina 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Fac o paranteză să menţionez faptul că la începutul cinei am fost întrebaţi dacă dorim caviar Oscietra la unul dintre preparate pentru suma de 50 lei / persoană. Noi am crezut că va fi adăugat mămăligii cu brânză şi smântână, deoarece aşa scria în meniul lor, în schimb a fost adăugat următorului preparat - dreptunghi de vânătă pe grătar cu sos de ardei copţi (uşor picant şi afumat) cu o frunzuliţă de busuioc deasupra. Preparatul acesta a avut o aromă foarte puternică de vânătă, iar vânăta este în general mai astringentă astfel că nu am simţit deloc caviarul. A fost ca şi cum nu ar fi fost.</p>
        <p>Însă după ce am primit şi următorul preparat, am uitat complet de caviar: corvină maturată 7 zile (ospătarul ne-a explicat că este un peşte care se găseşte mai ales în Marea Mediterană, dar care se găseşte şi la noi, în Marea Neagră) cu sos pe bază de spanac şi măcriş şi un buchet de salate. Peştele a fost gătit la perfecţie, partea cu pielea a fost crocantă, iar interiorul moale de se topea în gură. Sărat cât trebuia. Frunzele foarte bune. Am mai gustat şi cu o altă ocazie acest preparat şi l-am găsit uşor diferit. Poate pentru că nu a mai urmat după vânătă. A doua oară ni s-a părut că sosul are un gust suav de vanilie care s-a potrivit perfect în combinaţia respectivă.</p>
        <p>Apoi a urmat morcovul de toamnă al <LinkExternal link="https://gradinacorbilor.ro" title="Link catre site-ul Grădina Corbilor" text="Grădina Corbilor" />, cu alte cuvinte un morcov glasat cu reducţie de morcov, flori de morcov, frunze de morcov şi arpacaş crocant. Acest preparat a fost aproape ca un desert, usor dulceag, parfumat, moale, dar şi crocant. Spectaculos ce se poate face dintr-un morcov, dar şi din părtile morcovului pe care în general nu le consumăm, cum ar fi frunzele.</p>
        <p>Am primit apoi mielul, fraged şi suculent, însoţit de ciuperci şi de două sosuri care completau foarte frumos farfuria.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant13} alt="Noua Bucatarie Romaneasca Restaurant - Cina 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant14} alt="Noua Bucatarie Romaneasca Restaurant - Cina 11" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant15} alt="Noua Bucatarie Romaneasca Restaurant - Cina 12" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>A urmat serviciul de pâine şi unt al casei. Pâinea este făcută de ei de la zero, este proaspăt scoasă din cuptor, crocantă la exterior, pufoasă la interior, uşor sărată şi cu o aromă suavă de cimbrişor, iar untul se topeşte în contact cu ea creând un preparat pe cât de simplu pe atât de delicios.</p>
        <p>Predesertul este inspirat din copilăria bucătarului chef (Alex Petricean desigur) care atunci când avea nevoie de alinare primea o cană de lapte cu caimac ori ceai de mentă. Aşadar avem în farfurie gusturi de lapte cu menta şi pepene galben. Un deliciu!</p>
        <p>Primul din cele două deserturi ale serii a constat într-o cupă de îngheţată de palincă de prune acoperită cu o cremă din magiun de prune şi chips de cătină. Foarte bun şi aromat.</p>
        <p>Iar al doilea desert şi ultimul fel din cele 16 feluri, a constat în variaţiuni de fructe de pădure: o zmeură umplută cu dulceaţă de trandafir, o pralină de cătină cu afine şi merişoare şi un biscuite de muşeţel cu căpşună, aşezate pe un “pământ” comestibil care ne-a indus şi mai mult ideea că ne aflăm într-o pădure la cules de fructe de pădure.</p>
        <p>Ce experienţă extraordinară a fost de la început şi până la sfârşit! Ni se pare genul de restaurant unde merită să serbezi o zi importantă din viaţa ta pentru că sigur îţi va rămâne întipărită în memorie şi aproape de suflet. Aşadar îi dorim echipei Noua multă sănătate şi putere de muncă (şi nouă ne dorim acelaşi lucru), ca să ne putem duce de cât mai multe ori la ei să ne hrănească.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant16} alt="Noua Bucatarie Romaneasca Restaurant - Cina 13" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant17} alt="Noua Bucatarie Romaneasca Restaurant - Cina 14" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant18} alt="Noua Bucatarie Romaneasca Restaurant - Cina 15" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>În concluzie, experiența noastră culinară la Noua Bucătărie Românească a depășit sfera obișnuitului, oferind o simfonie de arome ce a evidențiat măiestria culinară și creativitatea șefului bucătar Alex Petricean și a echipei sale. De la amuse-bouche-ul inventiv care a cartografiat jucăuș regiunile României la surprizele neașteptate din fiecare fel, seara a fost o călătorie prin teritorii gastronomice atât familiare, cât și neexporate de noi încă. Serviciul atent, atmosfera primitoare și atenția meticuloasă la detalii în fiecare preparat au îmbunătăţit și mai mult experiența noastră.</p>
        <p>Îi dorim echipei Noua succes continuu, sănătate și inovație culinară și anticipăm multe alte vizite la această remarcabilă locație. Noua Bucătărie Românească și-a asigurat un loc de preț în călătoria noastră gastronomică şi încurajăm toți iubitorii de gastronomie să pornească în propria lor explorare a acestei bijuterii culinare din inima Bucureștiului.</p>
      </main>
    </div>
  );
}