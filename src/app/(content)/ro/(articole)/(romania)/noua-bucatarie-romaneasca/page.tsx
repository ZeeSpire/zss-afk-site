import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nouaDessert1 from "../../../../../../../public/noua/IMG_20220403_181411_vkkgjp_cx1esv.jpg";
import nouaDish1 from "../../../../../../../public/noua/IMG_20220403_174137_j0gphn.jpg";
import nouaPin1 from "../../../../../../../public/noua/noua1_twgnqd.jpg";
import nouaDessert2 from "../../../../../../../public/noua/IMG_20220403_182008_ekssc8_sfg1hg.jpg";
import nouaDessert3 from "../../../../../../../public/noua/IMG_20220403_183650_qapmxs_mx4spf.jpg";
import nouaDessert4 from "../../../../../../../public/noua/IMG_20220403_185014_upupvw_isplmt.jpg";
import nouaPin2 from "../../../../../../../public/noua/noua2_lxpcz6.jpg";
import nouaDish2 from "../../../../../../../public/noua/IMG_20220403_192253_sjhdpt_h4a7d9.jpg";
import nouaDish3 from "../../../../../../../public/noua/IMG_20220403_175024_epk9to.jpg";
import nouaDish4 from "../../../../../../../public/noua/IMG_20220403_183442_njue4d.jpg";
import nouaDish5 from "../../../../../../../public/noua/IMG_20220403_193916_ktjvok_p2bodb.jpg";
import nouaDish6 from "../../../../../../../public/noua/IMG_20220403_200049_i8otub_dvoohv.jpg";
import nouaDish7 from "../../../../../../../public/noua/IMG_20220403_195300_zr2git_mlir4r.jpg";
import nouaDish8 from "../../../../../../../public/noua/IMG_20220403_202530_h6itov_zsdvsl.jpg";
import nouaDish9 from "../../../../../../../public/noua/IMG_20220403_175612_ejpu1x_rcpmy1.jpg";
import nouaDish10 from "../../../../../../../public/noua/IMG_20220403_180210_pi4cb1_tujflk.jpg";
import nouaInterior from "../../../../../../../public/noua/noua-interior-2.jpg";

