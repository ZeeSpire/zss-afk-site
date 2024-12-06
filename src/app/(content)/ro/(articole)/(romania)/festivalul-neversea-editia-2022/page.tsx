import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";

import neversea3 from "../../../../../../../public/neversea/neversea3_yuclp6.jpeg";
import neversea6 from "../../../../../../../public/neversea/neversea6_idtsfo.jpg";
import never1 from "../../../../../../../public/neversea/never1_whjiob.jpg";
import neversea4 from "../../../../../../../public/neversea/neversea4_muspyb.jpg";
import neversea2 from "../../../../../../../public/neversea/neversea2_crfr9x.jpg";
import neversea5 from "../../../../../../../public/neversea/neversea5_fr4l6e.jpg";
import never2 from "../../../../../../../public/neversea/never2_zm790c.jpg";
import neversea1 from "../../../../../../../public/neversea/neversea1_ygmf96.jpg";

const article = getArticle(11);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea3} alt="Festivalul Neversea, editia 2022" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Weekendul ce tocmai a trecut am participat la ce-a de-a patra editie (7-10 iulie) a festivalului Neversea de pe tarmul Marii Negre. Voi scrie asadar cateva impresii la cald despre cum mi s-a parut.</p>
        <h2>Transport si parcare</h2>
        <p>Noi am venit cu masina personala din Bucuresti asadar transportul a constat in alimentarea cu motorina. Intr-una din seri am fost la festival cu Uber. Exista in Constanta atat Uber, cat si Bolt. Preturile fluctuau in intervalul 20 - 70 lei pentru un drum de 7 km in functie de gradul de ocupare de la momentul respectiv. Noi am plecat la 8:30 PM si ne-am intors in jurul orei 3 AM, iar Uberul ne-a costat 100 lei dus-intors. In restul serilor am plecat cu masina personala si am parcat la 700 de metri de scarile care conduc catre plaja Neversea, in zona 1, iar parcarea a costat 7.5 lei/3 ore, la care se adauga inca 3 lei pentru fiecare ora suplimentara.</p>
        <h2>Cazare</h2>
        <p>Din fericire, am avut cazarea asigurata si nu a trebuit sa platim pentru cele 4 nopti de Neversea. Asadar nu pot oferi informatii cu privire la cazarile din Constanta.</p>
        <h2>Bilete</h2>
        <p>Am achizitionat abonamentele pe toate cele 4 zile de festival, cu acces general, in luna februarie, la pretul de 150 euro/persoana. Am observat ca pretul abonamentului a fluctuat, a fost mai scump, apoi s-a ieftinit din nou chiar inainte de festival, dar diferentele de bani nu au fost foarte mari.</p>
        <h2>Mancare si bauturi</h2>
        <p>In interiorul festivalului au fost amplasate foarte multe standuri de unde iti puteai cumpara apa, sucuri, bere si alte bauturi alcoolice. La toate chioscurile preturile erau aceleasi. O sticla de jumatate de litru de apa sau suc costa 10 lei. O doza de bere sau un shot costa 15 lei.</p>
        <p>Erau de asemenea destul de multe optiuni de mancare constand in rulote care vindeau in principiu burgeri, cartofi prajiti, pizza, clatite, tacos, sandvisuri, chiar si sushi (desi la sushi nu prea se inghesuia lumea). Ca sa va faceti o idee, la standul Cartofisserie o portie large de cartofi prajiti costa 27.5 lei in timp ce in mall gasim aceeasi cartofi de la aceeasi Cartofisserie la 16.5 lei. Daca doreai si sos la cartofi, mai adaugai 5.5 lei in timp ce in mall acelasi sos costa 4.4 lei. Burgerul de la Circus Pub costa 39 lei versus 31 lei pretul din restaurant, iar portia de cartofi prajiti 15 lei versus 8 lei. Nu vreau sa sune a nemultumire, mi se pare normal ca preturile sa fie mai mari la festival decat sunt in mod normal, mai ales ca oamenii munceau pana tarziu in noapte la foc continuu, cozile fiind destul de mari la mai toate rulotele. Clatitele cu diverse topping-uri costau in jur de 22-28 lei, o pizza costa intre 30-50 lei, la tacos erau cam aceleasi preturi.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea1} alt="Festivalul Neversea, ediția 2022, vedere din dronă" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Instagram</h2>
        <p>Pagina de Instagram a Neversea-ului a fost actualizata zilnic cu informatii pretioase pe masura ce se apropia data inceperii, dar si pe parcursul celor 4 zile de festival. Eu chiar am folosit-o de cate ori cand am avut nevoia sa aflu ceva rapid, cum ar fi cat mai au de gand sa intarzie cei de la The Black Eyed Peas (au intarziat jumatate de ora). Mi-a placut ca in marea majoritate a fost respectat programul anuntat pentru fiecare scena/artist.</p>
        <h2>Checkin, top-up si refund online</h2>
        <p>Am ales sa facem checkin-ul online. La fel si top-up-ul bratarilor cu suma dorita. Nu poti folosi bani cash sau card la festival. Pentru a cumpara bauturi, mancare, haine si alte lucruri iti folosesti bratara pe care ai adaugat bani anterior. Noua ni s-a parut mai simplu si mai rapid sa facem asta online. La fata locului se creau niste cozi destul de mari. Puteai de asemenea sa obtii banii ramasi pe bratara inapoi, tot online.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea6} alt="Festivalul Neversea, ediția 2022, oamenii de la festival" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Bratara</h2>
        <p>Bratarile le-am ridicat de miercuri, 6 iulie, ca sa evitam statul la coada. A fost foarte bine ca au oferit optiunea ridicarii bratarilor anterior inceperii efective a festivalului. Bratara odata pusa la mana, daca este stransa cu simt de raspundere, nu mai poate fi data jos. Ceea ce poate fi destul de enervant, dar inteleg ca daca nu era asa probabil ar fi venit multi oameni sa spuna ca si-au pierdut bratara si ca vor sa intre fara bratara. Mai exista posibilitatea sa se dea bratara de la unul la altul, dar nu cred ca asta e un motiv real deoarece este foarte simplu sa faci o aplicatie care sa-ti arate fata asociata bratarii la scanare.</p>
        <h2>Control de securitate</h2>
        <p>Pe site-ul lor au afisat informatii referitoare la dimensiunea gentii/rucsacului cu care aveai voie sa intri, precum si la continutul permis al acestuia. Noi am avut la noi doar telefoanele mobile, o camera video mica, un dezinfectant, actele de identitate si cheile. Asa ca am trecut rapid de controlul de securitate deoarece nu prea au avut ce sa controleze. Din ce am observat, te controlau destul de bine, era evident ca nu poti intra cu bautura, cutite si alte nebunii la festival. O fata era suparata ca nu au lasat-o sa intre cu sticla de parfum. :-)</p>
        <h2>Droguri</h2>
        <p>Am vazut la stiri ca au fost prinsi cativa oameni cu droguri la festival. Am simtit miros de iarba cand m-am retras aproape de malul marii, unde era intuneric. Dar am vazut in incinta festivalului caini politisti antrenati pentru detectia drogurilor, precum si verificari ale politiei pe strada.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea4} alt="Festivalul Neversea, ediția 2022, scena principală" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Aglomeratie</h2>
        <p>Tot de la stiri am aflat ca ar fi participat 60 000 de oameni pe zi, chiar 70 000 de oameni sambata.</p>
        <p>A fost un pic cam prea aglomerat pentru gustul meu. Portile festivalului se deschideau de la ora 2 PM. Pana pe la ora 9 PM era inca liber, apoi numarul de oameni care veneau era din ce in ce mai mare. Sunt de parere ca publicul poate sa ridice atmosfera din cadrul unui concert sau sa o coboare si cred ca atunci cand sunt multi oameni si toata lumea canta, aplauda, danseaza si interactioneaza cu artistii de pe scena este de-a dreptul minunat. Dar pentru mine a fost un pic prea multa lume deoarece fara sa exagerez cred ca 80% dintre oameni erau fumatori. Sa stai la 20-30 cm distanta de cativa fumatori, tu nefiind obisnuit cu fumul de tigara, chiar si in aer liber, a fost groaznic. La un moment dat simteam ca ma sufoc, ma usturau ochii si nasul de la fum si nu aveam nici un loc unde sa ma pot retrage astfel incat sa ma bucur in continuare de concert. Poate pentru unii suna stupid, dar fumul de tigara a fost principalul motiv pentru care am plecat destul de devreme in fiecare seara. Doar vineri am stat pana la 3 AM deoarece am vrut neaparat sa-l vad pe Netsky, dar am vrut sa renunt de mai multe ori pe parcurs. Imi imaginam cum s-ar simti cineva daca i-as baga o fumigena in fata, doar pentru ca asta ma face pe mine sa ma simt bine, i-ar fi placut? Asa m-am simtit eu printre atatia fumatori. Si isi mai aruncau si chistoacele pe jos, de parca plaja ar fi scrumiera lor. Imi dau seama ca tine de educatia fiecaruia, de respect si de empatie si ca unora le cam lipsesc aceste calitati.</p>
        <p>Tot in categoria aglomeratie, as mai avea o mentiune de facut. Pe drumul de acces dintre Main Stage si scena The Ark, se crea o aglomeratie groaznica, unii veneau, altii plecau, altii stateau la cozi, unii te mai ardeau cu tigara, altii isi faceau selfie-uri in mijlocul drumului. Cred ca ar fi fost o idee buna sa faca doua poteci cu cate un sens de mers fiecare bine pus in valoare. Sau ca poteca sa aiba desenate pe ea sensurile de mers ca sa mai reduca din riscul sa fii calcat pe picioare sau imbrancit de cei care vin din sens opus.</p>
        <h2>Artisti</h2>
        <p>La inceput nu m-au atras numele de pe afis. In februarie cand am cumparat biletele, nu stiam cine va veni si apoi am fost un pic dezamagita de lineup-ul final. Stiam ca vreau sa-i vad pe Parov Stelar si pe Netsky, iar in rest decideam la fata locului. Ei bine, am fost foarte placut suprinsa. Mi-a placut ce am auzit si pe scenele mai mici. De exemplu, duminica seara m-am simtit foarte bine la Albwho pe scena Oasis. Dintre artistii romani am fost la Carla’s Dreams si la Delia la care mai fusesem la concert si stiam ca-mi va placea. De asemenea mi-a placut mult Parov Stelar. Surpriza cea mai placuta au fost cei de la The Black Eyed Peas care desi au intarziat, au facut un super show si au meritat toata asteptarea.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea5} alt="Festivalul Neversea, ediția 2022, Netsky" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Organizare</h2>
        <div className="mb-6">
          <span>Mi-a placut cum a fost organizat festivalul, de la poarta de acces si pana la iesire.</span><br />
          <span>M-am simtit in siguranta pe tot parcursul festivalului datorita numarului de paznici.</span><br />
          <span>Existau multe locuri de unde sa-ti poti cumpara apa si mancare, nu am stat foarte mult la coada nici macar o data.</span><br />
          <span>La toalete am inteles ca era super curat.</span><br />
          <span>Mi-a placut diversitatea scenelor, muzica, atmosfera. Si cred ca asta a fost cel mai important.</span>
        </div>
        <p>Daca tragem linie la finalul festivalului Neversea, editia 2022, ne-am simtit bine, ne-a placut si daca vom mai avea ocazia cu siguranta vom mai participa si la urmatoarele editii.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea2} alt="Festivalul Neversea, ediția 2022, vedere din dronă, scena principală, plaja" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={never1} alt="Festivalul Neversea, ediția 2022 - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={never2} alt="Festivalul Neversea, ediția 2022 - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}