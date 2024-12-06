import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";

import aperitivoItalianoMateraAperol from "../../../../../../../public/matera/aperitivo-italiano-matera-aperol.jpg";
import aperitivoItalianoMateraBruschetta from "../../../../../../../public/matera/aperitivo-italiano-matera-bruschetta.jpg";
import materaItaly1 from "../../../../../../../public/matera/matera-italy-1.jpeg";
import materaItaly3 from "../../../../../../../public/matera/matera-italy-3.jpg";
import materaItaly4 from "../../../../../../../public/matera/matera-italy-4.jpg";
import materaItalyAtNight from "../../../../../../../public/matera/matera-italy-at-night.jpg";
import materaItalyBelvedereFromSaintAgostino from "../../../../../../../public/matera/matera-italy-belvedere-from-saint-agostino.jpg";
import materaItalyCasaGrottaCeraUnaVolta from "../../../../../../../public/matera/matera-italy-casa-grotta-c-era-una-volta.jpg";
import materaItalyCasaGrottaDelCasalnuovoBathroom from "../../../../../../../public/matera/matera-italy-casa-grotta-del-casalnuovo-bathroom.jpg";
import materaItalyCasaGrottaDelCasalnuovoBedroom from "../../../../../../../public/matera/matera-italy-casa-grotta-del-casalnuovo-bedroom.jpg";
import materaItalyCasaGrottaDelCasalnuovoDetails from "../../../../../../../public/matera/matera-italy-casa-grotta-del-casalnuovo-details.jpg";
import materaItalyCasaGrottaDiVicoSolitario1 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-1.jpg";
import materaItalyCasaGrottaDiVicoSolitario2 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-2.jpg";
import materaItalyCasaGrottaDiVicoSolitario3 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-3.jpg";
import materaItalyCasaGrottaDiVicoSolitario4 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-4.jpg";
import materaItalyCattedraleExterior from "../../../../../../../public/matera/matera-italy-cattedrale-exterior.jpg";
import materaItalyCattedraleInterior from "../../../../../../../public/matera/matera-italy-cattedrale-interior.jpg";
import materaItalyChiesaDelPurgatorio1 from "../../../../../../../public/matera/matera-italy-chiesa-del-purgatorio-1.jpeg";
import materaItalyChiesaDelPurgatorio2 from "../../../../../../../public/matera/matera-italy-chiesa-del-purgatorio-2.jpeg";
import materaItalyChiesaDelPurgatorio3 from "../../../../../../../public/matera/matera-italy-chiesa-del-purgatorio-3.jpeg";
import materaItalyChiesaDiSanFrancescoDiAssisi from "../../../../../../../public/matera/matera-italy-chiesa-di-san-francesco-di-assisi.jpg";
import materaItalyChiesaDiSanGiovanniBattista from "../../../../../../../public/matera/matera-italy-chiesa-di-san-giovanni-battista.jpg";
import materaItalyChiesaDiSanPietroCaveoso from "../../../../../../../public/matera/matera-italy-chiesa-di-san-pietro-caveoso.jpg";
import materaItalyChiesaDiSantaLuciaAlleMalveExterior from "../../../../../../../public/matera/matera-italy-chiesa-di-santa-lucia-alle-malve-exterior.jpg";
import materaItalyChiesaDiSantaLuciaAlleMalveNecropolis from "../../../../../../../public/matera/matera-italy-chiesa-di-santa-lucia-alle-malve-necropolis.jpg";
import materaItalyChiesaRupestreDiSantaMariaDiIdris from "../../../../../../../public/matera/matera-italy-chiesa-rupestre-di-santa-maria-di-idris.jpg";
import materaItalyFontanaDellAmore from "../../../../../../../public/matera/matera-italy-fontana-dell-amore.jpg";
import materaItalyPalazzoDegliAbatiRoom from "../../../../../../../public/matera/matera-italy-palazzo-degli-abati-room.jpg";
import materaItalyPalombaroLungo from "../../../../../../../public/matera/matera-italy-palombaro-lungo.jpg";
import materaItalyParcoRegionaleDellaMurgiaMateranaView from "../../../../../../../public/matera/matera-italy-parco-regionale-della-murgia-materana-view.jpg";
import materaItalyParcoRegionaleDellaMurgiaMaterana from "../../../../../../../public/matera/matera-italy-parco-regionale-della-murgia-materana.jpg";
import materaItalyStreet1 from "../../../../../../../public/matera/matera-italy-street-1.jpg";
import materaItalyStreet2 from "../../../../../../../public/matera/matera-italy-street-2.jpg";
import materaItalyStreet3 from "../../../../../../../public/matera/matera-italy-street-3.jpg";
import materaPin1 from "../../../../../../../public/matera/matera-pin-1.jpg";
import materaPin2 from "../../../../../../../public/matera/matera-pin-2.jpg";

