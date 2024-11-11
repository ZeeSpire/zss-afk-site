import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
// import Link from "next/link";
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

const article = getArticle(29);

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
        <Image className="mb-4" src={thessalonikiViewFromTheWhiteTower} alt="What you can do in Thessaloniki in just three hours" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>On our way to Halkidiki, we stopped in Thessaloniki, a city full of charm and color. Here is what we managed to do in just three hours.</p>
        <p>First, we looked for a parking space to leave our car. We left the car in the <LinkExternal link="https://www.google.com/maps/place/Passenger+Terminal+Parking+(P1)/@40.6345997,22.9349951,19.75z/data=!4m17!1m10!3m9!1s0x14a8396ff3dc0767:0x552aae944aaf3b75!2sNoa+Hotel!5m2!4m1!1i2!8m2!3d40.6350005!4d22.935659!16s%2Fg%2F11kl03nfsh!3m5!1s0x14a8390a2e92d639:0xb24f4bc0bcc4ad8!8m2!3d40.6346164!4d22.9351678!16s%2Fg%2F11hbqkxc7d?entry=ttu" title="Map to Passenger Terminal Parking (P1)" text="Passenger Terminal Parking (P1)" />, a fairly large parking lot with a barrier, for which we paid approximately 5 euros for 3 hours at the end of our stay. We were able to pay by card, and we were satisfied with this parking lot.</p>
        <p>From there, we went in a straight line on Leof Nikis Street to the White Tower. On the right side, there was the Thessaloniki Gulf of the Aegean Sea, a crystal blue sea but full of garbage on the shore, and on the left side, there were buildings with various shops and cafes on the ground floor.</p>
        <h2>What you can visit in Thessaloniki</h2>
        <h3>Aristotelous Square</h3>
        <p>On the way to the White Tower, we passed by Aristotelous Square, where we stopped for a few moments. Aristotelous Square is a large space flanked by neoclassical buildings on one side and the sea on the other. All around there are cafes and restaurants, and in the center is the statue of Aristotle.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={thessalonikiAristotelousSquare} alt="Thessaloniki - Aristotelous Square" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>The White Tower of Thessaloniki</h3>
        <p>From Aristotelous Square, we had to walk less than a kilometer to the <LinkExternal link="http://www.lpth.gr/indexeg.php" title="Link to White Tower's website" text="White Tower" />. The ticket for an adult cost 6 euros in June 2023 and included an audio guide. The audio guide can be accessed by scanning the QR code found on each floor and can be listened to on your own smartphone.</p>
        <p>There was also the option of purchasing a combined ticket that included the Byzantine Culture Museum, the White Tower Museum, the Archaeological Museum, and the Rotunda monument. It had a price of 15 euros and was valid for three days.</p>
        <p>On each of the six floors of the tower, there is an exhibition, each with a different theme or concept. The exhibitions were quite digitized, with many interactive screens, and people with reduced mobility could take a virtual tour of the museum at the information stations located on the ground floor. As an additional example, on the 6th floor, the theme refers to the “flavors” of the city. Part of the space has been transformed into a small dining area, and the table tops are screens with videos showing the preparation of recipes specific to the city of Thessaloniki.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={thessalonikiWhiteTower} alt="Thessaloniki - The White Tower" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={thessalonikiWhiteTowerCoins} alt="Thessaloniki - The White Tower Coins" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={thessalonikiWhiteTowerView} alt="Thessaloniki - The White Tower View" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>But the main reason for our visit was the view offered by the balcony on the top floor. We took some photos and then continued our walk through Thessaloniki.</p>
        <p>Near the White Tower, there is another tourist attraction: the statue of Alexander the Great. But we actually changed directions and headed towards the ruins of the Galerius Palace.</p>
        <h3>Palace of Galerius</h3>
        <p>The Palace of Galerius, located in Navarinou Square, was built in the 4th century AD by the Roman emperor Galerius (293–311 AD). Although the ruins can be visited from the inside, we were content to see them from the side.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={thessalonikiPalaceOfGalerius} alt="Thessaloniki - Palace of Galerius" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Trigona Elenidi</h3>
        <p>Very close to the Palace of Galerius ruins is the Trigona Elenidi patisserie, known in Thessaloniki for its triangle pastry filled with vanilla cream. We also tried such a triangle, and we confirm that it was very good. Kind of sweet, but good.</p>
        <h3>Arch of Galerius</h3>
        <p>The Arch of Galerius, also known as the Kamara, was built to immortalize the victorious campaigns of the Tetrarchy. And the reliefs found on the lower half of the construction are related to the campaign against the Persians.</p>
        <p>Just like Hadrian’s Arch in Athens, can be seen for free by any passerby.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={thessalonikiArchOfGalerius} alt="Thessaloniki - Arch of Galerius" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Rotunda</h3>
        <p>From the Arch of Galerius, you can already see the impressive monument of the Rotunda.</p>
        <p>The Rotunda, built by the Roman emperor Galerius in 306 AD, is a circular structure (hence the name Rotunda) that served over time as a temple, church, and mosque, and today it is a UNESCO World Heritage Site and one of the top attractions of Thessaloniki.</p>
        <p>We paid 6 euros to visit the interior, which is impressive and fascinating at the same time.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={thessalonikiRotonda} alt="Thessaloniki - Rotunda" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-4" src={thessalonikiRotondaInterior} alt="Thessaloniki - Rotunda Interior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>This is all we could do in the short time we had in Thessaloniki. In our walk, we passed by many beautiful buildings, especially churches with an old air that rose between the modern buildings.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={thessalonikiChurch} alt="Thessaloniki - Church" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We couldn’t leave the city and go on the road without tasting souflaki first. So, we quickly looked on Google Maps and searched for a place with as many good reviews as possible. We chose to eat at Derlicatesen all Souvlaki. A pork souflaki in pita cost 3 euros; it was good, but not as good as the one eaten at Kostas in Athens. It had a lot of fries and a mustard sauce, and that’s about it; nothing too exciting.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-4" src={thessalonikiDerlicatesenAllSouflakiLocation} alt="Thessaloniki - souflaki location" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-4" src={thessalonikiDerlicatesenAllSouflaki} alt="Dinner at The Artist - souflaki dish" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>Then we sweetened ourselves with a choux with vanilla cream and ice cream, on top of which we added white chocolate and caramel from <LinkExternal link="https://choureal.com/catalogue/" title="Link to Choureál, Choux & Profiterole's website" text="Choureál, Choux & Profiterole" />. This time, we have to admit that the dessert was very good, and we appreciated that we were offered water with ice from the house, which we really enjoyed after the dessert.</p>
        <p>We didn’t stop to take pictures or make other visits, so in 15 minutes we got to the car and started on the road to Halkidiki. The first impression of Thessaloniki was not extraordinary, but after the 3 hours spent in the city, we left thinking that we would return.</p>
      </main>
    </div>
  );
}
