import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import lecceABaroqueGemInSalento from "../../../../../../../public/lecce/lecce-a-baroque-gem-in-salento.jpeg"
import lecceAperitivo1 from "../../../../../../../public/lecce/lecce-aperitivo-1.jpg"
import lecceAperitivo2 from "../../../../../../../public/lecce/lecce-aperitivo-2.jpg"
import lecceAperitivo3 from "../../../../../../../public/lecce/lecce-aperitivo-3.jpg"
import lecceAperitivo4 from "../../../../../../../public/lecce/lecce-aperitivo-4.jpg"
import lecceBalcony from "../../../../../../../public/lecce/lecce-balcony.jpg"
import lecceBaroqueBuilding from "../../../../../../../public/lecce/lecce-baroque-building.jpg"
import lecceBasilicaDiSantaCroce1 from "../../../../../../../public/lecce/lecce-basilica-di-santa-croce-1.jpg"
import lecceBasilicaDiSantaCroce2 from "../../../../../../../public/lecce/lecce-basilica-di-santa-croce-2.jpg"
import lecceBasilicaDiSantaCroce3 from "../../../../../../../public/lecce/lecce-basilica-di-santa-croce-3.jpg"
import lecceCafeLaccese from "../../../../../../../public/lecce/lecce-cafe-laccese.jpg"
import lecceLuxattico from "../../../../../../../public/lecce/lecce-luxattico.jpg"
import leccePalazzoDelSeminario from "../../../../../../../public/lecce/lecce-palazzo-del-seminario.jpg"
import leccePiazzaDelDuomo from "../../../../../../../public/lecce/lecce-piazza-del-duomo.jpg"
import leccePin1 from "../../../../../../../public/lecce/lecce-pin-1.jpg"
import leccePin2 from "../../../../../../../public/lecce/lecce-pin-2.jpg"
import lecceRomanAmphitheatre from "../../../../../../../public/lecce/lecce-roman-amphitheatre.jpg"
import lecceStrollStreets from "../../../../../../../public/lecce/lecce-stroll-streets.jpg"

const article = getArticle(24);