const article = getArticle(23);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItaly1} alt="Matera, Italia - Vedere a orașului Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <h2>De ce să adaugi Matera pe lista cu locuri de văzut într-o viaţă</h2>
        <p>Orașul Matera din Italia a fost <LinkExternal link="https://www.europarl.europa.eu/news/en/headlines/society/20181205STO20960/plovdiv-and-matera-european-capitals-of-culture-in-2019" title="Link către Capitala Europeană a Culturii" text="capitala culturală europeană" /> în 2019, împreună cu orașul Plovdiv din Bulgaria. Atunci am văzut pentru prima dată fotografii cu locuințele rupestre sculptate în stâncă în canionul râului Gravina. Și atunci mi-am dat seama că vreau să văd cu ochii mei acest oraș care părea a fi dintr-o lume foarte îndepărtată.</p>
        <p>Matera este un oraș din sudul Italiei care are o istorie bogată de mai bine de 9.000 de ani. Situată în regiunea Basilicata, este considerată una dintre cele mai vechi așezări locuite continuu din lume. Cel puțin, acestea sunt informațiile găsite pe anumite site-uri, în timp ce pe altele lucrurile diferă. De exemplu, pe acest <LinkExternal link="https://www.waitaly.net/en/2022/10/28/matera-the-city-of-culture-landscape-and-heritage/#:~:text=Italy%20is%20famous%20for%20its,the%20UNESCO%20World%20Heritage%20sites" title="Link catre WaItaly website" text="website" /> am descoperit că “Matera este cel mai vechi oraș din Italia și din Europa”, în timp ce pe altele este scris că “Plovdiv este considerat a fi cel mai vechi oraș locuit continuu din Europa”. Plovdiv se află și el pe lista noastră de destinații.</p>
        <p>Cu toate acestea, Matera este renumită pentru arhitectura sa unică, inclusiv pentru „sassi”, o serie de locuințe antice sculptate în stâncă. Sassi au fost locuite din timpuri preistorice și au fost folosite pe post de case, grajduri și chiar biserici până în anii 1950.</p>
        <p>Depopularea Materei în anii 1950 a fost un eveniment semnificativ în istoria orașului. La mijlocul secolului XX, Matera era unul dintre cele mai sărace și supraaglomerate orașe din Italia, iar locuitorii săi s-au confruntat cu o serie de provocări sociale și economice. Condițiile de viață din Sassi erau deosebit de dificile, cu o salubritate precară, acces limitat la apă și spațiu limitat.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItaly3} alt="Matera, Italia - Pe străzi" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Pentru a rezolva aceste probleme, guvernul italian a inițiat în anii 1950 un program de relocare a locuitorilor din Sassi în noi locuințe construite la periferia orașului. Această mutare a fost efectuată rapid și a presupus evacuarea forțată a multor locuitori, cărora li s-au dat puține preavize și opțiuni. Drept urmare, multe familii au fost forțate să-și părăsească locuinţele și să înceapă o viață nouă.</p>
        <p>Sassi di Matera a fost restaurat și revitalizat, devenind o destinație turistică majoră și o atracție culturală. Casele odinioară abandonate au fost restaurate, renovate și transformate în muzee, restaurante și hoteluri, devenind astfel o atracție turistică populară.</p>
        <p>În 1993, Matera a fost desemnată Patrimoniu Mondial UNESCO datorită semnificației sale culturale și istorice. Orașul a fost folosit și ca locație de filmare pentru mai multe filme, inclusiv „Patimile lui Hristos”, ajungând în atenția publicului de pretutindeni.</p>
        <p>Una dintre cele mai izbitoare caracteristici ale Materei este arhitectura sa distinctivă. Sassi, cu aleile ei înguste și străzile în trepte, sunt o mărturie a istoriei orașului și a ingeniozității primilor săi locuitori. În plus, orașul are mai multe biserici frumoase, multe datând chiar din Evul Mediu.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItaly4} alt="Matera, Italia - Orașul" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Despre călătoria noastră - cum am călătorit, unde am stat și câte zile am petrecut în Matera</h2>
        <p>Matera se află la aproximativ 70 km de Bari, distanță care poate fi parcursă cu trenul sau cu mașina. Am aterizat pe aeroportul internațional din Bari - Karol Wojtyla, iar de acolo am închiriat o mașină pentru a putea explora cât mai multe locuri din sudul Italiei.</p>
        <p>Ca în toate orașele vizitate în această excursie, accesul cu mașina în centrul istoric este interzis (cel puțin pentru turiști). Și este mult mai bine așa, pentru că aceste străzi nu au fost făcute pentru mașini în primul rând. Pentru noi, nu a fost atât de greu să găsim un loc de parcare și să plătim, dar felul în care se conduce în Italia ni s-a părut destul de haotic. Se pare că nimeni nu respectă regulile de circulație, dar asta este o poveste pentru altă dată.</p>
        <p>Am stat două nopți în hotelul-boutique <LinkExternal link="https://www.booking.com/hotel/it/palazzo-degli-abati.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link catre Palazzo degli Abati" text="Palazzo degli Abati" /> (Palatul Stareților) situat în inima cartierului Sasso Barisano, chiar lângă Chiesa di San Pietro Barisano. Aici fac o paranteză pentru a spune că “sasso” (pl. sassi) înseamnă “piatră” în italiană și că Sassi di Matera este împărțit în două districte sau cartiere: Sasso Caveoso și Sasso Barisano. Amândouă au fost săpate din stânca de pe ambele părți ale dealului Civita.</p>
        <p>Un alt lucru pe care vreau să-l subliniez este că ori de câte ori vei vedea cuvântul “chiesa” în acest articol, trebuie să ști că “chiesa” înseamnă “biserică” în italiană.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyPalazzoDegliAbatiRoom} alt="Matera Italia - camera de hotel in Palazzo Degli Abati" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Dar să revenim la <LinkExternal link="https://www.booking.com/hotel/it/palazzo-degli-abati.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link catre Palazzo degli Abati" text="Palazzo degli Abati" />, care aparent datează din 1756 și care a fost restaurat cu grijă și transformat într-un hotel de 4 stele. Ne-am dorit să stăm într-o peșteră, aceasta fiind în sine o experiență memorabilă. Așa că am rezervat camera “Suite in Cave – U Firn du Cidd” care ne-a depășit așteptările. Această încăpere a servit anterior drept cuptor, după cum ne spune și numele camerei, “U Firn du Cidd” care se traduce prin “Cuptorul catârului”. În pereții grotei, am putut admira fosile marine despre care am aflat că sunt reale și că datează de acum 2 milioane de ani. Dar piesa de rezistență a fost podeaua de sticlă prin care puteam vedea descoperirile arheologice pe care a fost construit anterior cuptorul. De asemenea, priveliștea de pe terasa unde am luat micul dejun este uluitoare.</p>
        <p>Acestea sunt celelalte hoteluri pe care le-am luat în considerare atunci când am căutat cazare:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.booking.com/hotel/it/il-palazzotto-matera.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link catre Palazzotto Residence & Winery" text="Palazzotto Residence & Winery" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/aquatio-cave-luxury-amp-spa.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link catre Aquatio Cave Luxury Hotel & SPA" text="Aquatio Cave Luxury Hotel & SPA" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/sextantio-le-grotte-della-civita.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link catre Sextantio Le Grotte Della Civita" text="Sextantio Le Grotte Della Civita" /></li>
        </ul>
        <p>Am petrecut o zi şi jumătate în Matera şi iată ce am putut face şi vizita în acest interval.</p>
        <h2>Top 20 lucruri de făcut în Matera</h2>
        <h3>1. Parco Regionale della Murgia Materana</h3>
        <p>Parco Regionale della <LinkExternal link="http://www.parcomurgia.it" title="Link catre Murgia Materana" text="Murgia Materana" /> este un parc regional situat în zona Murgia, lângă orașul Matera și a fost prima noastră oprire înainte de a ne îndrepta spre oraș. Se întinde pe o suprafață de aproximativ 50.000 de hectare și conține mai multe situri culturale și istorice importante, inclusiv locuințe rupestre, biserici cioplite în stâncă și fortificații. Aceste situri stau mărturie pentru istoria lungă și bogată a regiunii și sunt repere culturale importante.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyParcoRegionaleDellaMurgiaMateranaView} alt="Matera Italy - vedere din Parco Regionale della Murgia Materana" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyParcoRegionaleDellaMurgiaMaterana} alt="Matera Italy - Parco Regionale della Murgia Materana" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>2. Piazza Vittorio Veneto</h3>
        <p>Piața Vittorio Veneto este un bun punct de plecare în explorarea străzilor din Sasso Barisano. Zona este plină de gelaterii, patiserii, buticuri de suveniruri, restaurante cu terase și magazine de îmbrăcăminte și bijuterii. Devine foarte animat și plin de turiști mai ales seara.</p>
        <p>Dar înainte de a merge mai departe, poţi bifa alte două obiective care se găsesc chiar în această piață: Chiesa di San Domenico și Palombaro lungo.</p>
        <h3>3. Chiesa di San Domenico</h3>
        <p>Chiesa di San Domenico este o biserică notabilă construită în secolul al XIII-lea. Fațada sa este parțial cioplită în piatră, în stil romanic apulian, făcându-l un exemplu unic de integrare arhitecturală cu mediul natural. Este, de asemenea, cunoscută pentru frescele și sculpturile sale elaborate, inclusiv un crucifix din lemn pictat, care datează din anii 1400.</p>
        <h3>4. Palombaro lungo</h3>
        <p>Este una dintre cele mai mari și mai importante cisterne din zonă și este considerată un exemplu remarcabil de sisteme antice de administrare a apei. Cisterna a fost săpată în stâncă și a fost folosită pentru a colecta apa de ploaie și a o stoca în rezervoare subterane. Apa era folosită apoi în diverse scopuri, inclusiv pentru irigare, băut și spălare.</p>
        <p>Astăzi, <LinkExternal link="https://www.palombarolungo.it/index.htm" title="Link catre Palombaro Lungo" text="Palombaro Lungo" /> este o atracție turistică populară și un simbol al ingeniozității și inventivității oamenilor care au locuit în Sassi. Vizitatorii pot explora cisterna și pot admira caracteristicile sale arhitecturale, inclusiv camerele subterane și rețeaua de tuneluri și canale care au fost folosite pentru colectarea și distribuirea apei.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyPalombaroLungo} alt="Palombaro Lungo, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>5. Chiesa di San Giovanni Battista</h3>
        <p>Situată în Piazza San Giovani, la doar 170 m de Palombaro Lungo, această biserică a fost prima structură sacră construită în afara zidurilor orașului. A fost construită în secolul al XIII-lea și a suferit mai multe modificări de-a lungul secolelor.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSanGiovanniBattista} alt="Chiesa di San Giovanni Battista, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>6. Casa grotta C’era una volta</h3>
        <p>Am dat din întâmplare peste această <LinkExternal link="https://www.anticamatera.it/" title="Link catre Anticamera" text="casă" /> care exemplifică modul în care oamenii trăiau aici înainte de anii 1950. Casa este săpată în stânca de calcar, iar singura deschidere care permitea luminii și aerului să intre este ușa. Casa este împărțită în trei zone diferite: zona de dormit, zona în care erau ținute animalele și zona bucătăriei.</p>
        <p>“Casa grotta” se referă la acest tip de case-muzeu care pot fi vizitate în Sassi. Acesta este doar una dintre ele. Continuă să citeşti pentru a afla mai multe.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaCeraUnaVolta} alt="Casa grotta C'era una volta, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>7. Chiesa di San Pietro Barisano</h3>
        <p>Biserica San Pietro Barisano reprezintă una dintre cele mai mari așezări monahale rupestre din orașul Matera. Fațada centrală este singura parte care poate fi observată din exterior. Biserica are o clopotniță care a fost construită după ultima restaurare din 1755. Spațiile subterane ale bisericii merită văzute și au o istorie interesantă care implică drenarea cadavrelor.</p>
        <h3>8. Explorează străzile din Matera</h3>
        <p>Când te afli în Sassi di Matera, oriunde priveşti, găseşti ceva de fotografiat. Ești înconjurat de atât de multă frumusețe și istorie încât nu știi la ce să te uiți mai întâi. Poate fi copleșitor. Poţi lua o pauză de la toate acestea luând ceva local de mâncare, cum ar fi un panzerotto umplut cu sos de roșii și mozzarella sau o puccia care este un tip de pâine servit cu o varietate de umpluturi (asemănător cu un sandviș). Sau dacă preferi ceva dulce, poţi opta pentru o îngheţată de la mama ei.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyStreet1} alt="Matera, Italia - Pe strazile din Matera 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyStreet2} alt="Matera, Italia - Pe strazile din Matera 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyStreet3} alt="Matera, Italia - Pe strazile din Matera 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>În timp ce te plimbi pe străzile întortocheate, unele urcând, altele coborând, ai șansa să descoperi în drumul tău și alte obiective turistice. Ca de exemplu, Fontana dell’Amore.</p>
        <h3>9. Fontana dell’Amore</h3>
        <p>Fontana dell’Amore, sau “Fântâna Iubirii”, este o fântână istorică și un simbol binecunoscut al bogatului patrimoniu cultural al orașului. Fântâna este situată în inima Sassi-ului, înconjurată de străzi înguste și clădiri istorice și este considerată un exemplu perfect al peisajului urban unic al zonei. Fântâna a fost folosită cândva ca sursă publică de apă, dar astăzi este în principal un element decorativ și un loc de adunare atât pentru vizitatori, cât și pentru localnici.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyFontanaDellAmore} alt="Fontana dell'Amore, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>10. Catedrala din Matera și Piazza Duomo</h3>
        <p>Situată în Piazza Duomo, Cattedrale di Maria Santissima della Bruna e Sant’Eustachio (sau Duomo di Matera) este principalul lăcaș de cult catolic din Matera. Catedrala este remarcabilă pentru fațada impresionantă, cu ornamente, sculpturi și fresce. Interiorul catedralei este la fel de impresionant, cu tavane înalte, fresce complicate și altare aurite.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCattedraleExterior} alt="Cattedrale di Matera, Duomo di Matera, exterior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCattedraleInterior} alt="Cattedrale di Matera, Duomo di Matera, interior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>11. Chiesa Rupestre di Santa Maria di Idris</h3>
        <p>Biserica Sfânta Maria din Idris cunoscută și sub numele de Madonna de Idris este o biserică rupestră ce are la poalele ei Sassi di Matera. Reprezintă unul din cele mai vechi obiective religioase din oraș, anumite părți din biserică datând încă din secolul al IX-lea. Indiferent dacă eşti interesat de istorie, artă sau religie, Biserica Sfânta Maria din Idris este o destinație obligatorie din Matera.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaRupestreDiSantaMariaDiIdris} alt="Chiesa Rupestre di Santa Maria di Idris, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>12. Chiesa di San Pietro Caveoso</h3>
        <p>La doar o aruncătură de băț de Madonna de Idris, se află Piazza San Pietro, unde se află Biserica San Pietro Caveoso, cunoscută și sub numele de Chiesa di San Pietro e Paolo. Biserica, construită în 1218 în stil baroc, a suferit mai multe renovări și restaurări de-a lungul secolelor, dar o mare parte din structura sa originală și caracteristicile arhitecturale au fost păstrate, făcând-o un sit istoric și cultural valoros.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSanPietroCaveoso} alt="Chiesa di San Pietro Caveoso, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>După ce ai admirat priveliștile din Piazza San Pietro, ia-o pe strada Vico Solitario, unde vei găsi în mai puțin de 150 de metri Chiesa rupestre di Sant’Agostino al Casalnuovo și chiar lângă ea, Casa Grotta nei Sassi di Matera.</p>
        <h3>13. Casa Grotta nei Sassi di Matera</h3>
        <p>Casa Grotta nei Sassi di Matera, cum o vei găsi pe Google, sau <LinkExternal link="http://www.casagrotta.it/index.php?lang=en" title="Link catre Casa Grotta di Vico Solitario" text="Casa Grotta di Vico Solitario" />, este un exemplu bine conservat de locuință rupestră tradițională. Casa este cioplită în stâncă și se crede că datează din secolul al XVII-lea sau chiar mai mult. Deși nu este singura casă de acest gen care poate fi vizitată în Matera, este cu siguranță cea mai populară.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario4} alt="Casa Grotta di Vico Solitario, interior 1, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Casa istorică este acum un muzeu și este deschisă publicului. Vizitatorii pot explora interiorul casei și pot afla despre istoria Materei și arhitectura unică a locuințelor rupestre. Casa a fost restaurată pentru a reflecta aspectul său original și include mobilier și obiecte de uz casnic din acea vreme, oferind vizitatorilor o privire asupra vieții de zi cu zi a oamenilor care au locuit în trecut în Sassi.</p>
        <p>În bilet sunt incluse Biserica Rupestră Sfântul Agostino al Casalnuovo și Neviere. Le Neviere (cisterne de zăpadă) constau în cisterne subterane, canale și fântâni și au fost o parte esențială a vieții de zi cu zi în Sassi timp de multe secole. Au fost folosite pentru colectarea și canalizarea apei de pe dealurile din apropiere pentru uz casnic și agricol.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario1} alt="Casa Grotta di Vico Solitario interior 1, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario2} alt="Casa Grotta di Vico Solitario interior 2, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario3} alt="Casa Grotta di Vico Solitario interior 3, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>După încă 100 de metri vei ajunge la Chiesa di Santa Lucia alle Malve.</p>
        <h3>14. Chiesa di Santa Lucia alle Malve</h3>
        <p>Biserica Santa Lucia alle Malve, dedicată iniţial Sfintei Agata, este primul așezământ monahal feminin al Ordinului Benedictin şi datează din secolul al VIII-lea. Se diferenţiază de celelalte din zona Matera, datorită prezenței a numeroase fresce, bine conservate și astăzi, și a unui aspect arhitectural de o măiestrie rafinată. Deoarece a suferit numeroase modificări și renovări de-a lungul secolelor, astăzi putem admira frescele adăugate în secolul al XVII-lea.</p>
        <p>Treptele de lângă biserică te vor duce pe acoperișul bisericii unde se află o necropolă cu morminte săpate în stâncă. Când am fost noi acolo, nu erau semne sau panouri informative. Am observat mormintele doar pentru că citisem anterior despre ele pe internet. Probabil că dacă optezi pentru un tur ghidat al orașului vei afla mai multe informații.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSantaLuciaAlleMalveExterior} alt="Chiesa di Santa Lucia alle Malve exterior, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSantaLuciaAlleMalveNecropolis} alt="Chiesa di Santa Lucia alle Malve necropolis, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h3>15. Casa Grotta del Casalnuovo</h3>
        <p>După ce ai vizitat Chiesa di Santa Lucia alle Malve și necropola, mergi la <LinkExternal link="https://www.casagrottamatera.com" title="Link catre Casa Grotta del Casalnuovo" text="Casa Grotta del Casalnuovo" />. Nu-ți face griji, va trebui să mergi doar 150 de metri. Casa Grotta del Casalnuovo este o altă casă tipică, parțial sculptată în peșteră și parțial construită. Vei vedea în interior mobilier și unelte originale pe care familia care locuia acolo le folosea în viața de zi cu zi înainte de depopularea care a avut loc la sfârșitul anilor 1950.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDelCasalnuovoBedroom} alt="Casa Grotta del Casalnuovo bedroom, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDelCasalnuovoDetails} alt="Casa Grotta del Casalnuovo details, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDelCasalnuovoBathroom} alt="Casa Grotta del Casalnuovo bathroom, Matera, Italia" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h3>16. Chiesa del Purgatorio</h3>
        <p>Chiesa del Purgatorio este numită după doctrina catolică a Purgatoriului, despre care se crede că este o stare de purificare după moarte, în care sufletele se supun penitenței pentru a fi curățate de păcate înainte de a putea intra în rai. Construită în secolul al XVIII-lea, biserica este împodobită de cranii și schelete. Scheletele au rolul de a reaminti importanța de a duce o viață bună, precum și a ideii de viață de apoi și a nevoii de purificare. Scheletele servesc și ca exemplu de artă macabră și simbolism religios.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDelPurgatorio1} alt="Chiesa del Purgatorio 1, Matera, Italia" width={720} height={1080} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDelPurgatorio2} alt="Chiesa del Purgatorio 2, Matera, Italia" width={720} height={1080} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDelPurgatorio3} alt="Chiesa del Purgatorio 3, Matera, Italia" width={720} height={1080} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h3>17. Chiesa di San Francesco d’Assisi</h3>
        <p>La doar o aruncătură de băț de Chiesa del Purgatorio, se află Chiesa di San Francesco d’Assisi, cu vedere spre o piață mare numită (poate ai ghicit) San Francesco. Prima clădire de pe acest sit datează din secolul al XIII-lea, dar fațada a căpătat forma actuală în secolul al XVIII-lea.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSanFrancescoDiAssisi} alt="Chiesa di San Francesco d'Assisi, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>18. Bucură-te de un “aperitivo” așa cum fac italienii</h3>
        <p>Aperitivul italienesc are loc de obicei înainte de cină. Este un moment pentru relaxare cu prietenii sau familia alături de o băutură și de o gustare. Am petrecut câteva momente incredibile pe terasa hotelului în care am stat (Palazzo degli Abati), numită <LinkExternal link="http://www.palazzodegliabati.it/crialoss" title="Link to Crialoss Café" text="Crialoss Café" /> ce are o vedere spectaculoasă asupra Sasso Caveoso. Am sorbit dintr-un Aperol Spritz și am comandat o cină ușoară. Am optat pentru câteva mâncăruri locale, cum ar fi un trio de bruschete și Cialledda, care este o salată de castraveți, roșii, ceapă, pâine și ulei de măsline. Totul a fost proaspăt şi aromat.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={aperitivoItalianoMateraAperol} alt="Italian aperitivo - Aperol spritz" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={aperitivoItalianoMateraBruschetta} alt="Italian aperitivo - bruschetta" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h3>19. Admiră priveliștea de la Mănăstirea Sfântului Agostino</h3>
        <p>Chiar dacă poți vizita interiorul Bisericii Rupestre San Giuliano (sec. XV), dar și mănăstirea Sfântului Agostino, acesta este de fapt unul dintre cele mai bune puncte de belvedere asupra Materei. Este un loc ce nu trebuie ratat pentru fotografii perfecte la apus.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyBelvedereFromSaintAgostino} alt="Belvedere de la Conventul Sfântului Augustin, Matera, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>20. Matera pe timp de noapte</h3>
        <p>Deși îţi poţi face o idee destul de bună despre Matera vizitând atracții turistice timp de o zi întreagă, Matera pe timp de noapte este deosebit de frumoasă. Scăldată în lumini calde ce îţi permit doar parţial să vezi locuințele antice, atmosfera devine de-a dreptul magică. O plimbare prin Matera după apusul soarelui e ceva de neratat.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyAtNight} alt="Matera noaptea, Italia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Rute cu puncte de interes</h2>
        <p>Iată două trasee ce conţin majoritatea obiectivelor turistice din acest articol, pe care le poţi parcurge pe jos prin Matera. Sau, altfel spus, cum să petreci o zi întreagă în Matera sau două zile într-un ritm lejer.</p>
        <p>Ruta 1:</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m54!1m8!1m3!1d3026.401598003985!2d16.6090351!3d40.6651195!3m2!1i1024!2i768!4f13.1!4m43!3e2!4m5!1s0x13477ed93296ccb1%3A0x3b23a4f91486fa80!2sVia%20Muro%2C%2026%2C%2075100%20Matera%20MT%2C%20Italy!3m2!1d40.66601!2d16.6115405!4m5!1s0x13477eded6345c53%3A0x16dcc2153397bf34!2sPiazza%20Duomo%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6665393!2d16.6111972!4m5!1s0x13477edbfdd0f36b%3A0xfcf7c374fd06da43!2sChiesa%20Rupestre%20di%20Santa%20Maria%20di%20Idris%2C%20Via%20Madonna%20dell'Idris%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.664211699999996!2d16.612159!4m5!1s0x13477edc1d13e9eb%3A0x2fabab3f3da8e454!2sChiesa%20di%20San%20Pietro%20Caveoso%2C%20Piazza%20San%20Pietro%20Caveoso%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6645!2d16.6124944!4m5!1s0x13477edbe48b2393%3A0xbbfb2aef0121b7eb!2sCasa%20Grotta%20nei%20Sassi%20di%20Matera%2C%20Vico%20Solitario%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6637768!2d16.6122649!4m5!1s0x13477edbfa592c21%3A0xcc62f2ce5ccee969!2sChiesa%20di%20Santa%20Lucia%20alle%20Malve%2C%20Rione%20Malve%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6633237!2d16.61246!4m5!1s0x13477edb98bda96b%3A0x37f800705d0bec83!2sCasa%20Grotta%20del%20Casalnuovo%2C%20Rione%20Casalnuovo%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6624627!2d16.612034299999998!5e0!3m2!1sen!2sro!4v1676219641918!5m2!1sen!2sro" />
        <p>Ruta 2:</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3026.323006814206!2d16.606164415403573!3d40.66685142933682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m5!1s0x13477ede92228945%3A0xb5a29f491fc56e2b!2sChiesa%20di%20San%20Francesco%20d'Assisi%2C%20Piazza%20S.%20Francesco%2C%2075100%20Matera%20MT%2C%20Italy!3m2!1d40.6653667!2d16.6093126!4m5!1s0x13477ede820911d1%3A0xca6215fb508978ad!2sChiesa%20del%20Purgatorio%2C%20Via%20Domenico%20Ridola%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6644108!2d16.6089304!4m5!1s0x13477ede3023446b%3A0x52cd8695902c5a19!2sPiazza%20Vittorio%20Veneto%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6667316!2d16.606555999999998!4m5!1s0x13477edfb305902b%3A0xea7bb2ed065c9f46!2sChiesa%20di%20San%20Giovanni%20Battista%2C%20Via%20San%20Biagio%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.667707!2d16.6080564!4m5!1s0x13477edf3d6b6a6d%3A0xa18adc0830c346c9!2sCasa%20grotta%20%E2%80%9CC%E2%80%99era%20una%20volta%E2%80%9D%20Antica%20Matera%2C%20Via%20Fiorentini%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6675104!2d16.6100791!4m5!1s0x13477edf6e48d0e9%3A0xfc47fbf54d5e77f2!2sChiesa%20di%20San%20Pietro%20Barisano%2C%20Via%20San%20Pietro%20Barisano%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6688276!2d16.609260199999998!5e0!3m2!1sen!2sro!4v1676444771540!5m2!1sen!2sro" />
        <p>În concluzie, Matera este un oraș cu adevărat unic și fascinant care oferă o privire asupra istoriei bogate a Italiei și a regiunii mediteraneene. Cu peșteri transformate în locuinţe, biserici rupestre și o scenă culturală vibrantă, este o destinație care atrage călători de pretutindeni. Noi am rămas cu amintiri minunate în urma vizitării acestui oraş reinventat.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaPin1} alt="Matera Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaPin2} alt="Matera Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}