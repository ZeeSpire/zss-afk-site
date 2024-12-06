import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import grigorescu1323 from "../../../../../../../public/grigorescu/IMG_1323.jpg";
import grigorescu20221029Dinner2 from "../../../../../../../public/grigorescu/IMG_20221029_210502.jpg";
import grigorescu1287 from "../../../../../../../public/grigorescu/IMG_1287.jpg";
import grigorescu20221028Food4 from "../../../../../../../public/grigorescu/IMG_20221028_195458.jpg";
import grigorescu20221028Food3 from "../../../../../../../public/grigorescu/IMG_20221028_195504.jpg";
import grigorescu20221028Food1 from "../../../../../../../public/grigorescu/IMG_20221028_195508.jpg";
import grigorescu20221028Food2 from "../../../../../../../public/grigorescu/IMG_20221028_203944.jpg";
import grigorescu20221028Dinner1 from "../../../../../../../public/grigorescu/IMG_20221028_210754.jpg";
import grigorescu1546 from "../../../../../../../public/grigorescu/IMG_1546.jpeg";
import grigorescu20221029Dinner3 from "../../../../../../../public/grigorescu/IMG_20221029_213709.jpg";
import grigorescu20221029Morning from "../../../../../../../public/grigorescu/IMG_20221029_111005.jpg";
import grigorescu1633 from "../../../../../../../public/grigorescu/IMG_1633.jpg";
import grigorescu1394 from "../../../../../../../public/grigorescu/IMG_1394.jpg";
import grigorescu1421 from "../../../../../../../public/grigorescu/IMG_1421.jpg";
import grigorescu1377 from "../../../../../../../public/grigorescu/IMG_1377.jpg";
import grigorescu1493 from "../../../../../../../public/grigorescu/IMG_1493-2.jpg";
import grigorescu1512 from "../../../../../../../public/grigorescu/IMG_1512-2.jpg";
import grigorescu20221029Evening1 from "../../../../../../../public/grigorescu/IMG_20221029_194106.jpg";
import pinGrigorescu2 from "../../../../../../../public/grigorescu/pin-grigorescu-2.jpg";
import grigorescu20221029Evening2 from "../../../../../../../public/grigorescu/IMG_20221029_195816.jpg";
import pinGrigorescu1 from "../../../../../../../public/grigorescu/pin-grigorescu-1.jpg";
import grigorescu20221029Evening3 from "../../../../../../../public/grigorescu/IMG_20221029_202723.jpg";

