import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import thessalonikiArchOfGalerius from "../../../../../../../public/thessaloniki/thessaloniki-arch-of-galerius.jpg"
import thessalonikiAristotelousSquare from "../../../../../../../public/thessaloniki/thessaloniki-aristotelous-square.jpg"
import thessalonikiChurch from "../../../../../../../public/thessaloniki/thessaloniki-church.jpg"
import thessalonikiDerlicatesenAllSouflakiLocation from "../../../../../../../public/thessaloniki/thessaloniki-derlicatesen-all-souflaki-location.jpg"
import thessalonikiDerlicatesenAllSouflaki from "../../../../../../../public/thessaloniki/thessaloniki-derlicatesen-all-souflaki.jpg"
import thessalonikiPalaceOfGalerius from "../../../../../../../public/thessaloniki/thessaloniki-palace-of-galerius.jpg"
import thessalonikiRotondaInterior from "../../../../../../../public/thessaloniki/thessaloniki-rotonda-interior.jpg"
import thessalonikiRotonda from "../../../../../../../public/thessaloniki/thessaloniki-rotonda.jpg"
import thessalonikiViewFromTheWhiteTower from "../../../../../../../public/thessaloniki/thessaloniki-view-from-the-white-tower.jpeg"
import thessalonikiWhiteTowerCoins from "../../../../../../../public/thessaloniki/thessaloniki-white-tower-coins.jpg"
import thessalonikiWhiteTowerView from "../../../../../../../public/thessaloniki/thessaloniki-white-tower-view.jpg"
import thessalonikiWhiteTower from "../../../../../../../public/thessaloniki/thessaloniki-white-tower.jpg"

import { Metadata } from "next";

