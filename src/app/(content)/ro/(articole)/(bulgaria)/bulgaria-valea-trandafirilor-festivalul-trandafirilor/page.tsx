import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";
import Image from "next/image";

import bulgariaRoseFestivalField from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-field.jpeg"
import bulgariaRoseFestivalRosesInField from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-roses-in-field.jpg"
import bulgariaRoseFestivalRosePickingRitual from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-picking-ritual.jpg"
import bulgariaRoseFestivalRosePickingRitualInTheField from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-picking-ritual-in-the-field.jpg"
import bulgariaRoseFestivalRoseBoilingRitual from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-boiling-ritual.jpg"
import bulgariaRoseFestivalKulataEthnographicComplex from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-kulata-ethnographic-complex.jpg"
import bulgariaKazanlukThracianTomb from "../../../../../../../public/bulgaria-rose-festival/bulgaria-kazanluk-thracian-tomb.jpg"
import bulgariaRoseFestivalRoseMuseumKazanlak from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-museum-kazanlak-kazanluk.jpg"
import bulgariaRoseValleyDamascenaEthnographicComplex from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-valley-damascena-ethnographic-complex.jpg"
import bulgariaEtarEthnoVillage from "../../../../../../../public/bulgaria-rose-festival/bulgaria-etar-ethno-village.jpg"

