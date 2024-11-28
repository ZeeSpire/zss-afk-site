import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import viscriKingsHouse from "../../../../../../../public/viscri/viscri-inside-kings-house.jpg";
import viscriChurchInside from "../../../../../../../public/viscri/viscri-inside-the-church.jpg";
import viscriDucks from "../../../../../../../public/viscri/ducks-in-viscri.jpg";
import mesendorfInside from "../../../../../../../public/viscri/mesendorfgasthaus-inside-16x9.jpg";
import viscri2 from "../../../../../../../public/viscri/viscri-2.jpg";
import viscriMeal2 from "../../../../../../../public/viscri/viscri-32-meal-2.jpg";
import viscriFromAbove from "../../../../../../../public/viscri/viscri-from-above.jpg";
import viscriMeal3 from "../../../../../../../public/viscri/viscri-32-meal-3.jpg";
import viscriMeal4 from "../../../../../../../public/viscri/viscri-32-meal-4.jpg";
import feldioaraCitadelAbove from "../../../../../../../public/viscri/feldioara-citadel-view-from-above.jpg";
import viscri32Outside from "../../../../../../../public/viscri/viscri-32-from-outside.jpg";
import racosVulcano from "../../../../../../../public/viscri/racos-vulcano.jpg";
import mesendorfOutside from "../../../../../../../public/viscri/mesendorfgasthaus-outside-16x9.jpg";
import viscriTop16x9 from "../../../../../../../public/viscri/viscri-top-16x9.jpeg";
import feldioaraCitadelInside from "../../../../../../../public/viscri/feldioara-citadel-inside-view.jpg";
import fromViscri1 from "../../../../../../../public/viscri/from-viscri-1.jpg";
import emeraldLake from "../../../../../../../public/viscri/the-emerald-lake.jpg";
import fromViscri3 from "../../../../../../../public/viscri/from-viscri-3.jpg";
import rupeaCitadelView from "../../../../../../../public/viscri/view-from-rupea-citadel.jpg";
import fromViscri2 from "../../../../../../../public/viscri/from-viscri-2.jpg";
import basaltColumns from "../../../../../../../public/viscri/basalt-columns.jpg";
import pinViscri3 from "../../../../../../../public/viscri/pin-viscri-3.jpg";
import viscriChurch from "../../../../../../../public/viscri/church-from-viscri.jpg";
import pinViscri4 from "../../../../../../../public/viscri/pin-viscri-4.jpg";
import rupeaCitadel from "../../../../../../../public/viscri/rupea-citadel.jpg";
import viscriHouses from "../../../../../../../public/viscri/viscri-houses-on-the-road.jpg";

