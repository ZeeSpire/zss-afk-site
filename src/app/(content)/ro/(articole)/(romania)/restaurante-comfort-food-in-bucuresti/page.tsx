import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";

import localFood from "../../../../../../../public/comfort-food/0-local-food.jpg";
import bacaniaVeche1 from "../../../../../../../public/comfort-food/bacania-veche-1.jpg";
import bacaniaVeche2 from "../../../../../../../public/comfort-food/bacania-veche-2.jpg";
import bacaniaVeche3 from "../../../../../../../public/comfort-food/bacania-veche-3.jpg";
import balls1 from "../../../../../../../public/comfort-food/balls-1.jpg";
import balls2 from "../../../../../../../public/comfort-food/balls-2.jpg";
import balls3 from "../../../../../../../public/comfort-food/balls-3.jpg";
import bucatariaLocalFood1 from "../../../../../../../public/comfort-food/bucataria-local-food-1.jpg";
import bucatariaLocalFood2 from "../../../../../../../public/comfort-food/bucataria-local-food-2.jpg";
import bucatariaLocalFood3 from "../../../../../../../public/comfort-food/bucataria-local-food-3.jpg";
import dumicat1 from "../../../../../../../public/comfort-food/dumicat-1.jpg";
import dumicat2 from "../../../../../../../public/comfort-food/dumicat-2.jpg";
import dumicat3 from "../../../../../../../public/comfort-food/dumicat-3.jpg";
import mosafir1 from "../../../../../../../public/comfort-food/mosafir-1.jpg";
import mosafir2 from "../../../../../../../public/comfort-food/mosafir-2.jpg";
import mosafir3 from "../../../../../../../public/comfort-food/mosafir-3.jpg";

