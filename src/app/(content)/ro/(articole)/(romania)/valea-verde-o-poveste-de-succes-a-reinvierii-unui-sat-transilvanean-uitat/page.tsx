import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import weekenduriTematiceSiActivitatiValeaVerde from "../../../../../../../public/valea-verde/weekenduri-tematice-si-activitati-valea-verde.jpg";
import valeaVerdeRetreat from "../../../../../../../public/valea-verde/valea-verde-retreat.jpg";
import vanatoareDeTrufeValeaVerde from "../../../../../../../public/valea-verde/vanatoare-de-trufe-valea-verde.jpg";
import valeaVerdeCover from "../../../../../../../public/valea-verde/valea-verde-cover.jpeg";
import micDejunValeaVerde from "../../../../../../../public/valea-verde/mic-dejun-valea-verde.jpg";
import dinner1ValeaVerde1 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-1.jpg";
import dinner1ValeaVerde2 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-2.jpg";
import dinner1ValeaVerde3 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-3.jpg";
import dinner1ValeaVerde4 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-4.jpg";
import dinner1ValeaVerde5 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-5.jpg";
import dinner2ValeaVerde1 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-1.jpg";
import dinner2ValeaVerde2 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-2.jpg";
import dinner2ValeaVerde3 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-3.jpg";
import dinner2ValeaVerde4 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-4.jpg";
import dinner2ValeaVerde5 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-5.jpg";
import biertan from "../../../../../../../public/valea-verde/biertan.jpg";
import saschiz from "../../../../../../../public/valea-verde/saschiz.jpg";
import sighisoara from "../../../../../../../public/valea-verde/sighisoara.jpg";

