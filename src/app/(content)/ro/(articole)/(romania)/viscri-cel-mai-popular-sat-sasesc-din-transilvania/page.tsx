import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import viscriKingsHouse from "../../../../../../../public/viscri/viscri-inside-kings-house.jpg";
import viscriChurchInside from "../../../../../../../public/viscri/viscri-inside-the-church.jpg";
import viscriDucks from "../../../../../../../public/viscri/ducks-in-viscri.jpg";
import mesendorfInside from "../../../../../../../public/viscri/mesendorfgasthaus-inside-16x9.jpg";
import viscri2 from "../../../../../../../public/viscri/viscri-2.jpg";
import viscriMeal2 from "../../../../../../../public/viscri/viscri-32-meal-2.jpg";
import viscriFromAbove from "../../../../../../../public/viscri/viscri-from-above.jpg";
import viscriMeal3 from "../../../../../../../public/viscri/viscri-32-meal-3.jpg";
import viscriMeal4 from "../../../../../../../public/viscri/viscri-32-meal-4.jpg";
import feldioaraCitadelAbove from "../../../../../../../public/viscri/feldioara-citadel-view-from-above.jpg";
import viscri32Outside from "../../../../../../../public/viscri/viscri-32-from-outside.jpg";
import racosVulcano from "../../../../../../../public/viscri/racos-vulcano.jpg";
import mesendorfOutside from "../../../../../../../public/viscri/mesendorfgasthaus-outside-16x9.jpg";
import viscriTop16x9 from "../../../../../../../public/viscri/viscri-top-16x9.jpeg";
import feldioaraCitadelInside from "../../../../../../../public/viscri/feldioara-citadel-inside-view.jpg";
import fromViscri1 from "../../../../../../../public/viscri/from-viscri-1.jpg";
import emeraldLake from "../../../../../../../public/viscri/the-emerald-lake.jpg";
import fromViscri3 from "../../../../../../../public/viscri/from-viscri-3.jpg";
import rupeaCitadelView from "../../../../../../../public/viscri/view-from-rupea-citadel.jpg";
import fromViscri2 from "../../../../../../../public/viscri/from-viscri-2.jpg";
import basaltColumns from "../../../../../../../public/viscri/basalt-columns.jpg";
import pinViscri3 from "../../../../../../../public/viscri/pin-viscri-3.jpg";
import viscriChurch from "../../../../../../../public/viscri/church-from-viscri.jpg";
import pinViscri4 from "../../../../../../../public/viscri/pin-viscri-4.jpg";
import rupeaCitadel from "../../../../../../../public/viscri/rupea-citadel.jpg";
import viscriHouses from "../../../../../../../public/viscri/viscri-houses-on-the-road.jpg";