const article = getArticle(7);

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
        <p>I found out about Noua Restaurant through a simple story on Instagram. Just a photo, posted without too many words, made me want to know more about this restaurant. Eventually, a more comprehensive Google review sold me on <LinkExternal link="https://nouarestaurant.ro/" title="Link to Noua Restaurant" text="visiting the restaurant" />.</p>
        <p>Noua is located in a house in the old part of Bucharest, with a garden transformed into a terrace when the weather allows it, on Popa Nan Street, no. 7. It is advisable to go there with a reservation made and ask for details on the phone in case you have questions about their menu.</p>
        <p>The head chef is Alex Petricean, known by many Romanians as a former participant at MasterChef Romania, appointed by Gault & Millau guide Chef of the Year in 2018 while working at Maize Farm to Table Restaurant. Alex Petricean launched in May 2019 his own restaurant - Noua Romanian cuisine. Noua in short.</p>
        <p>Noua, in my humble opinion, brings a lot with Noma, the restaurant proclaimed to be the best in the world in 2021. Or at least I think that’s where the chef and his team aspire to. Noma is in Copenhagen, and the menu costs around 400 euros. At Noua, you have an experience like in a restaurant with Michelin stars, but for 190 RON (approx. 40 euros) for the menu for one person (in April 2022).</p>
        <p>At Noua, the menu is seasonal, it changes depending on what nature offers at different times of the year. The ingredients are mostly from local farms. The dishes highlight ingredients that can be overlooked, forgotten, or abandoned. Simple, seasonal ingredients are put in a different light so that they become truly spectacular.</p>
        <p>The interior is cozy with natural accents such as wood or wool. We stayed in a room on the ground floor, but next time we would like to stay upstairs where we understood that you can see directly into the kitchen.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish4} alt="Noua Restaurant - Inside the restaurant 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish1} alt="Noua Restaurant - Inside the restaurant 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaInterior} alt="Noua Restaurant - Inside the restaurant 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>The menu is a tasting menu consisting of twelve dishes: four amuse bouches, three appetizers, two main courses, a pre-dessert, and two desserts. You will not get up fully satiated, but there is just enough food. Each dish is presented by the waiter so that the dinner becomes an experience itself, an incredibly special one.</p>
        <p>I liked the fact that you are served with still or sparkling water from the house. Drinks have prices like in other middle to high restaurants in Bucharest, for example, a coffee costs 10 RON (2 euros), homemade lemonade with smoked hay, caramelized lemon, and chamomile costs 20 RON (4 euros), and a Zaganu beer at 500ml (about 16.91 oz) costs 18 RON (3.5 euros).</p>
        <p>At first, you are asked if you have food allergies or intolerances. We said we don’t have any of those, but we later realized that if we had been served with beef tartar, most likely we wouldn’t have been able to eat it. We don’t even eat sushi that contains raw fish. So, we practically don’t like to eat uncooked or semi-cooked meat, in other words, rare or medium-rare meat.</p>
        <p>I wish I could remember what the dishes contained, but I’ll try to say a few words about each dish just to give you an idea.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish3} alt="Noua Restaurant - Dish 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish9} alt="Noua Restaurant - Dish 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish10} alt="Noua Restaurant - Dish 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert1} alt="Noua Restaurant - Dish 4" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert2} alt="Noua Restaurant - Dish 5" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert3} alt="Noua Restaurant - Dish 6" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDessert4} alt="Noua Restaurant - Dish 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish2} alt="Noua Restaurant - Dish 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish5} alt="Noua Restaurant - Dish 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish7} alt="Noua Restaurant - Dish 7" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish6} alt="Noua Restaurant - Dish 8" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaDish8} alt="Noua Restaurant - Dish 9" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>As amuse bouches we had a star stuffed with nettles and grated egg yolk, a very fragrant potato croquette with wild garlic buds, a Romanian “mic” made from beef tongue with fondant potato and mustard, and polenta with smoked cream and cheese “snow”.</p>
        <p>As starters, we had a dish based on wild garlic and new potatoes (one of my favorites), followed by a bouquet of salads from Gradina Corbilor (Garden of the Ravens) with cream cheese and a skewer of roots (maybe parsnip and celery) with an egg white foam. Then we received the bread-and-butter service which was insanely good! Pure happiness.</p>
        <p>The first main course consisted of fish stuffed with spinach with a slightly spicy sauce, I think it had just the right amount of spice. The next main course was mutton (perfectly cooked from the point of view of a professional cook, but I am a simple home cook who prefers well-done meat) served with sauerkraut.</p>
        <p>The pre-dessert was Jerusalem artichoke ice cream wrapped inside a Jerusalem artichoke peel with Jerusalem artichoke jelly. As I was saying about forgotten or overlooked ingredients, I didn’t know what a Jerusalem artichoke (Helianthus tuberosus) is, so I searched on the net for information about it. It is quite easy to cultivate, the part that can be eaten is the tubercle of the plant, is good for both human and animal consumption and is full of vitamins and minerals. It was the most surprising dish on the whole menu. And I understood that the chefs at Noua successfully apply a zero-waste policy. It was really delicious, and I regret I didn’t eat more of the “soil” which scared me a little at the beginning because it looked so real.</p>
        <p>And we got to the dessert. The first dessert was a meringue mace, a perfectly cooked meringue, not like the ones that stick to your teeth. Under the meringue, we found sea buckthorn cream, tangerines, and baked yeast ice cream. One word: divine.</p>
        <p>The last dish was composed of semolina with milk and caramel in a crispy crust like a wafer with a wonderful presentation on a bed of wildflowers. I would have switched it with the mace, meaning that it would have gone better this one as the first dessert and the meringue mace left the last one.</p>
        <p>I want to emphasize that we really appreciated the waiters. They did a fantastic job on presenting and providing details about each course. They can do it in English as well.</p>
        <p>In conclusion, I would just like to point out that we had a wonderful and memorable experience at Noua Bucatarie Romaneasca.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaPin1} alt="Noua Restaurant - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaPin2} alt="Noua Restaurant - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}