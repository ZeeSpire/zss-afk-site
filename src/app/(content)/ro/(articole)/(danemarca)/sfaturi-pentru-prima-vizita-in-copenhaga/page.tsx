import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nyhavnView1 from "../../../../../../../public/copenhaga/poza1_nyhavn_nfwm3x.jpeg";
import nyhavnFunFact from "../../../../../../../public/copenhaga/poza4_funfact_nyhavn_ubdros.jpeg";
import foodPhoto1 from "../../../../../../../public/copenhaga/food1_hzuzng.jpeg";
import foodPhoto2 from "../../../../../../../public/copenhaga/food02_sbeqsn.jpeg";
import foodPhoto3 from "../../../../../../../public/copenhaga/food03_xsiqzv.jpeg";
import foodPhoto4 from "../../../../../../../public/copenhaga/food04_uossl6.jpeg";
import pinImage1 from "../../../../../../../public/copenhaga/pin2_puskrs.jpeg";
import pinImage2 from "../../../../../../../public/copenhaga/pin2_puskrs.jpeg";
import cityFromAbove from "../../../../../../../public/copenhaga/fromabove_uschxi.jpeg";
import poza6 from "../../../../../../../public/copenhaga/poza6_howToGetAround_tbh0xw.jpeg";
import howToGetAround from "../../../../../../../public/copenhaga/poza5_howToGetAround_uacmd6.jpeg";
import timeToVisit from "../../../../../../../public/copenhaga/timetovisit_ixkctt.jpeg";