const article = getArticle(17);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriTop16x9} alt="Viscri, cel mai popular sat săsesc din Transilvania" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Dacă vrei să vezi frumusețile transilvănene cu ochii tăi, pentru că fotografiile ca întotdeauna nu fac dreptate, trebuie să vizitezi această zonă și îți promit că te vei îndrăgosti, așa cum a făcut-o regele Charles al III-lea, de pădurile întinse, de ospitalitatea oamenilor și de mâncărurile locale delicioase. De reținut este faptul că în Viscri a fost amenajată o parcare gratuită unde poți lăsa mașina. De acolo se poate merge cu ușurință pe jos oriunde în sat. Toate mașinile parcate pe străzile satului fură din autenticitatea acestuia. Așa că te rog să te gândești de două ori înainte de a parca în altă parte pentru că îți este prea lene să mergeți 500 de metri.</p>
        <h2>Unde este Viscri</h2>
        <p>Viscri este un sat mic, în comuna Bunești, județul Brașov. Sunt 80 de kilometri de la Brașov până la Viscri și încă 45 de kilometri până la Cetatea Medievală Sighișoara. Drumurile erau bune când am mers acolo în octombrie 2022 și mijlocul nostru de transport preferat în România este întotdeauna mașina. De asemenea, mașina oferă libertatea de a explora alte puncte de interes din zonă, cum ar fi Cetatea Rupea, complexul geologic Racoș și alte sate încântătoare.</p>
        <h2>Când să vizitezi Viscri</h2>
        <p>Aș spune că fiecare anotimp are farmecul lui, dar dacă ar fi să fac o recomandare în această direcție, ar fi primăvara sau toamna când vremea este mai blândă. Iarna, poți avea ghinionul să prinzi zăpezi abundente și drumuri blocate. Vara, temperaturile pot depăși 30 de grade Celsius și, de asemenea, este mai greu să găsești cazare întrucât este vârf de sezon. Cu toate acestea, imaginează-ți cum ar fi să stai lângă sobă sau șemineu, sorbind dintr-o cană de vin fiert în timp ce afară ninge cu fulgi mari și totul este încremenit. Pun pariu că vrei să vizitezi Viscri iarna acum. Şi eu. Vara este de preferat dacă intenționezi să faci drumeții sau să observi flora bogată.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriHouses} alt="Case de pe strazile din Viscri" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Ce să faci în Viscri</h2>
        <p>În primul rând, îmi imaginez că vrei să vizitezi satul săsesc pentru a experimenta viața la țară în cea mai simplă formă. Așa că prima mea recomandare ar fi să contactezi pensiunea unde vei fi cazat pentru a vedea ce activități poți face și a le rezerva din timp. Cel mai probabil îți vor spune despre plimbările cu căruța trasă de cai, plimbările călare pe dealurile din jur sau poate chiar oferă spre închiriere biciclete pentru a pleca în explorare pe traseele de biciclete construite de ONG-ul ADEPT.</p>
        <p>Tradițiile sunt încă prețuite în România. La Viscri poți observa fierarul satului la lucru, sau pe cărămidarul Gheorghiță, sau chiar pe sătencele ce lucrează cu lână și care sunt bucuroase să-ți vândă ce iese din mâinile lor.</p>
        <p>Casa Prințului de Wales poate fi vizitată, prețul fiind de 12 lei de persoană. Biletul include un tur ghidat pe care îl recomand călduros deoarece oferă o mulțime de informații pe care altfel nu le-ai afla. După ce ai văzut hambarul unde, la momentul vizitei noastre, avea loc o expoziție de fotografii, grădina de legume și camerele decorate în stil tradițional, poți lua loc în cafenea pentru a savura o prăjitură proaspăt scoasă din cuptor. Există și un mic magazin de unde poți cumpăra cărți, gemuri și alte bunătăți. Amintește-ți că fiecare ban cheltuit ajută comunitatea.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscri2} alt="Viscri, casa Regelui Charles al III-lea" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriKingsHouse} alt="Viscri, în interiorul casei Regelui Charles al III-lea" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Una dintre atracțiile principale este, fără îndoială, Biserica Fortificată. Intrarea costă 15 lei. Pe lângă biserica și turnul bisericii, am putut vizita și un mic muzeu cu obiecte tradiționale, precum și o expoziție de ceramică de Mediaș, toate adăpostite în zidurile care împrejmuiesc biserica.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriChurch} alt="Biserica Fortificată din Viscri" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriChurchInside} alt="în interiorul Bisericii Fortificate din Viscri" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={fromViscri3} alt="zidul Bisericii Fortificate din Viscri" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={fromViscri1} alt="în interiorul încăperilor Bisericii Fortificate din Viscri" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={fromViscri2} alt="Biserica Fortificată din Viscri văzută de sus" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>În afară de explorarea satului și împrejurimile acestuia, așteptarea văcuțelor să se întoarcă de la pășunat, fotografierea gâștelor lăsate libere pe stradă sau admirarea cerului înstelat noaptea, poți merge la vânătoare de trufe prin pădure sau la alte tururi ghidate organizate de gazde sau la cererea oaspeților.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriDucks} alt="Viscri. Rațe în sălbăticie." width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>După toate aceste activități, cu siguranță vei fi lihnit de foame, dar nu-ți face griji pentru că în Viscri se pune accent pe mâncarea din ingrediente locale organice.</p>
        <h2>Unde să mănânci</h2>
        <p>Există câteva locuri unde te poți bucura de o masă tradițională, gătită lent, cu ingrediente organice, de sezon, cultivate în grădinile proprii sau de la fermierii locali. Am ales “The White Barn” (Hambarul Alb) de la Viscri 32. Am comandat câte un meniu alcătuit din trei feluri de mâncare (supă, fel principal și desert) pentru a testa cât mai multe preparate. Mâncarea a fost delicioasă datorită măiestriei bucătarului, dar cu siguranță și a ingredientelor de calitate.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriMeal2} alt="Mancare de la Viscri 32 - 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriMeal4} alt="Mancare de la Viscri 32 - 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriMeal3} alt="Mancare de la Viscri 32 - 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Am vrut să încercăm și punctul gastronomic local de la Meșendorf 65, pentru că am citit despre proprietari și știam că organizează degustări de brânzeturi, brânzeturi făcute chiar de ei cu lapte de la vacile din sat. De asemenea, servesc prânzul și cina cu mâncăruri delicioase gătite în casă. Dar, din păcate, nu mai aveau disponibilitate.</p>
        <p>Mai sunt puncte gastronomice în Viscri, cât și în alte sate, dar este necesară rezervarea din timp.</p>
        <h2>Unde să înnoptezi</h2>
        <p>Viscri este un exemplu de turism bine făcut cu respect pentru mediu. Poți găsi cazare în case restaurate, decorate cu obiecte tradiționale, dintre care unele au zeci sau chiar sute de ani.</p>
        <p>Unele dintre aceste pensiuni sunt:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://viscri32.com/" title="Link catre site-ul Viscri 32" text="Viscri 32" /></li>
          <li><LinkExternal link="https://www.viscri125.ro/" title="Link catre site-ul Viscri 125" text="Viscri 125" /></li>
          <li><LinkExternal link="http://www.experiencetransylvania.ro/guesthouse/viscri-63/" title="Link catre site-ul Viscri 63" text="Viscri 63" /></li>
        </ul>
        <p>Mai multe variante găsești pe booking.com sau google, atât în Viscri, cât și în satele limitrofe.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscri32Outside} alt="În grădina de la Viscri 32" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Mesendorf Gasthaus</h2>
        <p>Noi ne-am cazat într-un alt sat, numit Meșendorf, la 17 kilometri de Viscri, distanță ce poate fi parcursă cu mașina sau cu bicicleta. Ne-am simțit bine în timpul petrecut la Meșendorf Gasthaus deoarece camera era foarte frumoasă, cu tavan înalt și decorațiuni autentice săsești. Dar cireașa de pe tort a fost sauna privată pe care am avut-o chiar în apartamentul nostru.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={mesendorfInside} alt="In interiorul Mesendorf Gasthaus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>De asemenea, au un hambar restaurat, vechi de 100 de ani, unde oaspeții pot lua masa, un spațiu plăcut cu o bibliotecă plină de cărți, o livadă în spatele hambarului și doi câini prietenoși.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={mesendorfOutside} alt="Grajdul de la Mesendorf Gasthaus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Câte zile să stai în Viscri</h2>
        <p>Asta depinde foarte mult de ceea ce vrei să faci de fapt. Dacă vrei doar să te plimbi prin sat, să vizitezi biserica fortificată și casa Prințului de Wales și să iei masa la un punct gastronomic local, o zi este suficientă.</p>
        <p>Dacă vrei să te deconectezi, să experimentezi mai mult viața la țară, să participi la 2-3 activități dintre cele de mai sus, ar trebui să optezi pentru un weekend întreg.</p>
        <p>Însă există multe alte lucruri de făcut în zonă astfel că îți poți prelungi șederea în funcție de ceea ce dorești să bifezi. În continuare voi prezenta ce am vizitat noi într-o zi.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriFromAbove} alt="Viscri - Întregul sat văzut de sus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Trei locuri de vizitat lângă Viscri</h2>
        <h3>Complexul geologic Racoș</h3>
        <p>Complexul geologic Racoș este o arie protejată de 95,2 hectare și include vulcanul stins Racoș, cariera de bazalt Brazi supranumită de localnici Lacul de Smarald și coloanele de bazalt.</p>
        <p>Când ajungi acolo, vei fi întâmpinat de o persoană care îți va înmâna un pliant cu informații despre complex și cu o hartă. Există două parcări și poteci amenajate spre fiecare obiectiv, iar biletul costă 20 lei de persoană.</p>
        <p>Acest preț include vizita la <LinkExternal link="https://www.castelulsukosdbethlen.ro/" title="Link catre castelul Sükösd-Bethlen" text="castelul Sükösd-Bethlen" />, atestat în anii 1600, care se află în orașul Racoș.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={racosVulcano} alt="Vulcanul Racos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={basaltColumns} alt="Vulcanul Racos - Coloanele de bazalt" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={emeraldLake} alt="Vulcanul Racos -  Lacul de Smarald vazut de deasupra" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Cetatea Rupea</h3>
        <p>Pe drumul de la Brașov spre Viscri vei trece pe lângă Cetatea Rupea, care stă impunătoare pe dealul Cohalmul, dominând de sus orașul Rupea. Imaginea cetății, pe măsură ce te apropii, îți taie răsuflarea.</p>
        <p>Această cetate medievală se întinde pe o suprafață de 11 hectare cu ziduri, turnuri și curți interioare și poate fi vizitată pentru suma de 15 lei de persoană. Chiar lângă cetate există o parcare unde îți poți lăsa mașina gratuit. Pe <LinkExternal link="https://www.primariarupea.ro/program-tarife/" title="Link catre Primaria Rupea" text="site-ul primăriei" /> găsești mai multe informații despre programul de vizitare precum și tipurile de bilete disponibile.</p>
        <p>În orașul Rupea mai poate fi vizitat și un mic muzeu etnografic localizat lângă parc.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={rupeaCitadel} alt="Cetatea Rupea, văzută din dronă" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={rupeaCitadelView} alt="Vedere frumoasă de la Cetatea Rupea" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Cetatea Feldioara - Marienburg</h3>
        <p>Cetatea medievală Marienburg din Feldioara se află la doar 20 de kilometri de Brașov. Cetatea a primit înfățișarea din secolul al XVII-lea prin lucrările de restaurare care au avut loc în perioada 2013-2017. Așezarea medievală a fost fondată în a doua jumătate a secolului al XII-lea de către coloniștii sași, iar în secolul al XIII-lea Feldioara a devenit reședința cavalerilor teutoni care stăpâneau aici.</p>
        <p>La sosire am găsit o parcare unde am lăsat mașina, am plătit 15 lei pe bilet și am primit un pliant foarte drăguț cu informații nu doar despre cetate, ci și despre împrejurimi.</p>
        <p>După restaurare, popularitatea cetății Marienburg a crescut exponențial, devenind un obiectiv de neratat dacă te afli în zonă.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={feldioaraCitadelInside} alt="Vedere din interiorul cetății Feldioara" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={feldioaraCitadelAbove} alt="Vedere a întregii cetăți Feldioara, din drona" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Sunt atâtea alte locuri frumoase pe care le poți vizita, de la biserici fortificate la cetăți medievale, de la orașe și sate fermecătoare până la peisaje minunate, pe unele le cunoaștem deja, la altele abia așteptăm să ajungem, dar le vom descoperi pe toate cu altă ocazie.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinViscri3} alt="Viscri - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinViscri4} alt="Viscri - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}