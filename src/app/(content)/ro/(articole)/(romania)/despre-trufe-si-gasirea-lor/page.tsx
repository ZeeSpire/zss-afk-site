import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Youtube from "@/components/youtube/Youtube";

import truffles1 from "../../../../../../../public/grigorescu-2/IMG_1505.jpeg"
import truffles2 from "../../../../../../../public/grigorescu-2/PINGRIGORESCU6.jpeg"
import truffles3 from "../../../../../../../public/grigorescu-2/PINGRIGORESCU7.jpeg"

const article = getArticle(20);

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
        <p>În România există tot mai multe oferte care includ, pe lângă cazare, diverse tipuri de experiențe, de la incursiuni gastronomice, degustări de vinuri, cursuri care te învață ceva nou, până la activități în aer liber. Este și cazul vânătorii de trufe.</p>
        <p>Am participat la vânătoarea de trufe organizată de Terra Carpatica, la sfârșitul lunii octombrie 2022. Deși ni s-a spus că în ultimele luni a fost vreme în mare parte secetoasă și este posibil ca trufele să nu fi crescut, am avut norocul să găsim destul de multe trufe. Pe lângă vânătoarea în sine, am participat și la o experiență gastronomică bazată pe trufe și recomandăm oricui acest tip de experiență. Citește despre ea în<Link prefetch={false} href="/ro/vanatoare-de-trufe-si-o-experienta-culinara-deosebita-la-conacul-grigorescu" title="Vânătoare de trufe și o experiență culinară deosebită la Conacul Grigorescu" className="text-blue-600 underline hover:text-blue-800">acest articol</Link>.</p>
        <Youtube videoId="zGxKL-WEkdA" />
        <p>În pădurile din România există o varietate de trufe, care pot fi culese între iunie și februarie. Aroma și culoarea lor diferă în funcție de anotimp. Trufele de vară au un miros și o aromă mai subtile decât cele de iarnă.</p>
        <p>Ne aflăm așadar într-o pădure din județul Buzău, la aceeași latitudine cu zona Piemontului din Italia, o renumită zonă pentru trufe, având astfel condiții climatice favorabile și păduri dese.</p>
        <p>Am fost ghidați într-o expediție de două ore prin pădure de către doi vânători profesioniști de trufe și câinii lor special dresați în acest scop. Cea mai cunoscută rasă de câini pentru această activitate este Lagotto Romagnolo, dar și câini din alte rase precum Pointer sau Vizsla pot fi dresați să caute trufe.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={truffles1} alt="Vânătoare de trufe cu câini în pădure" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Câinii au venit să facă treaba pentru care au fost dresați. Nu aveam voie să ne jucăm cu ei sau să le distragem atenția în vreun fel. Alergau prin pădure când deodată începeau să sape dacă miroseau o trufă. Erau foarte concentrați pe sarcina lor. Trufele găsite aveau mărimi diferite. Cele mai mici erau luate de câine în gură și lăsate în mâna stăpânului. Pentru cele mai mari, vânătorul de trufe le scotea cu grijă din pământ ca să nu le rupă. După aceea, locul era acoperit cu frunze, astfel încât zona de lângă rădăcinile copacului să nu se usuce. După fiecare descoperire, câinii își așteptau răsplata, de obicei o bobiță pentru căței.</p>
        <p>Este un fapt binecunoscut că trufele sunt foarte scumpe, dar meseria de vânător de trufe este una dificilă și periculoasă. În pădure pândesc tot felul de pericole, unele atât de mici încât nu te-ai gândi inițial la ele. Cum ar fi căpușele sau viespiile.</p>
        <p>Trufa, numită și „aurul negru”, „diamantul negru”, „diamantul pădurii”, sau „diamantul bucătăriei”, este o ciupercă ce trăiește în pământ în simbioză cu un copac. Copacii gazdă pot fi stejari, aluni, fagi, plopi, carpeni și alții. Trufele sunt conectate la rădăcini și oferă nutrienți și minerale pentru copac. Ele cresc la adâncimi cuprinse între 5 și 40 cm. Acesta este și motivul pentru care le puteți găsi doar cu ajutorul câinilor special dresați.</p>
        <p>Se spune că dacă vrei să faci o fermă de trufe, atunci trebuie să plantezi o pădure.</p>
        <p>Trufele dezvoltă un miros puternic. Mirosul lor este cel care le ajută la perpetuarea speciei. Animalele sunt atrase de mirosul lor și scormonesc în pământ pentru a le mânca. În acest fel, își răspândesc sporii. Animalele cărora le plac trufele includ șoareci, mistreți, vulpi, căprioare, urși și chiar câini.</p>
        <p>Trufele sunt folosite în bucătărie pe post de condiment. Au o aromă foarte puternică, iar o cantitate mică este suficientă pentru a-ți aroma mâncarea. Trufele pot fi folosite în risotto, preparate cu paste, piureuri și fripturi, dar sunt folosite și pentru a aromatiza untul, uleiul sau sarea.</p>
        <p>Pe lângă toate acestea, trufele au diverse beneficii pentru sănătate, deoarece sunt bogate în antioxidanți, vitamine și minerale.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={truffles2} alt="Vânătoare de trufe - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={truffles3} alt="Vânătoare de trufe - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}