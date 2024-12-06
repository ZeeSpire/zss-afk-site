import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";
import Image from "next/image";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import cityPhoto1 from "../../../../../../../public/copenhaga/DSCF0700_dioxdk-square.jpeg";
import cityPhoto2 from "../../../../../../../public/copenhaga/DSCF1002_gb5c3c-square.jpeg";
import cityPhoto3 from "../../../../../../../public/copenhaga/DSCF1163_hvfg2z.jpeg";
import cityPhoto4 from "../../../../../../../public/copenhaga/DSCF1502_hjmlbc.jpeg";
import cityPhoto5 from "../../../../../../../public/copenhaga/DSCF1559_j0msbq.jpeg";
import cityPhoto6 from "../../../../../../../public/copenhaga/DSCF1831_zbgp3z.jpeg";
import pinImage41 from "../../../../../../../public/copenhaga/pin-copenhagen-3days_qftven.jpeg";
import pinImage4 from "../../../../../../../public/copenhaga/pin-copenhagen-3days-2_mszdqv.jpeg";
import activityPhoto1 from "../../../../../../../public/copenhaga/IMG_20210910_092256_qry4l9.jpeg";
import activityPhoto2 from "../../../../../../../public/copenhaga/IMG_20210910_094245_acxxaa.jpeg";
import activityPhoto3 from "../../../../../../../public/copenhaga/IMG_20210911_113916_oa1oeu-square.jpeg";
import activityPhoto4 from "../../../../../../../public/copenhaga/IMG_20210911_152438_pmsfkf.jpeg";


