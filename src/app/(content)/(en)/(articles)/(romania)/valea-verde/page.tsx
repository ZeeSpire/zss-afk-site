import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import valeaVerde from "../../../../../../../public/valea-verde-2/valea-verde-2024.jpeg"
import valeaVerde3 from "../../../../../../../public/valea-verde-2/valea-verde-3.jpeg"
import valeaVerde1 from "../../../../../../../public/valea-verde-2/valea-verde-1.jpeg"
import valeaVerde2 from "../../../../../../../public/valea-verde-2/valea-verde-2.jpeg"
import valeaVerde4 from "../../../../../../../public/valea-verde-2/valea-verde-4.jpeg"
import valeaVerde5 from "../../../../../../../public/valea-verde-2/valea-verde-5.jpeg"
import valeaVerde11 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-1-1.jpeg"
import valeaVerde12 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-2-2.jpeg"
import valeaVerde13 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-3-3.jpeg"
import valeaVerde14 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-4-4.jpeg"
import valeaVerde15 from "../../../../../../../public/valea-verde-2/dinner-1-valea-verde-5-5.jpeg"
import valeaVerdeRevelion from "../../../../../../../public/valea-verde-2/valea-verde-revelion.jpeg"

const article = getArticle(32);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde} alt="The full New Year's Eve Experience at Valea Verde Retreat: from timeless Transylvania to the reality check" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>For the end of the year 2023, and especially for the New Year’s Eve celebration, we decided to leave home and do something special. We found two offers that caught our attention, and among the two, we chose to go to Valea Verde Retreat.</p>
        <p>We had been to Valea Verde Retreat about a year ago to participate in a truffle hunting activity. I detailed the entire experience in <Link prefetch={false} href="/valea-verde-a-successful-story-of-reviving-a-forgotten-transylvanian-village" title="Valea Verde - a successful story of reviving a forgotten Transylvanian village" className="text-blue-600 underline hover:text-blue-800">this article</Link>.</p>
        <p>The New Year’s Eve package offered by Valea Verde included 4 nights of accommodation with breakfast, lunch, and dinner, unlimited access to the SPA area, a horse-drawn carriage ride, violin concert, carol concert, and New Year’s Eve party with a campfire, open bar, midnight champagne, and a music concert.</p>
        <p>Even though the offer was much more expensive than the other offer we had considered, we were convinced by the special supplements that were not included in the cheaper offer, such as the violin concert, SPA access, and what we thought would be a children’s choir singing carols. However, things didn’t turn out that way at all.</p>
        <h2>Activities and what you can do or visit</h2>
        <p>Valea Verde Retreat is located in the village of Cund, Bahnea commune, Mureș county.</p>
        <p>In the area, there aren’t too many things to visit. The fortified church in the village is left in ruins. The Cheese Factory (Manufactura de Brânză) was closed, and on their <LinkExternal link="https://manufacturadebranza.ro/" title="Link to The Cheese Factory (Manufactura de Brânză)" text="website" />, it says that if you want to participate in a tasting, the minimum group size is 10 people. We wanted to take a hike on the marked trail from the Valea Verde restaurant, but we turned back because we were attacked by dogs.</p>
        <p>We visited the Valea Verde observatory last time, and the SPA cabin was inaccessible due to the muddy road. So, one of the reasons that convinced us to choose Valea Verde couldn’t be honored, without offering us anything in return (at least an apology).</p>
        <p>However, still included in the offer, we had a horse-drawn carriage ride, which we scheduled as soon as we arrived and which we enjoyed very much.</p>
        <p>Târgu-Mureș is approximately 45 kilometers away (50 minutes). We spent half a day walking around this town. We visited the Zoo, the Târgu-Mureș Fortress, and walked through Trandafirilor Square, admiring the beautiful buildings between the Ascension Cathedral and the Annunciation Cathedral.</p>
        <p>On another day, we took a trip to Mediaș (33 km / 45 minutes) where we walked around and admired the historic center of the city.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde3} alt="Horses at Valea Verde" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde1} alt="Aerial foto of Targu Mures" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde2} alt="Medias from above" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Accommodation</h2>
        <p>Last year we stayed in the Reussdorfer Hoff house, but it was quite far from the restaurant, and the room needed some repairs. This year, we were lucky to find the White Room available in Casa Cal, a renovated (or maybe even rebuilt) house in 2022, which was the reason we chose it. We found the room to be spacious and clean. The bathroom as well. Even though outside temperatures dropped below 0 degrees Celsius, the room was very warm. The house is also closer to the restaurant which was a plus.</p>
        <p>As drawbacks, I would mention the bed, which was quite uncomfortable because the mattress was too hard, and the pillow too soft, but I think this also depends on individual preferences.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde4} alt="Valea Verde in the yard" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Food</h2>
        <h3>Breakfast</h3>
        <p>Breakfast was similar to last year’s, except that this time the eggs were not prepared on the spot according to each guest’s preferences. There were only two options available: plain scrambled eggs and sunny side-up eggs, both of which were ready-made.</p>
        <p>Other than that, we found breakfast to be quite rich in options, and our favorites were the cheeses from Manufactura de Brânză (local cheese factory) with various flavors, including caraway or truffle. We also enjoyed the fruit salad topped with honey.</p>
        <h3>Lunch</h3>
        <p>For lunch, we had an option of soup, 1-2 main courses, 1-2 side dishes, salad, and sauces.</p>
        <p>For example, one day we had the following options:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>potato soup with bacon, sour cream, and tarragon;</li>
          <li>spaghetti with tomato sauce;</li>
          <li>German sausages (in Romania, the sausages are better, I swear);</li>
          <li>rice;</li>
          <li>vegetable and sausage stew;</li>
          <li>bread, mustard, salad, grated cheese.</li>
        </ul>
        <p>While lunch didn’t meet our expectations, there were limited alternative dining options nearby. However, we still found something to our liking each day. For example, the potato soup with tarragon was good.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde5} alt="Breakfast at Valea Verde" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>Dinner</h3>
        <p>Dinner, on the other hand, was different. The dishes were exceptional, as was the presentation, and you could feel the skill of the chef - Jonas Schäfer.</p>
        <p>For example, the menu on the evening of December 30th was as follows:</p>
        <div className="text-center mb-6">
          <i>Amuse bouche</i><br />
          <span>Quail egg with fried bacon, truffles, and chives</span><br /><br />
          <i>Starter</i><br />
          <span>Quinoa salad</span><br /><br />
          <i>Soup</i><br />
          <span>Pea cream soup</span><br /><br />
          <i>Main course</i><br />
          <span>Beef bourguignon</span><br /><br />
          <i>Dessert</i><br />
          <span>Sour cherry sorbet</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde11} alt="Valea Verde - Quail egg with fried bacon, truffles, and chives" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde12} alt="Valea Verde - Quinoa salad" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde13} alt="Valea Verde - Pea cream soup" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde14} alt="Valea Verde - Beef bourguignon" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerde15} alt="Valea Verde - Sour cherry sorbet" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>All the dishes were excellent from start to finish. The quinoa salad? Full of flavors, definitely not just a simple salad. The pea cream soup? Tasty, slightly spicy, with a sprig of fried dill for added flavor and texture. The sour cherry sorbet? Tart and refreshing, but perfect due to the mint used both in composition and as decoration.</p>
        <p>On January 1st, we enjoyed a fish-based dinner. The menu sounded something like this:</p>
        <div className="text-center mb-6">
          <i>Amuse bouche</i><br />
          <span>Potato dumpling</span><br /><br />
          <i>Starter</i><br />
          <span>Marinated fish crostini</span><br /><br />
          <i>Soup</i><br />
          <span>Fish cream soup</span><br /><br />
          <i>Main course</i><br />
          <span>Paella</span><br /><br />
          <i>Dessert</i><br />
          <span>Carrot cake</span>
        </div>
        <p>The fish cream soup was a very interestingly unusual dish, something I hadn’t tasted before. You could taste the fish and tomatoes, and the soup was garnished with a cheese crouton. It reminded me of Mediterranean cuisine.</p>
        <p>The paella was prepared by Jonas Schäfer’s friend and author of the book Larger Than Life, Roland Birr. All the guests gathered in the courtyard around the fire and witnessed what we could call a culinary show. The atmosphere was very pleasant and relaxed, although we came out a bit smoky. Unfortunately, the result didn’t leave a very pleasant taste.</p>
        <h2>New Year’s Eve Party</h2>
        <p>The start of the dinner on New Year’s Eve was announced at 7:00 p.m. to some guests, at 7:30 p.m. to others, but the actual service started around 8:00 p.m.</p>
        <p>The offer stated that we would attend a carol concert, which did not happen. Neither did the violin concert on any of the evenings.</p>
        <p>To make matters worse, the dinner wasn’t an open bar. The waiters said it was our fault for not understanding from the offer that the open bar was only at 12:00 a.m., but that they would do us a favor and there would be an open bar starting at 11:00 p.m. This “open bar” turned out to be a few bottles (a limited number and an even more limited selection) that appeared on one of the tables after 12:30 a.m. We are not heavy alcohol consumers, but I can imagine how frustrating it was for other guests who ordered what they wanted from the alcohol menu, only to find out later that they had to pay for it.</p>
        <p>And speaking of alcohol, this year’s offer was rather limited. There were dozens of wine bottles on the menu, but when you finally decided on one, you were told it was out of stock. It wouldn’t have been a problem if it happened just once, but in our case, it happened 4 out of 5 times.</p>
        <p>The food, on the other hand, lived up to expectations.</p>
        <p>The menu on the evening of December 31st sounded something like this:</p>
        <div className="text-center mb-6">
          <i>Amuse bouche</i><br />
          <span>Blini with fish roe salad and lentil caviar</span><br /><br />
          <i>1st Starter</i><br />
          <span>Crostini with chicken pate</span><br /><br />
          <i>2nd Starter</i><br />
          <span>Goat cheese mousse with polenta and cherry tomatoes</span><br /><br />
          <i>Soup</i><br />
          <span>Celery soup with pear</span><br /><br />
          <i>Main course</i><br />
          <span>Slow-braised pork neck in red wine sauce with pearl barley and cherry tomatoes</span><br /><br />
          <i>Dessert</i><br />
          <span>Panna cotta with espresso infusion and marinated berries</span><br /><br />
          <i>Cheese</i><br />
          <span>Baked local sheep cheese with honey and truffle</span>
        </div>
        <p>The dinner started with this blini with fish roe salad and lentil caviar, but the way it was described in the menu as “blini with caviar salad” confused me, making me believe that I would see black caviar on the plate. Because there were many such writing mistakes, I began to wonder if they were intentional to deceive the customer.</p>
        <p>Of all the dishes at dinner, I particularly liked the goat cheese polenta topped with a baked cherry tomato, perfectly cooked Mangalitsa pork neck, and the superb dessert I had tasted a year ago as well.</p>
        <p>After finishing all the dishes (there was a lot of food), we enjoyed the atmosphere created by the former contestant of The Voice Romania, originally from Târgu-Mureș - Vizi Imre. The concert was really special, and Vizi Imre is a full-fledged artist.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={valeaVerdeRevelion} alt="Valea Verde - New Year’s Eve Party" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>At midnight, we went out into the courtyard, where we gathered around the campfire and clinked glasses of sparkling wine. After congratulating each other and admiring the starry sky, we headed back to our room, but the party continued until around 3 a.m.</p>
        <p>The purchased offer stated that on January 1st, we would have a “sparkling brunch.” This name suggests a meal served a little later, somewhere between breakfast and lunch, and the dishes will be equally suitable for a late breakfast or a lighter lunch. Also, we were sure that this brunch would be accompanied by alcoholic beverages, especially sparkling wine or even champagne because that’s where the word “sparkling” comes from. Well, guess what, what was this “sparkling brunch” all about?</p>
        <p>You guessed it? Well, “sparkling brunch” turned out to be the same breakfast we had every day, the same dishes arranged in the same way on the same table, with the mention that they had been left for several hours in the same place, so lunch was no longer served. Sparkling wine? Nowhere to be found.</p>
        <h2>Conclusion</h2>
        <p>In conclusion, I would like to mention that the main disappointment came from the fact that the situation was not treated with the rigor and seriousness I expected. I would have preferred the offer to be written with as few embellishments as possible. Period.</p>
        <p>However, we are left with pleasant memories, and it will certainly be a New Year’s Eve that we will remember fondly.</p>
      </main>
    </div>
  );
}
