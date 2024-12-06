import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import santoriniP1 from "../../../../../../../public/santorini/p1_gzkojs.jpg";
import santoriniP3 from "../../../../../../../public/santorini/p3_xsd3ym.jpg";
import santoriniP2 from "../../../../../../../public/santorini/p2_ycf3rj.jpg";
import santoriniSouvlaki from "../../../../../../../public/santorini/souvlaki_wvnwbi.jpg";
import santoriniG3 from "../../../../../../../public/santorini/g3_i0lfkz.jpg";
import santoriniG2 from "../../../../../../../public/santorini/g2_tv0gln.jpg";
import santoriniG1 from "../../../../../../../public/santorini/g1_oggmoo.jpg";
import santoriniM2 from "../../../../../../../public/santorini/m2_cgoz3y.jpg";
import santoriniEat2 from "../../../../../../../public/santorini/santo-eat2_qr2pcf.jpg";
import santoriniKaramolegos from "../../../../../../../public/santorini/Karamolegos_t1pqza.jpg";
import santoriniE2 from "../../../../../../../public/santorini/e2-IMG_20210708_161422_uf6pbd.jpeg";
import santoriniM1 from "../../../../../../../public/santorini/m1_exoclg.jpg";
import santoriniEat from "../../../../../../../public/santorini/santo-eat_gvsnrq.jpg";

