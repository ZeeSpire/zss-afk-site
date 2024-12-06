import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nouaDessert1 from "../../../../../../../public/noua/IMG_20220403_181411_vkkgjp_cx1esv.jpg";
import nouaDish1 from "../../../../../../../public/noua/IMG_20220403_174137_j0gphn.jpg";
import nouaPin1 from "../../../../../../../public/noua/noua1_twgnqd.jpg";
import nouaDessert2 from "../../../../../../../public/noua/IMG_20220403_182008_ekssc8_sfg1hg.jpg";
import nouaDessert3 from "../../../../../../../public/noua/IMG_20220403_183650_qapmxs_mx4spf.jpg";
import nouaDessert4 from "../../../../../../../public/noua/IMG_20220403_185014_upupvw_isplmt.jpg";
import nouaPin2 from "../../../../../../../public/noua/noua2_lxpcz6.jpg";
import nouaDish2 from "../../../../../../../public/noua/IMG_20220403_192253_sjhdpt_h4a7d9.jpg";
import nouaDish3 from "../../../../../../../public/noua/IMG_20220403_175024_epk9to.jpg";
import nouaDish4 from "../../../../../../../public/noua/IMG_20220403_183442_njue4d.jpg";
import nouaDish5 from "../../../../../../../public/noua/IMG_20220403_193916_ktjvok_p2bodb.jpg";
import nouaDish6 from "../../../../../../../public/noua/IMG_20220403_200049_i8otub_dvoohv.jpg";
import nouaDish7 from "../../../../../../../public/noua/IMG_20220403_195300_zr2git_mlir4r.jpg";
import nouaDish8 from "../../../../../../../public/noua/IMG_20220403_202530_h6itov_zsdvsl.jpg";
import nouaDish9 from "../../../../../../../public/noua/IMG_20220403_175612_ejpu1x_rcpmy1.jpg";
import nouaDish10 from "../../../../../../../public/noua/IMG_20220403_180210_pi4cb1_tujflk.jpg";
import nouaInterior from "../../../../../../../public/noua/noua-interior-2.jpg";

