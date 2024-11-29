import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import valeaVerde from "../../../../../../../public/valea-verde-2/valea-verde-2024.jpeg"
import valeaVerde3 from "../../../../../../../public/valea-verde-2/valea-verde-3.jpeg"
import valeaVerde1 from "../../../../../../../public/valea-verde-2/valea-verde-1.jpeg"
import valeaVerde2 from "../../../../../../../public/valea-verde-2/valea-verde-2.jpeg"
import valeaVerde4 from "../../../../../../../public/valea-verde-2/valea-verde-4.jpeg"
import valeaVerde5 from "../../../../../../../public/valea-verde-2/valea-verde-5.jpeg"
import valeaVerde11 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-1-1.jpeg"
import valeaVerde12 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-2-2.jpeg"
import valeaVerde13 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-3-3.jpeg"
import valeaVerde14 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-4-4.jpeg"
import valeaVerde15 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-5-5.jpeg"
import valeaVerdeRevelion from "../../../../../../../public/valea-verde-2/valea-verde-revelion.jpeg"

const article = getArticle(32);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde} alt="Experiența completă de Revelion la Valea Verde Retreat: de la Transilvania veșnică la realitatea crudă" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Pentru finalul anului 2023, și mai ales pentru sărbătoarea de Revelion, am decis să părăsim cuibul și să facem ceva special. Am găsit două oferte care ne-au captat atenția, iar dintre cele două, am ales să mergem la Valea Verde Retreat.</p>
        <p>Am mai fost la Valea Verde Retreat acum aproximativ un an pentru a participa la o vânătoare de trufe. Am detaliat întreaga experiență în acest <Link prefetch={false} href="/ro/valea-verde-o-poveste-de-succes-a-reinvierii-unui-sat-transilvanean-uitat" title="Valea Verde - o poveste de succes a reînvierii unui sat transilvănean uitat" className="text-blue-600 underline hover:text-blue-800">articol</Link>.</p>
        <p>Pachetul de Revelion oferit de Valea Verde includea 4 nopți de cazare cu mic dejun, prânz și cină, acces nelimitat la zona SPA, o plimbare cu trăsura trasă de cai, concert de vioară, concert de colinde și petrecerea de Revelion cu foc de tabără, open bar, șampanie la miezul nopții și un concert muzical.</p>
        <p>Chiar dacă oferta era mult mai scumpă decât cealaltă ofertă pe care o luaserăm în considerare, am fost convinși de suplimentele speciale care nu erau incluse în oferta mai ieftină, cum ar fi concertul de vioară, accesul la SPA și ceea ce credeam că va fi un cor de copii care cântă colinde. Cu toate acestea, lucrurile nu s-au desfășurat deloc așa cum ne-am așteptat.</p>
        <h2>Activități și ce puteți face sau vizita</h2>
        <p>Valea Verde se află în satul Cund, comuna Bahnea, județul Mureș.</p>
        <p>În zonă, nu sunt prea multe lucruri de vizitat. Biserica fortificată din sat este lăsată în ruină. Manufactura de Brânză era închisă, iar pe <LinkExternal link="https://manufacturadebranza.ro/" title="Link catre Manufactura de Brânză" text="site-ul" /> lor scrie că, dacă doriți să participați la o degustare, dimensiunea minimă a grupului este de 10 persoane. Am vrut să facem o plimbare pe traseul marcat de la restaurantul Valea Verde, dar ne-am întors pentru că am fost atacați de câini.</p>
        <p>Am vizitat observatorul Valea Verde data trecută, iar cabina SPA era inaccesibilă din cauza drumului noroios. Astfel, unul dintre motivele care ne-au convins să alegem Valea Verde nu a putut fi onorat, fără a ni se oferi altceva în schimb (măcar o părere de rău).</p>
        <p>Totuși, tot inclusă în ofertă, am avut o plimbare cu trăsura trasă de cai, pe care am programat-o imediat ce am ajuns și pe care am apreciat-o foarte mult.</p>
        <p>Târgu-Mureș este la 45 de kilometri distanță (50 de minute). Am petrecut jumătate de zi plimbându-ne prin acest oraș. Am vizitat grădina zoologică, Cetatea Târgu-Mureș și ne-am plimbat prin Parcul Piața Trandafirilor, admirând clădirile frumoase dintre Catedrala Înălțării Domnului și Catedrala Buna Vestire.</p>
        <p>Într-o altă zi, am făcut o excursie în Mediaș (33 km / 45 minute), unde ne-am plimbat și am admirat centrul istoric al orașului.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde3} alt="Cai la Valea Verde" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde1} alt="Fotografie aeriană a orașului Târgu Mureș" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde2} alt="Mediaș văzut de sus" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Cazarea</h2>
        <p>Anul trecut am stat în casa Reussdorfer Hoff, dar era destul de departe de restaurant, iar camera avea nevoie de unele reparații. Anul acesta, am avut noroc să găsim Camera Albă disponibilă în Casa Cal, o casă renovată (sau poate chiar reconstruită) în 2022, acesta fiind și motivul pentru care am ales-o. Am găsit o cameră spațioasă și curată. Baia la fel. Chiar dacă temperaturile exterioare au scăzut sub 0 grade Celsius, în cameră era foarte cald. Casa este destul de aproape de restaurant, ceea ce a fost un avantaj.</p>
        <p>Ca aspecte negative, aș menționa patul, care era destul de incomod pentru că salteaua era prea tare, iar perna prea moale, dar cred că acest lucru depinde și de preferințele individuale.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde4} alt="In curte la Valea Verde" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Mâncarea</h2>
        <h3>Micul dejun</h3>
        <p>Micul dejun a fost similar cu cel din anul precedent, cu excepția faptului că de data aceasta ouăle nu au fost preparate pe loc conform preferințelor fiecărui oaspete. Au fost disponibile doar două opțiuni: omletă simplă și ouă ochiuri, ambele pregătite în avans.</p>
        <p>În afara acestui aspect, am considerat micul dejun destul de bogat în opțiuni, iar preferatele noastre au fost brânzeturile de la Manufactura de Brânză (fabrica locală de brânzeturi) cu diferite arome, inclusiv chimen sau trufe. De asemenea, ne-am bucurat de salata de fructe cu miere deasupra.</p>
        <h3>Prânzul</h3>
        <p>Pentru prânz, am avut putut opta pentru supă, 1-2 feluri principale, 1-2 garnituri, salată și sosuri.</p>
        <p>De exemplu, într-o zi am avut următoarele opțiuni:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>ciorbă de cartofi cu afumatură, smântână și tarhon;</li>
          <li>spaghetti cu sos de roșii;</li>
          <li>cârnați germani (în România, cârnații sunt mai buni, jur);</li>
          <li>orez;</li>
          <li>tocăniță de legume și cârnați;</li>
          <li>pâine, muștar, salată, cașcaval ras.</li>
        </ul>
        <p>Chiar dacă prânzul nu a corespuns așteptărilor noastre, sunt opțiuni limitate de luat masa în apropiere. Cu toate acestea, am găsit ceva pe placul nostru în fiecare zi. De exemplu, ciorba de cartofi cu tarhon a fost bună.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde5} alt="Mic dejun la Valea Verde" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Cina</h3>
        <p>Cina, pe de altă parte, a fost diferită. Preparatele au fost excepționale, la fel și prezentarea, și se putea simți măiestria bucătarului - Jonas Schäfer.</p>
        <p>De exemplu, meniul serii de pe 30 decembrie a fost următorul:</p>
        <div className="text-center mb-6">
          <i>Amuse bouche</i><br />
          <span>Ou de prepeliță poșat cu bacon prăjit, trufe și chives</span><br /><br />
          <i>Antreu</i><br />
          <span>Salată de quinoa</span><br /><br />
          <i>Supă</i><br />
          <span>Supă cremă de mazăre</span><br /><br />
          <i>Fel principal</i><br />
          <span>Boeuf bourguignon</span><br /><br />
          <i>Desert</i><br />
          <span>Sorbet de vișine</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde11} alt="Valea Verde - Ou de prepeliță poșat cu bacon prăjit, trufe și chives" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde12} alt="Valea Verde - Salată de quinoa" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde13} alt="Valea Verde - Supă cremă de mazăre" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde14} alt="Valea Verde - Beef bourguignon" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde15} alt="Valea Verde - Sorbet de vișine" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>Toate preparatele au fost excelente de la început până la sfârșit. Salata de quinoa? Plină de arome, cu siguranță nu doar o simplă salată. Supa cremă de mazăre? Gustoasă, ușor picantă, cu o frunzuliță de mărar prăjită pentru a adăuga aromă și textură. Sorbetul de vișine? Acrișor și revigorant, dar perfect datorită mentei folosite atât în compoziție, cât și ca decor.</p>
        <p>Pe 1 ianuarie, ne-am bucurat de o cină pe bază de pește. Meniul suna cam așa:</p>
        <div className="text-center mb-6">
          <i>Amuse bouche</i><br />
          <span>Gălușcă de cartofi</span><br /><br />
          <i>Aperitiv</i><br />
          <span>Crostini cu pește marinat</span><br /><br />
          <i>Supă</i><br />
          <span>Supă cremă de pește</span><br /><br />
          <i>Fel principal</i><br />
          <span>Paella</span><br /><br />
          <i>Desert</i><br />
          <span>Tort de morcovi</span>
        </div>
        <p>Supa cremă de pește a fost un fel de mâncare foarte interesant și neobișnuit, ceva ce nu gustasem înainte. Se putea simți gustul peștelui și al roșiilor, iar supa era garnisită cu un “cruton” de brânză. Mi-a amintit de bucătăria mediteraneană.</p>
        <p>Paella a fost pregătită de prietenul lui Jonas Schäfer și autorul cărții Larger Than Life, Roland Birr. Toți oaspeții s-au adunat în curte în jurul focului și au fost martori la ceea ce am putea numi un spectacol culinar. Atmosfera a fost foarte plăcută și relaxată, din care am ieșit un pic afumați. Din păcate, rezultatul nu a fost foarte plăcut la gust.</p>
        <h2>Petrecerea de Revelion</h2>
        <p>Începutul cinei de Revelion a fost anunțat la ora 19:00 pentru unii invitați, la 19:30 pentru alții, dar servirea a început în jurul orei 20:00.</p>
        <p>Oferta specifica că vom participa la un concert de colinde, lucru care nu s-a întâmplat. Nici concertul de vioară nu a avut loc în niciuna dintre seri.</p>
        <p>Ca dezamăgirea să fie și mai mare, cina nu a fost cu open bar. Ospătarii au spus că este vina noastră pentru că nu am înțeles din ofertă că open bar-ul era doar la miezul nopții, dar că ne vor face un favor și va exista un open bar începând cu ora 23:00. Acest “open bar” s-a dovedit a consta în câteva sticle (un număr limitat și o selecție și mai limitată) care au apărut pe una dintre mese după ora 00:30. Noi nu suntem consumatori înrăiți de alcool, dar îmi pot imagina cât de frustrant a fost pentru ceilalți oaspeți care au comandat ceea ce doreau din meniul de alcool, doar pentru a afla mai târziu că trebuie să plătească pentru asta.</p>
        <p>Și vorbind despre alcool, oferta din acest an a fost destul de limitată. Erau zeci de sticle de vin listate în meniu, dar când în cele din urmă te decideai asupra uneia, ți se spunea că nu mai este în stoc. Nu ar fi fost o problemă dacă s-ar fi întâmplat doar o singură dată, dar în cazul nostru, s-a întâmplat de 4 ori din 5.</p>
        <p>Mâncarea, pe de altă parte, a fost la înălțimea așteptărilor.</p>
        <p>Meniul din seara de 31 decembrie suna cam așa:</p>
        <div className="text-center mb-6">
          <i>Amuse bouche</i><br />
          <span>Blini cu salată de icre de pește și caviar de linte</span><br /><br />
          <i>Primul aperitiv</i><br />
          <span>Crostini cu pateu de pui</span><br /><br />
          <i>Al doilea aperitiv</i><br />
          <span>Crema de brânză de capră cu polenta și roșii cherry</span><br /><br />
          <i>Supă</i><br />
          <span>Supă de țelină cu pară</span><br /><br />
          <i>Fel principal</i><br />
          <span>Ceafă de Mangalița cu sos de vin roșu cu arpacaș și roșii cherry</span><br /><br />
          <i>Desert</i><br />
          <span>Panna cotta cu infuzie de espresso și fructe de pădure marinate</span><br /><br />
          <i>Brânză</i><br />
          <span>Brânză de oaie locală coaptă cu miere și trufe</span>
        </div>
        <p>Cina a început cu acest blini cu salată de icre de pește și caviar de linte, dar modul în care a fost descris în meniu ca “blini cu salată de caviar” ne-a lăsat confuzi, făcându-ne să credem că vom vedea icre negre în farfurie. Pentru că au fost multe astfel de greșeli de scriere, am început să mă întreb dacă nu cumva au fost intenționate pentru a înșela clientul.</p>
        <p>Dintre toate felurile de mâncare de la cină, mi-a plăcut în mod deosebit mămăliga cu brânză de capră și roșii cherry coapte, friptura de porc gătită perfect și desertul superb pe care îl mai gustasem și cu un an înainte.</p>
        <p>După ce am terminat toate felurile de mâncare (a fost multă mâncare), ne-am bucurat de atmosfera creată de fostul concurent de la Vocea României, originar din Târgu-Mureș - Vizi Imre. Concertul a fost cu adevărat special, iar Vizi Imre este un artist desăvârșit.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerdeRevelion} alt="Valea Verde - Petrecerea de Revelion" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>La miezul nopții, am ieșit în curte, unde ne-am adunat în jurul focului de tabără și am ciocnit paharele de șampanie. După ce ne-am felicitat reciproc și am admirat cerul înstelat, ne-am întors în camera noastră, dar petrecerea a continuat până în jurul orei 3 dimineața.</p>
        <p>TOferta achiziționată specifica că pe 1 ianuarie vom avea un “sparkling brunch”. Acest nume sugerează o masă servită puțin mai târziu, undeva între micul dejun și prânz, cu feluri de mâncare potrivite pentru un mic dejun târziu sau un prânz mai ușor. De asemenea, eram siguri că acest brunch va fi însoțit de băuturi alcoolice, în special șampanie sau vin spumant, deoarece de aici vine cuvântul “sparkling”. Ei bine, ghiciți în ce a constat acest “sparkling brunch”.</p>
        <p>Ați ghicit? Brunch-ul s-a dovedit a fi același mic dejun pe care l-am avut în fiecare zi, aceleași feluri de mâncare aranjate în același mod pe aceeași masă, cu mențiunea că au fost lăsate câteva ore în același loc, astfel că prânzul nu a mai fost servit. Vinul spumant? Niciunde de găsit.</p>
        <h2>Concluzie</h2>
        <p>În concluzie, aș dori să menționez că dezamăgirea principală a provenit din faptul că situația nu a fost tratată cu rigurozitatea și seriozitatea pe care le-am fi așteptat. Aș fi preferat ca oferta să fie redactată cu cât mai puține înflorituri posibile. Punct.</p>
        <p>Cu toate acestea, rămânem cu amintiri plăcute, și cu siguranță va fi un Revelion de care ne vom aminti cu drag.</p>
      </main>
    </div>
  );
}