const article = getArticle(29);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiViewFromTheWhiteTower} alt="Ce poţi face în Salonic în doar trei ore" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>În drumul nostru spre Halkidiki, ne-am oprit în Salonic, un oraş plin de farmec şi culoare. Iată ce am reuşit să facem în doar trei ore.</p>
        <p>În primul rând, am căutat un loc de parcare unde să ne lăsăm maşina. Am lăsat maşina în <LinkExternal link="https://www.google.com/maps/place/Passenger+Terminal+Parking+(P1)/@40.6345997,22.9349951,19.75z/data=!4m17!1m10!3m9!1s0x14a8396ff3dc0767:0x552aae944aaf3b75!2sNoa+Hotel!5m2!4m1!1i2!8m2!3d40.6350005!4d22.935659!16s%2Fg%2F11kl03nfsh!3m5!1s0x14a8390a2e92d639:0xb24f4bc0bcc4ad8!8m2!3d40.6346164!4d22.9351678!16s%2Fg%2F11hbqkxc7d?entry=ttu" title="Harta catre Passenger Terminal Parking (P1)" text="Passenger Terminal Parking (P1)" />, o parcare destul de mare, cu barieră, pentru care am plătit aproximativ 5 euro pentru 3 ore, la final. Am putut plăti cu cardul şi am fost cât se poate de mulţumiţi.</p>
        <p>Din această parcare am mers drept pe strada Leof. Nikis către Turnul Alb. Pe partea dreaptă se afla Golful Salonic al Mării Egee, o mare de un albastru cristalin, dar plină de gunoaie la mal, iar pe partea stângă erau clădiri ce aveau la parter diverse magazine şi cafenele.</p>
        <h2>Ce poți vizita în Salonic</h2>
        <h3>Piaţa lui Aristotel</h3>
        <p>În drum spre Turnul Alb, am trecut pe lângă Piaţa lui Aristotel, în care nu puteam să nu ne oprim pentru câteva momente. Piaţa lui Aristotel este un spaţiu amplu flancat de clădiri în stil neoclasic pe de-o parte şi de mare de cealaltă parte. De jur împrejur există cafenele şi restaurante, iar în centru se află statuia lui Aristotel.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiAristotelousSquare} alt="Salonic - Piața Aristotelous" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Turnul Alb</h3>
        <p>Din Piaţa lui Aristotel, am mai avut de mers mai puţin de un kilometru până la <LinkExternal link="http://www.lpth.gr/indexeg.php" title="Link catre site-ul Turnului Alb" text="Turnul Alb" />. Biletul pentru un adult a costat 6 euro în iunie 2023 şi a inclus şi un audioghid. Audioghidul poate fi accesat scanând codul QR care se găseşte la fiecare etaj în parte şi poate fi ascultat pe telefonul propriu.</p>
        <p>Exista şi varianta achiziţionării unui bilet combinat ce includea Muzeul Culturii Bizantine, Muzeul Turnului Alb, Muzeul Arheologic şi monumentul Rotonda. Acesta avea preţul de 15 euro şi era valabil 3 zile.</p>
        <p>La fiecare din cele 6 etaje ale turnului, se găseşte câte o expoziţie, fiecare având o altă temă sau concept. Expoziţiile erau destul de digitalizate, având multe ecrane interactive, iar persoanele cu mobilitate redusă puteau face un tur virtual al muzeului la staţiile de informare situate la parter. Ca exemplu suplimentar, la etajul 6, tema se referă la “aromele” oraşului. O parte din spaţiu a fost transformată într-o mică zonă de luat masa, iar blaturile meselor sunt ecrane cu videoclipuri în care este prezentată pregătirea unor reţete specifice oraşului Salonic.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiWhiteTower} alt="Salonic - Turnul Alb" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiWhiteTowerCoins} alt="Salonic - Monedele cu Turnul Alb" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiWhiteTowerView} alt="Salonic - Vedere de la Turnul Alb" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Însă motivul principal al vizitei noastre, a fost priveliştea pe care ne-a oferit-o balconul de la ultimul etaj. Am făcut câteva fotografii şi apoi ne-am continuat plimbarea prin Salonic.</p>
        <p>În apropiere de Turnul Alb, se afla un alt obiectiv turistic: statuia lui Alexandru cel Mare. Însă noi am schimbat direcţia şi ne-am îndreptat spre ruinele Palatului lui Galerius.</p>
        <h3>Palatul lui Galerius</h3>
        <p>Palatul lui Galerius, din Piaţa Navarinou, a fost construit în secolul al IV-lea d.Hr de către împăratul roman Galerius (293–311 d.Hr.). Cu toate că ruinele pot fi vizitate din interior, noi ne-am mulţumit să le vedem de pe margine.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiPalaceOfGalerius} alt="Salonic - Palatul lui Galerius" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Trigona Elenidi</h3>
        <p>Foarte aproape de Palatul lui Galerius, se găseşte patiseria Trigona Elenidi, recunoscută în Salonic pentru trigoanele umplute cu cremă de vanilie. Am încercat şi noi un astfel de trigon şi confirmăm că a fost foarte bun. Cam dulce, dar bun.</p>
        <h3>Arcul lui Galerius</h3>
        <p>Arcul lui Galerius, cunoscut şi sub denumirea de Kamara, a fost construit pentru a imortaliza campaniile victorioase ale Tetrarhiei. Iar reliefurile ce se regăsesc pe jumătatea inferioară a construcţiei au legătură cu campania împotriva persanilor.</p>
        <p>La fel precum Arcul lui Hadrian din Atena, poate fi văzut gratis de către orice trecător.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiArchOfGalerius} alt="Salonic - Arcul lui Galerius" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Rotunda</h3>
        <p>De lângă Arcul lui Galerius, deja se poate vedea impresionanta Rotonda.</p>
        <p>Rotonda, construită de împăratul roman Galerius în anul 306 d.Hr., este o structură circulară (de aici şi numele de Rotonda) care a deservit de-a lungul timpului ca templu, biserică şi moschee, iar astăzi este un sit al Patrimoniului Mondial UNESCO şi una din atracţiile de top ale Salonicului.</p>
        <p>Noi am plătit 6 euro pentru a vizita interiorul care este impresionant şi fascinant în acelaşi timp.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiRotonda} alt="Salonic - Rotunda" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiRotondaInterior} alt="Salonic - Rotunda Interior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Asta este tot ce am putut face în puţinul timp pe care l-am avut la dispoziţie în Salonic. În plimbarea noastră, am trecut pe lângă multe clădiri frumoase şi mai ales pe lângă biserici cu aer vechi ce răsăreau dintre clădirile moderne.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiChurch} alt="Salonic - Biserică" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Nu puteam să părăsim oraşul şi să purcedem la drum fără a gusta mai întâi dintr-un souflaki. Aşadar, ne-am uitat rapid pe Google Maps şi am căutat un loc cu cât mai multe recenzii bune şi ne-am oprit la Derlicatesen all Souvlaki. Un souflaki de porc în pită a costat 3 euro, a fost bun, dar nu la fel de bun ca cel mâncat de la Kostas din Atena. A avut foarte mulţi cartofi prăjiţi şi un sos de muştar şi cam atât, nimic care să ne dea pe spate.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiDerlicatesenAllSouflakiLocation} alt="Salonic - Locație pentru souvlaki" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={thessalonikiDerlicatesenAllSouflaki} alt="Cina la The Artist - Preparat souvlaki" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>Apoi ne-am îndulcit cu un choux cu cremă de vanilie şi îngheţată peste care am adăugat ciocolată albă şi caramel de la <LinkExternal link="https://choureal.com/catalogue/" title="Link catre site-ul Choureál, Choux & Profiterole's" text="Choureál, Choux & Profiterole" />. De data aceasta, trebuie să recunoaştem că desertul a fost foarte bun şi am apreciat că ni s-a oferit apă cu gheaţă din partea casei pe care am savurat-o efectiv după porţia de dulce.</p>
        <p>Nu ne-am mai oprit pentru a face poze sau alte vizite aşa că în 15 minute am ajuns la maşină şi am pornit la drum spre Halkidiki. Prima impresie referitoare la Salonic nu a fost extraordinară, dar după cele trei ceasuri petrecute în oraş, am plecat cu gândul că vom reveni.</p>
      </main>
    </div>
  );
}