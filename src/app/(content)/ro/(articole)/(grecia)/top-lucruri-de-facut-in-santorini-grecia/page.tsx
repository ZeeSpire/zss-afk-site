import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Youtube from "@/components/youtube/Youtube";

import santoriniPanoSunset from "../../../../../../../public/santorini/e-PANO_20210714_203525_copy_yjfd0q.jpeg";
import santoriniSunrise from "../../../../../../../public/santorini/e-IMG_20210715_064726_lmfke3.jpg";
import santoriniMorning from "../../../../../../../public/santorini/IMG_20210714_071841_uxxtj1.jpg";
import santoriniE1 from "../../../../../../../public/santorini/e_IMG_20210709_142741_kc3mxa.jpg";
import santoriniNightView from "../../../../../../../public/santorini/e-IMG_20210712_210954_copy_b15urj.jpg";
import santoriniDay1 from "../../../../../../../public/santorini/e-IMG_20210710_133647_copy_uwdges.jpg";
import santoriniNight2 from "../../../../../../../public/santorini/e-IMG_20210714_211333_iu0wrg.jpg";
import santoriniMorning2 from "../../../../../../../public/santorini/e-IMG_20210709_103956_gmkr2w.jpg";
import santoriniDrone1 from "../../../../../../../public/santorini/e-DJI_0596_copy_16_9_ekcjmf.jpg";
import santoriniThings from "../../../../../../../public/santorini/santo-things_vbanad.jpg";
import santoriniAfternoon from "../../../../../../../public/santorini/e-IMG_20210710_183249_copy_evjdu9.jpg";
import santoriniDrone2 from "../../../../../../../public/santorini/e-DJI_0348_copy_16_9_cszba2.jpg";
import santoriniDay2 from "../../../../../../../public/santorini/e-IMG_20210711_121317_copy_2_16_9_xmsou3.jpg";
import santoriniNight4 from "../../../../../../../public/santorini/e-IMG_20210714_215359_copy_ntc3iy.jpg";
import santoriniThings2 from "../../../../../../../public/santorini/santo-things2_hkswqu.jpg";
import santoriniDay3 from "../../../../../../../public/santorini/e-IMG_20210712_151502_fqug0r.jpg";

