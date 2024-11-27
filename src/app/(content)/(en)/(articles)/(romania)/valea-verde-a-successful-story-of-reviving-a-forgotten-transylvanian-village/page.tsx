import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import weekenduriTematiceSiActivitatiValeaVerde from "../../../../../../../public/valea-verde/weekenduri-tematice-si-activitati-valea-verde.jpg";
import valeaVerdeRetreat from "../../../../../../../public/valea-verde/valea-verde-retreat.jpg";
import vanatoareDeTrufeValeaVerde from "../../../../../../../public/valea-verde/vanatoare-de-trufe-valea-verde.jpg";
import valeaVerdeCover from "../../../../../../../public/valea-verde/valea-verde-cover.jpeg";
import micDejunValeaVerde from "../../../../../../../public/valea-verde/mic-dejun-valea-verde.jpg";
import dinner1ValeaVerde1 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-1.jpg";
import dinner1ValeaVerde2 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-2.jpg";
import dinner1ValeaVerde3 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-3.jpg";
import dinner1ValeaVerde4 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-4.jpg";
import dinner1ValeaVerde5 from "../../../../../../../public/valea-verde/dinner-1-valea-verde-5.jpg";
import dinner2ValeaVerde1 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-1.jpg";
import dinner2ValeaVerde2 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-2.jpg";
import dinner2ValeaVerde3 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-3.jpg";
import dinner2ValeaVerde4 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-4.jpg";
import dinner2ValeaVerde5 from "../../../../../../../public/valea-verde/dinner-2-valea-verde-5.jpg";
import biertan from "../../../../../../../public/valea-verde/biertan.jpg";
import saschiz from "../../../../../../../public/valea-verde/saschiz.jpg";
import sighisoara from "../../../../../../../public/valea-verde/sighisoara.jpg";
import Link from "next/link";