const article = getArticle(4);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto2} alt="Trei zile în Copenhaga" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <hr className="mb-6" />
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div>
            <h2>Day 1</h2>
            <div><a href="#Nyhavn" className="text-blue-600 underline hover:text-blue-800">Nyhavn</a></div>
            <div><a href="#Old_Stock_Exchange" className="text-blue-600 underline hover:text-blue-800">Vechea Bursă</a></div>
            <div><a href="#Christiansborg_Palace" className="text-blue-600 underline hover:text-blue-800">Palatul Christiansborg</a></div>
            <div><a href="#boat_tour" className="text-blue-600 underline hover:text-blue-800">Plimbare cu barca (biblioteca Black Diamond, Opera, Nyhavn și statuia Micuţei Sirene, etc.)</a></div>
            <div><a href="#Agnete_Statue" className="text-blue-600 underline hover:text-blue-800">Statuia Agnete și a bărbatului-pește (Merman)</a></div>
            <div><a href="#Gammel_Strand" className="text-blue-600 underline hover:text-blue-800">Gammel Strand</a></div>
            <div><a href="#City_Hall_Square" className="text-blue-600 underline hover:text-blue-800">Piața Primăriei</a></div>
            <div><a href="#Stroget_street" className="text-blue-600 underline hover:text-blue-800">strada Strøget</a></div>
          </div>
          <div>
            <h2>Day 2</h2>
            <div><a href="#Torvehallerne_market" className="text-blue-600 underline hover:text-blue-800">Torvehallerne market</a></div>
            <div><a href="#Botanical_Garden" className="text-blue-600 underline hover:text-blue-800">Grădina Botanică</a></div>
            <div><a href="#Natural_History_Museum" className="text-blue-600 underline hover:text-blue-800">Muzeul de Istorie Naturală al Danemarcei</a></div>
            <div><a href="#Rosenborg_Castle" className="text-blue-600 underline hover:text-blue-800">Castelul Rosenborg</a></div>
            <div><a href="#Frederiks_Church" className="text-blue-600 underline hover:text-blue-800">Biserica lui Frederik</a></div>
            <div><a href="#Amalienborg" className="text-blue-600 underline hover:text-blue-800">Amalienborg</a></div>
            <div><a href="#Round_Tower" className="text-blue-600 underline hover:text-blue-800">Turnul Rotund (Rundetaarn)</a></div>
            <div><a href="#Tivoli_Gardens" className="text-blue-600 underline hover:text-blue-800">Grădinile Tivoli</a></div>
          </div>
          <div>
            <h2>Day 3</h2>
            <div><a href="#Amager_StrandPark" className="text-blue-600 underline hover:text-blue-800">Amager StrandPark</a></div>
            <div><a href="#Den_Bla_Planet" className="text-blue-600 underline hover:text-blue-800">Acvariul Național al Danemarcei, Den Blå Planet</a></div>
            <div><a href="#Church_of_Our_Saviour" className="text-blue-600 underline hover:text-blue-800">Biserica Mântuitorului</a></div>
            <div><a href="#Freetown_Christiania" className="text-blue-600 underline hover:text-blue-800">Freetown Christiania</a></div>
            <div><a href="#Ny_Carlsberg_Glyptotek" className="text-blue-600 underline hover:text-blue-800">Ny Carlsberg Glyptotek</a></div>
            <div><a href="#Assistens_Cemetery" className="text-blue-600 underline hover:text-blue-800">Cimitirul Assistens</a></div>
            <div>&nbsp;</div>
            <div><a href="#Extra" className="text-blue-600 underline hover:text-blue-800">Alte opțiuni</a></div>
          </div>
        </div>
        <hr className="mb-6" />
        <p>Aceasta este ghidul meu despre ce poți face în Copenhaga în doar trei zile pentru a profita la maxim de experiență. Însă mai întâi, asigură-te că ai citit deja acest articol: <Link prefetch={false} href="/ro/sfaturi-pentru-prima-vizita-in-copenhaga" title="Sfaturi pentru prima vizită în Copenhaga" className="text-blue-600 underline hover:text-blue-800">Sfaturi pentru prima vizită în Copenhaga</Link>. Acesta include multe informații despre cazări speciale, mâncarea daneză, mijloacele de transport în oraș și Copenhagen Card, care îți va economisi bani și îți va permite să folosești transportul public la discreție. De asemenea, ar trebui să citești și acest articol pentru a afla mai multe despre ce poți vizita în Copenhaga: <Link prefetch={false} href="/ro/atractii-gratuite-de-vizitat-in-copenhaga" title="15 atracții gratuite în Copenhaga" className="text-blue-600 underline hover:text-blue-800">15 atracții gratuite în Copenhaga</Link>. Unele dintre aceste atracții sunt incluse în ghidul de mai jos, dar majoritatea nu sunt, așa că depinde de tine să le vizitezi dacă ai puțin timp în plus. Și nu în ultimul rând, uită-te la videoclipurile pe care le-am pregătit pentru a-ți face o impresie despre ce oferă Copenhaga.</p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div>
            <Youtube videoId="zAgFIyUTVNI" />
          </div>
          <div>
            <Youtube videoId="tms-6Y5OYFc" />
          </div>
        </div>
        <h2>Ziua 1</h2>
        <p>Fiind cel mai popular loc din Copenhaga, ar putea fi o idee bună să vizitezi Nyhavn dimineața devreme. Zona va fi mult mai liberă, iar tu poți face pozele dorite fără bătaie de cap.</p>
        <p>De acolo, ai o plimbare de 15 minute până la clădirea <a id="Old_Stock_Exchange">Bursei Vechi</a>, cu o fațadă impresionantă și o turlă în formă de cozi de dragon împletite.</p>
        <p>După 100 de metri, vei ajunge la <a id="Christiansborg_Palace">Palatul Christiansborg</a>. Vei avea nevoie de patru bilete pentru a vizita diferite zone ale palatului: Sălile de Recepție Regale, Bucătăria Regală, Ruinele de sub Palat și Grajdurile Regale. Cu Cardul Copenhaga, le vei avea pe toate incluse. Noi ne-am bucurat cel mai mult de Sălile de Recepție Regale.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto3} alt="Palatul Christiansborg - Grajdurile Regale" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto2} alt="Palatul Christiansborg - în afara palatului" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto1} alt="Palatul Christiansborg - în interiorul palatului" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>După ce ai încheiat vizita regală, traversează strada pentru a face <a id="boat_tour">o plimbare cu barca</a> de la stația Ved Stranden, de asemenea inclusă în Cardul Copenhaga. Turul este ghidat, iar tu vei vedea unele dintre atracțiile principale precum biblioteca Black Diamond, Opera, Nyhavn și statuia Micuţei Sirene. Acest tur durează aproximativ o oră.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto6} alt="Copenhaga - libraria Black Diamond" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Când te întorci la Ved Stranden, uită-te în canal după statuia <a id="Agnete_Statue">Agnete și a bărbatului-pește (Merman)</a>. Sculpturile din bronz înfățișează un bărbat-pește și cei șapte copii ai săi cerându-i Agnetei să se întoarcă acasă. Am găsit această statuie înspăimântătoare și interesantă în același timp.</p>
        <p>După alți 150 de metri, vei ajunge la <a id="Gammel_Strand">Gammel Strand</a> care este considerat locul unde a luat naştere oraşul. Copenhaga a fost fondată ca un mic așezământ de pescuit și comerț în secolul al XI-lea în această zonă. Casele datează din secolele al XVIII-lea și al XIX-lea și sunt la fel de fermecătoare și pitorești ca cele din Nyhavn.</p>
        <p>Mergi spre <a id="City_Hall_Square">Piața Primăriei</a>, una dintre cele mai importante piețe publice din Copenhaga, fiind un loc popular pentru evenimente, concerte și demonstrații. De acolo, poți merge la cumpărături pe <a id="Stroget_street">strada Strøget</a>, una dintre cele mai lungi străzi comerciale pietonale din Europa. Vei trece pe lângă Fântâna Caritas și Fântâna Stork și vei ajunge la Piața King’s New Square, cea mai mare piață din oraș înconjurată de clădiri impresionante. Poți cumpăra un hot dog de la un vânzător ambulant și poți să-ți petreci prima seară în unul dintre cele mai fericite orașe din lume plimbându-te pe străzi sau poți reveni în Nyhavn pentru a admira acest loc estetic și pe timp de noapte.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m66!1m8!1m3!1d8998.858616707283!2d12.5779371!3d55.676562!3m2!1i1024!2i768!4f13.1!4m55!3e2!4m5!1s0x46525322aa676daf%3A0x99c2a00928e5eaeb!2sNyhavn%2C%20K%C3%B8benhavn%20K%2C%20Denmark!3m2!1d55.679776!2d12.591304099999999!4m5!1s0x4652531666d78e63%3A0xcb924fd6aad3ae55!2sB%C3%B8rsen%2C%20Copenhagen%2C%20Denmark!3m2!1d55.6755013!2d12.5840128!4m5!1s0x4652538d12a41301%3A0xb44cfa4245bd8df4!2sChristiansborg%20Copenhagen%2C%20Christiansborg%20Palace%2C%20Copenhagen%2C%20Denmark!3m2!1d55.676289!2d12.5804019!4m5!1s0x4652531132405b13%3A0xd5b59a4549d09a53!2sThe%20Grand%20Tour%20of%20Copenhagen%2C%20Ved%20Stranden%2C%20Copenhagen%2C%20Denmark!3m2!1d55.6775847!2d12.5804913!4m5!1s0x46525316dcbff121%3A0xffc50f2c11ae9ed5!2sAgnete%20og%20Havmanden%2C%20H%C3%B8jbro%2C%20Copenhagen%2C%20Denmark!3m2!1d55.677639299999996!2d12.5802315!4m5!1s0x46525316cc48f263%3A0x3cf3d1e36592af02!2sGammel%20Strand%2C%20K%C3%B8benhavn%2C%20Denmark!3m2!1d55.677633799999995!2d12.5783206!4m5!1s0x46525321d36e3015%3A0x117d3c48892c496f!2zU3Ryw7hnZXQsIFN0csO4Z2V0LCBDb3BlbmhhZ2VuLCBEZW5tYXJr!3m2!1d55.6773016!2d12.5713223!4m5!1s0x465253182013b227%3A0x36248075ccf0be0!2sKing's%20New%20Square%2C%20Kongens%20Nytorv%2C%20Copenhagen%2C%20Denmark!3m2!1d55.680521999999996!2d12.585956999999999!4m5!1s0x46525322aa676daf%3A0x99c2a00928e5eaeb!2sNyhavn%2C%20K%C3%B8benhavn%20K%2C%20Denmark!3m2!1d55.679776!2d12.591304099999999!5e0!3m2!1sen!2sro!4v1642610179190!5m2!1sen!2sro" />
        <h2>Ziua 2</h2>
        <p>Ia-ți micul dejun în piața <a id="Torvehallerne_market">Torvehallerne</a>. Sandwich-ul cu rață de la Ma Poule este absolut delicios. Sau, dacă preferi ceva dulce, încearcă terciul de la Grød cu sos de caramel făcut în casă, migdale prăjite și mere proaspete. Sau mai bine încearcă-le pe amândouă.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto4} alt="Copenhaga - Piata Torvehallerne" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>După micul dejun, fă o plimbare matinală în <a id="Botanical_Garden">Grădina Botanică</a>, casa celei mai mari colecții de plante din întreaga lume și, poate, vei avea norocul să întâlnești o veveriță jucăuşă. Vizita în interiorul serei Victorian Palm House este inclusă în Cardul Copenhaga.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto4} alt="Copenhaga - Grădina Botanică" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Apoi îndreaptă-te către <a id="Natural_History_Museum">Muzeul de Istorie Naturală al Danemarcei</a>, situat aproape de Grădina Botanică. În curtea interioară, vei vedea Agpalilik - unul dintre cei mai mari meteoriţi de fier din lume, așezat pe aceeași sanie de oțel care a fost folosită pentru a-l trage din stânci în nord-vestul Groenlandei.</p>
        <p>La doar 400 de metri distanță, vei ajunge la <a id="Rosenborg_Castle">Castelul Rosenborg</a>. Chiar dacă biletul este inclus în Cardul Copenhaga, totuși trebuie să rezervi un interval de timp înainte de vizită. Grădinile castelului sunt numai bune pentru o plimbare. Dacă te afli acolo la ora 11:30 A.M., poți vedea Den Kongelige Livgarde, garda care defilează de la Castelul Rosenborg și efectuează schimbarea gărzii în fața Amalienborg la ora 12:00 P.M.</p>
        <p>Nu uita să te oprești și să admiri <a id="Frederiks_Church">Biserica lui Frederik</a>, cunoscută popular sub numele de Marmorkirken, în drumul tău spre <a id="Amalienborg">Amalienborg</a>.</p>
        <p>Pentru privelişti asupra Copenhagăi, la exact 34.8 metri deasupra străzii, îndreaptă-te către <a id="Round_Tower">Turnul Rotund (Rundetaarn)</a>. Turnul Rotund a fost construit pentru a permite astronomilor de la Universitatea din Copenhaga să privească stelele mult deasupra luminilor și fumului orașului și a fost terminat în 1642. Regele Christian al IV-lea a primit sfatul să-l plaseze în afara Copenhagăi, dar a vrut să fie în mijlocul orașului, aproape de restul universității. Observatorul este cel mai vechi observator funcțional din Europa. În interiorul turnului, vei găsi și The Hollow Core (Nucleul Gol). Poți sta pe o podea de sticlă și privi în jos de la 25 de metri. Înfricoșător. În plus față de observator, nucleul gol și rampa spiralată care urcă până la platformă, vei vedea și Planetariul, Sala Bibliotecii și Turnul Clopotelor.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto3} alt="Copenhaga - vazuta de sus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Încheie-ți ziua cu o vizită plină de bucurie la <a id="Tivoli_Gardens">Grădinile Tivoli</a>, al doilea cel mai vechi parc de distracții din lume, care și-a deschis porțile în 1843. Scriitorul de povești de basm Hans Christian Andersen l-a vizitat de mai multe ori, la fel și Walt Disney, care a fost atât de fermecat de Tivoli, încât a exclamat către soția sa: „Iată cum ar trebui să fie un loc de amuzament!”. Cardul Copenhaga îți acoperă intrarea, dar dacă dorești să încerci atracțiile, trebuie să achiziționezi bilete suplimentare sau o brățară pentru mai multe curse.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m70!1m12!1m3!1d10856.239616869032!2d12.568397289156245!3d55.679891694521366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m55!3e2!4m5!1s0x465253051285311b%3A0x7374ede35ce9623b!2sTorvehallerne!3m2!1d55.6836899!2d12.569765499999999!4m5!1s0x4652531ad1631ced%3A0x1336d3d2f30fb334!2sBotanical%20Garden!3m2!1d55.6874295!2d12.5729916!4m5!1s0x4652531c98c88a69%3A0xe671ef5e7dd8fd4e!2sStatens%20Naturhistoriske%20Museum!3m2!1d55.6874652!2d12.5767806!4m5!1s0x4652531b429e531d%3A0x52359c3345281b3c!2sRosenborg%20Castle!3m2!1d55.685857!2d12.577218!4m5!1s0x46525318a59afc11%3A0xb1f38e76a7e7960b!2sMarmorkirken%20Station!3m2!1d55.6849827!2d12.5895742!4m5!1s0x46525322363e0673%3A0x5cf17fab9d15553f!2sAmalienborg!3m2!1d55.684058799999995!2d12.593020099999999!4m5!1s0x46525319c09c8cb3%3A0xbbe45b15a6fc4c20!2sAtelier%20September!3m2!1d55.6821553!2d12.5829869!4m5!1s0x4652531a7dbeff47%3A0x6c74bdf274c54d8!2sRundet%C3%A5rn!3m2!1d55.681335499999996!2d12.5757152!4m5!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2sTivoli%20Gardens%2C%20Vesterbrogade%2C%20K%C3%B8benhavn%20V%2C%20Denmark!3m2!1d55.673684099999996!2d12.5681471!5e0!3m2!1sen!2sro!4v1642617728755!5m2!1sen!2sro" />
        <h2>Ziua 3</h2>
        <p>Începe-ți ziua cu niște vibrații pozitive la <a id="Amager_StrandPark">Amager StrandPark</a>, o plajă artificială lungă de 2 kilometri și un loc popular pentru locuitorii activi din Copenhaga.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto5} alt="Copenhaga - Amager StrandPark" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Apoi îndreaptă-te către <a id="Den_Bla_Planet">Acvariul Național al Danemarcei, Den Blå Planet</a>. Biletul nu este inclus în Copenhagen Card și costă aproximativ 25 EUR/28 USD, dar am considerat că merită. Accesul la Den Blå Planet este limitat, iar biletele trebuie achiziționate în avans pentru un interval de timp prestabilit prin intermediul magazinului online. Am văzut unele specii foarte interesante, precum Arapaima, un pește gigantic din Amazon. Aceștia se numără printre cei mai mari pești de apă dulce din lume și sunt cu adevărat impresionanți. O altă caracteristică interesantă a acestui acvariu este posibilitatea de a atinge unele dintre animale. Eu am atins o stea de mare și o pisică de mare.</p>
        <p>De la stația de metrou Kastrup, vei ajunge în Christianshavn în 20 de minute cu M2. În apropiere vei găsi <a id="Church_of_Our_Saviour">Biserica Mântuitorului</a>, o biserică barocă, celebră în special pentru scara exterioară în spirală care poate fi urcată până în vârf. Ai grijă însă, cele 400 de trepte pot fi foarte înguste și abrupte, dar priveliștea merită pe deplin.</p>
        <p>În apropiere de Biserica Mântuitorului se află <a id="Freetown_Christiania">Freetown Christiania</a>, o comunitate care are propriile reguli și reglementări complet independente de guvernul danez. Poți găsi multe informații despre Christiania online și este descrisă peste tot ca o atracție pe care trebuie să o vezi în Copenhaga. Acesta este motivul pentru care o menționez, dar trebuie să spun că nu mi-a plăcut deloc. Nu am simțit acea atmosferă hygge pe care am simțit-o în restul Copenhagăi, nu era nici curată și nu m-am simțit în siguranță, deși toată lumea spune că este un loc sigur. Pe scurt, mi se pare amuzant faptul că în momentul redactării acestui articol, Christiania are 24.000 de recenzii pe Google cu nota 4.4, în timp ce una dintre cele mai iconice imagini ale Copenhagăi - statuia Micuţei Sirene - are doar 15.000 de recenzii cu nota 4.0.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto1} alt="Copenhaga - Plimbare pe strazi" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Îndreaptă-te către <a id="Ny_Carlsberg_Glyptotek">Ny Carlsberg Glyptotek</a> pentru a te bucura de un muzeu de artă cu adevărat frumos și pentru a întâlni câteva mumii egiptene.</p>
        <p>Încheie-ți ziua într-un mod liniștit și relaxant, așa cum a început, dar de data aceasta în <a id="Assistens_Cemetery">Cimitirul Assistens</a>. Nu știu ce-ţi imaginezi, dar cimitirul este de fapt un loc în care mulți localnici ies la plimbare, și este ca un parc mai mare plin de veverițe. În plus, este locul de odihnă al multor danezi celebri, precum autorul Hans Christian Andersen, “părintele existenţialismului” Søren Kierkegaard și pictorul din Epoca de Aur Christen Købke.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d36006.421435968135!2d12.568043736849539!3d55.66462080324002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m5!1s0x4652536a5bd9c8a7%3A0xf9685ff987876942!2sAmager%20Strandpark%2C%20Amager%20Strand%20Promenaden%201%2C%202300%20K%C3%B8benhavn%2C%20Denmark!3m2!1d55.654532499999995!2d12.6496067!4m5!1s0x4653ab7d0c9194f5%3A0x631374f9159e11dc!2sDen%20Bl%C3%A5%20Planet%2C%20Jacob%20Fortlingsvej%2C%20Kastrup%2C%20Denmark!3m2!1d55.6381446!2d12.6561446!4m5!1s0x46525339463aedc9%3A0xc11801eab74fb42b!2sChurch%20of%20Our%20Saviour%2C%20Sankt%20Ann%C3%A6%20Gade%2C%20Copenhagen%2C%20Denmark!3m2!1d55.6727591!2d12.5939553!4m5!1s0x4652533907ed3da7%3A0xae183de2099528b9!2sChristiania%2C%20Copenhagen%20Municipality%2C%20Denmark!3m2!1d55.673412!2d12.5964061!4m5!1s0x465253130411747d%3A0x599f2e4fe338e7a1!2sNy%20Carlsberg%20Glyptotek%2C%20Dantes%20Plads%2C%20Copenhagen%2C%20Denmark!3m2!1d55.672979999999995!2d12.572543!4m5!1s0x465253ac149dd23b%3A0x68e7d52ac48fdeb!2sAssistens%20Kirkeg%C3%A5rd%2C%20Kapelvej%2C%20K%C3%B8benhavn%20N%2C%20Denmark!3m2!1d55.6910102!2d12.550153199999999!5e0!3m2!1sen!2sro!4v1642617754807!5m2!1sen!2sro" />
        <h2>Concluzie</h2>
        <p>Acest ghid a fost bazat pe experiența noastră în Copenhaga. Am stat 5 zile în septembrie și vremea a fost destul de plăcută pentru a merge mult pe jos. Am vizitat mai multe atracții în acele 5 zile decât am prezentat aici, dar am selectat cele care se potriveau cel mai bine unui plan de 3 zile. Existau multe alte atracții pe care voiam să le vizităm, dar pur și simplu nu am putut în timpul pe care l-am avut la dispoziţie. De asemenea, am vizitat Copenhaga în timpul pandemiei și unele atracții erau închise din diferite motive. Pe de altă parte, nu erau atât de mulți turiști.</p>
        <p><a id="Extra"></a>Unele dintre atracțiile care sunt pe lista noastră pentru o viitoare călătorie în Copenhaga:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.visitcarlsberg.com/" title="Link catre fabrica de bere Carlsberg" text="Fabrica de bere Carlsberg" /></li>
          <li>Amalienborg</li>
          <li>Biblioteca Regală (Det Kongelige Bibliotek)</li>
          <li>Turnul Primăriei</li>
          <li>Vestre Kirkegård</li>
          <li>Cina într-un restaurant elegant</li>
          <li>Muzeul chihlimbarului</li>
          <li>Şi multe altele</li>
        </ul>
        <p>Poți alege Copenhaga pentru o escapadă de 3 zile pentru a vizita principalele atracții, dar acest oraș minunat este genul de destinație în care vei vrea să te întorci.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage41} alt="Trei zile în Copenhaga - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage4} alt="Trei zile în Copenhaga - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}