const article = getArticle(17);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriTop16x9} alt="Viscri, the most popular Saxon village in Transylvania" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>If you want to see the Transylvanian beauties with your own eyes because photos like always just don’t do justice, you must visit this area and I promise that you will fall in love, like King Charles III did, with the vast forests, the hospitality of the people, and the delicious local dishes.</p>
        <h2>Where is Viscri</h2>
        <p>Viscri is a small village, in Bunesti commune, Brasov County. There are 80 kilometers from Brasov to Viscri and another 45 kilometers to the Medieval Citadel of Sighisoara. The roads were good when we went there in October 2022 and our favorite means of transport in Romania is always the car. The car will also give you the freedom to explore other points of interest in the area, like Rupea Citadel, Racos geological complex, and other enchanting villages. Note that in Viscri was arranged a parking lot where you can leave the car and it is free of charge. From there you can easily go on foot anywhere in the village. All the cars parked on the streets of the village steal from its authenticity. So please think twice before parking anywhere else because you are too lazy to walk 500 meters.</p>
        <h2>When to visit Viscri</h2>
        <p>I’d say that each season has its charm, but if I had to make a recommendation in this direction, it would be spring or autumn when the weather is milder. In winter, you can have the misfortune of heavy snow and blocked roads. In summer, temperatures can exceed 30 degrees Celsius, and it is also more difficult to find accommodation as it is the peak season. Nevertheless, imagine what it would be like to sit by the stove or fireplace, sipping mulled wine while it’s snowing with big flakes outside and everything else is still. I bet you want to visit Viscri in winter now. Me too. The summer is to be preferred if you are planning to go hiking or observe the rich flora.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriHouses} alt="Viscri, houses on the road" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>What to do in Viscri</h2>
        <p>First of all, I imagine you want to visit the Saxon village to experience country life in its simplest form. So, my top recommendation would be to contact your guest house and check with them what activities you can do and book them ahead. They will most likely tell you about the horse-drawn cart trips, the horseback riding trips on the surrounding hills, or maybe they can even offer bike renting services for you to go in exploration on the bike trails built by ADEPT NGO.</p>
        <p>Traditions are still valued in Romania. In Viscri you can visit the local blacksmith at work, or Gheorghita the brick maker, or even the feltmakers that are happy to sell you their work.</p>
        <p>The House of Prince of Wales can be visited as well for a couple of euros (12 RON/2.5 EUR). This price includes a guided tour that I highly recommend because it offers lots of information that you wouldn’t find out otherwise. After visiting the barn where, at the time of our visit, a photo exhibition was taking place, the vegetable garden, and the traditionally decorated rooms, you can sit in the cafe enjoying a freshly baked cake. There’s a small shop where you can buy books, jams, and other goodies as well. Remember that every money spent is helping the community.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscri2} alt="Viscri, house of King Charles III" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriKingsHouse} alt="Viscri, inside the house of King Charles III" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>One of the top attractions in Viscri is undoubtedly the Fortified Church. The entrance costs 15 RON (3 EUR). Besides the church and the church tower, we were able to visit a small museum with traditional objects and an exhibition of Medias ceramics housed in the walls surrounding the church.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriChurch} alt="Viscri, Fortified Church" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriChurchInside} alt="Viscri, inside the Fortified Church" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={fromViscri3} alt="Viscri, the wall of the fortified church" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={fromViscri1} alt="Viscri, inside the chambers of the fortified church" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={fromViscri2} alt="Viscri, the fortified church seen from above" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Besides exploring the village and its surrounding, watching the cows returning from grazing, photographing the geese let loose on the street, or just stargazing in the night, you can go truffle hunting in the forest or to other guided tours organized from time to time or upon request.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriDucks} alt="Viscri. Ducks in the wild." width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>After all these activities, you will definitely be starving, but don’t worry because, in Viscri, the emphasis is on bio, organic, and local food.</p>
        <h2>Where to eat</h2>
        <p>There are a few places where you can enjoy a traditional, slow-cooked meal, with organic, seasonal ingredients grown in their gardens or from local farmers. We chose the White Barn from Viscri 32, and we each had a 3 courses menu to try as many dishes as humanly possible. The food was delicious due to the mastery of the chef, but certainly also to the quality ingredients.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriMeal2} alt="Food at Viscri 32 - 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriMeal4} alt="Food at Viscri 32 - 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriMeal3} alt="Food at Viscri 32 - 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>We also wanted to try the local gastronomic point at Mesendorf 65, because we read about them, and we knew they organize cheese tastings with cheeses made by them with milk from the cows in the village. Also, they serve lunch and dinner with homecooked delicious dishes. But unfortunately, they were fully booked.</p>
        <p>There are other gastronomic points in other villages, and in Viscri as well, but is highly recommendable to book ahead.</p>
        <h2>Where to sleep</h2>
        <p>Viscri is an example of tourism done well with respect for the environment. You can find accommodation in restored houses, decorated with traditional objects, some of which are decades or even hundreds of years old.</p>
        <p>Some of these guest houses are:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://viscri32.com/" title="Link to Viscri 32 website" text="Viscri 32" /></li>
          <li><LinkExternal link="https://www.viscri125.ro/" title="Link to Viscri 125 website" text="Viscri 125" /></li>
          <li><LinkExternal link="http://www.experiencetransylvania.ro/guesthouse/viscri-63/" title="Link to Viscri 63" text="Viscri 63" /></li>
        </ul>
        <p>You can find more options on booking.com or google, both in Viscri and in the neighboring villages.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscri32Outside} alt="Viscri 32 - In the garden" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Mesendorf Gasthaus</h2>
        <p>We actually stayed in another village, called Mesendorf, 17 kilometers from Viscri that can be traveled by car or bicycle. We enjoyed our time spent at Mesendorf Gasthaus because the accommodation was extraordinarily beautiful, with high ceilings and authentic Saxon decorations. But the icing on the cake was the private sauna that we had in our apartment.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={mesendorfInside} alt="Mesendorf Gasthaus. Inside." width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>They also have a restored 100-year-old barn where guests can enjoy the meals, a cozy space where you can read a book, an orchard behind the barn, and two friendly dogs.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={mesendorfOutside} alt="Mesendorf Gasthaus. The barn." width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>How many days to stay in Viscri</h2>
        <p>This depends a lot on what you actually want to do. If you only want to walk around the village, visit the fortified church, the house of the Prince of Wales, and taste a local dish, one day is enough.</p>
        <p>If you want to disconnect, experience more country life, to participate in 2-3 activities from those above, you should opt for a whole weekend.</p>
        <p>Also, there are many other things to do in the area, and you can extend your stay depending on what you want to tick. Next, I will present what we saw in one day.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={viscriFromAbove} alt="Viscri - The whole village from above" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Three other places to visit near Viscri</h2>
        <h3>Racos geological complex</h3>
        <p>The geological complex is a protected area of 95.2 hectares and includes the extinct volcano Racos, the basalt quarry Brazi nicknamed by the locals The Emerald Lake, and the basalt columns.</p>
        <p>When you get there, you will be greeted by a person who will hand you a leaflet with information about the complex and a map. You can leave the car in the parking lot, there are paths arranged to each objective, and the ticket costs 20 RON (4 EUR) per person.</p>
        <p>This price also includes a visit to the <LinkExternal link="https://www.castelulsukosdbethlen.ro/" title="Link to Sükösd-Bethlen castle" text="Sükösd-Bethlen castle" />, certified in the 1600s, which lies in the city of Racos.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={racosVulcano} alt="Racos Vulcano" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={basaltColumns} alt="Racos Vulcano - The basalt columns" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={emeraldLake} alt="Racos Vulcano - The Emerald Lake seen from above" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Rupea Citadel</h3>
        <p>While driving from Brasov to Viscri, you will pass by the Rupea Citadel, which stands imposingly on the top of the Cohalmul hill, dominating the city of Rupea from above. Its image really takes your breath away.</p>
        <p>This medieval fortress covers an area of 11 hectares with walls, towers, and inner courtyards and can be visited for 15 RON (3 EUR) per person. To be noted that there’s also a parking lot where you can leave your car for free. <LinkExternal link="https://www.primariarupea.ro/program-tarife/" title="Link to Primaria Rupea" text="Here" /> you can find more info about the visiting schedule and the available types of tickets.</p>
        <p>In the town of Rupea there is also a small ethnographic museum next to the park.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={rupeaCitadel} alt="Rupea Citadel, seen from the drone" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={rupeaCitadelView} alt="Beautiful view from the Rupea Citadel" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Feldioara-Marienburg Citadel</h3>
        <p>The medieval fortress Marienburg in Feldioara is only 20 kilometers from Brasov. The fortress received the appearance from the 17th century through the restoration works that took place between 2013-2017. The medieval settlement was founded in the second half of the 12th century by the Saxon colonists, and in the 13th century, Feldioara became the residence of the Teutonic knights who ruled here.</p>
        <p>Upon arrival we found a parking lot where we left the car, we paid 15 RON (3 EUR) per ticket, and we received a cool leaflet with information not only about the citadel but also about its surroundings.</p>
        <p>After the restoration, the popularity of the Feldioara fortress grew exponentially, becoming an unmissable objective if you are in the area.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={feldioaraCitadelInside} alt="View inside Feldioara fortress" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={feldioaraCitadelAbove} alt="View the whole Feldioara fortress, from above" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>There are so many other things you can see, from fortified churches to medieval citadels, from charming cities and villages to wonderful nature, some we already know, others we can’t wait to get to, but we will discover all of them on another occasion.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinViscri3} alt="Viscri - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinViscri4} alt="Viscri - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}