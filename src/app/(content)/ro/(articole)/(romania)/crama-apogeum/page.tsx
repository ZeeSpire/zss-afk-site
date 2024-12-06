import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import apogeumWineGlass from "../../../../../../../public/apogeum/IMG_20220402_174005_uzppq9.jpg";
import apogeumBreakfast from "../../../../../../../public/apogeum/IMG_20220403_100222_voiz79.jpg";
import apogeumDinner from "../../../../../../../public/apogeum/IMG_20220401_181023_ltbfsz.jpg";
import apogeumWineBottle from "../../../../../../../public/apogeum/IMG_20220401_180031_kzrjti.jpg";
import apogeumExterior1 from "../../../../../../../public/apogeum/DSCF3138_fdfbi3.jpg";
import apogeumAerial from "../../../../../../../public/apogeum/DJI_0013_gx9nrv.jpg";
import apogeumEvening from "../../../../../../../public/apogeum/IMG_20220402_200514_r_x92noy.jpg";
import apogeumInterior1 from "../../../../../../../public/apogeum/DSCF3260_e3gw7o.jpg";
import apogeumExterior2 from "../../../../../../../public/apogeum/DSCF3137_r_nyb54u.jpeg";
import apogeumWinery2 from "../../../../../../../public/apogeum/apogeum2_rzo1uv.jpg";
import apogeumMains from "../../../../../../../public/apogeum/DSCF3072_r2_kdzmaw.jpeg";
import apogeumInterior2 from "../../../../../../../public/apogeum/DSCF3248-2_meiph0.jpg";
import apogeumWineDisplay from "../../../../../../../public/apogeum/IMG_20220401_180113_haftqf.jpg";
import apogeumWinery1 from "../../../../../../../public/apogeum/apogeum1_kecbim.jpg";
import apogeumTasting from "../../../../../../../public/apogeum/IMG_20220402_171649_f0huz1.jpg";