const article = getArticle(2);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nyhavnView1} alt="Sfaturi pentru prima vizită în Copenhaga" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Inițial un sat de pescuit viking fondat în secolul al X-lea, cunoscut la acea vreme ca un port comercial, Copenhaga este acum un oraș ecologic și palpitant, cu case colorate vibrant, infrastructură de top, restaurante excepționale și reputația de a fi unul dintre cele mai fericite orașe din lume. Copenhaga, orașul poveștilor, cu mai multe biciclete decât mașini, are această atmosferă plăcută și relaxată care te face să vrei să te muți acolo și să începi o nouă viață. După doar câteva zile petrecute acolo, vei începe să simți această stare de confort și mulțumire cunoscută și sub numele de hygge, care va rămâne în inima ta și după ce te întorci acasă.</p>
        <p>Copenhaga este o destinație obligatorie, așa că hai să începem cu câteva sfaturi pentru o călătorie perfectă în acest oraș minunat.</p>
        <h2>Copenhagen Card</h2>
        <p>Copenhagen Card este cel mai convenabil și accesibil mod de a experimenta Copenhaga.</p>
        <p>Acesta include transport public gratuit cu trenul, autobuzul, metroul (inclusiv către și dinspre aeroport) și cu trenul regional în afara Copenhagăi, intrare gratuită la multe muzee și castele, intrare gratuită la Grădinile Tivoli, la Grădina Zoologică, Grădina Botanică, câteva tururi gratuite cu barca și alte reduceri la cafenele și restaurante, reducere la achiziționarea unui tur de vizitare sau la închirierea unei biciclete.</p>
        <p>Poți cumpăra cardul pentru diferite perioade (24, 48, 72, 96 și 120 de ore) și dacă planifici să faci un tur cu barca și să vizitezi unele atracții principale, acest card cu siguranță îți va economisi bani și timp. Poți opta pentru cardul digital. Asta înseamnă că trebuie să descarci aplicația CPH Card și să arăţi codul QR de pe telefonul mobil atunci când vrei să intri la o atracție sau când folosești transportul public. Aplicația mobilă este foarte intuitivă și ușor de utilizat.</p>
        <p>Iată site-ul de unde poți cumpăra cardul și unde poți găsi toate informațiile de care ai nevoie despre <LinkExternal link="https://copenhagencard.com/" title="Link catre Copenhagen Card" text="Copenhagen Card" />.</p>
        <Youtube videoId="tms-6Y5OYFc" />
        <h2>Cea mai bună perioadă pentru a vizita Copenhaga</h2>
        <p>Cea mai bună perioadă pentru a vizita Copenhaga poate depinde de preferinţele personale, dar este acceptat faptul că între mai și septembrie vremea este mai prietenoasă, iar tu poți să te bucuri de mai multe activități în aer liber. Sezonul de vârf este în iulie și august, iar în această perioadă poți întâlni cozi lungi la muzee sau la Grădinile Tivoli, de exemplu. Iarna, vremea este destul de mohorâtă; zilele sunt mai scurte și s-ar putea să preferi să îți petreci mai mult timp în cafenele sau muzee decât afară.</p>
        <p>Noi am vizitat Copenhaga în septembrie și vremea a fost în mare parte frumoasă, cu excepția unor averse ușoare, dar nimic care să ne strice planurile. Sincer, am reveni în Copenhaga oricând, chiar și în februarie.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={timeToVisit} alt="Cea mai bună perioadă pentru a vizita Copenhaga" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Fun fact</h2>
        <p>Copenhaga a fost oficial înființată în 1167, când un episcop numit Absalon, considerat fondatorul orașului, a construit un castel acolo unde se află astăzi Palatul Christiansborg. Inițial, exista doar o mică așezare numită Havn (port), dar odată cu intensificarea comerțului în Evul Mediu, numele a fost schimbat în Købmannehavn, care înseamnă “portul comerciantului”. Ulterior, a fost prescurtat la numele său actual, København.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nyhavnFunFact} alt="Copenhaga - Nyhavn" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Modalităţi de deplasare în Copenhaga</h2>
        <p>Copenhaga este un oraș relativ mic comparativ cu alte capitale europene, dar este plin de atracții (imposibil de vizitat în doar câteva zile). Cele mai multe sunt destul de aproape una de cealaltă, iar sistemul de transport public din Copenhaga este foarte eficient. Dacă nu doreşti să achiziționezi Copenhagen Card, care include transport public nelimitat, ai și alte opțiuni, precum achiziționarea unui City Pass, care oferă libertatea de a utiliza nelimitat transportul public. Vizitează acest site pentru mai multe informații despre toate tipurile de bilete, rute, programul stațiilor de autobuz și City Pass: <LinkExternal link="https://dinoffentligetransport.dk/en/" title="Link catre dinoffentligetransport" text="dinoffentligetransport.dk" /> sau poți descărca aplicația “DOT Tickets”.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={howToGetAround} alt="Copenhaga - Modalităţi de deplasare în Copenhaga, metroul" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Alte modalități de navigare prin oraș:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>
            Cu barca. Poți alege între mai multe tipuri de bărci și tururi, cu sau fără ghid. Mai jos sunt cele care ne-au captat atenția:
            <ul className="list-inside list-none ml-4 mb-2">
              <li>- <LinkExternal link="https://www.stromma.com/en-dk/copenhagen/" title="Link catre stromma.com" text="stromma.com" /></li>
              <li>- <LinkExternal link="https://goboat.dk/en/" title="Link catre goboat.dk" text="goboat.dk" /></li>
              <li>- <LinkExternal link="https://kayakrepublic.dk/en/" title="Link catre kayakrepublic.dk" text="kayakrepublic.dk" /></li>
              <li>- <LinkExternal link="https://www.heycaptain.dk/" title="Link catre heycaptain.dk" text="heycaptain.dk" /></li>
              <li>- <LinkExternal link="https://www.friendships.dk/en/boat-rental-christianshavn/" title="Link catre friendships.dk" text="friendships.dk" /></li>
            </ul>
          </li>
          <li>Cu bicicleta. Copenhaga este cel mai prietenos oraș pentru biciclete din lume și are o infrastructură excelentă pentru biciclete. Dacă doreşti să explorezi orașul cu bicicleta, poți să închiriezi una. Verifică aceste site-uri dacă acest lucru ţi se potrivește:
            <ul className="list-inside list-none ml-4 mb-2">
              <li>- <LinkExternal link="https://www.donkey.bike/cities/bike-rental-copenhagen/" title="Link catre donkey.bike" text="donkey.bike" /></li>
              <li>- <LinkExternal link="http://rentabike.dk/uk/" title="Link catre rentabike.dk" text="rentabike.dk" /></li>
              <li>- <LinkExternal link="https://www.visitcopenhagen.com/copenhagen/activities/copenhagen-bike-rentals" title="Link catre visitcopenhagen.com" text="visitcopenhagen.com" /></li>
            </ul>
          </li>
          <li>Cu taxiul. Nu orice taxi, ci unul prietenos cu mediul înconjurător:
            <ul className="list-inside list-none ml-4 mb-2">
              <li>- <LinkExternal link="https://dantaxi.dk/english/" title="Link catre dantaxi.dk" text="dantaxi.dk" /></li>
              <li>- <LinkExternal link="https://www.viggo.com/" title="Link catre viggo.com" text="viggo.com" /></li>
            </ul>
          </li>
        </ul>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityFromAbove} alt="Copenhagen - vazuta de sus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Hoteluri de luat în calcul</h2>
        <p>Datorită numeroaselor opțiuni de transport prin oraș, dar și a concentrării majorității punctelor de interes în centrul orașului, poți opta să stai în oricare dintre cartierele fermecătoare, în funcție de bugetul și de preferințele tale. Cu toate acestea, am întocmit o listă a hotelurilor care mi s-au părut interesante:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.booking.com/hotel/dk/nyhavn.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre 71 Nyhavn Hotel" text="71 Nyhavn Hotel" /> - acest hotel situat în iconicul cartier Nyhavn (Noul Port) este amplasat în două depozite convertite din anii 1800.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/nimb.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Nimb Hotel" text="Nimb Hotel" /> - clădire în stil maur aflată chiar în mijlocul Grădinilor Tivoli.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/sanders.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Hotel Sanders" text="Hotel Sanders" /> - hotel boutique de lux, foarte central, foarte elegant.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/nh-collection-copenagen.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre NH Collection Copenhagen" text="NH Collection Copenhagen" /> - situat în Christianshavn, aproape de centrul orașului și de stația de metrou, are două restaurante și un bar prezentat de un bucătar cu stea Michelin, împreună cu alte facilități drăguţe.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/villa-copenhagen-kobenhavn.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Villa Copenhagen" text="Villa Copenhagen" /> - clădire din 1909, situată în Vesterbro, are un restaurant, un bar, o grădină, o terasă cu piscină încălzită, saună, centru de fitness și arată uimitor. Plus, contul lor de Instagram (villacph) este splendid.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/copenhagen-admiral.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Copenhagen Admiral Hotel" text="Copenhagen Admiral Hotel" /> - hotel de pe malul apei cu un design atrăgător, situat într-o clădire listată ca monument istoric din anii 1780.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/hotel-skt-petri.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Hotel Skt Petri" text="Hotel Skt Petri" /> - hotel situat central în vechiul cartier Latin.</li>
        </ul>
        <p>Aceste hoteluri au tarife piperate, dar există o mulțime de alte opțiuni mult mai ieftine decât acestea, care au farmecul lor.</p>
        <p>Noi am ales NH Collection Copenhagen, având cel mai bun raport calitate-preț în momentul rezervării noastre. Era proaspăt inaugurat, excepțional de curat și frumos decorat, aproape de centrul orașului, iar micul dejun a fost într-adevăr bun și a inclus multe opțiuni. Ne-am bucurat de ouăle ochiuri și de terciul cu fructe proaspete. Am avut chiar și șampanie la micul dejun, ceea ce a reprezentat o experiență în sine.</p>
        <h2>Feluri de mâncare de încercat în Copenhaga</h2>
        <p>Copenhaga poate fi considerată o destinație culinară cu unele dintre cele mai bune restaurante din lume. Mâncarea în Copenhaga este scumpă, dar, pe de altă parte, danezii apreciază ingredientele locale, organice și premium și au unele dintre cele mai bune restaurante din lume.</p>
        <p>Noma și Geranium, cu câte 3 stele Michelin fiecare, se află în vârful listei celor 50 de cele mai bune restaurante din lume în 2021. Există cel puțin alte 10 restaurante cu una sau două stele Michelin, ceea ce pentru unii poate fi un motiv suficient să viziteze Copenhaga.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto4} alt="Copenhaga - mancare 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto3} alt="Copenhaga - mancare 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto2} alt="Copenhaga - mancare 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Am încercat câteva dintre preparatele pentru care Danemarca este cel mai bine cunoscută. Iată selecția noastră:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Smørrebrød - o felie de pâine integrală cu diverse combinații de topping-uri, cum ar fi pește prăjit, hering marinat, roast beef, ou fiert cu maioneză, creveți, etc.</li>
          <li>Terci - cu diferite topping-uri precum caramel făcut în casă, migdale prăjite, fructe proaspete, zmeură liofilizată, Nutella făcută în casă sau unt de arahide. De la Grød.</li>
          <li>Fiskefrikadeller (chiftele de pește) sau Frikadeller (chiftele de porc) cu salată de cartofi și maioneză. Delicios.</li>
          <li>Hot dog-uri de la comercianții ambulanți cu diverse topping-uri și sosuri.</li>
          <li>Berea Carlsberg și alte beri produse local au fost peste așteptări.</li>
          <li>Rulouri cu scorțișoară.</li>
          <li>Stegt flæsk med persillesovs - carne de porc crocantă, cartofi și sos de pătrunjel.</li>
          <li>Fructe proaspete de la piață (foarte gustoase).</li>
        </ul>
        <p>Locul nostru preferat pentru a lua ceva de mâncare și o bere pentru a ne potoli setea a fost Torvehallerne, o piață urbană acoperită, specializată în produse alimentare proaspete. Încă mai visez la sandwich-ul cu rață de la Ma Poule, însoțit de delicioasa limonadă de la Fresh Market.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto1} alt="Copenhaga - Torvehallerne" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Lucruri de făcut în Copenhaga</h2>
        <p>Pe lângă atracțiile turistice obișnuite, Copenhaga are un farmec special pe care îl poți simți plimbându-te pe străzi și admirând clădirile minunate, canalele și parcurile frumoase. Poți să iei și o cafea de la Espresso House sau un smoothie de la Joe and the Juice și să faci o plimbare prin Grădina Botanică, admirând plantele.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={poza6} alt="Copenhaga - canale" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Sau poți să cumperi câteva beri și să închiriezi o barcă electrică pentru o plimbare pe canale, așa cum fac localnicii. Este nevoie de foarte puțin pentru a simți spiritul Copenhagăi, așa că iată lucrurile care au făcut călătoria noastră una de neuitat:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Am admirat Copenhaga de sus. Există mai multe locuri de unde poți vedea orașul, cum ar fi turnul Bisericii Mântuitorului, Turnul Rotund, Turnul Primăriei și turnul Palatului Christiansborg.</li>
          <li>Am participat la o excursie cu barca pe canale. Noi am ales Grand Canal Tour de la compania Stromma, care a fost o excursie ghidată live, și am petrecut o oră plăcută navigând pe canale.</li>
          <li>Am explorat zonele mai puțin cunoscute ale Copenhagăi și ale împrejurimilor sale. Datorită Copenhagen Card, am putut călători oriunde am dorit datorită transportului public de calitate și am vizitat zone mai îndepărtate și cartiere mai puțin vizitate de turiști.</li>
          <li>Amager Strandpark. Ne-am bucurat de o pauză de la vizitarea muzeelor și palatelor pe această plajă liniștită, cu nisip fin și pescăruși prietenoși.</li>
          <li>Am redescoperit copilul din noi în parcul de distracții Tivoli Gardens, unul dintre cele mai vechi parcuri de distracții în funcțiune din lume.</li>
        </ul>
        <p>Pentru o listă mai cuprinzătoare a locurilor de vizitat și a lucrurilor de făcut în Copenhaga, consultă următorul nostru <Link prefetch={false} href="/ro/atractii-gratuite-de-vizitat-in-copenhaga" title="15 atracții gratuite de vizitat în Copenhaga" className="text-blue-600 underline hover:text-blue-800">articol</Link>.</p>
        <p>Moneda oficială a Danemarcei este coroana daneză (DKK), așa că toate prețurile sunt în DKK. Se poate plăti ușor cu cardul de debit sau cu cardul de credit peste tot în Copenhaga. Nu ai nevoie de bani cash în DKK, deoarece bacșișurile sunt opționale, din moment ce danezii sunt plătiți cu salarii corecte.</p>
        <p>Toată lumea vorbește foarte bine engleza, așa că este singura limbă pe care trebuie să o ști. Dar iată câteva cuvinte dacă doreşti să îţi exersezi daneza. Nu uita să salvezi articolul dacă ţi-a plăcut.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage1} alt="Copenhaga - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage2} alt="Copenhaga - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}