const article = getArticle(15);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniPanoSunset} alt="Top 15 lucruri de făcut în Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Santorini pare desprinsă dintr-o carte poștală, însă acest loc este mult mai mult decât o simplă imagine frumoasă. Este vorba despre apusuri de soare uimitoare, priveliști care îți taie respirația, hoteluri luxoase, oameni prietenoși, romantism plutind în aer și mâncare delicioasă.</p>
        <p>Mai întâi, să începem cu câteva informații generale despre această insulă grecească, pentru că înainte de a călători acolo, am încercat să citim cât mai mult despre ea și am descoperit niște lucruri extrem de interesante.</p>
        <p>Santorini este un grup mic, circular de insule în sudul Mării Egee și formează membrul cel mai sudic al Cicladelor.</p>
        <p>Inițial, Santorini a fost o insulă vulcanică rotundă (unul dintre numele sale anterioare a fost Strongýlē, ceea ce înseamnă „cea rotundă”). Numele de Santorini provine de la Sfânta Irina, dar numele oficial al insulei este de fapt Thira.</p>
        <p>Vulcanul insulei a erupt de mai multe ori, cu grade variate de explozivitate. Unele erupții au format caldera (un termen care provine din latină caldaria, însemnând „oală de gătit”). Una dintre cele mai mari erupții din istorie, cunoscută sub numele de erupția minoică, a avut loc în anul 1600 î.Hr. și se presupune că a dus la prăbușirea civilizației minoice de pe insula Creta.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniAfternoon} alt="caldera Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Santorini include acum insulele locuite Thira și Therasia, precum și insulele nelocuite Nea Kameni, Palea Kameni și Aspronisi. Nea Kameni este partea activă rămasă a vulcanului și poate fi vizitată.</p>
        <p>Capitala este orașul Fira, care este convenabil situat în centrul insulei și la cinci kilometri de aeroport.</p>
        <p>Cele mai bune luni pentru a vizita Santorini sunt iunie și septembrie, dar noi am fost acolo în mijlocul lunii iulie și ne-am distrat de minune, în ciuda vânturilor puternice, soarelui arzător și mulțimilor de turiști.</p>
        <p>Vânturile Meltemi sunt vânturi puternice, uscate, nordice, care suflă în Marea Egee din luna mai până în octombrie, având intensitatea și durata maximă în iulie și august.</p>
        <p>Deși este o insulă foarte mică, simt că are multe de oferit, există ceva pentru fiecare. Așadar, depinde de tine să alegi ce îți place cel mai mult.</p>
        <p>Am stat în Santorini 7 nopți/8 zile și am schimbat 3 hoteluri diferite. Am stat în Oia, Akrotiri și Imerovigli și am explorat aproape întreaga insulă din aceste puncte. Este perfect în regulă dacă rămâi într-un singur loc pentru că insula este destul de mică și poate fi străbătută ușor, mai ales dacă închiriezi o mașină. Noi am închiriat o mașină pentru a călători de-a lungul și de-a latul insulei și a fost cea mai bună decizie. Toate cele trei hoteluri în care am stat ne-au oferit parcare privată, dar a fost un pic dificil să găsim locuri de parcare în locurile publice.</p>
        <Youtube videoId="IeswQFH_G-w" />
        <p>Am alcătuit o listă cu 15 lucruri care pot fi făcute în Santorini. Le poți face pe toate într-o săptămână petrecută pe insulă sau poate chiar mai puțin. Alege ce ți se potrivește cel mai bine.</p>
        <h2>1. Plimbă-te pe străzile din Oia</h2>
        <p>În Oia, oriunde te-ai uita, apare o altă priveliște perfectă pentru fotografii, e ca și cum ai fi într-un tablou. Deși multe cărări sunt private, poți cel puțin să explorezi cât mai mult din acest frumos cartier plin de magazine de suveniruri. Din toate suvenirurile care puteau fi cumpărate, ni s-au părut interesante niște figurine suflate în aur, în forma unor copaci de măslin. Erau destul de scumpe, dar foarte frumoase. Aici sunt multe locuri demne de fotografiat, precum cupolele albastre din Oia (Biserica Ortodoxă Sfântul Spiridon și Biserica Ortodoxă Învierea Domnului), morile de vânt și celebrele case Kastro Oia. De asemenea, poți vizita ruinele Castelului din Oia, de unde poți urmări apusul.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight4} alt="Santorini, opera de arta care reprezinta un măslin" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniMorning} alt="Doamnă frumoasă pe străzile din Santorini" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSunrise} alt="Casele Kastro din Oia - Santorini" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>2. Mănâncă pește proaspăt prins în Golful Ammoudi</h2>
        <p>Poți ajunge la acest minunat port mic plin de restaurante care promit pește și fructe de mare proaspăt prins, coborând scările din Oia sau cu mașina (adaugă destinația Golful Ammoudi pe Google Maps). Te rog să eviți utilizarea măgarilor pentru a te întoarce în Oia. Acesta este site-ul uneia dintre tavernele de pește situate în Golful Ammoudi. Au multe specialități locale, cum ar fi caracatița uscată la soare. Există și o zonă pentru sărituri de pe stânci. Noi nu am îndrăznit să sărim, dar a fost distractiv să-i urmărim pe alții făcând-o.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNightView} alt="Ammoudi Bay, Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>3. Privește apusul</h2>
        <p>Nu contează de unde urmărești apusul, acesta va picta niște amintiri fantastice pe care le poți păstra în inimă. Santorini este o destinație cunoscută pentru apusurile sale frumoase. Dacă vrei să vezi top 5 locuri de unde poți urmări apusul în Santorini, consultă <Link prefetch={false} href="/ro/cele-mai-bune-locuri-de-privit-apusul-in-santorini" title="Cele mai bune locuri pentru a privi apusul în Santorini" className="text-blue-600 underline hover:text-blue-800">acest articol</Link>.</p>
        <h2>4. Bucură-te de plajele remarcabile ale Santorini</h2>
        <p>Din cauza erupțiilor vulcanice, vei găsi aici unele dintre cele mai interesante și deosebite plaje, cum ar fi Vlychada, de exemplu. Poți alege un tur cu barca și să vizitezi Plaja Roșie, Plaja Albă și Plaja Neagră. Noi am mers doar la Plaja Roșie cu mașina și pe jos pentru a face câteva fotografii frumoase. Perissa și Perivolos sunt cele mai cunoscute plaje de pe această insulă, unde găsești șezlonguri, taverne și magazine. Dacă preferi o plajă mai retrasă, optează pentru Vourvoulos sau Koloumpo. Nu uita să îți iei încălțăminte pentru apă, deoarece majoritatea plajelor au în loc de nisip, pietre.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniMorning2} alt="Plaja Roșie, una dintre cele mai bune plaje din Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>5. Fă cumpărături în Fira</h2>
        <p>Fira, capitala Santorini, are o abundență de opțiuni de cazare, restaurante și magazine. Pe lângă vizitarea Muzeului Thera Preistorică, poți vizita și Catedrala Sfântului Ioan Botezătorul, Biserica cu Trei Clopote din Fira și Piața Principală Theotokopoulos din Fira. De asemenea, poți coborî pe Scările Karavolades sau să iei telecabina până în portul principal al insulei.</p>
        <h2>6. Fă o plimbare cu barca la Parcul Vulcanic Nea Kameni</h2>
        <p>Recomand cu căldură să faci un tur cu barca și să vizitezi Parcul Vulcanic Nea Kameni. Aici încă există activitate vulcanică, activitate ce este monitorizată de oamenii de știință. Am făcut un tur de la portul din Fira care a inclus timp pentru înot în izvoarele termale sulfuroase, urcarea pe vulcan, ghidul ne-a oferit informații despre activitatea vulcanică în special și despre Thira în general, și o vizită pentru prânz pe insula Therasia.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDrone1} alt="Santorini - Parcul Vulcanic Nea Kameni" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>7. Mergi pe traseul de drumeție de la Fira la Oia</h2>
        <p>Traseul de drumeție are peste 12 kilometri (aproximativ 7.46 mile) lungime, așa că nu uita să-ți iei apă. Există și alte drumeții pe care le poți face pe insulă, dar aceasta este cea mai recomandată de site-urile de călătorii. Din păcate, nu am putut să o facem pentru că am fost acolo în mijlocul lunii iulie, și era prea cald chiar și dimineața. Nu am reușit să ne trezim la 5 dimineața, când era mai răcoare.</p>
        <h2>8. Gustă legumele cultivate local și unele dintre mâncărurile celebrele din Santorini</h2>
        <p>Datorită nutrienților din solul vulcanic, legumele cultivate pe insulă sunt foarte gustoase. Trebuie să încerci roșiile din Santorini, castravetele “Katsuni”, vinetele albe, caperele și ardeii grași. Îmi poți mulțumi mai târziu. Cât ești acolo, nu rata salata Santoriniană, chiftelele cu roșii și fava, un fel de mâncare local. Am dedicat un întreg articol despre <Link prefetch={false} href="/ro/ce-si-unde-sa-mananci-in-santorini" title="Ce și unde să mănânci în Santorini" className="text-blue-600 underline hover:text-blue-800">ce și unde să mănânci în Santorini</Link>.</p>
        <h2>9. Participă la o degustare de vinuri</h2>
        <p>Există multe crame și tururi de degustare de vinuri din care poți alege. Nu uita să încerci celebrul Vin Santo, făcut din struguri uscați la soare.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDay3} alt="Santorini - În interiorul unei crame, vin Vinsanto" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>10. Participă la un curs de gătit</h2>
        <p>Am rezervat un curs de gătit la Crama Artemis Karamolegos din Exo Gonia și a fost una dintre cele mai bune experiențe pe care le-am avut. Nu putem recomanda mai mult acest loc. Dacă mergi acolo, poți încerca produsele lor cultivate local, participa la o degustare de vinuri, vizita crama lor, savura o masă la restaurantul lor sau chiar învăța cum să gătești unele dintre mâncărurile santoriniene.</p>
        <h2>11. Vizitează situl arheologic Akrotiri</h2>
        <p>Akrotiri era un mic sat de pescari și fermieri care a fost distrus în urma erupției din secolul al XVI-lea î.Hr. Cunoscut și sub numele de „Pompeii grecesc”, situl a fost acoperit de cenușă vulcanică, ceea ce a ajutat la conservarea unor fresce fine și a multor obiecte și opere de artă. Multe dintre artefacte sunt expuse astăzi în Muzeul Thera Preistorică.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDrone2} alt="Santorini - În interiorul sitului arheologic Akrotiri" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>12. Admiră exponatele la Muzeul Thera Preistorică</h2>
        <p>Muzeul Thera Preistorică, situat în Fira, poate fi considerat o extensie a sitului arheologic Akrotiri și expune unele descoperiri bine conservate din săpăturile care au avut loc pe insulă.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDay1} alt="Santorini - În interiorul Muzeului Preistoric din Thera, situat în Fira" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>13. Urcă pe Muntele Mesa Vouno până la Historical Landmark of Ancient Thera</h2>
        <p>Thera Antică este un sit arheologic situat pe vârful Muntelui Mesa Vouno, în colțul de sud-est al insulei și este al doilea cel mai important sit arheologic din Santorini, după Akrotiri.</p>
        <h2>14. Nu rata Imerovigli și alte sate pitorești</h2>
        <p>Mergi la Biserica Învierea Domnului din Imerovigli pentru o vedere perfectă pentru fotografii. Cât ești în Imerovigli, poți de asemenea să faci o drumeție până la Stânca Skaros, care reprezintă de fapt ruinele unui castel venețian. Drumeția nu este foarte solicitantă, iar priveliștea merită efortul. Nu aș recomanda să urci pe stâncă, deoarece pare periculos și de fapt este interzis, dar când am fost noi acolo, nimeni nu părea să se sinchisească. Este, de asemenea, un loc bun pentru a privi apusul. Există și alte sate pitorești pe insulă care nu sunt atât de populare printre turiști, cum ar fi Pyrgos, Megalochori și Firostefani.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDay2} alt="Santorini - Biserica Învierii Domnului din Imerovigli - o vedere de poveste" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniE1} alt="Santorini - Nu ratați Imerovigli și alte sate pitorești" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>15. Cazează-te într-un hotel-cavernă</h2>
        <p>Santorini este cunoscută pentru hotelurile sale luxoase, similare unor peșteri, cu piscine sau jacuzzi-uri de unde ai o vedere generoasă asupra calderei. Cupluri din întreaga lume consideră Santorini una dintre cele mai bune destinații pentru luna de miere, așa că se poate spune că romantismul plutește în aer. Să stai într-un hotel excepțional poate fi o experiență uimitoare în sine. Citește despre <Link prefetch={false} href="/ro/despre-divine-cave-experience-din-santorini" title="Despre Divine Cave Experience din Santorini" className="text-blue-600 underline hover:text-blue-800">experiența noastră la Divine Cave în Imerovigli</Link>.</p>
        <p>Aceasta a fost lista mea de lucruri de făcut în Santorini. Ce crezi? Sunt lucruri care merită menționate și pe care nu le-am inclus? Ai încercat sau plănuiești să încerci unele dintre lucrurile de pe această listă? Interacționează cu noi pe contul nostru de Instagram. Urmărește hashtagul nostru pentru a vedea călătoria noastră: <LinkExternal link="https://www.instagram.com/explore/tags/afkingreece/" title="Link catre AFKinGreece" text="#afkingreece" />.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight2} alt="Santorini - Vedere din Oia noaptea" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniThings} alt="Santorini - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniThings2} alt="Santorini - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}