import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import isolatedChaletMain from "../../../../../../../public/isolated-chalet/nor-11_xrj7cx.jpeg";
import isolatedChaletView1 from "../../../../../../../public/isolated-chalet/IMG_20220507_112805_a15yfj.jpg";
import isolatedChaletView2 from "../../../../../../../public/isolated-chalet/IMG_20220507_092901_modif_r3pkem.jpg";
import isolatedChaletOutside from "../../../../../../../public/isolated-chalet/DSCF3690_modif_ty4r5e.jpeg";
import isolatedChaletInterior1 from "../../../../../../../public/isolated-chalet/IMG_20220507_131911_modif_nz0nzb.jpg";
import isolatedChaletNor1 from "../../../../../../../public/isolated-chalet/nor1_tmoqkq.jpg";
import isolatedChaletEvening from "../../../../../../../public/isolated-chalet/IMG_20220507_174852_hgmvei.jpg";
import piataCentrala from "../../../../../../../public/isolated-chalet/piata-lui-visan_web2_oohdca.jpg";
import isolatedChaletInterior2 from "../../../../../../../public/isolated-chalet/IMG_20220507_131322_modif_utmqxn.jpg";
import isolatedChaletNor2 from "../../../../../../../public/isolated-chalet/nor2_p1pzu7.jpg";
import isolatedChaletMorning from "../../../../../../../public/isolated-chalet/IMG_20220508_110645_modif_dbkkkg.jpg";
import isolatedChaletDisconnect from "../../../../../../../public/isolated-chalet/nor-2-disconnect3_axwi32.jpg";
import isolatedChaletBreakfast from "../../../../../../../public/isolated-chalet/IMG_20220508_095110_modif_q7steh.jpg";