const article = getArticle(21);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerdeCover} alt="Valea Verde - o poveste de succes a reînvierii unui sat transilvănean uitat" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>După experiența gastronomică și vânătoarea de trufe ghidată de care am avut parte la Terra Carpatica - Conacul Grigorescu, despre care am povestit în <Link prefetch={false} href="/ro/vanatoare-de-trufe-si-o-experienta-culinara-deosebita-la-conacul-grigorescu" title="Vânătoare de trufe și o experiență culinară deosebită la Conacul Grigorescu" className="text-blue-600 underline hover:text-blue-800">acest articol</Link>, am achiziționat un pachet similar, de data aceasta la Valea Verde, cu ocazia reducerilor de Black Friday.</p>
        <p>Astfel pachetul pentru două persoane a costat 350 euro, redus de la 498 euro, și a inclus două nopți de cazare cu mic dejun, un pahar de Prosecco de bun venit, două cine cu 4, respectiv 5 feluri de mâncare, un prânz cu două feluri de mâncare și vânătoarea de trufe ghidată. Aș zice că am făcut o afacere bună.</p>
        <p>Valea Verde se află în Cund, un sat pitoresc din județul Mureș, la doar 30 km de Sighișoara, 145 km de Brașov si 330 km de București.</p>
        <h2>Opțiunile de cazare</h2>
        <p>Proprietarii, Ulrike și Jonas Schäfer, s-au mutat din Germania în România, îndrăgostiți fiind de peisajele minunate descoperite aici, de cultura bogată și de viața simplă și autentică. În 2005 au demarat proiectul Valea Verde Retreat prin care au reușit să reînsuflețească micul sat din Transilvania. Pentru Valea Verde s-au inspirat din italienescul “albergo difusso” care înseamnă “hotel împrăștiat”. Cei doi au renovat câteva case din sat, rând pe rând, transformându-le în case de oaspeți, fără a distruge farmecul caselor vechi săsești.</p>
        <p>Toate opțiunile de cazare sunt pe site-ul <LinkExternal link="https://www.valeaverde.com/cazare/" title="Link catre Valea Verde" text="Valea Verde" />. La o simplă numărătoare, aflăm ca sunt puse la dispoziția oaspeților 8 case, aflate la diferite distanțe de restaurant, care pot găzdui peste 60 de persoane.</p>
        <p>Casele în care te poți caza sunt următoarele:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Casa Valea Verde, situată lângă restaurant, dispune de patru apartamente;</li>
          <li>Casa Yard, situată la aproximativ 350 metri de restaurant, dispune de un apartament pentru 4 persoane şi de trei camere duble;</li>
          <li>Casa Cund, situată la 350 metri de restaurant, dispune de două camere;</li>
          <li>Reussdorfer Hoff, situată la aproximativ 600 de metri de restaurant, este cea mai mare casă din Cund şi dispune de 9 camere, fiind ideală pentru grupurile mari de prieteni, pentru teambuilding-uri şi nu numai;</li>
          <li>Casa Bierzahn, situată la 500 metri de restaurant, poate găzdui până la 4 persoane;</li>
          <li>Casa Samways, situată la 550 de metri de restaurant, poate găzdui până la 8 persoane;</li>
          <li>Casa Johann, situată la 450 metri de restaurant, ideală pentru 3 persoane;</li>
          <li>Casa Cal, inaugurată în 2022, după o investiţie de peste 400.000 euro, dispune de 4 camere duble, fiecare cameră fiind dedicată unei culori: albastru, verde, roşu şi alb.</li>
        </ul>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerdeRetreat} alt="Valea Verde Retreat" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Noi am avut camera 1 din Reussdorfer Hoff, o cameră simplă, destul de curată. Când am ajuns era destul de frig în interior, dar s-a încălzit rapid după ce am pornit caloriferele. Ar mai fi avut nevoie de câteva mici reparaţii, în special în baie, eventual şi de un nou strat de var pe pereţi. Am primit din partea casei o sticlă de apă, iar la baie am găsit săpun lichid, dezinfectant şi cremă de corp. Am avut un şemineu în cameră pe care însă nu l-am folosit. De asemenea exista o chicinetă comună unde îţi puteai prepara o cafea sau un ceai.</p>
        <h2>Restaurantul Valea Verde</h2>
        <p>Restaurantul Valea Verde este piesa centrală, nu doar pentru că nu mai ai alte opţiuni pentru luarea mesei în apropiere, ci pentru că aici poţi avea parte de experienţe culinare tradiţionale cu tuşe moderne, bazate pe ingrediente locale, proaspete, de sezon. Valea Verde face parte din curentul Slow Food, iar restaurantul a primit prestigiosul “Blazon pentru excelență în servicii și ospitalitate” al Chaîne des Rôtisseurs, o asociaţie culinară din Franţa. De asemenea găseşti aici o selecţie impresionantă de vinuri locale şi internaţionale care să acompanieze perfect mâncarea delicioasă.</p>
        <p>Cei de la Valea Verde propun un meniu pentru schimbare. Mai precis, un meniu pentru a combate schimbarea climatică. Asta deoarece producţia şi consumul de alimente reprezintă una din principalele cauze ale schimbărilor climatice. Iată ce scrie pe prima pagină a meniului lor: “Pentru a ne aduce contribuţia în salvarea planetei, noi, echipa Valea Verde, ne angajăm să:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>folosim produse locale, sezoniere şi să sprijinim fermierii locali care practică agricultura durabilă,</li>
          <li>păstrăm biodiversitatea şi resursele naturale,</li>
          <li>reducem la minimum risipa de alimente şi apă în bucătărie,</li>
          <li>susţinem conceptul de Slow Food, încuranjându-i pe ceilalţi să înveţe despre mâncarea bună, curată şi corectă.”</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde1} alt="Cina la Valea Verde 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde3} alt="Cina la Valea Verde 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde5} alt="Cina la Valea Verde 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde2} alt="Cina la Valea Verde 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde4} alt="Cina la Valea Verde 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>În fiecare zi meniul este unul fix cu până la 7 feluri de mâncare. După cum ziceam, vineri seara am avut incluse patru feluri de mâncare, la alegere din cele 7 disponibile. Noi am ales câte două aperitive diferite şi anume carpaccio de cerb, terină de pui cu salată, supă cremă de cartofi dulci şi serviciul de unt şi pâine al casei. Ca fel principal am avut ceafă de porc, cartofi ţărăneşti şi ratatui de legume, iar desertul a constat în panna cotta cu zmeură marinată. Ne-au impresionat în special felul principal şi desertul, iar în ceea ce priveşte carnea de vânat, ne-am dat seama că nu e ceva ce putem gusta cu plăcere.</p>
        <p>Micul dejun a fost unul bogat, cu diferite tipuri de brânzeturi şi mezeluri, legume, fructe, zacuscă, salată de vinete, unt, dulceţuri, clătite, suc, lapte, ceai şi cafea. Ouăle erau preparate pe loc în funcţie de preferinţele fiecărui oaspete. Noi am optat pentru ouă benedict şi omletă cu şuncă şi caşcaval.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={micDejunValeaVerde} alt="Micul dejun la Valea verde" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Prânzul a fost unul uşor cu două feluri de mâncare: o salată de valeriană cu brânză de capră şi oţet balsamic şi un risotto cu ciuperci.</p>
        <p>Cina de sâmbătă a avut cinci feluri de mâncare, după cum urmează: terină din ficat de gâscă cu dulceaţă de ardei iute, foietaj cu carne de vânat şi salată, supă cremă de castane, pulpă de raţa cu varză roşie şi crochete de cartofi, iar ca desert am avut măr copt umplut cu nuci cu cremă de vanilie. Surpriza serii a fost supa cremă de castane de care nu mai mâncasem până atunci, dar şi mărul umplut care a fost delicios. O constatare a amândurora a fost faptul că atât raţa cât şi porcul din seara precendentă au avut un gust mult mai intens decât carnea din comerţ.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde1} alt="Cina la Valea Verde 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde3} alt="Cina la Valea Verde 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde5} alt="Cina la Valea Verde 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde2} alt="Cina la Valea Verde 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde4} alt="Cina la Valea Verde 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <h2>Weekenduri tematice şi activităţi la Valea Verde</h2>
        <p>Pe <LinkExternal link="https://www.valeaverde.com/experiente/" title="Link catre experientele de la Valea Verde" text="site-ul Valea Verde" />, găseşti mai multe oferte pentru de weekenduri tematice şi experienţe de care poţi avea parte aici: plimbări cu trăsura, călărie, drumeţii, ciclism, degustări de vinuri, cine tematice, SPA, vânătoare de trufe şi altele.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={weekenduriTematiceSiActivitatiValeaVerde} alt="Weekenduri tematice la Valea Verde" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Noi am fost la vânătoarea de trufe condusă de Viorel Şandru care ne-a încântat cu tot felul de poveşti pe tot parcursul celor două ore de drumeţie prin pădure. A venit însoțit de trei câini de rase diferite. Unul din ei, pe nume Muchi, a fost vedeta vânătorii deoarece găsea trufă după trufă. Dar tot Muchi le-a şi mâncat aproape pe toate. Am fost surprinşi să vedem câte trufe sunt scoase din pământ, mai multe decât am găsit în octombrie şi pe o suprafaţă mai mică de pădure. Despre trufe poţi citi mai multe în <Link prefetch={false} href="/ro/despre-trufe-si-gasirea-lor" title="Despre trufe și găsirea lor" className="text-blue-600 underline hover:text-blue-800">acest articol</Link>.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={vanatoareDeTrufeValeaVerde} alt="Vânătoare de trufe la Valea Verde" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>O altă experienţă unică şi autentică de care am avut parte a fost petrecerea câtorva ore în observatorul poziţionat în spatele unei livezi de peri, undeva la marginea pădurii. Observatorul este o cabană micuţă de lemn, un loc fermecător unde te poţi bucura de linişte, şi poate cu puţin noroc, să vezi animale sălbatice precum vulpi, căprioare, iepuri, pisici sălbatice, şi de ce nu, chiar şi urşi. Noi am ajuns acolo la apus şi chiar în drumul spre cabană am zărit o caprioară.</p>
        <h2>Alte locuri de vizitat în împrejurimi</h2>
        <h3>Manufactura de brânză</h3>
        <p>Chiar în Cund poate fi vizitată <LinkExternal link="http://manufacturadebranza.ro/" title="Link catre Manufactura de Brânză" text="Manufactura de Brânză" /> unde se prelucrează laptele obţinut de la văcuţele din ferma proprie şi de unde poţi cumpăra diverse tipuri de brânză maturată. La cerere, se pot organiza degustări de brânzeturi sau chiar şi vizite la atelier pentru a vedea cum este produsă brânza.</p>
        <h3>Biertan</h3>
        <p>Biertan, este un sat săsesc, aflat la 23 de kilometri de Cund. A fost atestat documentar în secolul XIII, fiind una din primele aşezări germane de saşi din Ardeal. De departe cea mai mare şi impunătoare biserică fortificată din câte am văzut este cea din Biertan.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={biertan} alt="Biserica fortificată din Biertan, vedere de sus" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Cetatea Medievală Sighişoara</h3>
        <p>Cetatea Medievală Sighişoara este cea mai mare cetate medievală din Europa locuită fără întrerupere şi face parte din Patrimoniul Mondial UNESCO încă din 1999. Cele mai importante obiective turistice pe care le poţi vizita în Sighişoara sunt turnul cu ceas, piaţa cetăţii, casa cu cerb, muzeul de istorie, scara şcolarilor, biserica din deal şi turnurile cetăţii.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={sighisoara} alt="Pe strazile dinSighisoara" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Târgu Mureș</h3>
        <p>De neratat în Târgu Mureş, aflat la 43 de kilometri de Cund, este <LinkExternal link="https://palatul-culturii.ro/" title="Link catre Palatul Culturii din Targul Mures" text="Palatul Culturii" /> e găzduieşte mai multe expoziţii, dar şi Cetatea Târgu Mureş. De asemenea, am înţeles că şi <LinkExternal link="https://www.zootirgumures.ro/" title="Link catre Targul Mures Zoo" text="grădina zoologică" /> merită o vizită. Având în vedere că pe Google are nota 4.6 din 9000 de recenzii, îmi pare rău că nu am reuşit să o vizităm. Prin comparaţie, cea din Bucureşti are nota 3.9 din aproximativ 12000 de recenzii.</p>
        <h3>Castelul Bethlen-Haller din Cetatea de Baltă şi crama Jidvei</h3>
        <p>Aflat la 47 de kilometri de Cund, castelul în stil renascentist Bethlen-Haller şi-a deschis porţile pentru vizitatori. Pe lângă vizita propriu-zisă a castelului, turiştii pot opta pentru diferite pachete ce includ degustare de vinuri şi masa de prânz. Detalii pe site-ul <LinkExternal link="https://www.jidvei.ro/castelul-bethlen-haller/" title="Link catre jidvei.ro" text="jidvei.ro" /></p>
        <h3>Saschiz</h3>
        <p>Aflat la 50 de kilometri de Cund, Saschiz este un sat săsesc în care principalul obiectiv turistic este reprezentat de Biserica Evanghelică Fortificată Sf. Ştefan, construită în secolul XV, actual monument UNESCO. Ar mai fi şi Cetatea Țărănească din Saschiz pe care noi însă nu am vizitat-o deoarece la momentul vizitei noastre era închisă pentru renovare, lucru ce m-a bucurat.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={saschiz} alt="Biserica fortificată din Saschiz, vedere aeriană" width={1248} height={841} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Viscri</h3>
        <p>La 70 de kilometri de Cund se află Viscri, despre care noi credem că este cel mai popular sat transilvănean, căruia i-am dedicat <Link prefetch={false} href="/ro/viscri-cel-mai-popular-sat-sasesc-din-transilvania" title="un articol separat" className="text-blue-600 underline hover:text-blue-800">a separate article</Link>.</p>
        <p>În concluzie, Valea Verde este cu siguranţă un loc ce merită vizitat cu sufletul deschis, în care mergi pentru a-ţi reîncărca bateriile şi a te reconecta cu natura. Ne bucurăm să auzim astfel de poveşti precum cea care stă la baza a ceea ce este Valea Verde acum.</p>
    </main>
  </div>
  );
}