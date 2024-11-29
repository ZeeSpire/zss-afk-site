import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import theArtist1 from "../../../../../../../public/the-artist/the-artist-bucharest-1.jpeg"
import theArtist2 from "../../../../../../../public/the-artist/the-artist-bucharest-2.jpeg"
import theArtist3 from "../../../../../../../public/the-artist/the-artist-bucharest-3.jpeg"
import theArtist4 from "../../../../../../../public/the-artist/the-artist-bucharest-4.jpeg"
import theArtist5 from "../../../../../../../public/the-artist/the-artist-bucharest-5.jpeg"
import theArtist6 from "../../../../../../../public/the-artist/the-artist-bucharest-6.jpeg"
import theArtist7 from "../../../../../../../public/the-artist/the-artist-bucharest-7.jpeg"
import theArtist8 from "../../../../../../../public/the-artist/the-artist-bucharest-8.jpeg"
import theArtist9 from "../../../../../../../public/the-artist/the-artist-bucharest-9.jpeg"
import theArtist10 from "../../../../../../../public/the-artist/the-artist-bucharest-10.jpeg"
import theArtist11 from "../../../../../../../public/the-artist/the-artist-bucharest-11.jpeg"
import theArtist12 from "../../../../../../../public/the-artist/the-artist-bucharest-12.jpeg"

const article = getArticle(30);

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
        <p>Într-o seară aglomerată și ploioasă de noiembrie, am trecut pragul restaurantului The Artist pentru o experiență culinară unică. În acest articol, povestim despre cum ni s-a părut atmosfera, primirea, servirea şi mâncarea în restaurantul cu titulatura de cel mai bun restaurant din România.</p>
        <p>Rezervarea am facut-o cu vreo 3 zile înainte şi ne-am bucurat să găsim o masă de două persoane disponibilă aşa din scurt, chiar în zi de sărbătoare. Restaurantul se află într-o casă veche de pe Calea Victoriei, într-una din cele mai bune zone ale Bucureştiului, iar în timpul sezonului cald are şi o terasă.</p>
        <p>Din păcate, nu am fost întâmpinaţi pe măsura așteptărilor noastre, mai ales în ceea ce privește seriozitatea. La recepţie erau câteva angajate distrate şi zgomotoase, care nu ne-au dat atenție. Cu toate acestea, ospătarul care ne-a servit pe parcursul serii, ne-a condus prompt la o masă de la etaj, într-un salon mai degrabă gol și cu o atmosferă destul de rece. Totuşi floarea proaspătă din vaza de pe centrul mesei este un detaliu mereu apreciat de noi.</p>
        <p>Ce știam despre acest restaurant erau practic lucrurile specificate pe <LinkExternal link="https://theartist.ro/" title="Link catre site-ul The Artist" text="site-ul lor" />, unde am descoperit că este menţionat de către cei de la <LinkExternal link="https://www.theworlds50best.com/discovery/search-results.html?town=Bucharest&country=Romania" title="Link catre theworlds50best.com" text="theworlds50best.com" /> și că a avut un rating lăudabil în ghidul Gault & Millau. Cel mai important, ne-a intrigat meniul. Meniul prezentat la masă îl reflectă pe cel de pe website, semn că își mențin site-ul actualizat. Noi eram deja hotărâţi asupra comenzii noastre, optând pentru meniul cu cinci feluri la prețul de 305 RON de persoană (aprox. 61 EUR).</p>
        <p>Călătoria noastră culinară a început cu un amuse-bouche: două tipuri de pâine cu unt aromat și două choux umplute cu cremă de brânză, prezentate pe o farfurie cu gheață carbonică. Efectul vizual a fost captivant şi am fost foarte entuziasmaţi să ne începem cina astfel.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist1} alt="The Artist - Logo" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist2} alt="Cina la The Artist - Băuturi" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist12} alt="Cina la The Artist - Mancare 1" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Ca feluri de mâncare reci (să le zicem aperitive), ne-am bucurat de o porţie de sfeclă roșie și țelină coapte cu brânză brie românească, smochine, nucă și avocado, dar şi de o pulpă de rață confit în brioșă cu varză roșie, merișoare și cartofi dulci. Ambele feluri de mâncare au fost bine executate, unul dintre noi favorizând sfecla roșie pentru aromele sale deosebite, iar celălalt a savurat brioșa cu rață.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist3} alt="Cina la The Artist - Mancare 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist4} alt="Cina la The Artist - Mancare 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist5} alt="Cina la The Artist - Mancare 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>A urmat bulzul, în interpretarea bucătarului Paul Oppenkamp, care conduce bucătăria The Artist, care a constat în mămăligă umplută cu brânză de burduf, piure de păstârnac și un ou de prepeliță prăjit. În ciuda alăturării neașteptate a păstârnacului la bulz, s-a dovedit a fi o inovație plină de gust. Am savurat și somonul la tigaie, însoțit de o fuziune de borș, miso, ghimbir și alge Nori.</p>
        <p>Trecând la ravioli și coquelet, ravioli umplute cu carne de vită în sos de vin Fetească Neagră au fost gătite foarte bine, deși aroma de dovleac a fost oarecum inexistentă. Din păcate, puiul coquelet în sos barbecue a lăsat o impresie mai puţin favorabilă deoarece prima îmbucătură a fost doar piele de pui acoperită în sosul puţin prea picant.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist6} alt="Cina la The Artist - Mancare 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist7} alt="Cina la The Artist - Mancare 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist8} alt="Cina la The Artist - Mancare 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Pentru desert, am ales amândoi sorbetul de castraveți, un preparat uimitor din punct de vedere vizual și cu o aromă deosebită, care a fost un preferatul meu. Mousse-ul de ciocolată nu s-a ridicat la nivelul aşteptărilor. Mousse-ul a fost excesiv de dulce, iar crema pe bază de espresso a fost extrem de amară, iar prezența a ceea ce părea o caramea învelită într-o folie de plastic a fost un detaliu derutant. După ce a luat farfuriile, chelnerul ne-a informat că tot ce aveam în farfurie era comestibil, inclusiv acea folie de „plastic”, dar fără să ne spună ce era de fapt. Din păcate, am primit această informație puțin prea târziu și aș fi apreciat mai multă atenție la detalii atât de la bucătar, cât și de la chelner.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist9} alt="Cina la The Artist - Mancare 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist10} alt="Cina la The Artist - Mancare 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={theArtist11} alt="Cina la The Artist - Mancare 11" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>În concluzie, experiența noastră la The Artist a fost plăcută din punct de vedere vizual, dar ne doream mult mai mult din punct de vedere al gustului. Având în vedere premiile obţinute de-a lungul timpului și multitudinea de recenzii pozitive, ne-am întrebat dacă nu cumva cina noastră a fost mai degrabă o excepție. Trecând peste experienţa de care am avut noi parte, The Artist a câștigat recent titlul de cel mai bun restaurant din România la World Culinary Awards și merită, fără îndoială, să fie încercat măcar o dată.</p>
      </main>
    </div>
  );
}