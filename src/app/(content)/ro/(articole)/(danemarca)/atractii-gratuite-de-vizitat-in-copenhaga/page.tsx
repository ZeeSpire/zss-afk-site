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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederikChurch} alt="15 free attractions to visit in Copenhagen" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <h2>1. The Little Mermaid (Den Lille Havfrue)</h2>
        <p>The Little Mermaid is a small bronze statue based on the fairy tale of the same name by Danish author Hans Christian Andersen and it became the symbol of Copenhagen city. Some say it’s not worth the hype. Indeed, is small and almost always packed with tourists trying to snap a selfie with the mermaid, but as my mother said to me: “it would be a pity to visit Copenhagen and not see the little mermaid!”. Also, there are other beautiful things to visit in the area like the Gefion Fountain, the St. Alban’s Church, and the Kastellet Park which I wrote about below. Read on.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={littleMermaid} alt="Copenhagen - The Little Mermaid (Den Lille Havfrue)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>2. Amager Beach Park (Amager Strandpark)</h2>
        <p>Amager is a serene, artificial beach from where you have spectacular views over the Middelgrunden windmill park and the Øresund Bridge that connects Denmark and Sweden.</p>
        <p>The 2-kilometer-long artificial island was added in 2005 and it is separated from the original beach by a lagoon crossed by three bridges.</p>
        <p>Even on a September evening, there were lots of joggers, swimmers, kayakers, people taking yoga or aerobic classes outside. This was another indicator that the Copenhageners have a very active and healthy life.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={amagerstrand} alt="Copenhagen - Amager Beach Park (Amager Strandpark)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>3. Grundtvig’s Church (Grundtvigs Kirke)</h2>
        <p>An even more beautiful church (in my opinion of course) is Grundtvig’s Church. It is approximately 6 kilometers from the city center, but you can easily get there by public transport and a good reason to explore other areas as well. The church is made entirely of pale-yellow bricks, a typical Danish building material. Although the interior resembles that of a Gothic church, it is actually a stunning piece of expressionist architecture.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grundtvigsChurch1} alt="Copenhagen - Grundtvig’s Church (Grundtvigs Kirke) -  Seen from outside" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grundtvigsChurch2} alt="Copenhagen - Grundtvig’s Church (Grundtvigs Kirke) -  Seen from inside" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grundtvigsChurch3} alt="Copenhagen - Grundtvig’s Church (Grundtvigs Kirke) -  Beautiful door" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>4. Old Stock Exchange (Børsen)</h2>
        <p>Just 100 meters from Christiansborg Palace lies the Old Stock Exchange, one of the oldest buildings in Copenhagen, built in the 17th-century. Originally Børsen was used as a commodity exchange, and therefore it is nominated as one of the first exchanges in Europe. The building is not usually open for the public being privately owned since 1857, but the exterior with its spire in the shape of twined dragon tails it’s very impressive.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={borsenBuilding} alt="Copenhagen - Old Stock Exchange (Børsen)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>5. Nyhavn (New Harbour)</h2>
        <p>This 17th-century waterfront, stretching from King’s New Square (Kongens Nytorv) to the harbor front, is maybe the most iconic spot in Copenhagen and one of the best photo spots you can find. Being so popular there will be lots of travelers and locals hanging out there so I would recommend waking up early and going there first thing in the morning to snap the perfect photo.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nyhavnMain} alt="Copenhagen - Nyhavn (New Harbour)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>6. Church of Our Saviour (Vor Frelsers Kirke)</h2>
        <p>This large baroque church inaugurated in 1752 in the Christianshavn district of Copenhagen is one of Denmark’s major tourist attractions. The entrance to the church is free of charge for all, but if you wish to climb the tower you must book your visit in advance.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={churchOfOurSaviour} alt="Copenhagen - Church of Our Saviour (Vor Frelsers Kirke)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>7. Assistens Cemetery (Assistens Kirkegård) and/or Vestre Cemetery</h2>
        <p>Assistens Cemetery is the resting place of many famous Danes, like the author Hans Christian Andersen, “the father of existentialism” Søren Kierkegaard, and the Golden Age painter Christen Købke. It is also a popular green oasis in Nørrebro perfect for a stroll.</p>
        <p>Although there are signs indicating the graves of the most famous people, don’t forget to double-check the year of birth - year of death as there are other Hans Christian Andersen’s buried there.</p>
        <p>Also, it is worth mentioning that the place is full of happy playful squirrels.</p>
        <p>If you enjoyed your walk in the peaceful Assistens Cemetery, you can also visit Vestre Cemetery, the largest cemetery in Denmark, located in the Kongens Enghave district.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={assistensCemetery} alt="Copenhagen - Assistens Cemetery (Assistens Kirkegård) and/or Vestre Cemetery" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>8. The Botanical Garden (Botanisk Have)</h2>
        <p>Visiting the Botanical Garden is free, except for the Palm House where there is an entrance fee (included in the Copenhagen Card).</p>
        <p>The Botanical Garden holds the largest collections of living plants in Denmark, including species of plants that are extinct in the wild.</p>
        <p>In some areas, it is allowed to sit on the lawns, and we followed the examples of some locals that were socializing on the grass, drinking beer, and relaxing. We grabbed some porridge from Toverhallerne Market which is nearby and enjoyed our last hours in Copenhagen sitting on the grass and admiring the squirrels. No wonder Copenhagen constantly ranks among the happiest cities in the world.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={botanicalGarden} alt="Copenhagen - The Botanical Garden (Botanisk Have)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>9. Frederik’s Church (Frederiks Kirke)</h2>
        <p>Also known as the Marble Church (Marmorkirken) with its copper-green dome is an Evangelical Lutheran church and has the largest church dome in Scandinavia. Visiting the church is free. However, you can also access the dome for a fee. You may find more information here: <LinkExternal link="https://www.marmorkirken.dk/admission" title="Link to Marmorkirken website" text="marmorkirken.dk" /></p>
        <p>Extra tip: Frederik’s church is in the near vicinity of Amalienborg - the home of the Danish royal family - guarded day and night by Royal Life Guards (Den Kongelige Livgarde). The guard marches from Rosenborg Castle at 11:30 A.M. daily and executes the changing of the guard in front of Amalienborg at noon.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={frederikChurch} alt="Copenhagen - Frederik’s Church (Frederiks Kirke)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>10. Copenhagen City Hall Square (Københavns Rådhuspladsen)</h2>
        <p>One of the main public squares of Copenhagen is a popular location for events, concerts, demonstrations.</p>
        <p>Here you can join a free walking tour with very good reviews from Thursday to Monday from 10:30 A.M. Reservation needed: <LinkExternal link="http://www.copenhagenfreewalkingtours.dk/" title="Link to Copenhagen Free Walking tours website" text="copenhagenfreewalkingtours.dk" /></p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityHallSquare} alt="Copenhagen City Hall Square (Københavns Rådhuspladsen)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>11. Kastellet Park</h2>
        <p>The Kastellet is not just a park with canals, popular for locals to run and bike through. It is actually a 17th-century star fortress, one of the best-maintained fortresses of its type remaining in Europe. The interior is still an active military post. You can find here old military barracks, bastions, a church, and a lovely windmill.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={kastellet} alt="Copenhagen - Kastellet Park" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>12. Gefion Fountain (Gefionspringvandet)</h2>
        <p>The Gefion Fountain is a large fountain on the harbor front in Copenhagen depicting the mythical story of the creation of the island of Zealand on which Copenhagen is located.</p>
        <p>According to an ancient legend, Gefion was the Norse mythology goddess who turned her four sons into oxen and plowed the island of Zealand out of Sweden.</p>
        <h2>13. St. Alban’s Church</h2>
        <p>Sitting next to the Gefion Fountain is St. Alban’s Church - an unbelievably beautiful and aesthetic English-style church. It is the only Anglican church in Denmark. It is about halfway between the Little Mermaid statue and the Royal Palace of Amalienborg.</p>
        <h2>14. Caritas Fountain</h2>
        <p>Also known as the Caritas Well is the oldest fountain in Copenhagen. It was built in 1608 by Christian IV and is located on the Strøget pedestrian street.</p>
        <p>The figure depicts a pregnant woman with her children, a symbol of love or charity (Caritas in Latin).</p>
        {/* image 16/9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={gefionFountain} alt="Copenhagen - Gefion Fountain (Gefionspringvandet)" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" />Gefion Fountain (Gefionspringvandet)</div>
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={stAlbansChurch} alt="Copenhagen - St. Alban’s Church" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" />St. Alban’s Church</div>
          <div className="text-center font-light text-sm"><Image className="mb-6 rounded-lg drop-shadow-xl" src={caritasWell} alt="Copenhagen - Caritas Fountain" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" />Caritas Fountain</div>
        </div>
        <h2>15. Strøget Street</h2>
        <p>This car-free, 1.1 km long street is one of the longest pedestrian shopping streets in Europe.</p>
        <p>It runs from City Hall Square (Rådhuspladsen) to King’s New Square (Kongens Nytorv) being one of the most popular tourist attractions in Copenhagen. It features a large diversity of stores: cool souvenir boutiques, budget-friendly brands like Zara and H&M, or famous expensive brands such as Louis Vuitton, Prada, or Chanel.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={stroget} alt="Copenhagen - Strøget Street" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage2} alt="Copenhagen - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage3} alt="Copenhagen - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}