const article = getArticle(33);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalField} alt="O călătorie fermecătoare prin Valea Trandafirilor din Bulgaria" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Dacă îți dorești să experimentezi cel mai rafinat parfum de trandafir, atunci este momentul să iei în considerare o excursie în regiunea Kazanlak, cunoscută și sub numele de Valea Trandafirilor.</p>
        <p>În 2023, am avut plăcerea să participăm la Festivalul Trandafirilor din Kazanlak, Bulgaria, și am fost atât de încântați de experiență încât am simțit nevoia să o împărtășim cu voi.</p>
        <h2>Când are loc Festivalul Trandafirilor?</h2>
        <p>Festivalul Trandafirilor se desfășoară de obicei pe parcursul a câtorva săptămâni la sfârșitul lunii mai și începutul lunii iunie, în perioada când trandafirii Damascena sunt în floare.</p>
        <p>Principalele festivități au loc în zilele de sâmbătă și duminică și includ ceremonia tradițională de culegere a trandafirilor, distilarea petalelor de trandafir pentru a produce ulei esențial, parada, concursuri de frumusețe și concerte.</p>
        <p>Programul festivalului, inclusiv ora și locația tuturor evenimentelor legate de Festivalul Trandafirilor, variază de la an la an și poate fi găsit online sau prin intermediul diferitelor agenții de turism. Pentru anul 2024, am găsit programul pe <LinkExternal link="https://www-kazanlak-bg.translate.goog/page-12782.html?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en" title="Site-ul oficial al fesivalului trandafirilor din Bulgaria" text="site-ul oficial" /> al primăriei.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalRosesInField} alt="Festivalul Trandafirilor din Bulgaria - Trandafiri în câmp" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Cum poți ajunge acolo?</h2>
        <p>Dacă sosești din altă țară și aterizezi la Aeroportul Sofia, îți recomand să închiriezi o mașină sau să rezervi o excursie dedicată Festivalului Trandafirilor cu transport inclus de la o agenție de turism.</p>
        <p>Noi am condus din România cu mașina noastră personală, am trecut granița la Giurgiu-Ruse, am trecut prin Veliko Tarnovo și am ajuns în siguranță la destinație. Au fost doar câteva gropi pe anumite porțiuni ale drumului; în rest, călătoria a fost lină. Am fost plăcut surprinși că majoritatea șoferilor respectau regulile de circulație.</p>
        <h2>Unde am stat?</h2>
        <p>Am fost cazați la hotelul <LinkExternal link="https://www.booking.com/hotel/bg/kings-39-valley-medical-amp-spa.ro.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Kings’ Valley Medical & Spa Hotel" text="Kings’ Valley Medical & Spa" />, o unitate de 5 stele. Atât micul dejun, cât și cina au fost incluse, servite tip bufet suedez, cu o varietate de opțiuni delicioase, similare celor găsite în alte hoteluri din Europa Occidentală.</p>
        <p>Camera a fost deosebit de spațioasă și curată, oferind o priveliște frumoasă spre piscine și spre munții din depărtare.</p>
        <p>Am fost, de asemenea, impresionați de facilitățile SPA și de piscina olimpică interioară, deoarece cele exterioare erau închise în timpul vizitei noastre.</p>
        <h2>Activități și locuri de vizitat</h2>
        <p>Ne-au interesat ritualurile de culegere și fierbere a trandafirilor, precum și vizitarea câtorva muzee. Prin urmare, în acest articol, voi discuta doar despre activitățile pe care le-am experimentat.</p>
        <h3>Ritualul culegerii trandafirilor</h3>
        <p>Ritualul culegerii trandafirilor are loc dimineața devreme în apropierea mai multor sate precum Yasenovo, Rozovo sau Kanchevo. Am plecat de la hotel în jurul orei 8, dar nu eram siguri de locația exactă. Utilizând GPS-ul, ne-am îndreptat către satul Yasenovo, de unde știam dintr-un program de pe internet că ritualul culegerii trandafirilor avea loc în acea zi. Pe drum, am observat numeroase autobuze și mașini parcate pe marginea drumului, semn că ne îndreptam în direcția potrivită.</p>
        <p>La sosire, am plătit 10 leva (în 2023) în numerar pentru a intra în zona desemnată în câmp. Aici, vizitatorii puteau achiziționa coronițe din boboci de trandafiri și alte produse tradiționale bulgărești. Evenimentul a fost cu adevărat un spectacol, cu bulgari de toate vârstele îmbrăcați în costume populare, dansând și cântând melodii folclorice. După aceea, ne-am alăturat festivităților și ne-am aventurat printre tufele parfumate pentru a culege trandafiri.</p>
        <p>A fost cu adevărat o dimineață splendidă!</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalRosePickingRitual} alt="Festivalul Trandafirilor din Bulgaria - Ritualul culegerii trandafirilor" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalRosePickingRitualInTheField} alt="Festivalul Trandafirilor din Bulgaria - Ritualul culegerii trandafirilor în câmp" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Ritualul fierberii petalelor de trandafir</h3>
        <p>Pentru a asista la fierberea petalelor de trandafiri și la extragerea uleiului esențial, ne-am îndreptat spre centrul orașului Kazanluk, către <LinkExternal link="https://www.muzei-kazanlak.org/index.php?option=com_content&view=article&id=48&Itemid=1&lang=en" title="Link catre Complexul Etnografic Kulata" text="Complexul Etnografic Kulata" />.</p>
        <p>Taxa de intrare a fost aproximativ 8 leva per persoană, plătibilă în numerar. Cu toate acestea, pe lângă informațiile despre extragerea uleiului esențial, am avut și ocazia să explorăm grădina și încăperile muzeului etnografic.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalRoseBoilingRitual} alt="Festivalul Trandafirilor din Bulgaria - Ritualul fierberii trandafirilor" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalKulataEthnographicComplex} alt="Festivalul Trandafirilor din Bulgaria - Complexul Etnografic Kulata" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Mormintele Tracice</h3>
        <p>Aflate la mai puțin de 250 de metri de Muzeul Etnografic Kulata, într-un mic parc (Parcul Tyulbeto), veți găsi un mormânt tracic, împreună cu o replică a acestuia. Aceasta din urmă este deschisă vizitatorilor.</p>
        <p>Pentru adresă, orele de vizitare și prețurile biletelor, vă rugăm să consultați <LinkExternal link="https://www.muzei-kazanlak.org/index.php?option=com_content&view=article&id=63&Itemid=87&lang=en" title="Link catre site-ul muzeului Kazanlak" text="acest website" />.</p>
        <p>Această zonă este cunoscută și sub numele de Valea Regilor Traci, unde au fost descoperite sute de morminte, altare și comori tracice.</p>
        <p>La doar 15 minute cu mașina de Kazanlak, puteți explora mormintele lui Seuthes III, Shushmanets, Griffins și Ostrusha.</p>
        <p>În plus, multe dintre artefactele și statuile descoperite în aceste morminte sunt expuse la Muzeul Istoric Iskra din Kazanluk.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaKazanlukThracianTomb} alt="Bulgaria, Kazanlâk - Mormânt Tracic" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Muzeul Trandafirilor</h3>
        <p>Muzeul Trandafirilor din Kazanluk expune o varietate de artefacte istorice, unelte tradiționale și afișaje interactive care ilustrează procesul de extracție a uleiului de trandafir. Vizitatorii au oportunitatea de a afla despre importanța trandafirilor în cultura, folclorul și economia bulgară.</p>
        <p>Atât în curtea muzeului, cât și în parcul din fața muzeului, vizitatorii pot admira, fotografia și mirosi zeci de soiuri de trandafiri.</p>
        <p>Parfumul lor este intoxicant în cel mai plăcut mod posibil. Am detaliat despre trandafiri și frumusețea lor în <Link prefetch={false} href="/ro/explorand-frumusetea-parfumata-a-vaii-trandafirilor-din-bulgaria" title="Explorând frumusețea parfumată a Văii Trandafirilor din Bulgaria" className="text-blue-600 underline hover:text-blue-800">acest articol</Link>.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseFestivalRoseMuseumKazanlak} alt="Festivalul Trandafirilor din Bulgaria - Muzeul Trandafirului din Kazanlâk" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Complexul Etnografic Damascena</h3>
        <p>La aproximativ 25 de kilometri de Kazanluk, în inima Văii Trandafirilor, se află <LinkExternal link="https://www.damascena.net/%D0%BF%D1%8A%D1%80%D0%B2%D0%B0-%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B0-%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D0%B0/?lang=en" title="Link catre site-ul Complexului Etnografic Damascena" text="Complexul Etnografic Damascena" />. Acest complex oferă vizitatorilor o oportunitate unică de a explora și experimenta diverse aspecte ale patrimoniului bulgar, cu accent pe metodele tradiționale de cultivare a trandafirilor și producția de ulei de trandafir.</p>
        <p>În cadrul complexului, există un restaurant unde vizitatorii pot degusta bucătăria autentică bulgară și băuturile. Deoarece noi nu am luat masa aici, nu putem oferi o recomandare în acest sens.</p>
        <p>De asemenea, în cadrul complexului se află un magazin de suveniruri unde puteți achiziționa produse cosmetice pe bază de ulei de trandafir sau levănțică, precum și diverse dulciuri și băuturi.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaRoseValleyDamascenaEthnographicComplex} alt="Festivalul Trandafirilor din Bulgaria - Muzeul Trandafirului din Kazanlâk" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Satul Etnografic Etar</h3>
        <p>Dacă, asemenea nouă, călătorești cu mașina, ia în considerare vizitarea tatului etnografic Etar, situat la 45 de kilometri de Kazanluk și la 53 de kilometri de Veliko Tarnovo.</p>
        <p>Etar este un muzeu în aer liber construit ca o replică a unui sat bulgăresc tipic din secolele al XVIII-lea și al XIX-lea. Se mândrește cu case din lemn bine conservate și restaurate, ateliere, mori de apă și alte structuri, toate dispuse de-a lungul străzilor cu pavele. Încorporat într-un peisaj natural pitoresc, satul este înconjurat de păduri și de apele vii ale râului.</p>
        <p>Vizitatorii pot explora diverse ateliere meșteșugărești, inclusiv prelucrarea lemnului, olăritul, țesutul și prelucrarea metalelor. Aceste ateliere oferă o privire asupra abilităților și tehnicilor folosite de meșterii bulgari acum câteva secole.</p>
        <p>Un element remarcabil al Etarului este moara sa de apă funcțională, care ilustrează importanța energiei hidraulice în economia și industria tradițională bulgară. În plus, vizitatorii pot savura bucătăria autentică bulgară la tavernele și restaurantele satului, servind preparate realizate cu ingrediente locale.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={bulgariaEtarEthnoVillage} alt="Bulgaria - Satul Etnografic Etar" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Concluzie</h2>
        <p>De la fascinantele ritualuri de culegere și fierbere a trandafirilor la explorarea vechilor morminte tracice și a complexelor etnografice, regiunea Kazanlak oferă o multitudine de experiențe care captivează simțurile și îmbogățesc sufletul. Fie că te lași răsfățat de bucătăria bulgară, rătăcești prin muzee în aer liber sau inspiri parfumul îmbătător al trandafirilor, o călătorie în Valea Trandafirilor promite o aventură de neuitat, plină de frumusețe, cultură și minune eternă.</p>
    </main>
  </div>
  );
}