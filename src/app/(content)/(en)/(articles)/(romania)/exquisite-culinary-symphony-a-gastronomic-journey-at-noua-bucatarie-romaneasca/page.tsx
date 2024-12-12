import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nouaRestaurant1 from "../../../../../../../public/noua-restaurant/noua-restaurant-20.jpg"
import nouaRestaurant2 from "../../../../../../../public/noua-restaurant/noua-restaurant-28.jpeg"
import nouaRestaurant3 from "../../../../../../../public/noua-restaurant/noua-restaurant-29.jpeg"

import nouaRestaurant4 from "../../../../../../../public/noua-restaurant/noua-restaurant-2.jpeg"
import nouaRestaurant5 from "../../../../../../../public/noua-restaurant/noua-restaurant-3.jpeg"
import nouaRestaurant6 from "../../../../../../../public/noua-restaurant/noua-restaurant-4.jpeg"

import nouaRestaurant7 from "../../../../../../../public/noua-restaurant/noua-restaurant-5.jpeg"
import nouaRestaurant8 from "../../../../../../../public/noua-restaurant/noua-restaurant-7.jpeg"
import nouaRestaurant9 from "../../../../../../../public/noua-restaurant/noua-restaurant-8.jpeg"

import nouaRestaurant10 from "../../../../../../../public/noua-restaurant/noua-restaurant-9.jpeg"
import nouaRestaurant11 from "../../../../../../../public/noua-restaurant/noua-restaurant-10.jpeg"
import nouaRestaurant12 from "../../../../../../../public/noua-restaurant/noua-restaurant-11.jpeg"

import nouaRestaurant13 from "../../../../../../../public/noua-restaurant/noua-restaurant-13.jpeg"
import nouaRestaurant14 from "../../../../../../../public/noua-restaurant/noua-restaurant-15.jpeg"
import nouaRestaurant15 from "../../../../../../../public/noua-restaurant/noua-restaurant-16.jpeg"

import nouaRestaurant16 from "../../../../../../../public/noua-restaurant/noua-restaurant-17.jpeg"
import nouaRestaurant17 from "../../../../../../../public/noua-restaurant/noua-restaurant-18.jpeg"
import nouaRestaurant18 from "../../../../../../../public/noua-restaurant/noua-restaurant-19.jpeg"

