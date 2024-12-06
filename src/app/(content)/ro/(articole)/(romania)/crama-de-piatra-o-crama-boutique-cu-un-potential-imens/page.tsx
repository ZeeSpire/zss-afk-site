import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";

import cramaDePiatra1 from "../../../../../../../public/crama-de-piatra/crama1_i0wazr_resized.jpeg"
import cramaDePiatra2 from "../../../../../../../public/crama-de-piatra/crama2_aiavmt.jpeg"
import cramaDePiatraInteriorRestaurant from "../../../../../../../public/crama-de-piatra/IMG_20220828_091948-e1_zvnsyk.jpeg"
import cramaDePiatraInteriorBeci from "../../../../../../../public/crama-de-piatra/IMG_20220827_154035-e1_amlsht.jpeg"
import cramaDePiatraInteriorRestaurant2 from "../../../../../../../public/crama-de-piatra/IMG_20220827_153954-e1_sknjoy.jpeg"
import cramaDePiatraVin from "../../../../../../../public/crama-de-piatra/IMG_20220827_161933-e1_pbgtj5.jpeg"
import cramaDePiatraMancare from "../../../../../../../public/crama-de-piatra/IMG_20220827_202428-e3_jlv1pm.jpeg"
import cramaDePiatraVitaDeVie from "../../../../../../../public/crama-de-piatra/IMG_20220827_183450-e1_uimxup.jpeg"

