import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nyhavnMain from "../../../../../../../public/copenhaga/X_1_nyhavn_gicyqm.jpeg";
import cityHallSquare from "../../../../../../../public/copenhaga/Copenhagen-City-Hall-Square_gjiwnx.jpeg";
import caritasWell from "../../../../../../../public/copenhaga/X_3_caritas_eo5cym.jpeg";
import borsenBuilding from "../../../../../../../public/copenhaga/5_Borsen_qqlxlj.jpeg";
import churchOfOurSaviour from "../../../../../../../public/copenhaga/X_6_churchOfOurSaviour_p7p46f.jpeg";
import assistensCemetery from "../../../../../../../public/copenhaga/X_7_assistens_dtzgn7.jpeg";
import amagerstrand from "../../../../../../../public/copenhaga/X_8_amager_sh9uhs.jpeg";
import frederikChurch from "../../../../../../../public/copenhaga/X_9_frederik_jqlhmi.jpeg";
import grundtvigsChurch1 from "../../../../../../../public/copenhaga/X_10_gruntvigs_1_jckhrf-square.jpeg";
import grundtvigsChurch3 from "../../../../../../../public/copenhaga/X_10_gruntvigs_3_bcqu1o-square.jpeg";
import grundtvigsChurch2 from "../../../../../../../public/copenhaga/X_10_gruntvigs_2_rzyouj-square.jpeg";
import littleMermaid from "../../../../../../../public/copenhaga/X_12_littleMermaid_irqm8d_n3t0jo.jpeg";
import kastellet from "../../../../../../../public/copenhaga/X_15_kastellet_o9edja.jpeg";
import gefionFountain from "../../../../../../../public/copenhaga/13_Gefion_kqmzzr.jpeg";
import stAlbansChurch from "../../../../../../../public/copenhaga/14_1_AlbansChurch_bpxias.jpeg";
import stroget from "../../../../../../../public/copenhaga/2_1_Stroget_baxasq.jpeg";
import botanicalGarden from "../../../../../../../public/copenhaga/11_botanical_xqj2fc.jpeg";
import pinImage2 from "../../../../../../../public/copenhaga/pin3_bhp0zp.jpeg";
import pinImage3 from "../../../../../../../public/copenhaga/pin4_rplc39.jpeg";