const article = getArticle(31);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant1} alt="Exquisite Culinary Symphony: A Gastronomic Journey at Noua Bucatarie Romaneasca Restaurant" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Noua Bucatarie Romaneasca (New Romanian Cuisine) Restaurant is the place in Bucharest that you must visit if you want to discover Romanian food in a modern, fine dining interpretation. With respect for the ingredients used and service worthy of Michelin stars, all at a fair price.</p>
        <p>Noua is the most appreciated restaurant by us, not only in Bucharest but in all the places we have visited so far.</p>
        <p>The first time we visited Noua Bucatarie Romaneasca was in April 2022. You can read about that experience in <Link prefetch={false} href="/noua-bucatarie-romaneasca" title="Noua - A restaurant at another level in Bucharest" className="text-blue-600 underline hover:text-blue-800">the article</Link> we dedicated to it. We were pleasantly surprised to discover that they not only maintained the quality of the food and service but actually improved it. Moreover, throughout this period, we followed them on social networks, and that’s how we know they actively participated in competitions, won prizes, organized or were invited to various culinary events, both in Romania and abroad, engaging in valuable exchanges with other recognized chefs.</p>
        <p>At the end of 2022, the ‘younger sibling’ was opened: <Link prefetch={false} href="/noua-bar-bucharest" title="Noua B.A.R. - one of our favorite restaurants in Bucharest and why it impressed us" className="text-blue-600 underline hover:text-blue-800">Noua B.A.R.</Link> (abbreviation for Bucătărie Aproape Românească which translates to Almost Romanian Cuisine). If you prefer an à la carte dining experience instead of a fine dining one with a tasting menu, then Noua B.A.R. is a better choice.</p>
        <p>But enough with the introduction, let’s dive into the topic of interest: dinner at Noua. The menu is constantly changing in relation to the seasonality of the ingredients. For the most up-to-date menu, please refer to their <LinkExternal link="https://nouarestaurant.ro/" title="Link to Noua Restaurant" text="website" />. Our visit was in November 2023, and the tasting menu, which I will detail below, was priced at 320 RON (approx. 64 EUR) per person. Additionally, there is an option to pair the meal with wines or juices for an additional cost of 275 RON (approx. 55 EUR) per person.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant2} alt="Noua Bucatarie Romaneasca Restaurant - Inside" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant3} alt="Noua Bucatarie Romaneasca Restaurant - Wine" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <p>​After being seated (this time we opted for a table upstairs to have a view of the open kitchen), we were given an explanation of the menu and asked about any food allergies or intolerances we might have. Following that, towels infused with various aromas (such as chamomile) were brought for us to wipe our hands with.</p>
        <p>The dinner commenced with seven mini-courses (or amuse-bouches), with six representing the major geographical regions of the country. Each course was presented on a puzzle piece that, when assembled, formed the map of Romania. The seventh puzzle piece was introduced, symbolizing the dish from Bessarabia.</p>
        <p>The seven amuse-bouche were as follows:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Ravioli with turnip, goat cheese, and lovage - we could discern multiple flavors without one overpowering the others. The turnip was distinct and had an extraordinary taste, while the lovage added a surprising aroma to the combination.</li>
          <li>Crispy wheel with three textures of tomatoes - this crunchy wheel is filled with sweet and sour tomato sauce, and I believe I could easily eat a dozen.</li>
          <li>Potato basket with pickles - very good, slightly salty.</li>
          <li>Fried polenta in the shape of a mushroom filled with smoked cheese, a layer of beef, and seasonal truffles. Yum!</li>
          <li>Well-known “mici” placed on a grapevine skewer, caught between two fan-fried potatoes with homemade mustard.</li>
          <li>A little grape leaf roll filled with vegetables and pearl barley topped with lightly spicy sour cream with horseradish and a quarter of pickled barberry.</li>
          <li>Chicken-skin sandwich with pickled cabbage and kale. The chicken skin was so crispy and delicious. Unbelievable!</li>
        </ul>
        <p>After successfully completing the puzzle, the appetizer followed, featuring polenta with a crust tasting of fried bacon and topped with sour cream, all dusted with cheese. I believe that polenta with cheese and sour cream is one of the favorite dishes among Romanians, as well as a must-try for foreign tourists.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant4} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant5} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant6} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant7} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant8} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant9} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant10} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant11} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant12} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>I’ll pause to note that at the beginning of the dinner, we were asked if we wanted Oscietra caviar added to one of the dishes for the sum of 50 RON/person (approx. 10 EUR). We thought it would be added to the polenta with cheese and sour cream, as stated in their menu. However, it was added to the next dish - a grilled eggplant in a rectangular shape with grilled roasted pepper sauce (slightly spicy and smoky) and a basil leaf on top. This dish had a very strong eggplant aroma, and since eggplant is generally more astringent, we didn’t feel the caviar at all. It was as if it wasn’t there.</p>
        <p>However, after receiving the next dish, I completely forgot about the caviar: corvina aged for 7 days (the waiter explained that it is a fish mainly found in the Mediterranean Sea, but also present in the Black Sea) with a spinach and sorrel-based sauce and a bouquet of salads. The fish was cooked to perfection, the skin was crispy, and the interior melted in the mouth. It was appropriately seasoned, and the leaves were excellent. I had tasted this dish on another occasion and found it slightly different. Perhaps because it didn’t follow the eggplant. The second time, it seemed to us that the sauce had a subtle vanilla flavor that perfectly complemented the respective combination.</p>
        <p>Next came the autumn carrot from <LinkExternal link="https://gradinacorbilor.ro" title="Link to Grădina Corbilor" text="Grădina Corbilor" />, in other words, a glazed carrot with carrot reduction, carrot flowers, carrot leaves, and crispy pearl barley. This dish was almost like a dessert, slightly sweet, fragrant, soft, yet crunchy. It’s spectacular what can be done with a carrot, even with parts of the carrot that we generally do not consume, such as the leaves.</p>
        <p>We then received the lamb, tender and juicy, accompanied by mushrooms and two sauces that beautifully complemented the plate.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant13} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant14} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 11" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant15} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 12" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Next came the house’s bread and butter service. The bread is made from scratch, freshly taken out of the oven, crisp on the outside, fluffy on the inside, lightly salted, with a subtle thyme aroma. The butter melts upon contact, creating a dish as simple as it is delicious.</p>
        <p>The pre-dessert is inspired by the childhood memories of the chef (Alex Petricean, of course) who, when in need of comfort, would receive a cup of milk with clotted cream or a cup of mint tea. Therefore, on the plate, we have the flavors of milk with mint and melon. A delight!</p>
        <p>The first of the two desserts of the evening consisted of a cup of plum “palinca” (brandy) ice cream covered with a cream made from plum marmalade and sea buckthorn chips. Very good and aromatic.</p>
        <p>As for the second and final dessert of the 16 courses, it featured variations of berries: a raspberry filled with rose jam, a sea buckthorn praline with blueberries and cranberries, and a chamomile biscuit with strawberries, arranged on an edible ‘ground,’ which further conveyed the idea that we were in a forest picking berries.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant16} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 13" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant17} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 14" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaRestaurant18} alt="Noua Bucatarie Romaneasca Restaurant - Dinner 15" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>In conclusion, our dining experience at Noua Bucatarie Romaneasca transcended the ordinary, offering a symphony of flavors that showcased the culinary mastery and creativity of Chef Alex Petricean and his team. From the inventive amuse-bouche that playfully mapped the regions of Romania to the unexpected twists in every course, the evening was a journey through both familiar and uncharted gastronomic territories. The thoughtful service, the inviting ambiance, and the meticulous attention to detail in every dish further elevated our experience.</p>
        <p>In extending our heartfelt wishes to the Noua team for continued success, health, and culinary innovation, we also express our anticipation for many more visits to this remarkable establishment. Noua Bucatarie Romaneasca has secured a cherished place in our gastronomic journey, and we encourage all food enthusiasts to embark on their own exploration of this culinary gem in the heart of Bucharest.</p>
      </main>
    </div>
  );
}