const article = getArticle(21);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerdeCover} alt="Valea Verde - a successful story of reviving a forgotten Transylvanian village" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>After the gastronomic experience and the guided truffle hunting that we had at Terra Carpatica - Grigorescu Mansion, which I wrote about in <Link prefetch={false} href="/truffle-hunting-and-a-special-culinary-experience-at-grigorescu-mansion" title="Truffle hunting and a special culinary experience at Grigorescu Mansion" className="text-blue-600 underline hover:text-blue-800">this article</Link>, we purchased a similar package, this time at Valea Verde, with a Black Friday discount.</p>
        <p>Thus, the package for two people cost 350 euros, reduced from 498 euros, and included two nights of accommodation with breakfast, a welcome drink, two dinners with 4 or 5 courses, respectively, a lunch with two courses and a guided truffle hunting. I would say it was a very good deal.</p>
        <p>Valea Verde is located in Cund, a picturesque village in Mureş county, just 30 km from Sighişoara, 145 km from Braşov and 330 km from Bucharest.</p>
        <h2>Accommodation options</h2>
        <p>The owners, Ulrike and Jonas Schäfer, moved from Germany to Romania, being in love with the wonderful landscapes they discovered here, the rich culture and the simple and authentic life. In 2005, they started the Valea Verde Retreat project through which they succeeded in reviving the small village in Transylvania. For Valea Verde they were inspired by the Italian “albergo difusso” which means “scattered hotel”. They renovated several houses in the village, one by one, turning them into guest houses, without destroying the charm of the old Saxon houses.</p>
        <p>All accommodation options are on the <LinkExternal link="https://www.valeaverde.com/en/stay" title="Link to Valea Verde" text="Valea Verde website" />. From their portal, we find out that there are 8 houses available to the guests, located at different distances from the restaurant, which can host over 60 people.</p>
        <p>The houses where you can stay are the following:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Valea Verde House, located next to the restaurant, has four apartments;</li>
          <li>Yard House, located approximately 350 meters from the restaurant, has an apartment for 4 people and three double rooms;</li>
          <li>Cund House, located 350 meters from the restaurant, has two rooms;</li>
          <li>Reussdorfer Hoff, located approximately 600 meters from the restaurant, is the largest house in Cund and has 9 rooms, being ideal for large groups of friends, for teambuildings and more;</li>
          <li>Bierzahn House, located 500 meters from the restaurant, can accommodate up to 4 people;</li>
          <li>Samways House, located 550 meters from the restaurant, can accommodate up to 8 people;</li>
          <li>Johann House, located 450 meters from the restaurant, ideal for 3 people;</li>
          <li>Cal House, inaugurated in 2022, after an investment of over 400,000 euros, has 4 double rooms, each room being dedicated to a color: blue, green, red and white.</li>
        </ul>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerdeRetreat} alt="Valea Verde Retreat" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We had room 1 in Reussdorfer Hoff, a simple, quite clean room. When we arrived it was quite cold inside, but it warmed up quickly after we turned on the radiators. It would have needed some small repairs, especially in the bathroom, possibly a new layer of paint on the walls. We received a bottle of water from the house, and in the bathroom we found liquid soap, disinfectant, and body cream. There was a fireplace in the room, but we didn’t use it. There was also a shared kitchenette where you could prepare a coffee or a tea.</p>
        <h2>Valea Verde Restaurant</h2>
        <p>The Valea Verde restaurant is the central piece of the retreat, not only because you have no other options for dining nearby, but because here you can have traditional culinary experiences with a modern touch, based on local, fresh, seasonal ingredients. Valea Verde is part of the Slow Food movement, and the restaurant received the prestigious “Blazon for excellence in service and hospitality” of the Chaîne des Rôtisseurs, a culinary association in France. You will also find here an impressive selection of local and international wines to perfectly accompany the delicious food.</p>
        <p>The team from Valea Verde proposes a menu for a change. More precisely, a menu to combat climate change. This is because the production and consumption of food is one of the main causes of climate change. Here is what is written on the first page of their menu: “To do our part in saving the planet we, the Valea Verde team, pledge to:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>use local, seasonal produce, and support local farmers who practice sustainable agriculture;</li>
          <li>preserve biodiversity and natural resources;</li>
          <li>minimize food and water waste in our kitchen;</li>
          <li>support a Slow Food concept, encouraging others to learn about good, clean, and fair food; and we raise against climate change!”</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde1} alt="Valea Verde - Dinner 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde3} alt="Valea Verde - Dinner 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde5} alt="Valea Verde - Dinner 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde2} alt="Valea Verde - Dinner 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner1ValeaVerde4} alt="Valea Verde - Dinner 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>Every day the menu is a fixed one with up to 7 dishes. As I said, on Friday evening we had four dishes included, to choose from the 7 available. We each chose two different appetizers, namely venison carpaccio, chicken terrine with salad, sweet potato cream soup and the house butter and bread service. As a main course we had pork neck steak with country-style potatoes and ratatouille. The dessert was panna cotta with marinated raspberries. We were particularly impressed by the main course and the dessert, and as for the venison, we realized that it is not something we can taste with pleasure.</p>
        <p>For the breakfast we had many options to choose from: different types of cheeses and meats, vegetables, fruits, Romanian “zacuscă”, eggplant salad, butter, jams, pancakes, juice, milk, tea and coffee. The eggs were prepared on the spot according to the preferences of each guest. We opted for eggs benedict and omelette with ham and cheese.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={micDejunValeaVerde} alt="Breakfast at Valea verde" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Lunch was a light one consisting of two dishes: a salad with goat cheese and balsamic vinegar and a risotto with mushrooms.</p>
        <p>Saturday dinner had five dishes, as follows: goose liver terrine with hot pepper jam, puff pastry with venison and salad, chestnut cream soup, duck leg with red cabbage and potato croquettes, and as a dessert baked apple filled with walnuts with vanilla cream. The surprise of the evening was the chestnut cream soup, which we had never eaten before, but also the stuffed apple, which was delicious. We noticed the fact that both the duck and the pork from the previous evening had a more intense flavor than the meat we find in supermarkets.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde1} alt="Valea Verde - Dinner 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde3} alt="Valea Verde - Dinner 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde5} alt="Valea Verde - Dinner 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde2} alt="Valea Verde - Dinner 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dinner2ValeaVerde4} alt="Valea Verde - Dinner 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <h2>Thematic weekends and activities at Valea Verde</h2>
        <p>On the <LinkExternal link="https://www.valeaverde.com/en/experiences/" title="Link to Valea Verde Experiences" text="Valea Verde website" />, you can find a multitude of thematic weekends and experiences that you can have here: carriage rides, horse riding, hiking, cycling, wine tasting, themed dinners, SPA, truffle hunting and others.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={weekenduriTematiceSiActivitatiValeaVerde} alt="Thematic weekends at Valea Verde" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We went on the truffle hunt led by Viorel Șandru, who delighted us with all kinds of stories throughout the two-hour hike through the forest. He came accompanied by three dogs of different breeds. One of them, named Muchi, was the star of the hunt because he found truffle after truffle. But Muchi also ate almost all of them. We were surprised to see how many truffles were found, more than we found in October and on a smaller area of ​​forest. You can read more information about truffles and their hunting in <Link prefetch={false} href="/about-truffles-and-how-to-find-them" title="About truffles and how to find them" className="text-blue-600 underline hover:text-blue-800">this article</Link>.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={vanatoareDeTrufeValeaVerde} alt="Truffle hunting at Valea Verde" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Another unique and authentic experience we had was spending a few hours in the observatory located behind a pear orchard, somewhere on the edge of the forest. The observatory is a small wooden cabin, a charming place where you can enjoy the tranquility, and maybe with a little luck you can see wild animals such as foxes, deer, rabbits, wild cats, and why not even bears. We got there at sunset and on the way to the cabin we saw a deer.</p>
        <h2>Other places to visit in the surroundings</h2>
        <h3>Manufactura de Brânză</h3>
        <p>In Cund you can visit the <LinkExternal link="http://manufacturadebranza.ro/" title="Link to Manufactura de Brânză" text="Manufactura de Brânză" /> where the milk obtained from the cows is processed and where you can buy various types of matured cheese. On request, cheese tastings can be organized or even visits to the workshop to see how the cheese is produced.</p>
        <h3>Biertan</h3>
        <p>Biertan is a Saxon village, located 23 kilometers from Cund and was documented in the 13th century, being one of the first German Saxon settlements in Transylvania. By far the largest and most imposing fortified church that we have seen is the one in Biertan and I must say that it was difficult to select just one photo with it.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={biertan} alt="Biertan fortified church, aerial view" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Sighișoara Medieval Citadel</h3>
        <p>The Sighișoara Medieval Citadel is the largest continuously inhabited medieval citadel in Europe and has been part of the UNESCO World Heritage since 1999. Among the tourist attractions that you can visit in Sighisoara, we mention: the clock tower, the fortress square, the deer house, the history museum, the scholars staircase, the hill church and the fortress towers.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={sighisoara} alt="Sighisoara Streets" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Târgu Mureș</h3>
        <p>Not to be missed in Târgu Mureș, located 43 kilometers from Cund, is the <LinkExternal link="https://palatul-culturii.ro/en/" title="Link to Palace of Culture from Targul Mures" text="Palace of Culture" /> which hosts several exhibitions, as well as the Târgu Mureș Citadel. Also, I understood that <LinkExternal link="https://www.zootirgumures.ro/" title="Link to Targul Mures Zoo" text="the zoo" /> is worth a visit. Considering that on Google it has a score of 4.6 out of 9000 reviews, I’m sorry we didn’t get to visit it. By comparison, the one in Bucharest has a score of 3.9 out of approximately 12,000 reviews.</p>
        <h3>Bethlen-Haller Castle from Cetatea de Baltă and Jidvei winery</h3>
        <p>Located 47 kilometers from Cund, the Bethlen-Haller Renaissance-style castle has opened its doors to visitors. Besides the actual visit to the castle, tourists can opt for different packages that include wine tasting and lunch. Details on the website <LinkExternal link="https://www.jidvei.ro/castelul-bethlen-haller/" title="Link to jidvei.ro" text="jidvei.ro" /></p>
        <h3>Saschiz</h3>
        <p>Located 50 kilometers from Cund, Saschiz is a Saxon village where the main tourist attraction is represented by the Fortified Evangelical Church of St. Stephen, built in the 15th century, currently a UNESCO monument. There would also be the Saschiz Peasant Citadel, which we did not visit because at the time of our visit it was closed for renovation, which I must admit made me quite content to hear.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={saschiz} alt="Saschiz fortified church, aerial view" width={1248} height={841} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Viscri</h3>
        <p>Seventy kilometers from Cund is Viscri, which we believe is the most popular Transylvanian village, to which we have dedicated <Link prefetch={false} href="/viscri-the-most-popular-saxon-village-in-transylvania" title="Our article about Viscri" className="text-blue-600 underline hover:text-blue-800">a separate article</Link>.</p>
        <p>In conclusion, Valea Verde is definitely a place worth visiting with an open mind, where you go to recharge your batteries and reconnect with nature. We are always delighted to hear such stories as the one from Valea Verde Retreat.</p>
      </main>
    </div>
  );
}
