import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import acropolisSeenFromPhilopapposHill from "../../../../../../../public/athens/acropolis-seen-from-philopappos-hill.jpg"
import athensCentralMarketVarvakios from "../../../../../../../public/athens/athens-central-market-varvakios.jpg"
import athensNationalGarden from "../../../../../../../public/athens/athens-national-garden.jpg"
import beautifulDoorAthensGreece1 from "../../../../../../../public/athens/beautiful-door-athens-greece-1.jpg"
import beautifulDoorAthensGreece2 from "../../../../../../../public/athens/beautiful-door-athens-greece-2.jpg"
import beautifulDoorAthensGreece3 from "../../../../../../../public/athens/beautiful-door-athens-greece-3.jpg"
import erechtheionAcropolisAthens from "../../../../../../../public/athens/erechtheion-acropolis-athens.jpg"
import insideATavernInAthens from "../../../../../../../public/athens/inside-a-tavern-in-athens.jpg"
import kerameikosCemeteryAthens from "../../../../../../../public/athens/kerameikos-cemetery-athens.jpg"
import littleKookDecorAthens1 from "../../../../../../../public/athens/little-kook-decor-athens-1.jpg"
import localGreekFoodAthens from "../../../../../../../public/athens/local-greek-food-athens.jpg"
import panathenaicStadiumAthens from "../../../../../../../public/athens/panathenaic-stadium-athens.jpg"
import parthenonAcropolisAthensWithoutPeople from "../../../../../../../public/athens/parthenon-acropolis-athens-without-people.jpg"
import parthenonFromTheDroneAthens2 from "../../../../../../../public/athens/parthenon-from-the-drone-athens-2.jpeg"
import pinAthens from "../../../../../../../public/athens/pin-athens.jpg"
import pinAthens2 from "../../../../../../../public/athens/pin-athens2.jpg"
import romanAgoraAthens from "../../../../../../../public/athens/roman-agora-athens.jpg"
import syntagmaSquareChangingOfTheGuardAthens from "../../../../../../../public/athens/syntagma-square-changing-of-the-guard-athens.jpg"
import templeOfAthenaNikeAcropolisAthens from "../../../../../../../public/athens/temple-of-athena-nike-acropolis-athens.jpg"
import templeOfHephaestusAthens from "../../../../../../../public/athens/temple-of-hephaestus-athens.jpg"
import theatreOfDionysusAcropolisSlopeAthensAndAcropolisMuseum from "../../../../../../../public/athens/theatre-of-dionysus-acropolis-slope-athens-and-acropolis-museum.jpg"
import zizisFish from "../../../../../../../public/athens/zizis-fish.jpg"

