import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import santoriniP1 from "../../../../../../../public/santorini/p1_gzkojs.jpg";
import santoriniP3 from "../../../../../../../public/santorini/p3_xsd3ym.jpg";
import santoriniP2 from "../../../../../../../public/santorini/p2_ycf3rj.jpg";
import santoriniSouvlaki from "../../../../../../../public/santorini/souvlaki_wvnwbi.jpg";
import santoriniG3 from "../../../../../../../public/santorini/g3_i0lfkz.jpg";
import santoriniG2 from "../../../../../../../public/santorini/g2_tv0gln.jpg";
import santoriniG1 from "../../../../../../../public/santorini/g1_oggmoo.jpg";
import santoriniM2 from "../../../../../../../public/santorini/m2_cgoz3y.jpg";
import santoriniEat2 from "../../../../../../../public/santorini/santo-eat2_qr2pcf.jpg";
import santoriniKaramolegos from "../../../../../../../public/santorini/Karamolegos_t1pqza.jpg";
import santoriniE2 from "../../../../../../../public/santorini/e2-IMG_20210708_161422_uf6pbd.jpeg";
import santoriniM1 from "../../../../../../../public/santorini/m1_exoclg.jpg";
import santoriniEat from "../../../../../../../public/santorini/santo-eat_gvsnrq.jpg";