const article = getArticle(35);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={localFood} alt="Cele mai bune restaurante cu mâncare de tip comfort food din București" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Termenul „comfort food” este bine cunoscut de majoritatea dintre noi, aducând în minte acele feluri de mâncare familiare și indulgente la care apelăm în momente dificile sau pur și simplu când vrem să fim transportați înapoi în copilărie.</p>
        <p>Deși acest termen a apărut în Statele Unite pe la mijlocul secolului XX, fiecare cultură a avut de mult propriile versiuni de „comfort food”, ancorate în tradiție și memorie, cu mult înainte de a fi popularizat.</p>
        <p>În România, când vorbim despre „comfort food”, ne gândim la mâncare de suflet sau mâncare ca la mama acasă — feluri tradiționale pe care le savurăm în timpul sărbătorilor, la mesele în familie sau la mesele pe care mamele sau bunicile noastre ni le pregăteau cu drag în copilărie. Acestea pot include ciorbă, supă de pui, sarmale, mămăligă, cartofi prăjiți cu brânză, chiftele marinate în sos de roșii, ficăței cu piure, budincă de macaroane cu brânză, papanași cu smântână și dulceață, cozonac, orez cu lapte și multe altele.</p>
        <p>Mâncarea care ne amintește de „acasă” evocă sentimente de nostalgie, bucurie și căldură. Pentru fiecare persoană, aceasta poate însemna un alt fel de mâncare sau un alt gust. Cred că este o provocare deosebit de dificilă pentru orice restaurant să ne transporte cu adevărat în copilărie sau să ne ofere un „comfort food” autentic. Totuși, am găsit câteva restaurante în București care se apropie destul de mult de asta.</p>
        <h2>Balls</h2>
        <p>Mergem la Balls de ani de zile, încă de când erau pe Calea Dorobanți. Între timp, au fost deschiși și pe Bulevardul Regina Elisabeta, aproape de Parcul Cișmigiu. Acum, s-au mutat pe Bulevardul Dacia la numărul 114 și sperăm să nu se mai mute de aici.</p>
        <p>La noua lor adresă, Balls au mult mai multe mese comparativ cu locațiile anterioare. Asta înseamnă că ne putem duce fără rezervare și avem șanse mari să găsim o masă liberă. Interiorul este o combinație încântătoare între o cantină și sufrageria unei mătuși din anii ‘80, creând o atmosferă foarte relaxată.</p>
        <p>În meniu, vei găsi o ciorbă acră de legume, foarte reconfortantă, care se potrivește perfect cu smântână și pâine.</p>
        <p>Ne place de asemenea salata de vinete ca aperitiv—atât de mult încât aș îndrăzni să spun că este cea mai bună salată de vinete pe care am încercat-o vreodată la un restaurant.</p>
        <p>Dacă ești în căutarea de “comfort food,” trebuie să încerci chiftelele servite cu piure de cartofi sau cu spaghete și sos de roșii. Mereu mă gândesc la scena din Doamna și Vagabondul când Vagabondul împinge o chiftea spre Lady. Acesta este felul meu preferat de la Balls.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={balls1} alt="Mancare de la Balls 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={balls2} alt="Mancare de la Balls 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={balls3} alt="Mancare de la Balls 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Băcănia Veche</h2>
        <p>Băcănia Veche este un restaurant fermecător care s-a deschis în vara anului 2021 pe Bulevardul Dacia, la numărul 25. În interior, vei găsi mai multe încăperi primitoare atât la parter, cât și la etaj, scăldate într-o atmosferă intimă și plăcută. În spatele restaurantului, există o grădină frumoasă, cu o magnolie magnifică în centrul ei.</p>
        <p>Viziunea și inima din spatele Băcăniei Vechi este Marius Tudosiei, cunoscut în România datorită emisiunilor de televiziune precum Sănătatea în Bucate și Chefi fără limite.</p>
        <p>Pasionat de gastronomie, Marius Tudosiei a deschis inițial Prăvălia Băcănia Veche în 2010, într-o casă de pe Barbu Văcărescu 49. Am vizitat și acest magazin, de unde am cumpărat dulcețuri, zacuscă, plante pentru ceai și alte produse delicioase, toate provenite de la mici producători români. Multe dintre borcanele cu aceste bunătăți se regăsesc și în restaurantul de pe Dacia 25. Echipa Băcănia Veche se ocupă de catering și diverse evenimente, are un magazin online și, ocazional, livrează mâncare gătită cu suflet.</p>
        <p>Revenim mereu la Băcănia Veche pentru ouăle umplute și pentru pulpa de rață servită cu bulz și sos de trufe negre, care sunt preparate de bază în meniu. În fiecare zi, postează pe Instagram preparate suplimentare, denumite cu ingeniozitate „Derapajele zilei”. De 1 Mai, au încins grătarele, iar noi ne-am bucurat de mici la grătar, frigărui și alte cărnuri, însoțite de cartofi rumeniți în grăsime de rață și de salată de varză proaspătă sau murată, în funcție de preferințe. De 1 Decembrie, ziua națională a României, au preparat feluri de mâncare tradiționale pentru această sărbătoare istorică, gătite la ceaun: borș de găină cu tăiței de casă, fasole cu ciolan afumat și pomana porcului. Și să nu uităm de sarmalele și de salata de Boeuf, care sunt esențiale pe mesele festive ale românilor.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bacaniaVeche1} alt="Mancare de la Băcănia Veche 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bacaniaVeche2} alt="Mancare de la Băcănia Veche 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bacaniaVeche3} alt="Mancare de la Băcănia Veche 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Dumicat</h2>
        <p>Pe 1 decembrie 2023, la adresa Str. George Vraca, nr. 4, s-a deschis Dumicat, un local ce poate fi considerat o continuare a proiectului Paninaro. La cârma acestui nou loc se află Melinda Teohari, soția cunoscutului comediant Claudiu Teohari (Teo).</p>
        <p>Obișnuiam să mergem destul de des la Paninaro și ne plăcea în mod special sandvișul lor cu omletă și celebrul Philly Cheese. De aceea, am fost surprinși să aflăm că se va închide, însă ne-am bucurat când am descoperit că Dumicat va lua naștere în locul său.</p>
        <p>Dumicat este un local mic, cu puține mese, dar extrem de primitor, și oferă un meniu care îl încadrează perfect la categoria “comfort food”. Dacă vrei să te bucuri de preparatele lor, este recomandat să-ți faci o rezervare.</p>
        <p>La capitolul aperitive, menționăm pâinea cu maia și smântâna densă, aproape ca o cremă, bunătăți de întins pe pâine precum zacusca, pateul de vită și porc, sau salata de vinete, toate prezentate într-un mod sofisticat. Castraveții murați pane, serviți cu sos de iaurt cu mentă, sunt un “must try”, alături de fuduliile de curcan în crustă de panko.</p>
        <p>Printre preparatele principale se regăsește “mâncărușa în pită” (o omletă plină de cașcaval într-o chiflă pufoasă), chiftelele de pește cu iaurt, piureul cu fălcuțe de porc, dar și piciocii ca pe Valea Izei, un adevărat exemplu de “comfort food”: cartofi prăjiți cu brânză, sos marinara, cârnați, castraveți murați și două ouă prăjite.</p>
        <p>La desert, frigăneaua cu smântână și dulceață de fructe de sezon, precum și budinca de lapte cu dulceață de vișine, sunt alegerea perfectă pentru a încheia masa într-o notă de răsfăț culinar. Ambele sunt delicioase și cu adevărat reprezentative pentru conceptul de “comfort food”.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dumicat2} alt="Mancare de la Dumicat 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dumicat1} alt="Restaurantul Dumicat" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dumicat3} alt="Mancare de la Dumicat 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Bucataria Local Food</h2>
        <p>Mergem la Bucătăria Local Food din 2021, anul în care au deschis, pe vremea când era un restaurant de cartier, unde puteai intra fără rezervare și te simțeai ca acasă. De atunci, Bucătăria Local Food a devenit o vedetă printre restaurantele din București, iar șansele de a găsi o masă fără rezervare sunt acum destul de mici. Esența de “afacere de familie” s-a cam pierdut, mai ales pentru cei care își amintesc cum era la început, dar gustul și calitatea preparatelor au rămas aceleași, continuând să ne amintească de mâncarea de acasă și de comfort food.</p>
        <p>În fiecare săptămână, Bucătăria Local Food anunță câteva preparate speciale pe Instagram. Întotdeauna țin cont de sezonalitatea ingredientelor, așa că într-o zi de primăvară ai putea găsi în meniu mâncare de urzici cu ouă prăjite și mămăligă, iar toamna te-ai putea bucura de o ciorbă consistentă de fasole. Fiecare preparat vine cu o recomandare de asociere a vinului. În plus, câteva preparate de bază rămân în meniu, cum ar fi cartofii prăjiți cu brânză de Horezu și ouă prăjite, ciulama de ciuperci cu mămăligă, bagheta cu cârnat de Pleșcoi (un cârnat celebru din județul Buzău) sau A la Pariz – un sandviș cu parizer prăjit.</p>
        <p>Ne plac foarte mult și deserturile lor, iar acum poftesc la o porție de papanași cu smântână și dulceață de afine.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bucatariaLocalFood1} alt="Mancare de la Bucataria Local Food 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bucatariaLocalFood2} alt="Restaurantul Bucataria Local Food" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bucatariaLocalFood3} alt="Mancare de la Bucataria Local Food 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Mosafir</h2>
        <p>Restaurantul Mosafir s-a deschis în vara anului 2024, pe strada Plantelor, la numărul 48, într-o casă de patrimoniu datând de la sfârșitul secolului al XIX-lea, și este, practic, fratele Bucătăriei Local Food.</p>
        <p>“Musafir” (uneori scris “mosafir”) înseamnă “oaspete” și se referă la cineva care vizitează o casă sau este invitat la o ocazie socială. Cuvântul este folosit frecvent în limbajul de zi cu zi când ne referim la persoane care vin în vizită pentru a lua masa, a petrece timp împreună sau pentru o ședere scurtă.</p>
        <p>Mosafir urmează aceeași filozofie ca și Bucătăria Local Food. În fiecare săptămână, noi preparate sezoniere sunt adăugate în meniu, fiind gătite cu ingrediente proaspete, de preferință de la producători locali. În plus, fiecare preparat vine cu o recomandare de vin. Și da, se știe că în România, când vin oaspeți, se lasă întotdeauna cu băutură.</p>
        <p>În căutare de comfort food? Nu poți da greș cu nicio alegere din meniu, dar recomandarea mea de top este pulpa de pui cu piure de cartofi și mazăre, urmată de o porție de griș cu lapte prăjit cu dulceață la desert.</p>
         {/* image 9/16 (1000x1777) */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={mosafir1} alt="Mancare de la Mosafir 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={mosafir2} alt="Bauturi de la Mosafir" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={mosafir3} alt="Mancare de la Mosafir 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
      </main>
    </div>
  );
}