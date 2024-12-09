import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";

import localFood from "../../../../../../../public/comfort-food/0-local-food.jpg";
import bacaniaVeche1 from "../../../../../../../public/comfort-food/bacania-veche-1.jpg";
import bacaniaVeche2 from "../../../../../../../public/comfort-food/bacania-veche-2.jpg";
import bacaniaVeche3 from "../../../../../../../public/comfort-food/bacania-veche-3.jpg";
import balls1 from "../../../../../../../public/comfort-food/balls-1.jpg";
import balls2 from "../../../../../../../public/comfort-food/balls-2.jpg";
import balls3 from "../../../../../../../public/comfort-food/balls-3.jpg";
import bucatariaLocalFood1 from "../../../../../../../public/comfort-food/bucataria-local-food-1.jpg";
import bucatariaLocalFood2 from "../../../../../../../public/comfort-food/bucataria-local-food-2.jpg";
import bucatariaLocalFood3 from "../../../../../../../public/comfort-food/bucataria-local-food-3.jpg";
import dumicat1 from "../../../../../../../public/comfort-food/dumicat-1.jpg";
import dumicat2 from "../../../../../../../public/comfort-food/dumicat-2.jpg";
import dumicat3 from "../../../../../../../public/comfort-food/dumicat-3.jpg";
import mosafir1 from "../../../../../../../public/comfort-food/mosafir-1.jpg";
import mosafir2 from "../../../../../../../public/comfort-food/mosafir-2.jpg";
import mosafir3 from "../../../../../../../public/comfort-food/mosafir-3.jpg";