const article = getArticle(13);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniE2} alt="What and where to eat in Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>I love Greek food and I have to admit that it is one of my favorite cuisines with its Mediterranean influences. I really love the flavorings and the fresh herbs they use like oregano, mint, and dill. So it goes without saying that every time I am in Greece I enjoy delicious dishes regardless of quantities or calories.</p>
        <p>There is nothing more pleasant than spending quality time with your loved ones and sharing several simple and tasty dishes such as Greek salad, Kalamata olives, pita with tzatziki, eggplant salad, vegetable frittes, and fried squid or french fries with feta cheese.</p>
        <p>Santorini is especially known for the sweet and fragrant cherry tomatoes, for fresh fish and seafood, for fava which is a type of cereal, and for the wine.</p>
        <p>Santorinian salad is slightly different from typical Greek salad in that it uses cherry tomatoes, capers, and pickled caper leaves, in addition to the rest of the typical ingredients: cucumbers, bell peppers, onions, olives, feta cheese, olive oil, and oregano. Of course with small variations from one household to another.</p>
        <p>Fava is made from split peas (fava beans) and it is a creamy dish that goes very well spread on Greek pita or with seafood such as octopus or grilled squid.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG1} alt="Santorini - Fava" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG2} alt="Santorini - Grilled squid" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG3} alt="Santorini - Mediterranean food" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Another absolutely delicious dish that I fell in love with is the tomato fritters. The more ripe, sweeter, and more flavorful the tomatoes, the tastier the fritters will be. Add a finely chopped onion, herbs and flour, then fry in oil until browned and serve with yogurt and mint sauce. An explosion of flavors! I ate these fritters every day during my vacation in Santorini, and I cooked them at home as well.</p>
        <p>Santorini is also known for its wines. Because of the scorching sunlight and the powerful winds in the Cyclades, the vines on the island have a round shape, like a basket lying on the ground, that protects the grapes. You can see them all over the island. Typical red wines are made from Mavrotragano and Mandilaria grapes, while the white ones are made from Assyrtiko grapes, as well as Aidani and Athiri grapes. Santorini is also renowned for a dessert wine made from sun-dried grapes - Vinsanto. There are lots of wineries on the island that offer tasting menus. You can even opt for a wine tasting tour on the island that includes visiting multiple micro-wineries and finding out more about how the wine is made on this island. Our favorite wine was by far Assyrtiko, but the Vinsanto was also really memorable.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniKaramolegos} alt="Santorini - Artemis Karamolegos Winery" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>If wine isn’t your cup of tea, maybe you’ll prefer Greek beer. On the island, there’s a <LinkExternal link="https://www.santorinibrewingcompany.gr/" title="Link to Santorini microbrewery" text="microbrewery" /> since 2011 making different types of unfiltered beer. You should give it a taste, maybe next to a delicious souflaki.</p>
        <p>During our eight-day holiday on the Greek island, we ate in some fabulous restaurants. Not in the luxurious ones in Oia on the edge of the caldera facing the sunset where you mostly pay for the view. But in ones with amazing food.</p>
        <p>Our dearest discovery was <LinkExternal link="https://www.artemiskaramolegos-winery.com/en/index.php" title="Link to Santorini Artemis Karamolegos Winery" text="Artemis Karamolegos Winery" /> and its restaurant Aroma Avlis in Exo Gonia. First, we went there to eat, and because the food was so good and the service was irreproachable, we decided to book a cooking class. It was the best experience ever. We learned how to make an authentic Santorinian salad, and got to taste as many cherry tomatoes as we wanted.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniM1} alt="Santorini - Greek salad" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniM2} alt="Santorini - pork fillet in Vinsanto wine sauce" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniG3} alt="Santorini - desert" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>We also made the most velvety fava, the traditional tomato fritters, and as a main dish, we cooked a pork fillet in Vinsanto wine sauce. We also received a glass of wine during the cooking class, and after the cooking class we sat down in the restaurant where we ate what we cooked. On top of all that we received a bottle of wine, a dessert, and of course, a glass of Vinsanto wine. It was perfect and I highly recommend it. On their <LinkExternal link="https://www.artemiskaramolegos-winery.com/en/winery-santorini/8/" title="Link to Artemis Karamolegos" text="website" />, you can find more information about what they offer.</p>
        <p>Another excellent restaurant, situated in Akrotiri, was <LinkExternal link="https://mistelirestaurant.com/" title="Link to Santorini Misteli" text="Misteli" />. This is a family-run taverna, and they’re using bio-local ingredients to cook delicious traditional Greek food. We ordered multiple starters and salads from the menu and had a feast. Everything was flavorsome and we had a great time.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniP1} alt="Santorini - Greek salad" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniP2} alt="Santorini - Greek yogourt" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniP3} alt="Santorini - vegetable fritters" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>In Oia, you can find delicious food at <LinkExternal link="https://melitinioia.com/" title="Link to Santorini Melitini" text="Melitini" />. This unpretentious restaurant in Oia serves a variety of spreads, salads, cheeses, grilled meats, and seafood that can be shared. My favorite dish from them was the vegetable fritters. You can also order the food as a takeaway and eat it in some other place if they don’t have free tables.</p>
        <p>Another nice, unpretentious place in Oia with good Greek food is <LinkExternal link="https://pitogyros.com/" title="Link to Santorini Pitogyros Grill House" text="Pitogyros Grill House" />. They serve gyros, souflaki, kebab, and handmade sausages. You can grab a pita wrap and eat it on the street, but they also have some tables. The souflaki was super tasty.</p>
        <p>A popular spot to grab a souvlaki in Thira is Lucky’s Souvlakis. This small place maybe does not look that great, but the souvlaki is really good. If you’re in Thira, you have to try it.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSouvlaki} alt="Santorini - Lucky’s Souvlakis" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Wandering the streets of Thira, we stopped for ice cream at <LinkExternal link="https://5senses.com.gr/menu" title="Link to 5 Senses Grab n’ Go" text="5 Senses Grab n’ Go" />. We basically had creamy ice cream maybe made from yogurt or something like that on which we added fresh strawberries. This immediately transported me to a childhood memory when my grandmother gave me strawberries freshly picked up with homemade cream. They were divine, and so was the ice cream from 5 senses.</p>
        <p>These are our recommendations for phenomenally good food in Santorini. If you go to Santorini, I hope you’ll try at least some of them and tell me what you thought. I always enjoy talking about food.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEat2} alt="Santorini Sunsets Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEat} alt="Santorini Sunsets Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