const article = getArticle(7);

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
        <p>Despre Restaurantul Noua am aflat printr-un simplu story pe Instagram. Doar o fotografie, postată fără prea multe cuvinte, m-a făcut să vreau să aflu mai multe despre acest restaurant. Însă, în cele din urmă, o recenzie Google mai cuprinzătoare m-a convins să vizitez <LinkExternal link="https://nouarestaurant.ro/" title="Link catre Noua Restaurant" text="restaurantul" />.</p>
        <p>Noua se află într-o casă din zona veche a Bucureștiului, cu grădina transformată în terasă când vremea o permite, pe strada Popa Nan, nr. 7. Este indicat să mergi acolo cu rezervarea făcută și să ceri detalii la telefon în cazul în care ai întrebări despre meniul lor.</p>
        <p>Bucătarul șef este Alex Petricean, cunoscut de mulți români ca fost participant la MasterChef România, desemnat de Ghidul Gault & Millau Bucătarul Anului în 2018 în timp ce lucra la Restaurantul Maize Farm to Table. Alex Petricean și-a lansat în mai 2019 propriul restaurant - Noua Bucătărie Românească. Pe scurt, Noua.</p>
        <p>Noua, după umila mea părere, aduce cu Noma, restaurantul proclamat cel mai bun din lume în 2021. Cred că la asta aspiră bucătarul și echipa sa. Noma este în Copenhaga, iar meniul costă în jur de 400 de euro. La Noua ai o experiență ca într-un restaurant cu stele Michelin, dar la 190 RON (aprox. 40 euro) pentru meniul pentru o persoană (în aprilie 2022).</p>
        <p>La Noua, meniul este unul sezonier, se schimbă în funcție de ce oferă natura în diferite perioade ale anului. Ingredientele provin în mare parte din fermele locale. Mâncărurile evidențiază ingrediente care pot fi trecute cu vederea, uitate sau abandonate. Ingredientele simple, de sezon, sunt puse într-o altă lumină, astfel încât să devină cu adevărat spectaculoase.</p>
        <p>Interiorul este confortabil, cu accente naturale, cum ar fi lemnul sau lâna. Noi ne-am așezat într-o cameră de la parter, dar data viitoare am vrea să stăm la etaj unde se vede direct în bucătărie.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish4} alt="Noua Restaurant - in restaurant 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish1} alt="Noua Restaurant - in restaurant 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaInterior} alt="Noua Restaurant - in restaurant 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Meniul este un meniu de degustare format din douăsprezece feluri de mâncare: patru amuse bouche, trei aperitive, două feluri principale, un pre-desert și două deserturi. Nu te vei ridica sătul de la masă, dar este suficientă mâncare. Fiecare fel de mâncare este prezentat de chelner astfel încât cina devine o experiență în sine, una incredibil de specială.</p>
        <p>Mi-a plăcut faptul că ești servit cu apă plată sau carbogazoasă din partea casei. Băuturile au prețuri ca în alte restaurante cu prețuri medii spre mari din București. De exemplu, o cafea costă 10 RON, limonadă de casă cu fân afumat, lămâie caramelizată și mușețel costă 20 RON, iar o bere Zăganu la 500ml costă 18 RON.</p>
        <p>La început, ești întrebat dacă ai alergii sau intoleranțe alimentare. Am spus că nu avem niciuna dintre ele, dar ulterior ne-am dat seama că dacă am fi fost serviți cu tartar de vită, cel mai probabil nu am fi putut să-l mâncăm. Nu mâncăm nici sushi care conține pește crud. Deci, nu ne place să mâncăm carne negătită.</p>
        <p>Mi-aș fi dorit să pot reține ce conțineau felurile de mâncare, dar voi încerca să spun totuși câteva cuvinte despre fiecare, doar pentru a-ți face o idee.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish3} alt="Noua Restaurant - Mancare 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish9} alt="Noua Restaurant - Mancare 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish10} alt="Noua Restaurant - Mancare 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert1} alt="Noua Restaurant - Mancare 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert2} alt="Noua Restaurant - Mancare 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert3} alt="Noua Restaurant - Mancare 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert4} alt="Noua Restaurant - Mancare 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish2} alt="Noua Restaurant - Mancare 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish5} alt="Noua Restaurant - Mancare 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish7} alt="Noua Restaurant - Mancare 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish6} alt="Noua Restaurant - Mancare 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish8} alt="Noua Restaurant - Mancare 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Ca amuse bouche am avut o stea umplută cu urzici și gălbenuș de ou ras, o crochetă de cartofi cu muguri de usturoi sălbatic (leurdă), un mititel românesc din limbă de vită cu cartof fondant și muștar, și mămăligă cu smântână afumată și „zăpadă” din brânză.</p>
        <p>Ca aperitiv am degustat un preparat pe bază de leurdă și cartofi noi (unul dintre felurile mele preferate), urmat de un buchet de salate de la Grădina Corbilor cu cremă de brânză și o frigăruie de rădăcini (poate păstârnac și țelină din câte mi-am putut da seama) cu o spumă de albuș de ou. Apoi am primit serviciul de pâine și unt al casei, care a fost extraordinar de bun! Fericire pură.</p>
        <p>Primul fel principal a fost pește umplut cu spanac cu un sos ușor picant, cred că avea cantitatea potrivită de iuțeală. Următorul fel principal a fost carne de berbecuț (gătită perfect din punctul de vedere al unui bucătar profesionist, dar eu sunt un simplu bucătar de casă care preferă carnea bine făcută) servită cu varză murată.</p>
        <p>Pre-desertul a fost înghețată de topinambur (nap porcesc) învelită într-o coajă de topinambur cu jeleu de topinambur. Spuneam mai devreme despre ingredientele uitate sau trecute cu vederea - nu mai mâncasem napi (Helianthus tuberosus), așa că am căutat pe net informații despre acest ingredient. Este destul de ușor de cultivat, partea care poate fi mâncată este tuberculul plantei, este bună atât pentru consum uman cât și pentru animale și este plină de vitamine și minerale. A fost cel mai surprinzător fel de mâncare din tot meniul. Și am înțeles că bucătarii de la Noua aplică cu succes o politică zero-waste. A fost cu adevărat delicios acest pre-desert, și regret că nu am mâncat și din „pământ” care părea foarte de real, dar evident că era ceva dulce ca un biscuite fărâmițat.</p>
        <p>Și am ajuns la desert. Primul desert a fost un buzdugan de bezea, o bezea perfectă, nu ca cele care se lipesc de dinți. Sub bezea, am găsit cremă de cătină, mandarine și înghețată de drojdie. Un cuvânt care să caracterizeze acest desert? Dumnezeiesc.</p>
        <p>Cel de-al doilea desert, și ultimul fel de mâncare a fost compus din griș cu lapte și caramel într-o crustă crocantă ca o napolitană cu o prezentare minunată sub forma unui pat de flori sălbatice. L-aș fi schimbat cu buzduganul, adică ar fi mers mai bine acesta ca primul desert și buzduganul de bezea să fi rămas pe ultimul loc deoarece acela mi s-a părut mai spectaculos.</p>
        <p>Vreau să subliniez că am apreciat foarte mult ospătarii. Au făcut o treabă fantastică în prezentarea și furnizarea de detalii despre fiecare preparat în parte. O pot face la fel de bine și în engleză.</p>
        <p>În concluzie, aș dori doar să subliniez că am avut parte de o experiență minunată și absolut memorabilă la Noua Bucătărie Românească.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaPin1} alt="Noua Restaurant - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaPin2} alt="Noua Restaurant - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}