const article = getArticle(3);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederikChurch} alt="15 atracții gratuite de vizitat în Copenhaga" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <h2>1. Mica Sirenă (Den Lille Havfrue)</h2>
        <p>Mica Sirenă este o statuie de bronz ce are la bază povestea cu același nume a autorului danez Hans Christian Andersen și a devenit simbolul orașului Copenhaga. Unii spun că nu merită să fie inclusă în topul obiectivelor de vizitat. Este adevărat că este mică și că în jurul ei roiesc turiștii care vor un selfie cu sirena, dar, așa cum a spus şi mama mea: „ar fi păcat să vizitezi Copenhaga și să nu vezi mica sirenă!”. De asemenea, în zonă există și alte locuri frumoase de vizitat, precum Fântâna Gefion, Biserica St. Alban și Parcul Kastellet, despre care am scris mai jos. Citește mai departe.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={littleMermaid} alt="v - Mica Sirenă (Den Lille Havfrue)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>2. Plaja Amager (Amager Strandpark)</h2>
        <p>Amager este o plajă artificială liniștită, cu vederi spectaculoase asupra parcului eolian Middelgrunden și a podului Øresund, care leagă Danemarca de Suedia.</p>
        <p>Insula artificială lungă de 2 kilometri a fost adăugată în 2005 și este separată de plaja originală printr-o lagună traversată de trei poduri.</p>
        <p>Chiar și într-o seară de septembrie, erau mulți alergători, înotători, caiaciști, oameni care participau la clase de yoga sau aerobic în aer liber. Acesta a fost un alt indicator că locuitorii din Copenhaga duc o viață activă și sănătoasă.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={amagerstrand} alt="Copenhaga - Plaja Amager (Amager Strandpark)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>3. Biserica Grundtvig (Grundtvigs Kirke)</h2>
        <p>O biserică foarte frumoasă (în opinia mea, desigur) este Biserica Grundtvig. Se află la aproximativ 6 kilometri de centrul orașului, dar poți ajunge ușor acolo cu transportul public și este un motiv bun pentru a explora și alte zone. Biserica este construită în întregime din cărămizi galben pal, un material de construcție specific danez. Deși interiorul seamănă cu cel al unei biserici gotice, este, de fapt, o remarcabilă creație a arhitecturii expresioniste.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grundtvigsChurch1} alt="Copenhaga - Biserica Grundtvig (Grundtvigs Kirke) -  vazuta de afara" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grundtvigsChurch2} alt="Copenhaga - Biserica Grundtvig (Grundtvigs Kirke) -  vazuta din interior" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grundtvigsChurch3} alt="Copenhaga - Biserica Grundtvig (Grundtvigs Kirke) -  usa bisericii" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>4. Vechea Bursă (Børsen)</h2>
        <p>La doar 100 de metri de Palatul Christiansborg se află Vechea Bursă, una dintre cele mai vechi clădiri din Copenhaga, construită în secolul al XVII-lea. Inițial, Børsen a fost folosită ca o bursă de mărfuri, fiind astfel nominalizată ca una dintre primele burse din Europa. Clădirea nu este de obicei deschisă publicului, deoarece este în proprietate privată din 1857, dar exteriorul său, cu vârful în formă de cozi de dragon împletite, este impresionant.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={borsenBuilding} alt="Copenhaga - Vechea Bursă (Børsen)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>5. Nyhavn (Noul Port)</h2>
        <p>Această faleză din secolul al XVII-lea, care se întinde de la Kongens Nytorv (King’s New Square) până la port, este poate cel mai emblematic loc din Copenhaga și unul dintre cele mai bune locuri pentru fotografii pe care le poți găsi în acest oraş. Fiind atât de popular, vei găsi mulți călători și localnici acolo, așa că recomand să te trezești devreme și să mergi acolo în prima parte a dimineții pentru a surprinde fotografia perfectă.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nyhavnMain} alt="Copenhaga - Nyhavn (Noul Port)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>6. Biserica Mântuitorului (Vor Frelsers Kirke)</h2>
        <p>Această biserică barocă mare, inaugurată în 1752 în districtul Christianshavn din Copenhaga, este una dintre principalele atracții turistice din Danemarca. Intrarea în biserică este gratuită pentru toți, dar dacă dorești să urci în turn, trebuie să-ți rezervi vizita în avans.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={churchOfOurSaviour} alt="Copenhaga - Biserica Mântuitorului (Vor Frelsers Kirke)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>7. Cimitirul Assistens (Assistens Kirkegård) și/sau Cimitirul Vestre</h2>
        <p>Cimitirul Assistens este locul de odihnă al multor danezi celebri, precum autorul Hans Christian Andersen, “părintele existențialismului” Søren Kierkegaard și pictorul din Epoca de Aur Christen Købke. Este, de asemenea, o oază verde populară în Nørrebro, perfectă pentru o plimbare.</p>
        <p>Deși există indicatoare care arată mormintele celor mai faimoși oameni, nu uita să verifici anul nașterii - anul morții, deoarece există și alți Hans Christian Andersen îngropați acolo.</p>
        <p>De asemenea, merită menționat că locul este plin de veverițe jucăuşe.</p>
        <p>Dacă ți-a plăcut plimbarea în Cimitirul liniștit Assistens, poți vizita și Cimitirul Vestre, cel mai mare cimitir din Danemarca, situat în districtul Kongens Enghave.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={assistensCemetery} alt="Copenhaga - Cimitirul Assistens (Assistens Kirkegård) și/sau Cimitirul Vestre" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>8. Grădina Botanică (Botanisk Have)</h2>
        <p>Vizitarea Grădinii Botanice este gratuită, cu excepția Serei cu Palmieri, unde se percepe o taxă de intrare (inclusă în Copenhagen Card).</p>
        <p>Grădina Botanică găzduiește cele mai mari colecții de plante vii din Danemarca, inclusiv specii de plante care sunt dispărute în sălbăticie.</p>
        <p>În unele zone, este permis să te așezi pe peluze, iar noi am urmat exemplul unor localnici care socializau pe iarbă, beau bere și se relaxau. Am luat niște terci de la Piața Toverhallerne, care este în apropiere, și ne-am bucurat de ultimele ore în Copenhaga stând pe iarbă și admirând veverițele. Nu e de mirare că Copenhaga se clasează constant printre cele mai fericite orașe din lume.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={botanicalGarden} alt="Copenhaga - Grădina Botanică (Botanisk Have)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>9. Biserica lui Frederik (Frederiks Kirke)</h2>
        <p>Biserica lui Frederik, cunoscută și sub numele de Biserica de Marmură (Marmorkirken), cu cupola sa verde de cupru, este o biserică evanghelică luterană și are cea mai mare cupolă de biserică din Scandinavia. Vizitarea bisericii este gratuită. Cu toate acestea, poți avea acces și la cupolă contra unei taxe. Poți găsi mai multe informații aici: <LinkExternal link="https://www.marmorkirken.dk/admission" title="Link catre site-ul Marmorkirken" text="marmorkirken.dk" /></p>
        <p>Sfat suplimentar: Biserica lui Frederik se află în apropierea Amalienborg - casa familiei regale daneze - păzită zi și noapte de Garda Regală (Den Kongelige Livgarde). Garda defilează zilnic de la Castelul Rosenborg la ora 11:30 A.M. și efectuează schimbul de gardă în fața Amalienborg la prânz.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederikChurch} alt="Copenhaga - Biserica lui Frederik (Frederiks Kirke)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>10. Piața Primăriei din Copenhaga (Københavns Rådhuspladsen)</h2>
        <p>Piața Primăriei, una dintre principalele piețe publice din Copenhaga, este un loc popular pentru evenimente, concerte și demonstrații.</p>
        <p>Aici poți participa la un tur gratuit cu recenzii foarte bune, de la joi până luni, începând cu ora 10:30 A.M. Este necesară rezervarea: <LinkExternal link="http://www.copenhagenfreewalkingtours.dk/" title="Link catre Copenhagen Free Walking tours" text="copenhagenfreewalkingtours.dk" /></p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityHallSquare} alt="Copenhaga - Piața Primăriei din Copenhaga (Københavns Rådhuspladsen)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>11. Parcul Kastellet</h2>
        <p>Parcul Kastellet nu este doar un parc cu canale, popular pentru localnici care aleargă și merg cu bicicleta prin zonă. Este, de fapt, o cetate în formă de stea din secolul al XVII-lea, una dintre cele mai bine întreținute cetăți de acest tip rămase în Europa. Interiorul este încă un post militar activ. Aici poți găsi vechi cazărmi militare, bastioane, o biserică și frumoasă moară de vânt.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={kastellet} alt="Copenhaga - Parcul Kastellet" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>12. Fântâna Gefion (Gefionspringvandet)</h2>
        <p>Fântâna Gefion este o fântână mare amplasată pe malul portului din Copenhaga, ilustrând povestea mitică a creației insulei Zeeland, pe care se află Copenhaga.</p>
        <p>Conform unei legende antice, Gefion era zeița mitologiei nordice care și-a transformat cei patru fii în boi și a arat insula Zeeland din Suedia.</p>
        <h2>13. Biserica Sfântului Alban</h2>
        <p>Aflată în vecinătatea Fântânii Gefion, Biserica St. Alban este incredibil de frumoasă și estetică, în stil englezesc. Este singura biserică anglicană din Danemarca. Se află aproximativ la jumătatea distanței dintre statuia Micuța Sirenă și Palatul Regal Amalienborg.</p>
        <h2>14. Fântâna Caritas</h2>
        <p>Fântâna Caritas este cea mai veche fântână din Copenhaga. A fost construită în 1608 de Christian al IV-lea și se află pe strada pietonală Strøget.</p>
        <p>Figura reprezintă o femeie însărcinată cu copiii ei, simbol al iubirii sau carității (Caritas în latină).</p>
        {/* image 16/9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={gefionFountain} alt="Copenhaga - Fântâna Gefion (Gefionspringvandet)" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" />Gefion Fountain (Gefionspringvandet)</div>
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={stAlbansChurch} alt="Copenhaga - Biserica Sfântului Alban" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" />St. Alban’s Church</div>
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={caritasWell} alt="Copenhaga - Fântâna Caritas" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" />Caritas Fountain</div>
        </div>
        <h2>15. Strada Strøget</h2>
        <p>Această stradă pietonală, lungă de 1.1 km, este una dintre cele mai lungi străzi comerciale pietonale din Europa.</p>
        <p>Se întinde de la Piața Primăriei (Rådhuspladsen) până la Piața Nouă a Regilor (Kongens Nytorv) și este una dintre cele mai populare atracții turistice din Copenhaga. Aici găseşti o mare varietate de magazine: buticuri cu suveniruri interesante, branduri accesibile precum Zara și H&M sau branduri scumpe faimoase precum Louis Vuitton, Prada sau Chanel.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={stroget} alt="Copenhaga - Strada Strøget" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage2} alt="Copenhaga - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage3} alt="Copenhaga - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}