const article = getArticle(35);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={localFood} alt="Bucharest’s Best Comfort Food Restaurants" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>The term “comfort food” is well-known to most of us, bringing to mind those familiar and indulgent dishes we turn to during challenging times, or simply when we want to be transported back to childhood.</p>
        <p>While this term emerged in the United States around the mid-20th century, every culture has long had its own version of “comfort food,” rooted in tradition and memory, long before it was ever popularized.</p>
        <p>In Romania, when we talk about “comfort food,” we think of mâncare de suflet (food for the soul) or mâncare ca la mama acasă (food cooked by one’s mom) — traditional dishes that we enjoy during holidays, family gatherings, or the meals our mothers or grandmothers lovingly prepared for us in our childhood. These might include ciorbă (sour soup), chicken soup, sarmale (stuffed cabbage rolls), mămăligă (polenta), fried potatoes with cheese, meatballs in tomato sauce, liver with mashed potatoes, macaroni pudding with cheese, papanași (fried doughnuts with sour cream and jam), cozonac (sweet bread), rice pudding, and many more.</p>
        <p>Food that reminds us of “home” evokes feelings of nostalgia, joy, and warmth. For each person, this may mean a different dish or flavor. I believe it’s a particularly difficult challenge for any restaurant to truly transport us back to our childhood or serve authentic “comfort food.” However, we’ve found a few restaurants in Bucharest that come remarkably close to capturing that essence.</p>
        <h2>Balls</h2>
        <p>We’ve been going to Balls for years, ever since they were located on Calea Dorobanți. In the meantime, they also opened a location on Bulevardul Regina Elisabeta, near Cișmigiu Park. Now, they’ve settled at 114 Bulevardul Dacia, and we hope they won’t move again.</p>
        <p>At their new address, Balls offers many more tables compared to their previous locations. This means we can visit without a reservation and still have a good chance of finding a free table. The interior is a charming blend of a canteen and an aunt’s ’80s living room, creating a wonderfully relaxed atmosphere.</p>
        <p>On the menu, you’ll find a very comforting sour vegetable soup, which pairs perfectly with sour cream and bread.</p>
        <p>We also love their eggplant salad as an appetizer—so much so that I would dare to say it’s the best eggplant salad I’ve ever had at a restaurant.</p>
        <p>If you’re in search of “comfort food,” you must try the meatballs served with mashed potatoes or spaghetti and tomato sauce. I always think of the scene from Lady and the Tramp when the Tramp nudges a meatball toward Lady. That’s my favorite dish at Balls.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={balls1} alt="Food from Balls 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={balls2} alt="Food from Balls 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={balls3} alt="Food from Balls 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Bacania Veche</h2>
        <p>Bacania Veche is a charming restaurant that opened in the summer of 2021 at 25 Dacia Boulevard. Inside, you’ll find several inviting rooms on both the ground floor and upstairs, creating an intimate and pleasant atmosphere. Behind the restaurant, there is a beautiful garden featuring a magnificent magnolia tree at its center.</p>
        <p>The vision and heart behind Bacania Veche is Marius Tudosiei, a well-known figure in Romania from TV shows like Sănătatea în Bucate and Chefi fără limite.</p>
        <p>Passionate about gastronomy, Marius Tudosiei initially opened Pravalia Bacania Veche in 2010 in a house on Barbu Văcărescu 49. We also visited this shop, where we purchased jams, zacusca (a vegetable spread), herbal teas, and other delightful products, all sourced from small Romanian producers. Many of the jars filled with these treats can also be found in the restaurant at 25 Dacia. The Bacania Veche team also handles catering and various events, has an online store, and occasionally offers soulfully prepared meals for delivery.</p>
        <p>We always return to Bacania Veche for the stuffed eggs and the duck leg served with bulz (a type of polenta) and black truffle sauce, which are staples on the main menu. Each day, they post additional dishes on Instagram, cleverly dubbed “Derapajele zilei” (Daily Derailments). On May 1st, they fired up the grills, and we enjoyed grilled mici (grilled sausages), skewers, and various meats, accompanied by crispy potatoes fried in duck fat and a refreshing salad of fresh or pickled cabbage, depending on your preference. For December 1st, Romania’s national day, they prepared traditional dishes for this historic celebration, cooking them in a cauldron: chicken borscht with homemade noodles, beans with smoked pork knuckle, and “pomana porcului,” a traditional Romanian dish meaning “the feast of the pig.” And let’s not forget the sarmale (cabbage rolls) and salată de Boeuf, which are essential on Romanian festive tables.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bacaniaVeche1} alt="Food from Bacania Veche 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bacaniaVeche2} alt="Food from Bacania Veche 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bacaniaVeche3} alt="Food from Bacania Veche 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Dumicat</h2>
        <p>On December 1, 2023, at Str. George Vraca, No. 4, Dumicat opened, a place that can be considered a continuation of the Paninaro project. At the helm of this new spot is Melinda Teohari, the wife of well-known comedian Claudiu Teohari (Teo).</p>
        <p>We used to frequent Paninaro quite often, and we especially liked their omelet sandwich and the famous Philly Cheese. So, we were surprised to hear that it was closing, but we were thrilled when we discovered that Dumicat would take its place.</p>
        <p>Dumicat is a small place with few tables, but it is extremely welcoming and offers a menu that perfectly fits the “comfort food” category. If you want to enjoy their dishes, it is recommended to make a reservation.</p>
        <p>For starters, they offer sourdough bread with thick, almost creamy sour cream, along with spreads like zacusca, beef and pork pâté, or eggplant salad, all presented in a sophisticated manner. The breaded pickles with yogurt mint sauce are a must-try, along with the turkey testicles in panko crust.</p>
        <p>Among the main dishes, you’ll find “mâncărușa in pita” (an omelet filled with cheese in a fluffy bun), fish cakes with yogurt, mashed potatoes with pork cheeks, and “piciocii” like on Valea Izei, a true example of comfort food: fried potatoes with cheese, marinara sauce, sausages, pickles, and two fried eggs.</p>
        <p>For dessert, the French toast with sour cream and seasonal fruit jam, as well as the milk pudding with sour cherry jam, are the perfect way to end the meal with a touch of culinary indulgence. Both are delicious and truly representative of the “comfort food” concept.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dumicat2} alt="Food from Dumicat 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dumicat1} alt="Dumicat restaurant" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={dumicat3} alt="Food from Dumicat 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Bucataria Local Food</h2>
        <p>We’ve been going to Bucataria Local Food since 2021, the year they opened, back when it was a cozy neighborhood restaurant where you could walk in without a reservation and feel right at home. Since then, Bucataria Local Food has become a star among Bucharest’s restaurants, and the chances of getting a table without a reservation are now slim. The essence of a “family-run business” has somewhat faded, especially for those who remember how it was in the beginning, but the taste and quality of the dishes have remained the same, still reminding us of home-cooked meals and comfort food.</p>
        <p>Every week, Bucataria Local Food announces a few special dishes on Instagram. They always consider the seasonality of ingredients, so on a spring day, you might find nettle stew with fried eggs and polenta on the menu, while in autumn, you could enjoy a hearty bean soup. Each dish comes with a recommended wine pairing. Additionally, a few staple dishes remain on the menu, such as fried potatoes with Horezu cheese and fried eggs, mushroom stew with polenta (ciulama), a baguette with Plescoi sausage (a famous sausage from Buzău county), or A la Pariz – a sandwich with fried “parizer” (a type of sausage that’s considered affordable and nostalgic in Romania).</p>
        <p>We also love their desserts, and right now, I’m craving a portion of their papanasi with sour cream and blueberry jam.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bucatariaLocalFood1} alt="Food from Local Food 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bucatariaLocalFood2} alt="Bucataria Local Food restaurant" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={bucatariaLocalFood3} alt="Food from Local Food 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Mosafir</h2>
        <p>Mosafir Restaurant opened in the summer of 2024 at 48 Plantelor Street, in a heritage house dating back to the late 19th century, and is essentially the sibling of Bucătăria Local Food.</p>
        <p>“Musafir” (sometimes spelled “mosafir”) means “guest” and refers to someone visiting a home or invited to a social occasion. The word is commonly used in everyday language when talking about people who come over for a meal, to spend time together, or to stay briefly.</p>
        <p>Mosafir follows the same philosophy as Bucătăria Local Food. Every week, new seasonal dishes are added to the menu, featuring fresh ingredients, preferably sourced from local producers. Additionally, each dish comes with a recommended wine pairing. And yes, it’s well known that in Romania, when guests come over, there’s always something to drink.</p>
        <p>In search of comfort food? You can’t go wrong with any choice from the menu, but my top recommendation is the chicken thigh with mashed potatoes and peas, followed by a serving of fried semolina pudding with milk for dessert.</p>
         {/* image 9/16 (1000x1777) */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={mosafir1} alt="Food from Mosafir 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={mosafir2} alt="Drinks from Mosafir" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={mosafir3} alt="Food from Mosafir 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
      </main>
    </div>
  );
}
