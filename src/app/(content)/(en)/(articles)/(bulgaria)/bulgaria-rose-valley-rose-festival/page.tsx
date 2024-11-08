import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import bulgariaRoseFestivalField from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-field.jpeg"
import bulgariaRoseFestivalRosesInField from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-roses-in-field.jpg"
import bulgariaRoseFestivalRosePickingRitual from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-picking-ritual.jpg"
import bulgariaRoseFestivalRosePickingRitualInTheField from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-picking-ritual-in-the-field.jpg"
import bulgariaRoseFestivalRoseBoilingRitual from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-boiling-ritual.jpg"
import bulgariaRoseFestivalKulataEthnographicComplex from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-kulata-ethnographic-complex.jpg"
import bulgariaKazanlukThracianTomb from "../../../../../../../public/bulgaria-rose-festival/bulgaria-kazanluk-thracian-tomb.jpg"
import bulgariaRoseFestivalRoseMuseumKazanlak from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-festival-rose-museum-kazanlak-kazanluk.jpg"
import bulgariaRoseValleyDamascenaEthnographicComplex from "../../../../../../../public/bulgaria-rose-festival/bulgaria-rose-valley-damascena-ethnographic-complex.jpg"
import bulgariaEtarEthnoVillage from "../../../../../../../public/bulgaria-rose-festival/bulgaria-etar-ethno-village.jpg"
import Image from "next/image";

import { Metadata } from "next";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