const article = getArticle(8);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumMains} alt="Crama Apogeum și cea mai bună Fetească Neagră din România" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>În februarie am fost într-o excursie de o zi în județul Buzău pentru a vizita Vulcanii Noroioși și am ajuns relativ repede la destinație, iar drumul a fost destul de bun astfel că ne-am hotărât să ne întoarcem în zonă, de data aceasta ca să vizităm o cramă. Dacă ești curios să vezi imagini spectaculoase cu Vulcanii Noroioși, mergi la acest <Link prefetch={false} href="/ro/vulcanii-noroiosi-judetul-buzau-romania" title="Vulcanii noroioși, județul Buzău, România" className="text-blue-600 underline hover:text-blue-800">articol</Link>.</p>
        <p>Am făcut câteva cercetări pe internet și am aflat că între județele Ploiești și Buzău sunt o mulțime de crame, unele oferind cazare, restaurant și degustări de vinuri. Așadar, escapada noastră de weekend a avut toate șansele să fie reușită.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumAerial} alt="Crama Apogeum - din drona" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am ales să mergem în primul weekend din aprilie la Apogeum Winery, sora mai mică a cramelor Tohani. Crama Apogeum se află în Gura Vadului, la o distanță egală între Ploiești și Buzău, în renumita zonă viticolă - Dealul Mare. Din București sunt aproximativ 85 de kilometri care pot fi parcurși într-o oră și jumătate cu mașina.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumDinner} alt="Crama Apogeum - în curtea cramei" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Cazare</h2>
        <p>Crama Apogeum oferă mai multe tipuri de camere, toate cu baie proprie începând de la 350 RON/noapte cu mic dejun inclus.</p>
        <p>Am rezervat o cameră dublă prin <LinkExternal link="https://www.booking.com/hotel/ro/crama-apogeum.ro.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Apogeum Winery" text="booking.com" /> și, deși mi s-a părut puțin prea mică la început, a fost tot ce ne-a trebuit pentru un sejur de două nopți.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWineBottle} alt="Crama Apogeum - camerele de cazare" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWineDisplay} alt="Crama Apogeum - camerele de cazare" width={720} height={1270} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>În primul rând trebuie să subliniez că atât camera cât și baia au fost extrem de curate. Serios, impecabil de curate. Nu știu dacă așa este întotdeauna sau doar am fost norocoși, dar am apreciat foarte mult acest aspect. Deși camera și baia erau foarte mici, erau frumos decorate, iar în baie, am găsit tot ce am fi putut avea nevoie: săpun lichid, gel de duș, șampon, dischete demachiante, periuțe și pastă de dinți, papuci, prosoape.</p>
        <h2>Restaurantul</h2>
        <p>Micul dejun a fost tip bufet suedez, dar ouăle ochi și omleta au fost preparate pe loc, după preferințele fiecăruia. Îmi place când se întâmplă asta pentru că prefer să mănânc un ou proaspăt prăjit, nu unul care a stat minute bune. În plus, au avut opțiuni precum brânză, salam uscat, șuncă, roșii, castraveți, ardei gras, ouă fierte, iaurt, cereale, cafea, lapte, suc de portocale, suc de struguri. Dar și opțiuni pentru iubitorii de dulce: croissante și alte tipuri de produse de patiserie dulci, dulceață, fructe.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumExterior1} alt="Crama Apogeum - în interiorul restaurantului" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>În același restaurant se poate lua prânzul și cina la anumite ore. Am luat cina într-una din seri și am optat pentru borșul de pasăre cu tăieței de casă (35 RON), vițel în sos de Fetească Neagră cu piure (85 RON), Osso buco în sos de vin cu legume (75 RON), iar la desert am avut crème brûlée cu pandișpan, mere și caramel (25 RON). Deci, să spunem că am avut un festin. Toate preparatele au fost super gustoase, dar ne-au plăcut mai ales borșul și vițelul în sos de vin.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumExterior2} alt="Crama Apogeum - în interiorul restaurantului, șemineul" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumEvening} alt="Crama Apogeum - în interiorul restaurantului, șemineul" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>Acum să trecem la partea cea mai interesantă, motivul călătoriei noastre: degustarea de vinuri.</p>
        <h2>Degustarea de vinuri</h2>
        <p>Pe site-ul Cramei Apogeum găsești câteva informații despre enoturism/degustări de vin:<LinkExternal link="https://crama-apogeum.ro/#enoturism" title="Link catre Crama Apogeum enoturism" text="https://crama-apogeum.ro/#enoturism" />. Am crezut inițial că vom fi singurii oameni de acolo și eram pregătiți să plătim în plus pentru a putea face o degustare de vinuri, dar spre surprinderea noastră erau 18 persoane în grupul nostru! Și erau două grupuri distincte, nu doar unul. Am observat că veniseră oameni în team buildings, iar mulți din grupul nostru fuseseră toată ziua la diferite crame din zonă.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumInterior2} alt="Crama Apogeum - în interiorul cramei, experiența de degustare a vinurilor" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Când am făcut rezervarea, am optat pentru un anume pachet de degustare, dar fiind atât de mulți participanți, preferința noastră nu a fost luată în considerare, însă oenologul ne-a propus o selecție de vinuri care a fost perfect.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumBreakfast} alt="Crama Apogeum - în afara cramei" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumTasting} alt="Crama Apogeum - experiența de degustare a vinurilor" width={720} height={1280} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>Mai întâi am vizitat pivnița unde ni s-a spus cum se face Fetească Neagră a cramei Apogeum, am continuat cu vizita conacului unde se află restaurantul, apoi am încheiat cu degustarea de vinuri în cramă. Ne-am așezat la o masă lungă, în fața fiecăruia erau trei tipuri de pahare, iar pentru fiecare cuplu era o farfurie cu brânză, nuci, biscuiți și salam. Oenologul ne-a povestit despre fiecare vin și ne-a ghidat în degustare, ne-a împărtășit tips & tricks despre vinuri și ne-a spus cu ce să combinăm vinul din farfurie pentru a extrage maximul de gust.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWineGlass} alt="Crama Apogeum - mâncare pentru degustarea de vinuri, experiență de degustare a vinurilor" width={1248} height={845} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Iată câteva idei de la degustarea de vinuri:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Când mâncăm, papilele gustative se obișnuiesc cu gustul după primele 4-5 îmbucături și nu mai simțim aceeași plăcere ca la prima înghițitură. Rolul vinului este de a reseta papilele gustative.</li>
          <li>Ar trebui să ținem paharul de bază, nu de cupă.</li>
          <li>Cu cât vinul poate fi mirosit de la o distanță mai mare, cu atât aroma lui este mai intensă.</li>
          <li>Cu cât vinul este mai bun, cu atât aroma lui se dezvoltă mai mult timp în gură. Dacă dezvoltarea se termină în 3 secunde înseamnă că nu este neapărat un vin bun. Un vin extraordinar își dezvoltă aroma chiar și după 8-9 secunde.</li>
        </ul>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumInterior1} alt="Crama Apogeum - sticle de vin pentru degustarea de vinuri, experiență de degustare a vinurilor" width={1248} height={832} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>După primul pahar de vin, am fost cu toții relaxați și degustarea a devenit mai interactivă, mai jovială. A fost o experiență pe care o recomand cu căldură. Și ne dorim cu siguranță să revenim la Crama Apogeum.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWinery2} alt="Crama Apogeum - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={apogeumWinery1} alt="Crama Apogeum - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}