export const metadata: Metadata = {
  title: `AFKology | ${article.title}`,
  description: `${article.description}`,
  keywords: `${article.keywords}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${article.slug?.en}`,
    languages: {
      'en-US': `${article.slug?.en}`,
      'ro-RO': `${article.slug?.ro}`,
    },
  },
  openGraph: {
    title: `AFKology | ${article.title}`,
    description: `${article.description}`,
    url: `https://www.afkology.com${article.slug?.en}`,
    siteName: 'AFKology',
    locale: 'en_US',
    type: 'article',
    publishedTime: `${article.createdDate}`,
    modifiedTime: `${article.lastModified}`,
    tags: `${article.keywords}`,
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
  "headline": `${article.title}`,
  "description": `${article.description}`,
  "url": `https://www.afkology.com${article.slug?.en}`,
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
    "@id": `https://www.afkology.com${article.slug?.en}`
  },
  "articleBody": `${article.text}`,
  "keywords": `${article.keywords}`
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl={`${article.slug?.ro}`} />
      <main className="flex-grow">
        <h1 className="text-center mb-8">{article.title}</h1>
        {/* image 16/9 */}
        <Image className="mb-4" src={lecceABaroqueGemInSalento} alt="Lecce - the Baroque gem of Salento" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Lecce is located in the Salento region, 150 kilometers from Bari, 40 kilometers from Gallipoli, and 45 kilometers from Otranto. Gallipoli and Otranto are two seaside towns worth visiting. It is also 25 kilometers from the coast of the Adriatic Sea and 35 kilometers from the coast of the Ionian Sea. So it can represent a good starting point for exploring the “heel” of Italy.</p>
        <p>We went there by car and because the access to the historic center is restricted and because we wanted to find a parking space as easily as possible, we opted to stay outside the old city center. We stayed the night in this cute apartment, <LinkExternal link="https://www.booking.com/hotel/it/luxattico-b-amp-b.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to LuxAttico B&B" text="LuxAttico B&B" />, owned by Maria Luisa who was an amazing host and gave us lots of recommendations on what to see in the city or where to eat.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={lecceLuxattico} alt="Lecce - LuxAttico B&B" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We have to admit though that we would have liked to stay in one of these luxurious hotels in the heart of Lecce:</p>
        <ul className="list-inside list-disc ml-4 mb-4">
          <li><LinkExternal link="https://www.booking.com/hotel/it/palazzo-de-noha.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Palazzo De Noha - Boutique Hotel" text="Palazzo De Noha - Boutique Hotel" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/patria-palace.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Patria Palace Lecce" text="Patria Palace Lecce" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/palazzo-lecce.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Palazzo Lecce - Epoca Collection" text="Palazzo Lecce - Epoca Collection" /></li>
        </ul>
        <p>We only spent one day in this vibrant, touristy, steeped-in history place, and we regret that we couldn’t stay longer because we really enjoyed the time here. Basically, we strolled through the streets of the “centro storico”, entered churches (open until late), and visited museums. But the most pleasant activity is to sit on a terrace, eat local cheeses, and admire the bustling piazzas full of tourists and locals having a good time.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={lecceBaroqueBuilding} alt="Lecce - Baroque Building" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>A walk through the historical center of Lecce is a journey through time and culture. The narrow streets wind their way through a maze of Baroque buildings with intricate carvings and ornate balconies.</p>
        <p>We started the day with a caffe leccese which is a traditional coffee beverage made with espresso, almond milk, and sugar or honey and is often served over ice. The almond milk used in the recipe is typically made from freshly ground almonds, giving the coffee a creamy and nutty flavor. Caffe Leccese is a popular local drink and can be found in cafes and restaurants throughout Lecce and the surrounding region.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={lecceCafeLaccese} alt="Lecce - Cafe Laccese" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={lecceStrollStreets} alt="Lecce - Streets Stroll" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={lecceBalcony} alt="Lecce - Balcony" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>As you stroll through the streets, you’ll pass by bustling piazzas, where locals and tourists alike gather to sip coffee, eat gelato, and soak up the atmosphere. The air is filled with the sound of church bells ringing and the chatter of people going about their daily lives. Every street corner seems to hold a new surprise, whether it’s a hidden courtyard, a centuries-old church, or a quaint shop selling handmade souvenirs.</p>
        <p>Despite the busy atmosphere, there’s a sense of tranquility and calm that pervades the town. This is a place where people take the time to savor life’s simple pleasures, from a leisurely stroll through the streets to a quiet moment of reflection in one of the town’s many churches. A walk through the historical center of Lecce is an experience that engages all of the senses, leaving you with memories that will last a lifetime.</p>
        <p>Here are some of the sights visited:</p>
        <p>Piazza del Duomo - a central square with the impressive Baroque-style Lecce Cathedral Cattedrale Maria Santissima Assunta e S.Oronzo, Campanile del Duomo, Palazzo Arcivescovile and Palazzo del Seminario.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={leccePiazzaDelDuomo} alt="Lecce - Piazza del Duomo" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Basilica di Santa Croce - a stunning 17th-century church with elaborate stone carvings and sculptures.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={lecceBasilicaDiSantaCroce1} alt="Lecce - Basilica di Santa Croce, interior 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={lecceBasilicaDiSantaCroce2} alt="Lecce - Basilica di Santa Croce, interior 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={lecceBasilicaDiSantaCroce3} alt="Lecce - Basilica di Santa Croce, interior 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Roman Amphitheatre - a well-preserved ancient arena used for gladiator games and other public events.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={lecceRomanAmphitheatre} alt="Lecce - Roman Amphitheatre" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p><LinkExternal link="https://museo.diocesilecce.org/il-palazzo-del-seminario/" title="Link to Palazzo del Seminario" text="Palazzo del Seminario" /> - a Baroque building that houses several important cultural institutions, including the Provincial Museum of Sacred Art, the Provincial Library, and the Academy of Fine Arts.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={leccePalazzoDelSeminario} alt="Lecce - Palazzo del Seminario" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We ended the day with a typical aperitif from Salento at La Bottega del Corso. We could opt for a local wine such as Primitivo or Negroamaro, but we chose again the famous Aperol spritz. The food was so good and it consisted of local cheeses (our favorite one was burrata), cured meats, olives, bruschetta, and taralli. Taralli are small, crunchy biscuits that are typically flavored with fennel seeds and olive oil. They are similar in appearance to bagels but are thinner and harder in texture. Taralli can be found in many bakeries and food shops throughout Lecce and the wider Puglia region, and are often served as a snack alongside a glass of local wine or aperitif. Beware: taralli are so addictive that once you start crunching, you can’t stop!</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={lecceAperitivo1} alt="Lecce - Aperitivo 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={lecceAperitivo2} alt="Lecce - Aperitivo 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={lecceAperitivo3} alt="Lecce - Aperitivo 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        {/* image 16/9 */}
        <Image className="mb-4" src={lecceAperitivo4} alt="Lecce - Aperitivo 4" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>It was a day to remember! What impressed us the most in Lecce were the buildings with their warm and golden colors and the inviting atmosphere throughout the town. No wonder Lecce is considered one of the most beautiful cities in Italy.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-4" src={leccePin1} alt="Lecce - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-4" src={leccePin2} alt="Lecce - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