const article = getArticle(28);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={parthenonFromTheDroneAthens2} alt="Top 15 lucruri de făcut în Atena plus alte recomandări" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Atena nu se afla pe lista noastră de călătorii din viitorul apropiat, dar ne bucurăm că lucrurile s-au aşezat în aşa fel încât am călătorit în acest oraş scăldat în istorie.</p>
        <p>Ştiam despre Atena că este capitala Greciei şi aveam în minte imaginea bine-cunoscută a Acropolei. De asemenea, ştiam că este unul dintre cele mai vechi oraşe locuite continuu din lume, cu o istorie de peste 3.400 de ani. Atena este, de asemenea, cea mai veche capitală din Europa, dar în ciuda faptului că are rădăcini în timpuri străvechi, rămâne un oraş vibrant şi cosmopolit, care atrage anual milioane de vizitatori din întreaga lume.</p>
        <p>Fiind o călătorie planificată cu puţin timp înainte, nu am găsit foarte multe opţiuni de cazare. Am ales să stăm la <LinkExternal link="https://www.booking.com/hotel/gr/the-social-athens-a-member-of-radisson-indi.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre The Social Athens Hotel, a member of Radisson Individuals" text="The Social Athens Hotel, a member of Radisson Individuals" />, de care am fost foarte mulţumiţi şi nu avem decât cuvinte de laudă pentru acest hotel. Toţi angajaţii erau zâmbitori, am primit apă îmbuteliată în fiecare zi, am primit o cameră mai spaţioasă decât cea pe care o rezervasem, iar articolele de toaletă erau de la Apivita, iubitul brand grecesc. Și, în plus, a fost o afacere bună, căci nu a costat foarte mult.</p>
        <p>Iată alte cinci opţiuni de hoteluri spectaculoase în Atena:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.booking.com/hotel/gr/asomaton.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre site-ul Asomaton's" text="Asomaton" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/the-modernist-athens.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre The Modernist Athens's" text="The Modernist Athens" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/grandbretagneathens.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Hotel Grande Bretagne, a Luxury Collection Hotel, Athens's" text="Hotel Grande Bretagne, a Luxury Collection Hotel, Athens" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/coco-mat-athens-bc.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Coco-mat Athens BC's website" text="Coco-mat Athens BC" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/mgallery-athens-capital.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link catre Athens Capital Center Hotel - MGallery Collection's" text="Athens Capital Center Hotel - MGallery Collection" /></li>
        </ul>
        <p>Dar haideţi să intrăm direct în pâine cu topul celor 15 lucruri de făcut în Atena după multe cercetări şi după ce le-am încercat pe toate (şi chiar mai multe)!</p>
        <h2>Top 15 lucruri de făcut în Atena</h2>
        <p>Înainte de a începe, merită menţionat că există o mulţime de situri arheologice în acest oraş. Pentru unele dintre ele, trebuie să plăteşti un bilet, altele pot fi vizitate gratuit deoarece sunt pe marginea drumului ori în interiorul anumitor staţii de metrou, de exemplu. Pentru cele mai populare situri arheologice, există un bilet special valabil 5 zile care costă 30 de euro la momentul scrierii acestui articol (iunie 2023). Acest bilet include intrarea la cele mai importante situri arheologice: Acropola și versanții (ambele intrări), Agora Antică, Agora Romană, Kerameikos, Biblioteca lui Hadrian, Templul lui Zeus şi Liceul lui Aristotel. O să vorbesc despre fiecare mai jos, dar recomandarea principală este achiziţionarea acestui tip de bilet.</p>
        <h3>1. Rămâi mut de uimire în faţa impresionantei Acropole</h3>
        <p>Acropola este unul dintre cele mai faimoase situri arheologice nu numai din Grecia, ci şi din lume şi include mai multe clădiri şi monumente antice, inclusiv Partenonul, Propileea, Templul Atenei Nike şi Erehtheion.</p>
        <p>În mitologia greacă, zeiţa Atena este zeiţa ce patronează asupra oraşului ce-i poartă numele. Atena era zeiţa înţelepciunii, a războiului şi a meşteşugurilor şi era considerată unul dintre cei doisprezece zei şi zeiţe olimpice care locuiau pe Muntele Olimp. Templul Partenon, situat pe dealul Acropolei, a fost dedicat Atenei şi este considerat ca fiind una dintre cele mai mari realizări arhitecturale ale Greciei antice. Templul a fost construit în secolul al V-lea î.Hr. şi prezintă multe sculpturi şi reliefuri care o înfăţişează pe Atena, dar şi alte figuri mitologice.</p>
        <p>Am vizitat Atena în extrasezon, la începutul lunii aprilie, şi nu am stat la coadă la nici o atracţie, dar recomand să ajungi la Acropolă la ora deschiderii pentru a face fotografii frumoase cu cât mai puţină lume în peisaj.</p>
        <p>Dacă ar fi să alegem un singur lucru de vizitat în Atena, acesta este.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={templeOfAthenaNikeAcropolisAthens} alt="Atena - Templul Atenei Nike" width={720} height={405} sizes="(max-width: 768px) 90vw, 20vw" />Templul Atenei Nike</div>
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={parthenonAcropolisAthensWithoutPeople} alt="Atena - Partenonul" width={720} height={405} sizes="(max-width: 768px) 90vw, 20vw" />Partenonul</div>
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={erechtheionAcropolisAthens} alt="Atena - Erechtheion" width={720} height={405} sizes="(max-width: 768px) 90vw, 20vw" />Erechtheion</div>
        </div>
        <h3>2. Vezi biblioteca lui Hadrian</h3>
        <p>Biblioteca lui Hadrian a fost construită de împăratul roman Hadrian în secolul al II-lea d.Hr. şi a fost cea mai mare bibliotecă din Atena. Peretele vestic şi coloanele sunt foarte impresionante şi, deşi se văd din exteriorul sitului arheologic, nu am regretat că am intrat, mai ales că am cumpărat biletul care cuprindea şi acest sit.</p>
        <h3>3. Plimbă-te prin Agora Antică</h3>
        <p>Agora antică a fost centrul politic şi comercial al Atenei antice şi include câteva clădiri importante, dintre care, cea mai impresionantă ni s-a părut Templul lui Hephaestus. Am făcut aici o mulţime de fotografii din diferite unghiuri, dar în majoritatea fotografiilor apar şi alte persoane.</p>
        <p>Ne-am plimbat prin Agora Antică ca printr-un parc. A fost o plimbare cu adevărat interesantă.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={templeOfHephaestusAthens} alt="Atena - Templul lui Hephaestus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>4. Nu rata Templul lui Zeus şi Arcul lui Hadrian</h3>
        <p>Templul lui Zeus este unul dintre cele mai mari temple antice din Grecia şi a fost dedicat zeului Zeus. A fost construit de-a lungul mai multor secole şi finalizat în secolul al II-lea d.Hr.</p>
        <p>Nu am putut decât să-mi imaginez cât de impresionant a fost cândva pe baza celor câteva coloane care mai erau în picioare. Majoritatea coloanelor erau în mentenanţă şi nu puteau fi văzute. Chiar lângă acest sit se află Arcul lui Hadrian, care poate fi vizitat gratuit. Nu-l rata nici pe acesta.</p>
        <h3>5. Admiră istoria Agorei Romane</h3>
        <p>Agora romană a fost construită în perioada romană şi include mai multe structuri importante, cum ar fi Turnul Vânturilor, Poarta Athena Archegetis şi Moscheea Fethiye.</p>
        <p>În interiorul sitului, poţi vedea detaliile sculptate în marmură de aproape, precum şi un mozaic frumos sau ce a mai rămas din el.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={romanAgoraAthens} alt="Atena - Agora romană" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>6. Mergi la Liceul lui Artistotel</h3>
        <p>Acesta a fost locul unde filosoful Aristotel a predat şi a condus cercetările sale filozofice şi ştiinţifice. Şcoala a fost înfiinţată în secolul al IV-lea î.Hr. şi a fost una dintre cele mai proeminente instituţii de învăţământ din Grecia antică. Pentru că programul de vizitare este până la ora 15:00, iar noi am întârziat vreo 5 minute, l-am văzut de la distanţă din păcate.</p>
        <h3>7. Mergi printre mormintele din Kerameikos</h3>
        <p>Cimitirul Kerameikos a fost principalul cimitir al Atenei antice din secolul al VIII-lea î.Hr. până în perioada romană. Plimbarea aici a fost liniştită, cu doar câţiva turişti. Nu uita să intri în muzeu înainte de a pleca. Artefactele găsite în mormintele antice sunt expuse în muzeu şi au fost cu adevărat surprinzătoare.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={kerameikosCemeteryAthens} alt="Atena - Cimitirul Kerameikos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>8. Vizitează Acropolis Museum</h3>
        <p>Acropolis Museum este o completare excelentă a vizitei la Acropolă. Muzeul găzduieşte o mare colecţie de artefacte găsite pe dealul Acropolei, incluzând statui, reliefuri şi alte obiecte antice.</p>
        <p>Una dintre cele mai impresionante trăsături ale muzeului este podeaua din sticlă, care permite vizitatorilor să vadă ruinele unui vechi cartier atenian care a fost descoperit în timpul construcţiei muzeului. Muzeul are, de asemenea, un restaurant cu o vedere uimitoare asupra Acropolei şi a orașului.</p>
        <p>Recomand o vizită după-amiaza pentru că muzeul se închide mai târziu decât siturile arheologice de mai sus. Pentru programul de funcţionare, consultă <LinkExternal link="https://www.theacropolismuseum.gr/en" title="Link catre site-ul oficial al muzeului Acropolis" text="site-ul oficial" />.</p>
        <p>În unele părţi ale muzeului se pot face fotografii, în timp ce în altele, este interzis.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={theatreOfDionysusAcropolisSlopeAthensAndAcropolisMuseum} alt="Atena - Muzeul Acropolei și Teatrul lui Dionysos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>9. Aleargă pe pistă la stadionul Panatenaic</h3>
        <p>Stadionul Panatenaic este singurul stadion din lume realizat în întregime din marmură şi a fost construit iniţial în secolul al IV-lea î.Hr. ca loc de desfăşurare a Jocurilor Panatenaice, un festival care se desfăşura la fiecare patru ani în onoarea zeiţei Atena. Stadionul a fost renovat şi reconstruit de mai multe ori de-a lungul secolelor, cea mai importantă renovare având loc în secolul al II-lea d.Hr. de către împăratul roman Hadrian.</p>
        <p>Forma actuală a fost dată atunci când Atena a fost aleasă ca loc de desfășurare a primelor Jocuri Olimpice în 1896. Pentru reconstrucția sa s-a folosit marmură de Pentelic, o marmură albă folosită pentru sculptură și clădiri care a fost extrasă la Muntele Pentelicus, la nord de Atena.</p>
        <p>Am plătit 10 euro pe un bilet care a inclus şi un ghid audio. Pentru că audioghidul trebuia returnat în 30 de minute, ne-am grăbit să vizităm stadionul, dar am fi putut să stăm şi mai mult. A fost foarte distractiv, ne-am aşezat pe treptele de marmură şi am alergat pe pistă şi a fost una dintre atracţiile noastre preferate din Atena.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={panathenaicStadiumAthens} alt="Atena - Stadionul Panatenaic" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>10. Asistă la ceremonia de schimbare a gărzii în piaţa Syntagma</h3>
        <p>Piaţa Syntagma este piaţa centrală a Atenei şi este situată în inima cartierului comercial al oraşului. Piaţa este numită după cuvântul grecesc “syntagma” care înseamnă “constituţie” şi găzduieşte clădirea Parlamentului grec. Ceremonia de schimbare a gărzii, cunoscută sub numele de Evzones, are loc în faţa clădirii Parlamentului la fiecare oră. Este o atracţie populară pentru turişti, aşa că dacă este ceva ce vrei să vezi, încearcă să ajungi acolo cât mai devreme posibil pentru un loc în faţă.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={syntagmaSquareChangingOfTheGuardAthens} alt="Atena - Asistă la ceremonia de schimbare a gărzii în piaţa Syntagma" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>11. Profită de o pauză în interiorul Grădinii Naţionale din Atena</h3>
        <p>Grădina Națională din Atena oferă o evadare din agitaţia oraşului. Grădina publică este situată în centrul Atenei şi oferă o mare varietate de plante, flori şi copaci, precum şi mai multe iazuri şi o mică grădină zoologică.</p>
        <p>Noi ne-am plimbat prin mirosul de portocali înfloriţi şi prin sunetul papagalilor. A fost minunat.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={athensNationalGarden} alt="Grădina Națională din Atena" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>12. Fă-ţi cumpărăturile în Piaţa Centrală Varvakios</h3>
        <p>Piaţa centrală din Atena, cunoscută şi sub numele de Piaţa Varvakios (sau Varvakeios), este una dintre cele mai vechi şi mai mari pieţe din oraş. Este situată în inima Atenei, lângă Piaţa Omonia şi este o atracţie turistică în sine.</p>
        <p>Este cunoscută pentru atmosfera plină de viaţă şi este un loc numai bun pentru a experimenta cultura şi bucătăria locală. Piaţa este deosebit de aglomerată dimineaţa, când localnicii vin să cumpere ingrediente proaspete pentru mesele lor.</p>
        <p>Am cumpărat de aici ceai grecesc de munte ca suvenir. Ceaiul este făcut din plante de Sideritis uscate şi are un gust similar cu alte ierburi pentru ceai, cum ar fi menta sau muşeţelul.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={athensCentralMarketVarvakios} alt="Atena - Piața Centrală Varvakios" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>13. Urcă pe dealul Philopappos</h3>
        <p>Înainte de a merge la Atena, am citit despre Dealul Lycabettus care reprezintă cel mai înalt punct din Atena, cu vederi uluitoare ale oraşului şi o capelă în vârf. Am citit şi despre Dealul Areopagus care se află la nord-vest de Acropolă, cu vederi panoramice ale oraşului.</p>
        <p>Dar, în final, am ales să urcăm pe dealul Philopappos. Acest deal este cunoscut pentru priveliştile sale pitoreşti ale Atenei, în special ale Acropolei şi ale orizontului oraşului, şi este un loc minunat pentru a scăpa de mulţime şi a experimenta o parte mai liniştită a oraşului.</p>
        <p>În vârful dealului se află Monumentul Philopappos, un mare mausoleu construit în cinstea lui Philopappos, un prinţ din Regatul Commagene care a trăit la Atena în secolul al II-lea d.Hr.</p>
        <p>Chiar dacă a fost o zi ploioasă, urcarea pe deal ni s-a părut uşoară şi priveliştea a meritat tot efortul.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={acropolisSeenFromPhilopapposHill} alt="Atena - Acropola văzută de pe Dealul Philopappos" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>14. Explorează cartierele centrale</h3>
        <p>Atena este alcătuită din multe cartiere distincte, fiecare cu atmosfera şi caracterul său unic.</p>
        <p>Poţi petrece câteva ore rătăcind pe străzile din Plaka, cel mai vechi cartier din Atena, cunoscut pentru străzile sale fermecătoare pietruite, cafenelele pitoreşti şi magazinele care vând obiecte de artizanat.</p>
        <p>Monastiraki este un cartier plin de viaţă, popular atât pentru turişti, cât şi pentru localnici. Acesta găzduieşte faimoasa piaţă de vechituri Monastiraki, unde poţi găsi tot felul de suveniruri, antichităţi şi alte bunuri.</p>
        <p>Psirri este un cartier cu mult potenţial, cunoscut pentru cafenelele, barurile şi restaurantele sale la modă.</p>
        <p>Anafiotika este un cartier mic şi fermecător situat în cartierul istoric Plaka, chiar sub dealul Acropolei. Este cunoscut pentru atmosfera sa distinctă asemănătoare insulelor Greceşti. Am petrecut aici câteva ore dimineaţa în timp ce ne-am bucurat de o ceaşcă de cafea şi de o spanakopita delicioasă (spanakopita este o plăcintă cu spanac şi eventual şi brânză feta). Poate de aceea acest cartier a fost preferatul nostru.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={beautifulDoorAthensGreece1} alt="Atena - Usa 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={beautifulDoorAthensGreece2} alt="Atena - Usa 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={beautifulDoorAthensGreece3} alt="Atena - Usa 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h3>15. Răsfaţă-te cu mâncarea grecească</h3>
        <p>În Atena poţi găsi o mulţime de opţiuni de la mâncarea stradală, taverne, restaurante mai extravagante şi sky baruri. Vizitând atât de multe locuri, am avut nevoie de “combustibil”. Am optat mai ales pentru gustări rapide pe stradă şi în taverne, astfel am profitat la maximum de timpul nostru şi nici nu am spart puşculiţa.</p>
        <h2>Acestea sunt locurile în care am mâncat şi pe care le putem recomanda:</h2>
        <h3>1. Kostas Souflaki</h3>
        <p>Situat în piaţa Agia Irini, este un local mic care vinde souflaki autentic. Acesta a fost cel mai bun souflaki de porc pe care l-am mâncat în Atena şi nu numai. A fost super delicios, iar ingredientul care l-a transformat într-un souflaki special a fost sosul de roşii uşor picant.</p>
        <p>Din păcate, localul este închis duminica şi am rămas cu o poftă nesatisfăcută când ne-am întors pentru cel mai bun souflaki.</p>
        <h3>2. Zisis fish in a cone</h3>
        <p>Am mâncat aici de două ori. Prima dată, ne-am aşezat la masă şi am comandat trei conuri: creveţi, hamsii si calamari. Nouă ne-au plăcut doar hamsiile şi calamarii. Preţurile sunt mai mari dacă stai la masă, de aceea este mai avantajos să iei un con şi să-l mănânci în timp ce te plimbi pe străzi, aşa cum am făcut noi a doua oară. Porţiile au fost la fel mari în ambele cazuri.</p>
        <h3>3. Falafellas</h3>
        <p>La Falafellas am mâncat nişte wrap-uri super gustoase. Poţi alege din următoarele variante: lipie cu câte 3 sau 5 chifteluţe din carne sau năut. Am stat la coadă pentru a pune mâna pe aceste lipii delicioase. Întreaga zonă era plină de oameni care mâncau de la Falafellas, de la localnici la turişti, de la tineri la seniori.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={zizisFish} alt="Atena - Zisis fish in a cone" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={insideATavernInAthens} alt="Atena - În interiorul unei taverne" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={localGreekFoodAthens} alt="Atena - Mâncare grecească locală" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h3>4. Taverna Krasopoulio tou Kokkora</h3>
        <p>Acesta este un restaurant grecesc autentic, popular mai degrabă printre localnici şi este mai puţin aglomerat. Un gest frumos a fost să ni se ofere o carafă cu apă din partea casei.</p>
        <p>Aici am luat cea mai bună masă în Atena. Am comandat frunze de viţă de vie umplute cu orez, salată grecească, nişte chiftele simple de dovlecei şi un souvlaki de porc. Totul a fost proaspăt şi delicios.</p>
        <p>Am încercat şi un desert, care nu ne-a plăcut prea mult, a fost prea dulce pentru gustul nostru. Abia după ce l-am comandat, am observat că la celelalte mese se oferea desertul din partea casei. Aşa că ne-a părut şi mai rău că l-am comandat.</p>
        <h3>5. Little Kook</h3>
        <p>Aceasta este o cafenea desprinsă poveşti, foarte aproape de Taverna Krasopoulio tou Kokkora. Ne-am aşezat aici pentru că ne-a plăcut foarte mult decorul. Am înţeles că decorul se schimbă în funcţie de perioada anului (în octombrie este împodobit de Halloween, în decembrie este dedicat Crăciunului, etc.). Când am fost noi, tema era Alice în Ţara Minunilor şi probabil acesta este decorul obişnuit.</p>
        <p>Deşi simţi că eşti într-un basm (chiar şi chelnerii sunt îmbrăcaţi pe măsură), cafeneaua este foarte populară, este o atracţie turistică în sine, aşa că este destul de aglomerată. Preţurile sunt mari pentru calitatea oferită şi nu ne-a plăcut nimic din ce am comandat. Aş spune în mod normal că aceasta este o capcană pentru turişti, dar ne-a plăcut decorul şi ne-am distrat făcând poze aşa că nu pot spune că nu mi-a plăcut deloc.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={littleKookDecorAthens1} alt="Atena - Little Kook" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>6. Lukumades</h3>
        <p>Lângă Piaţa Agia Irini, am găsit un loc minunat, unde este mereu aglomerat, care vinde Loukoumades. Loukoumades sunt nişte gogoşele stropite cu sirop de miere şi presărate cu scorţişoară. Locul se numeşte, ce să vezi, <LinkExternal link="https://www.lukumades.com/" title="Link catre site-ul Lukumades" text="Lukumades" />. Erau disponibile multe toppinguri, dar noi am ales varianta clasică: miere + scorţişoară. Le-am mâncat calde şi au fost delicioase.</p>
        <p>Aceasta a fost experienţa noastră ateniană. Am petrecut două zile şi jumătate în Atena, timp în care am reuşit să luăm pulsul oraşului, să vizităm cele mai importante situri arheologice, să ne plimbam prin cartierele fermecătoare ale Atenei şi să gustăm din mâncarea de care ne era dor.</p>
        <p>Dacă vrei să vezi filmări de la faţa locului, pe unde ne-am plimbat şi ce am văzut, găseşti pe canalul nostru de <LinkExternal link="https://www.youtube.com/channel/UC6cO4CO-T5PGkeXWc8Sf1lw" title="Link catre canalul AFKology de YouTube" text="YouTube" />.</p>
        <p>Bucură-te de viaţă!</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinAthens} alt="Atena - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinAthens2} alt="Atena - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}