const article = getArticle(18);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1546} alt="Vânătoare de trufe și o experiență culinară deosebită la Conacul Grigorescu" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Încă de când am văzut documentarul Flavours of Romania prezentat de Charlie Ottley, ne-am pus în plan să ajungem la Conacul Grigorescu, entuziasmați fiind de ideea de Slow Food, de mâncare bună facută din ingrediente proaspete crescute organic, dar și din dorința de a cunoaște oameni implicați și pasionați, pentru care ospitalitatea reprezintă un mod de viață, nu o afacere. Așadar în momentul în care Terra Carpatica - Conacul Grigorescu a anunțat pe pagina de Facebook că organizează un weekend culinar dedicat vânătorii de trufe, nu am stat pe gânduri și am rezervat o cameră.</p>
        <p>Încep prin a spune că suntem deosebit de încântați de experiența de care am avut parte în ultimul weekend din acest călduros și secetos octombrie și cu greu aș putea să găsesc ceva negativ de spus despre aceasta. Totodată țin să precizez că toate recenziile sau articolele pe care le scriu sunt subiective, bazate pe experiențele noastre dintr-un anumit moment temporal și nu suntem plătiți sau răsplătiți în vreo formă pentru ceea ce scriem, pentru filmările pe care le publicăm pe Youtube sau pentru pozele pe care le postăm pe Instagram. Tocmai de aceea atunci când a fost cazul am specificat și ce anume nu mi-a plăcut la cazarea, restaurantul sau obiectivul turistic pe care le-am vizitat.</p>
        <p>Am ajuns vineri seară la destinație: Conacul Grigorescu, sat Răteşti, comuna Berca, județul Buzău. Din București am facut în jur de două ore și jumătate.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1287} alt="Conacul Grigorescu 01" width={1248} height={876} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Încă de când am ajuns, am fost întâmpinați cu zâmbetul pe buze de gazda noastră, Thorsten, care ne-a prezentat conacul construit în 1930 și refăcut după achiziționarea lui în 2011, dar și clădirile adiacente: casa Sophie, casa bunicii și casa Noelia unde am fost și noi cazați, în camera King. În cele 3 căsuțe sunt astfel 5 apartamente care pot fi închiriate, iar conacul este resedința permanentă a familiei.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1323} alt="Conacul Grigorescu, pat de lemn din interior" width={1248} height={965} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>După ce ne-am lăsat bagajele în cameră, am revenit în micuțul restaurant, anexă a conacului, unde am fost întâmpinați cu palincă și lichior, precum și cu apă din partea casei. Servirea, pe tot parcursul șederii, a fost ireproșabilă. Toți angajații au fost mereu cu zâmbetul pe buze și gata să ajute cu orice. Meniul a fost unul fix, stabilit de chef Juranda, însă am fost întrebați în avans dacă avem restricții alimentare. În meniul de băuturi am descoperit băuturi artizanale (cola, tonic, bere), sucuri naturale, limonadă de casă, mied (băutură alcoolică din miere), vin de mure precum și alte vinuri produse în Dealul Mare, renumita zonă viticolă.</p>
        <p>Cina a constat în trei aperitive, fel principal și desert și a fost nemaipomenită de la un capăt la celălalt.</p>
        <p>Așadar am început cu o tartă rustică pe bază de ouă, brânză de capră, praz și bacon. Am continuat cu rulouri de vinete umplute cu mozzarella și busuioc, stropite cu sos de roșii și apoi băgate la cuptor. Iar cel de-al treilea aperitiv a constat în gogoși cu dovlecei și sos de iaurt cu mentă și sumac. Toate au fost aromate și ușoare și mi-am promis ca voi încerca și eu să le recreez acasă.</p>
        <p>Felul principal a fost un muschiuleț fraged de porc în reducție de Fetească Neagră cu mirodenii, plăcintă de cartofi cu brânză de capră și verdețuri și salată de baby spanac, rucola, sfeclă răzuită, semințe și sos de iaurt. Carnea a fost perfectă, iar salata a fost proaspătă și aromată și a mers de minune alături de placinta de cartofi rustică.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food4} alt="Conacul Grigorescu. Mancare. 01" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food3} alt="Conacul Grigorescu. Mancare. 02" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food2} alt="Conacul Grigorescu. Mancare. 03" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food1} alt="Conacul Grigorescu. Mancare. 04" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Dinner1} alt="Conacul Grigorescu. Mancare. 05" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>La desert am primit un cheesecake cu espresso pe blat de biscuite de casă cu unt și sirop de arțar, cu ganache de ciocolată cu 85% cacao și un sirop de zmeură făcut cu zmeură din grădină. Doamne Dumnezeule! A fost cel mai bun cheesecake gustat vreodată și nici măcar nu semăna cu alte cheesecake-uri încercate de noi datorită blatului de biscuiți care a fost efectiv altceva, nu acel blat folosit de obicei din biscuiți amestecați cu mult zahăr și uleiuri vegetale.</p>
        <p>După fiecare preparat, chef Juranda ne-a întrebat dacă suntem mulțumiți și dacă totul a fost în regulă. Da, da, da! De trei ori da!</p>
        <p>Am început ziua de sâmbătă cu un mic dejun bazat pe produse locale, majoritatea făcute chiar la conac de gazdele noastre. Am putut alege dintre brânzeturi cu diverse arome (inclusiv lavandă), babic, șunculiță, prosciutto, legume proaspete, pate de casă, zacuscă cu trufe, ouă de prepeliță, gemuri, prăjituri și pâine proaspătă.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1377} alt="Conacul Grigorescu 03" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Apoi ne-am reunit cu toții în fața conacului, ni s-a făcut instructajul, ne-am suit în cele două microbuze puse la dispoziție de către gazde și am plecat spre pădure în căutare de trufe. Căutarea de trufe a fost condusă de către doi profesioniști alături de cățeii lor dresați special în acest scop. Pe lângă experiența în sine care ni s-a părut foarte interesantă, ne-am putut bucura de plimbarea propriu-zisă prin pădure într-o zi splendidă de octombrie. Frunzele căzute formau un covor foșnitor care m-a dus cu gândul la un râu de caramel. Copacii aveau bolta în nuanțe calde de auriu, ciocolatiu, chihlimbariu, ruginiu. Cerul era senin. Cățeii alergau zglobiu de colo-colo și îi mai vedeai scobind concentrați la rădăcina câte unui copac. Noi ne duceam repede să vedem ce au găsit. Uneori era o trufă mică-mică înfulecată rapid de cățel, alteori trufa era mare și cățelul o lăsa în mâna stăpânului așteptându-și nerăbdător răsplata.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1421} alt="Conacul Grigorescu 03" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Trufele sunt ciuperci care trăiesc în simbioză cu un arbore. Prin urmare nu îți poți face crescătorie de trufe decât dacă plantezi o pădure. Pentru a crește, ca orice ciupercă, trufele au nevoie de căldură și de umiditate. Acestea trăiesc la rădăcina copacului, în pământ, și a fost nevoie să dezvolte un miros puternic pentru a atrage animalele astfel încât să se poată reproduce prin spori. Am tot mirosit trufele găsite și într-adevar au un miros destul de puternic chiar și pentru nasul meu uman. Însă fără un câine antrenat este aproape imposibil să găsești trufe în pădure.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1493} alt="Vânătoare de trufe" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Morning} alt="Vânătoare de trufe" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1512} alt="Vânătoare de trufe" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Toate cele cinci familii participante au primit trufe pe măsură ce acestea erau găsite, doar că unele familii au primit doar o trufă, în timp ce altele au primit patru. Cred că era mai bine să fi existat un însotițor desemnat cu strângerea de trufe într-un coș, iar la final fiecare familie să primească o trufă din cele găsite.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1394} alt="Vânătoare de trufe 05" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Dacă vrei să afli mai multe despre vânătoarea de trufe, consultă <Link prefetch={false} href="/ro/despre-trufe-si-gasirea-lor" title="Despre trufe și găsirea lor" className="text-blue-600 underline hover:text-blue-800">acest articol</Link> care conține și linkul către videoclipul de pe youtube cu imagini din excursia noastră în pădure.</p>
        <p>După această plimbare care nu a durat mai mult de două ore și jumătate, ne-am întors la microbuze unde am avut parte de un picnic în pădure. Am ciocnit un păhărel de palincă sau lichior după preferință și am gustat din mâncărurile pregătite cu grijă de chef Juranda: salată orientală, mini-șnițele din piept de pui, mini-burgeri cu pulled pork și platouri cu fel de fel de mezeluri. Efectiv ne-am ghiftuit.</p>
        <p>Întorși la conac am avut câteva ore la dispoziție să ne odihnim înainte de a participa la una din cele mai memorabile cine din viața noastră. Am stat la o masă lungă alături de ceilalți oaspeți, atmosfera a fost una prietenoasă și relaxată, dar în același timp sobră și prețioasă, masa a fost așezată impecabil cu pahare de vin, carafe cu apa și farfurii frumoase.</p>
        <p>Am avut un invitat special, <LinkExternal link="https://www.facebook.com/people/Somelier-Buzau/100012366731915/" title="Link catre Somelier Buzau" text="Liviu Birceanu" />, singurul somelier din Buzău, care actualmente lucrează la <LinkExternal link="https://budureasca.ro/" title="Link catre crama Budureasca" text="crama Budureasca" />. El a avut misiunea de a găsi vinul potrivit pentru fiecare din cele cinci preparate cu trufe pe care le-am avut în meniu. Ca de obicei, chef Juranda și-a făcut apariția după fiecare fel de mâncare pentru a ne prezenta ce urmează să degustăm, dar și ca să ne întrebe dacă totul a fost bine. Evident că totul a fost nemaipomenit de bine. Somelierul ne-a încântat pe tot parcursul cinei cu informații despre vinuri, dar și cu glume și alte povești suculente.</p>
        <p>Ne-am fi dorit să putem reține ce vin am gustat la fiecare preparat în parte, însă știm doar că am început cu un Fume Blanc despre care ni s-a zis că se potrivește la orice. Apoi am fost prea prinși în povești și preparate delicioase ca să mai fim atenți și la ce vin avem în pahar. La un moment dat, am avut un Shiraz pentru că a fost o dezbatere referitoare la pronunție. Se pare că pronunția australiană a câștigat deoarece ei sunt acum în top cu acest tip de vin.</p>
        <p>Am început așadar cina cu cele trei aperitive: cappuccino de ciuperci cu spumă de albuș de ou și pâine prăjită, urmat de conopidă gratinată marinată în ulei de măsline și mirodenii cu gorgonzola dulce cu trufe și o reducție de vin alb la bază, presărată cu pesmet făcut din pâine prăjită cu usturoi, cimbru și pătrunjel, încheind cu un carpaccio de vită cu o cremă cu trufe și salată de rucola cu brânză de capră.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Evening1} alt="Conacul Grigorescu. Mancare. 06" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Evening2} alt="Conacul Grigorescu. Mancare. 07" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Evening3} alt="Conacul Grigorescu. Mancare. 08" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Dinner2} alt="Conacul Grigorescu. Mancare. 09" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Dinner3} alt="Conacul Grigorescu. Mancare. 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>Ca fel principal am avut ribeye de vită gătit fiecare cum a dorit (noi am cerut medium-well) cu mămăligă cu trufe, sos pe bază de brânză cu trufe, pară poșată în Fetească Neagră și salată. Desertul a constat într-o savarină dulce și însiropată cu urdă frecată cu trufe în loc de frișcă. După asemenea delicatese aș fi aplaudat și din urechi dacă mi-ar fi permis anatomia.</p>
        <p>Duminică, gazdele noastre ne-au pregătit iar ceva deosebit - un brunch. Am avut la dispoziție aceleași preparate ca la micul dejun de sâmbătă la care s-au adăugat multe alte preparate care mai de care mai îmbietoare: fasole făcăluită, spring rolls, plăcințele cu carne, tartă cu spanac și brânză, cârnați Pleșcoi cu mămăliguță. Dar piesa de rezistență a fost tortul cu morcovi cu cremă fină de unt cu portocală care a mers nemaipomenit de bine alături de cafeaua de dimineață.</p>
        <p>Cu zâmbetul pe buze și cu două kilograme în plus (nu glumesc!), am pornit-o la drum spre casă nu înainte de a cumpăra câteva borcane cu zacuscă și dulcețuri produse tot de chef Juranda sub eticheta <LinkExternal link="https://www.rafineturi.ro/" title="Link catre Rafineturi" text="'Rafineturi'" />, dar și două borcane de cătină cu miere de la <LinkExternal link="https://melinis.ro/" title="Link catre Melinis" text="Melinis" />.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1633} alt="Rafineturi" width={1248} height={631} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Am vizitat și mânăstirea Rătești și dealurile din zonă. Însă ca activitate extra aș recomanda Fierbătorile de la Berca, aflate la doar 6 km de conac, unde am găsit același peisaj selenar ca la <Link prefetch={false} href="/ro/vulcanii-noroiosi-judetul-buzau-romania" title="Vulcanii noroioși, județul Buzău, România" className="text-blue-600 underline hover:text-blue-800">Pâclele Mari și Pâclele Mici</Link>.</p>
        <p>Întregul weekend a reprezentat o experiență foarte frumoasă de care ne-am bucurat din tot sufletul, pe care o recomandăm oricui ar vrea să o încerce și le mulțumim din inimă Jurandei și lui Thorsten. De abia așteptăm să revenim la Conacul Grigorescu.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinGrigorescu1} alt="Conacul Grigorescu - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinGrigorescu2} alt="Conacul Grigorescu - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}