const article = getArticle(9);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletMain} alt="Cazări izolate în România" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>DÎn timpul pandemiei, cu restricțiile cauzate de COVID și cu munca de acasă, majoritatea dintre noi am petrecut cea mai mare parte a timpului în propriile case. Viața merge înainte, iar timpul continuă să treacă, așa că a trebuit să ne adaptăm, dar parcă ne e din ce mai greu să ne împăcăm cu orașele sufocate de beton, străzile pline de praf și traficul infernal. Așa că am început să apreciem timpul petrecut în aer liber, în medii naturale, înconjurați de verdeață și liniște.</p>
        <p>Cazările de tip “cabană izolată” au avut un mare succes în ultimii ani și continuă să se bucure de succes, chiar dacă prețul închirierii acestor cabane este destul de ridicat pentru România cel puțin.</p>
        <p>Priveam cu jind fotografiile de pe Instagram ale celor care își petreceau weekendul în vârf de munte, doar ei înconjurați de natură, fără a găsi disponibilitate la vreo cazare prea curând pentru a merge şi noi. Dată fiind cererea mare, au început să apară tot mai multe astfel de cazări. Ceea ce este minunat! Mai ales că majoritatea sunt realizate cu respect față de mediu, prin reutilizarea materialelor și au un design care se potrivește cadrului natural. Și vei vedea că în descrierea acestor locații sunt folosite aceleași cuvinte atrăgătoare “natură”, “liniște”, “izolare” și “fără vecini”. Așadar, te poți “deconecta” complet de la tehnologie şi zgomot.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletDisconnect} alt="Cazări izolate în România - vedere la munte" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Deși platforma mea preferată este booking.com, am găsit mai multe astfel de cazări pe airbnb.com și am făcut o listă cu 10 astfel de cazări speciale în România. Iată selecția mea:</p>
        <p><LinkExternal link="https://www.airbnb.com/rooms/44628810?federated_search_id=f8f20d3e-9bc3-499a-a724-8d3058dda38d&source_impression_id=p3_1652088740_KCtVf9tb42vgw%2BVB" title="Link catre TripSylvania Tiny House" text="1. TripSylvania Tiny House" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;Amplasată pe o suprafață de 14.000 mp, casa noastră de tip tiny-house vă oferă libertatea de a explora împrejurimile și de a vă bucura de energia vibrantă, departe de agitația orașului. Ne propunem să vă oferim cea mai bună experiență într-o casă mică, înconjurată de natură, fără a renunța la toate facilitățile necesare pentru o ședere confortabilă. Pe parcursul zilei, vă puteți așeza și relaxa cu cartea voastră preferată și vă puteți bucura de o vedere uimitoare prin fereastra mare din zona de zi, cu vedere la munți și sat. Odată cu căderea nopții, explorați Universul prin deschiderea de 1,4 m x 1,4 m chiar deasupra patului în micul loft.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/20000984?source_impression_id=p3_1652088504_wrYvS7aqi1oqMa3S0" title="Link catre The Tree Cottage" text="2. The Tree Cottage" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;Cabină mică din lemn construită pe vârful unei coline pentru o experiență unică în natură. Departe de agitația orașului, este perfectă pentru un cuplu care vrea doar să facă o pauză, să se relaxeze, să facă drumeții, să citească. Această cabană oferă o experiență unică în natură: fără vecini la vedere, doar arbori, pășuni și poate câteva vaci.&quot;</span><br />
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/24928590?source_impression_id=p3_1652088947_cGPUQz5fkVjAM5Pe" title="Link catre Casa Maria" text="3. Casa Maria" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;Casa Maria este o ascunzătoare fermecătoare și elegantă care satisface dorința de simplitate, claritate și retragere în natura pură. Casa Maria este, împreună cu casa de lemn a lui Lili & Ivo, situată la marginea Parcului Național Apuseni, Transilvania, pe o proprietate de 20.000 mp. A merge aici fără să vezi pe nimeni este mai mult regula decât excepția. Dar ai șansa de a întâlni vite și cai rătăciți.&quot;</span><br />
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/52708536?adults=2&federated_search_id=80eb13e9-a883-41ae-a36e-f48f7a7a4610&source_impression_id=p3_1652089399_asi7ZKx8ym6hcID4" title="Link catre Moon Lake Bicaz" text="4. Moon Lake Bicaz" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;Bucurați-vă de o vacanță într-un loc unic, doar al vostru, fără vecini, cu o vedere minunată asupra masivului Ceahlău și a celui mai mare lac artificial din Europa..&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/35854800?source_impression_id=p3_1652089371_J75qVr%2BYlcH8DUp%2B&guests=2&adults=2" title="Link catre Transylvania Loft Treehouse" text="5. Transylvania Loft Treehouse" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;O casă în copac pentru o experiență deosebită, perfectă pentru o persoană sau o familie (maxim 2 adulți și 1 copil) care caută o noapte sau mai mult. Înconjurată de copaci înalți și amplasată într-un domeniu de 3 acri, această casă în copac vă oferă o ședere intimă și relaxantă.“</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/50627171?source_impression_id=p3_1652089373_AjHTG83Hp2pPnwm0" title="Link catre Outlook Cabin" text="6. Outlook Cabin" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;Cabană cochetă restaurată în mijlocul pustietăţii. Cabana noastră de lemn a fost recent renovată și este ideală pentru un cuplu sau o familie mică. Există un spațiu deschis jos, cu un șemineu pe lemne pentru încălzire, o mică zonă de bucătărie, iar zona de dormit este sus. Există și o baie mică și o terasă în aer liber pentru a vă bucura de priveliștea frumoasă și de liniștea și cântecul păsărilor.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/52860822?adults=2&federated_search_id=80eb13e9-a883-41ae-a36e-f48f7a7a4610&source_impression_id=p3_1652089404_0pscmQ45gKd%2BVYDY" title="Link catre NorAtlas Heritage" text="7. NorAtlas Heritage" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>&quot;Bine ați venit în cabana noastră minunată, locul unde vă puteți deconecta, relaxa și vă puteți răsfăța cu puțin “timp pentru mine”, în timp ce vă bucurați de beneficiile celei mai bune experiențe de cazare. Înainte de a rezerva cazarea cu noi, vă rugăm să rețineți că NorAtlas este situat în mijlocul naturii, fără vecini și cu o vedere desprinsă din basme.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/52633498?adults=2&federated_search_id=5c0151ec-f29b-4524-aed1-73dd2b092905&source_impression_id=p3_1652090307_pfxoiWoUdeR8Ig6H" title="Link catre Cottage in the Beautiful Pit 4" text="8. Cottage in the Beautiful Pit 4" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>“Cabana este situată în Valea Glajeria, la 3 km de orașul Râșnov, într-o zonă retrasă și liniștită, la marginea pădurii, ideală pentru a vă face să uitați de tumultul zilelor obișnuite!”</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/14025909?adults=2&federated_search_id=15a7d652-7270-4787-8c06-9ea73997ae9b&source_impression_id=p3_1652090317_VDpXEimWYHOuGfsf" title="Link catre Cozy mountain retreat" text="9. Cozy mountain retreat" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>“Amplasată la poalele munților Făgăraș, cabana noastră cochetă oferă o șansă rară de a evada complet în inima naturii, în timp ce vă bucurați de confortul complet al unei case moderne - energie electrică furnizată de panouri solare și un mic generator, apă curentă, toaletă, frigider, șemineu, bucătărie complet utilată și așa mai departe. Dacă vă bucurați de intimitate, natură, aer proaspăt de munte și liniște, vă va plăcea locul nostru.“</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/50320366?adults=2&federated_search_id=7aa34caa-11bd-417a-9f09-dceadcb3c1ba&source_impression_id=p3_1652090919_IOMHR9QaMpo%2FULZz" title="Link catre The Tiny House" text="10. The Tiny House" /></p>
        <div className="mb-6">
          <span>Cum se prezintă?</span><br />
          <span>“The Tiny House este o casă mică pe roți, prietenoasă, izolată în mijlocul naturii, înconjurată de munți, cu tot confortul unei case, dar la doar o scurtă plimbare cu mașina de orașul Brașov! Concepută pentru a oferi o ședere confortabilă pentru cupluri, aventurieri singuratici și persoane care iubesc natura!”</span>
        </div>
        <p className="italic">Toate descrierile au fost preluate de pe Airbnb.</p>
        <h2>Ce am ales?</h2>
        <h3>NorAtlas Heritage, Varlaam, Gura Teghii, Buzău</h3>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletMorning} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am petrecut un weekend relaxant la NorAtlas Heritage, unde ne-am deconectat cu adevărat. Am ajuns destul de târziu vineri seara după 3 ore de condus de la București. Drumurile pentru a ajunge acolo sunt OK, dar există și porțiuni cu gropi. Problema mea a fost că am trecut prin multe sate în care trebuia să reducem mereu viteza, și pe alocuri drumul a avut şi serpentine, iar din cauza răului de mașină, călătoria nu a fost foarte plăcută pentru mine. Dar când am ajuns la destinație și am respirat aerul proaspăt, am simțit că a meritat. Casa de tip tiny-house este situată în satul Varlaam, comuna Gura Teghii, județul Buzău, aproape de masivul Penteleu, pe râul Bâsca.</p>
        <p>După cum au spus în descriere, „NorAtlas este situat în mijlocul naturii, fără vecini și cu o priveliște de basm.” Dar această situație este pe cale să se schimbe, deoarece construiesc o altă casă în fața NorAtlas. Veți avea în continuare puțină intimitate, dar ne-ar fi plăcut să știm acest detaliu înainte de a rezerva cu ei. Depășind această neplăcere, priveliștea este totuși minunată. Oriunde te uiți, vezi doar verdeață, ceea ce este atât de revigorant. Am fost foarte mulțumiți de ideea de a locui singuri într-o casă poziționată într-un astfel de cadru natural, departe de civilizație, dar totuși cu un minim de confort: apă caldă, duș, ustensilele necesare pentru a putea pregăti ceva de mâncare, aer condiționat, Wi-Fi.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletEvening} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletInterior1} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletBreakfast} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Am apreciat faptul că existau plase de ţânţari la toate ferestrele, că în baie era un uscător de păr, că bucătăria era echipată cu tot ce era necesar pentru a pregăti și servi masa, că au lăsat un dezinfectant mic și produse de curățat, și că au lăsat două sticle de apă și două cola în frigider, că au lăsat niște pliante despre ce să vizităm în zonă, că am găsit curățenie, că am avut un grătar în curte și un loc pentru a lua masa în aer liber.</p>
        <p>Gazdele au fost foarte primitoare, dar, ca peste tot, unele aspecte pot fi îmbunătățite. De exemplu, ar fi fost mai potrivit ca papucii să nu fie „de casă” sau să fie confecționați dintr-un material care poate fi dezinfectat. Nu prea ne-a plăcut nici verdeaţa din plastic din baie sau faptul că aranjamentele de Crăciun erau înca prezente în luna mai. Mi-ar fi plăcut să găsesc un coș cu câteva mere în loc de băuturile carbogazoase. Mi-ar fi plăcut, de asemenea, să avem lemn și cărbune pentru grătar. Dar credem că toate aceste aspecte pot fi ușor corectate.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletOutside} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 4" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletView1} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 5" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletView2} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 6" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Am plecat cu gândul să lăsăm mașina pentru weekend și să ne plimbăm în jurul cazării pe jos. Am mers la Piatra lui Visan, pe care am filmat-o și am fotografiat-o din toate unghiurile, iar apoi am urcat dealul din spatele cazării, unde se află o stână, dar am revenit rapid pentru că ne-am temut de câini.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={piataCentrala} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau - Piatra lui Visan" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Aș dori să închei cu cel mai puternic punct al NorAtlas Heritage (aceasta este doar opinia noastră sinceră, desigur): natura înconjurătoare, liniștea din timpul nopții, greierii, ciripitul păsărilor și aerul proaspăt de munte. Acestea au fost motivele pentru care am venit în primul rând, și simțim că ne-am atins scopul.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletInterior2} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzău - Natură splendidă" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletNor1} alt="NorAtlas Heritage - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletNor2} alt="NorAtlas Heritage - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}