const article = getArticle(33);

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
        <Image className="mb-4" src={bulgariaRoseFestivalField} alt="Embark on an Enchanting Journey Through Bulgaria's Rose Valley" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>If you’re longing to experience the most exquisite scent of roses, then it’s time to consider a trip to the Kazanlak region, also known as the Rose Valley.</p>
        <p>In 2023, we had the pleasure of attending the Rose Festival in Kazanlak, Bulgaria, and we were so enamored with the experience that we felt compelled to share it with you.</p>
        <h2>When does the Rose Festival take place?</h2>
        <p>The Rose Festival typically spans several weeks at the end of May and the beginning of June, coinciding with the blooming period of the Damascena roses.</p>
        <p>The main festivities occur on Saturdays and Sundays and include the traditional rose-picking ceremony, the distillation of rose petals to produce essential oil, a parade, beauty contests, and concerts.</p>
        <p>The festival schedule, including the timing and locations of all events related to the Rose Festival, varies from year to year and can be found online or through various travel agencies. For the year 2024, we found the schedule on the <LinkExternal link="https://www-kazanlak-bg.translate.goog/page-12782.html?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en" title="Official website of the Bulgarian Rose Fastival" text="official website" /> of the municipality.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseFestivalRosesInField} alt="Bulgaria Rose Festival - Roses in the field" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>How can you get there?</h2>
        <p>If you’re arriving from another country and landing at Sofia Airport, I recommend renting a car or booking a dedicated tour to the Rose Festival with transportation included from a travel agency.</p>
        <p>We drove from Romania in our own car, crossed the border at Giurgiu-Ruse, passed through Veliko Tarnovo, and safely reached our destination. There were only a few potholes on certain sections of the road; otherwise, the journey was smooth. We were pleasantly surprised that most drivers obeyed traffic rules.</p>
        <h2>Where did we stay?</h2>
        <p>We stayed at the <LinkExternal link="https://www.booking.com/hotel/bg/kings-39-valley-medical-amp-spa.ro.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Kings’ Valley Medical & Spa Hotel" text="Kings’ Valley Medical & Spa Hotel" />, a 5-star establishment. Both breakfast and dinner were included, served buffet-style with a variety of delicious options, similar to those found in other Western European hotels.</p>
        <p>The room was exceptionally spacious and clean, offering a beautiful view of the pools and the distant mountains.</p>
        <p>We were also impressed by the SPA facilities and the indoor Olympic pool, as the outdoor ones were closed during our visit.</p>
        <h2>Activities and places to visit</h2>
        <p>We were interested in the rituals of rose picking and boiling, as well as visiting a few museums. Therefore, in this article, I will only discuss the activities we experienced.</p>
        <h3>The Rose Picking Ritual</h3>
        <p>The ritual of rose picking occurs early in the morning near several villages such as Yasenovo, Rozovo, or Kanchevo. We departed from the hotel around 8 o’clock, but we were unsure of the exact location. Using GPS, we navigated to the village of Yasenovo, where we had learned from an internet program that the rose picking ritual would take place that day. Along the way, we noticed numerous buses and parked cars on the side of the road, indicating we were heading in the right direction.</p>
        <p>Upon arrival, we paid 10 leva (in 2023) in cash to enter the designated area in the field. Here, visitors could purchase crowns made of rosebuds and other traditional Bulgarian products. The event was a true spectacle, with Bulgarians of all ages dressed in folk costumes, joyfully dancing and singing folk songs. Afterwards, we joined the festivities and ventured among the fragrant bushes to pick roses.</p>
        <p>It was indeed a splendid morning!</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseFestivalRosePickingRitual} alt="Bulgaria Rose Festival - Rose Picking ritual" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseFestivalRosePickingRitualInTheField} alt="Bulgaria Rose Festival - Rose Picking ritual in the field" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>The Ritual of Boiling Rose Petals</h3>
        <p>To witness the boiling of rose petals and the extraction of essential oil, we headed to the center of Kazanluk, to the <LinkExternal link="https://www.muzei-kazanlak.org/index.php?option=com_content&view=article&id=48&Itemid=1&lang=en" title="Link to Kulata Ethnographic Complex" text="Kulata Ethnographic Complex" />.</p>
        <p>The entrance fee was approximately 8 leva per person, payable in cash. However, besides learning about essential oil extraction, we also had the opportunity to explore the garden and rooms of the ethnographic museum.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseFestivalRoseBoilingRitual} alt="Bulgaria Rose Festival - Rose Boiling ritual" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseFestivalKulataEthnographicComplex} alt="Bulgaria Rose Festival - Kulata Ethnographic Complex" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>The Thracian Tombs</h3>
        <p>Located just under 250 meters from the Kulata Ethnographic Museum, in a small park (Tyulbeto Park), you’ll find a Thracian tomb, along with a replica of it. The latter is open to visitors.</p>
        <p>For the address, visiting hours, and ticket prices, please refer to this <LinkExternal link="https://www.muzei-kazanlak.org/index.php?option=com_content&view=article&id=63&Itemid=87&lang=en" title="Link to Kazanlak museum website" text="website" />.</p>
        <p>This area is also referred to as the Valley of the Thracian Kings, where hundreds of Thracian tombs, altars, and treasures have been unearthed.</p>
        <p>Just a 15-minute drive from Kazanluk, you can explore the tombs of Seuthes III, Shushmanets, Griffins, and Ostrusha.</p>
        <p>Furthermore, many of the artifacts and statues discovered in these tombs are on display at the Iskra Historical Museum in Kazanluk.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaKazanlukThracianTomb} alt="Bulgaria Kazanluk - Thracian Tomb" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>The Rose Museum in Kazanluk</h3>
        <p>The Rose Museum exhibits a variety of historical artifacts, traditional tools, and interactive displays that illustrate the process of rose oil extraction. Visitors have the opportunity to learn about the significance of roses in Bulgarian culture, folklore, and economy.</p>
        <p>Within both the museum courtyard and the park in front of the museum, visitors can admire, photograph, and smell dozens of rose varieties.</p>
        <p>Their fragrance is intoxicating in the most delightful way possible. I have detailed about roses and their beauty in <Link prefetch={false} href="/exploring-the-fragrant-beauty-of-bulgaria-s-valley-of-roses" className="text-blue-600 underline hover:text-blue-800">this article</Link>.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseFestivalRoseMuseumKazanlak} alt="Bulgaria Rose Festival - Rose Museum Kazanlak" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>The Damascena Ethnographic Complex</h3>
        <p>Situated approximately 25 kilometers from Kazanluk, in the heart of the Rose Valley, lies the <LinkExternal link="https://www.damascena.net/%D0%BF%D1%8A%D1%80%D0%B2%D0%B0-%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B0-%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D0%B0/?lang=en" title="Link to Damascena Ethnographic Complex" text="Damascena Ethnographic Complex" />. This complex offers visitors a unique opportunity to explore and experience various aspects of Bulgarian heritage, with a particular focus on traditional methods of rose cultivation and rose oil production.</p>
        <p>Within the complex, there is a restaurant where visitors can sample authentic Bulgarian cuisine and beverages. Since we didn’t dine here, we cannot provide a recommendation in this regard.</p>
        <p>Additionally, the complex houses a souvenir shop where you can purchase cosmetic products based on rose or lavender oil, as well as various sweets and beverages.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaRoseValleyDamascenaEthnographicComplex} alt="Bulgaria Rose Festival - Rose Museum Kazanlak" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Ethno Village Etar</h3>
        <p>If you’re traveling by car, consider visiting the Ethno Village Etar, situated approximately 45 kilometers from Kazanluk and 53 kilometers from Veliko Tarnovo.</p>
        <p>Etar is an open-air museum crafted as a replica of a typical Bulgarian village from the 18th and 19th centuries. It boasts well-preserved and restored wooden houses, workshops, water mills, and other structures, all lining cobblestone streets. Nestled in a picturesque natural environment, the village is enveloped by forests and the lively waters of the river.</p>
        <p>Visitors can delve into various artisan workshops, including woodworking, pottery, weaving, and metalworking. These workshops offer insights into the skills and techniques employed by Bulgarian craftsmen centuries ago.</p>
        <p>A standout feature of Etar is its operational water mill, illustrating the significance of water power in traditional Bulgarian economy and industry. Additionally, visitors can savor authentic Bulgarian cuisine at the village’s taverns and restaurants, serving dishes crafted with locally sourced ingredients.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={bulgariaEtarEthnoVillage} alt="Bulgaria - Etar Ethno Village" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Conclusion</h2>
        <p>From the mesmerizing rituals of rose picking and boiling to the exploration of ancient Thracian tombs and ethnographic complexes, the Kazanlak region offers a tapestry of experiences that captivate the senses and enrich the soul. Whether indulging in authentic Bulgarian cuisine, wandering through open-air museums, or breathing in the intoxicating fragrance of roses, a journey to the Rose Valley promises an unforgettable adventure filled with beauty, culture, and timeless wonder.</p>
      </main>
    </div>
  );
}