const article = getArticle(13);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniE2} alt="Ce și unde să mănânci în Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Îmi place mâncarea grecească și trebuie să recunosc că este una dintre bucătăriile mele preferate, cu influențele sale mediteraneene. Îmi plac foarte mult condimentele și ierburile proaspete pe care le folosesc, cum ar fi oregano, menta și mărarul. Așa că este de la sine înțeles că de fiecare dată când sunt în Grecia, mă bucur de feluri de mâncare delicioase, indiferent de cantități sau calorii.</p>
        <p>Nu este nimic mai plăcut decât să petreci timp de calitate cu cei dragi și să împarți mai multe feluri de mâncare simple și gustoase, cum ar fi salata grecească, măslinele Kalamata, pita cu tzatziki, salata de vinete, legume prăjite și calamari prăjiți sau cartofi prăjiți cu brânză feta.</p>
        <p>Santorini este cunoscută în special pentru roșiile cherry dulci și parfumate, pentru peștele și fructele de mare proaspete, pentru fava, care este un tip de cereală, și pentru vin.</p>
        <p>Salata santoriniană este puțin diferită de salata grecească tipică prin faptul că la prepararea ei se utilizează roșii cherry, capere și frunze de capere murate, în plus față de restul ingredientelor tipice: castraveți, ardei grași, ceapă, măsline, brânză feta, ulei de măsline și oregano. Desigur, cu mici variații de la o gospodărie la alta.</p>
        <p>Fava este făcută din boabe de fava și este un fel de mâncare cremos care merge foarte bine întins pe pita grecească sau alături de fructe de mare, cum ar fi caracatița sau calamarii la grătar.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG1} alt="Santorini - Fava" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG2} alt="Santorini - Caracatita la grătar" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG3} alt="Santorini - Mâncare mediteraneană" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Un alt fel de mâncare absolut delicios de care m-am îndrăgostit sunt chiftelele cu roșii. Cu cât roșiile sunt mai coapte, mai dulci și mai aromate, cu atât chiftelele vor fi mai gustoase. Adaugă o ceapă tocată mărunt, ierburi proaspete și făină, apoi prăjește în ulei până se rumenesc și servește cu sos de iaurt și mentă. O explozie de arome! Am mâncat aceste chiftele în fiecare zi în timpul vacanței mele în Santorini și le-am gătit și acasă. Insula Santorini este de asemenea cunoscută pentru vinurile sale. Datorită soarelui arzător și vânturilor puternice din Ciclade, vițele de vie de pe insulă au o formă rotundă, ca un coș așezat pe pământ, care protejează strugurii. Le poți vedea peste tot pe insulă. Vinurile roșii tipice sunt făcute din struguri Mavrotragano și Mandilaria, în timp ce cele albe sunt făcute din struguri Assyrtiko, precum și din struguri Aidani și Athiri. Santorini este de asemenea renumită pentru un vin de desert făcut din struguri uscați la soare - Vinsanto. Există multe crame pe insulă care oferă meniuri de degustare. Poți opta pentru un tur de degustare de vinuri pe insulă, care include vizitarea mai multor micro-crame și aflarea mai multor informații despre cum se face vinul pe această insulă. Vinul nostru preferat a fost de departe Assyrtiko, dar Vinsanto a fost de asemenea foarte memorabil.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniKaramolegos} alt="Santorini - Crama Artemis Karamolegos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Dacă vinul nu este pe gustul tău, poate că vei prefera berea grecească. Pe insulă, există o <LinkExternal link="https://www.santorinibrewingcompany.gr/" title="Link catre microberăria Santorini" text="microberărie" /> din 2011 care produce diferite tipuri de bere nefiltrată. Ar trebui să încerci, poate alături de un souflaki delicios.</p>
        <p>În timpul vacanței noastre de opt zile pe insula grecească, am mâncat în câteva restaurante fabuloase. Nu în cele luxoase din Oia, la marginea calderei, cu vedere la apus, unde de cele mai multe ori plătești pentru priveliște. Ci în cele cu mâncare uimitoare.</p>
        <p>Descoperirea noastră cea mai dragă a fost <LinkExternal link="https://www.artemiskaramolegos-winery.com/en/index.php" title="Link care Crama Artemis Karamolegos" text="Crama Artemis Karamolegos" /> și restaurantul său Aroma Avlis din Exo Gonia. La început, am mers acolo să mâncăm, și pentru că mâncarea a fost atât de bună și serviciul ireproșabil, am decis să rezervăm un curs de gătit. A fost cea mai bună experiență de până acum. Am învățat cum să facem o salată santoriniană autentică și am avut ocazia să gustăm câte roșii cherry am vrut.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniM1} alt="Santorini - Salată grecească" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniM2} alt="Santorini - Filet de porc în sos de vin Vinsanto" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG3} alt="Santorini - desert" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Am făcut de asemenea cea mai catifelată favă, plăcintele tradiționale cu roșii și, ca fel principal, am gătit un mușchi de porc în sos de vin Vinsanto. De asemenea, am primit un pahar de vin în timpul cursului de gătit, iar după cursul de gătit ne-am așezat în restaurant unde am mâncat ceea ce am gătit. Pe lângă toate acestea, am primit o sticlă de vin, un desert și, desigur, un pahar de vin Vinsanto. A fost perfect și îl recomand cu căldură. Pe site-ul lor, puteți găsi mai multe informații despre ce oferă.</p>
        <p>Un alt restaurant excelent, situat în Akrotiri, a fost <LinkExternal link="https://mistelirestaurant.com/" title="Link catre site-ul restaurantului Misteli din Santorini" text="Misteli" />. Aceasta este o tavernă de familie, iar ei folosesc ingrediente bio-locale pentru a găti mâncare tradițională grecească delicioasă. Am comandat mai multe aperitive și salate din meniu și am avut parte de un adevărat festin. Totul a fost savuros și ne-am distrat de minune.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniP1} alt="Santorini - Salată grecească" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniP2} alt="Santorini - Iaurt grecesc" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniP3} alt="Santorini - Chiftele de legume" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>În Oia, poți găsi mâncare delicioasă la <LinkExternal link="https://melitinioia.com/" title="Link catre site-ul restaurantului Melitini din Santorini" text="Melitini" />. Acest restaurant fără pretenții din Oia servește o varietate de aperitive, salate, brânzeturi, carne la grătar și fructe de mare, care pot fi împărțite. Felul meu preferat de la ei a fost plăcintele de legume. De asemenea, poți comanda mâncarea la pachet și să o mănânci în alt loc, dacă nu au mese libere.</p>
        <p>Un alt loc plăcut și fără pretenții din Oia, cu mâncare grecească bună, este <LinkExternal link="https://pitogyros.com/" title="Link catre Pitogyros Grill House din Santorini" text="Pitogyros Grill House" />. Servesc gyros, souflaki, kebab și cârnați făcuți manual. Poți lua un wrap cu pita și să-l mănânci pe stradă, dar au și câteva mese. Souflakiul a fost super gustos.</p>
        <p>Un loc popular pentru a lua un souvlaki în Thira este Lucky’s Souvlakis. Acest loc mic poate să nu arate grozav, dar souvlakiul este cu adevărat bun. Dacă ești în Thira, trebuie să-l încerci.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSouvlaki} alt="Santorini - Lucky’s Souvlakis" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Plimbându-ne pe străzile din Thira, ne-am oprit pentru înghețată la <LinkExternal link="https://5senses.com.gr/menu" title="Link catre 5 Senses Grab n’ Go din Santorini" text="5 Senses Grab n’ Go" />. Practic, am avut o înghețată cremoasă, probabil făcută din iaurt sau ceva de genul acesta, la care am adăugat căpșuni proaspete. Acest lucru m-a transportat imediat într-o amintire din copilărie când bunica îmi dădea căpșuni proaspăt culese cu smântână făcută în casă. Erau divine, și la fel a fost și înghețata de la 5 Senses.</p>
        <p>Acestea sunt recomandările noastre pentru mâncare fenomenal de bună în Santorini. Dacă mergi în Santorini, sper că vei încerca cel puțin câteva dintre ele și îmi vei spune ce ai crezut. Mereu îmi face plăcere să vorbesc despre mâncare.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEat2} alt="Mancare din Santorini - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEat} alt="Mancare din Santorini - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}