const article = getArticle(16);

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
        <p>Crama de Piatră este o cramă boutique, cu o producție mică de vin, care deține toate atuurile pentru a deveni o destinație specială pentru suflet. Aici poți participa la tururi ale cramei și degustări de vinuri, te poți relaxa cu prietenii pe terasă sau poți face o plimbare prin vie. Vei găsi aici și un restaurant foarte elegant decorat, dar și o terasă înconjurată de vegetație, precum și spații de cazare, în cazul în care vrei să rămâi peste noapte. Cu alte cuvinte, este o destinație demnă de luat în considerare pentru un weekend bine petrecut.</p>
        <Youtube videoId="cjNcnZGuS2o" />
        <p>Crama de Piatră se află în renumita zonă viticolă - Dealul Mare, în comuna Vadu Săpat din județul Prahova, pe o suprafață de cel puțin șase hectare. Este situată la aproximativ 80 de kilometri de București, distanță ce poate fi parcursă ușor într-o oră și jumătate cu mașina. În aceeași zonă, puteți vizita și alte crame precum Licorna, Budureasca, Viile Metamorfosis, Mierla Albă sau Apogeum (căreia le-am dedicat un <Link className="text-blue-700 hover:text-blue-900 underline" href="/ro/crama-apogeum">articol separat</Link>.</p>
        <p>Am vizitat crama într-o frumoasă zi de sâmbătă, la sfârșitul lunii august, chiar înainte de recoltarea strugurilor. Am ajuns cu ceva timp înainte de ora de check-in, dar am profitat de aceasta și am luat prânzul pe terasă. Am comandat gulaș, două tipuri de paste, o salată de roșii cu brânză și cartofi la cuptor cu rozmarin și usturoi. Serviciul a fost bun, deși nu foarte rapid, dar mâncarea în schimb nu a fost chiar atât de grozavă. Nu a fost rea, dar să spunem că ar putea fi îmbunătățită. Totuși, nu aș respinge întreaga experiență din această cauză, poate a fost doar un lucru care nu se întâmplă des.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraInteriorRestaurant} alt="Interior Restaurant Crama de Piatra" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>După prânz, au fost foarte amabili și ne-au permis să ne cazăm puțin mai devreme. Interiorul, atât al restaurantului, cât și al întregii unități de cazare, este foarte plăcut vizual. Modernul se combină cu elementele naturale într-un mod elegant, fără a fi ostentativ. Peste tot sunt lumini jucăușe, elemente decorative din lemn, accente de culoare, tablouri realizate din mușchi verde și alte elemente naturale, iar fiecare dintre cele 12 camere este numită după o varietate de struguri. Am stat în camera Muscat Ottonel, o cameră spațioasă, curată, cu un pat confortabil și o vedere frumoasă.</p>
        <p>Luând ca referință prezentarea și degustarea de la Apogeum, am început turul cramei cu unul dintre angajați, un tânăr implicat care vorbea cu mândrie despre cum sunt produse vinurile la Crama de Piatră și care se referea la proprietari și la ceilalți colegi ca la o familie. Am putut să punem orice întrebare ne trecea prin minte și am discutat pe îndelete cu respectivul angajat, fiind singurii participanți la tur în acel moment. Turul a început în momentul în care am spus că suntem gata, nu a fost stabilit un timp specific. Mă întreb cum ar fi fost dacă ar fi fost mai multe persoane interesate să participe, probabil în acel caz ar fi trebuit stabilit un orar pe care toți să-l respectăm, deci ar fi necesitat ceva mai multă organizare.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraInteriorBeci} alt="Interior Crama de Piatra" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am aflat istoria locului care a început acum mai bine de 100 de ani (vă lăsăm să o descoperiți singuri dacă veți decide să le faceți o vizită) și cum a primit un nou aspect în 2018 cu lucrările de reabilitare. Soiurile de struguri cultivate aici sunt Cabernet Sauvignon, Merlot, Fetească Neagră și Fetească Albă, iar vinul produs aici, maturat în butoaie de stejar românesc, este disponibil sub etichetele Boian și Aldavin, acesta din urmă fiind o ediție super-limitată. Sloganul cramei este „Cantitățile de vin sunt mici, dar corecte”.</p>
        <p>La final, ne așteptam ca prezentarea să continue cu degustarea de vinuri, dar în schimb, ne-am așezat la masă și fiecare a comandat un pahar de vin. A părut că nu oferă degustări conduse de un profesionist. Am plătit doar pentru vinul comandat. Prin urmare, aș spune că există un potențial care ar fi păcat să nu fie exploatat. Totuși, ne-a plăcut prezentarea cramei și informațiile pe care le-am primit.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraInteriorRestaurant2} alt="Crama de Piatra Restaurant 2" width={720} height={1200} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraVin} alt="Vin la Crama de Piatra" width={720} height={1200} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraMancare} alt="Mancare la Crama de Piatra" width={720} height={1200} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Chiar înainte de apusul soarelui, am plecat la o plimbare lungă prin vie. Așa cum ni s-a recomandat, am gustat din struguri și am observat că pe măsură ce altitudinea creștea, strugurii deveneau mai dulci și mai aromați. Am văzut ruinele Bisericii Buna Vestire, precum și o mică livadă de migdali, dar cel mai important este că a fost o plimbare relaxantă și deconectantă.</p>
        <p>Am petrecut seara pe terasă cu o carafă de vin de casă, la care am adăugat un platou de mezeluri și brânzeturi și niște humus cu brânză de capră. Ne-am simțit minunat. Muzica era puțin prea tare, dar trebuia să acopere muzica ce venea de la o casă din apropiere. Tot acest zgomot se auzea și în camere, iar muzica s-a oprit în jurul orei 1 dimineața, așa că ar putea fi deranjant pentru cineva care vrea să doarmă în liniște absolută.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraVitaDeVie} alt="Crama de Piatra" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Micul dejun a fost foarte bun, stil bufet suedez. Am putut alege dintre opțiuni sărate și dulci: ouă preparate în diverse moduri, brânzeturi, bacon, legume, pâine, sucuri, lapte, cereale, biscuiți, croissante, Nutella și fructe. Și cafeaua a fost excelentă.</p>
        <p>Potențialul acestei locații este imens și, cu excepția unor mici minusuri care pot fi ușor corectate sau trecute cu vederea, ne-am simțit foarte bine aici. Este un loc unde ne-ar plăcea să ne întoarcem.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatra1} alt="Crama de Piatra Pin 01" width={720} height={1200} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatra2} alt="Crama de Piatra Pin 02" width={720} height={1200} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}