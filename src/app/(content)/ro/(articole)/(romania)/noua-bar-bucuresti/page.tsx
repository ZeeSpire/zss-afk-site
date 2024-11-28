import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";

import nouaBar1 from "../../../../../../../public/noua-bar/noua-bar-1.jpeg"
import nouaBar2 from "../../../../../../../public/noua-bar/noua-bar-2.jpeg"
import nouaBar3 from "../../../../../../../public/noua-bar/noua-bar-3.jpeg"
import nouaBar4 from "../../../../../../../public/noua-bar/noua-bar-4.jpeg"
import nouaBar6 from "../../../../../../../public/noua-bar/noua-bar-6.jpeg"
import nouaBar7 from "../../../../../../../public/noua-bar/noua-bar-7.jpeg"
import nouaBar10 from "../../../../../../../public/noua-bar/noua-bar-10.jpeg"
import nouaBar11 from "../../../../../../../public/noua-bar/noua-bar-11.jpeg"
import nouaBarBreakfast from "../../../../../../../public/noua-bar/noua-bar-breakfast.jpeg"
import nouaBarOutside from "../../../../../../../public/noua-bar/noua-bar-outside.jpeg"

const article = getArticle(25);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBarOutside} alt="Noua B.A.R. - one of our favorite restaurants in Bucharest and why it impressed us" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Noua B.A.R is the younger sibling of the <Link prefetch={false} href="/noua-bucatarie-romaneasca" title="Noua Bucătărie Românească Restaurant" className="text-blue-600 underline hover:text-blue-800">Noua Bucătărie Românească Restaurant</Link> opened by chef Alex Petricean, finalist of MasterChef Romania and designated Chef of the Year in 2018, 2020, and 2022 by the Gault & Millau Guide.</p>
        <p>B.A.R. is the acronym for Bucătărie Aproape Românească (Almost Romanian Cuisine) and therefore we expect to find on the menu dishes that contain both local ingredients such as black truffles, lardon, elderflower, or spruce buds, as well as international ingredients such as squid, octopus or jamon iberico.</p>
        <p>Noua B.A.R. is located on Ion Mihalache Boulevard 16, Bucharest, in a two-story house decorated with traditional Romanian objects. The atmosphere is intimate, on each table there is a vase with fresh flowers, and the music matches the decor exactly.</p>
        <p>Although the restaurant was opened at the end of 2022, we only visited it in May 2023, but we believe that it is the beginning of an idyll between us and the insanely tasty food at Noua BAR. And it could not be otherwise considering the experience at <Link prefetch={false} href="/noua-bucatarie-romaneasca" title="Noua Bucătărie Românească Restaurant" className="text-blue-600 underline hover:text-blue-800">Noua</Link>.</p>
        <Youtube videoId="bDxHi3RKaEA" />
        <p>On Saturdays and Sundays, the restaurant is also open for breakfast. Only by chance, we were in the area that morning and not have had breakfast at home. We went in, sat down at the table on the terrace, and ticked off with a pencil five dishes each.</p>
        <p>The menu is constantly changing. Both the dishes and the prices. To give you an idea, for breakfast, we could choose between 5 options (59 RON / 12 EUR) or 7 options (77 RON / 15.5 EUR) from about 20 options available in different categories: bakery, dairy, greens, proteins, and sweets.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBarBreakfast} alt="Noua B.A.R. - breakfast in the garden" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We chose:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Basket with two types of homemade bread and butter, but not just any kind of butter, but a whipped, creamy, and airy butter that spread easily on the warm bread and melted in the mouth.</li>
          <li>Cream cheese with fresh tomatoes.</li>
          <li>Avocado (half) with a cream made from almonds, lime and chili oil. The avocado was perfect, ripe just right, creamy, so delicious in combination with the other flavors.</li>
          <li>Baked baby potatoes sprinkled with salt and spring onions.</li>
          <li>Creamy scrambled eggs with chives and smoked cheese.</li>
          <li>Sandwich with Japanese omelette and cucumber.</li>
          <li>Homemade sausage with mustard. OK, it was one of the best sausages ever eaten. It was so good that I don’t even remember any other sausages.</li>
          <li>Homemade granola with Greek yogurt and strawberries. Yummy.</li>
          <li>The cake of the week, a combination of Crème Brûlée, cheese pie, and semolina with milk. I don’t know what it was, but it was delicious.</li>
          <li>Waffles with whipped cream, raisins, and cardamom. I believe that the cream was whipped by hand like my grandmother used to do when I was little.</li>
        </ul>
        <p>We drank a refreshing elderflower drink with a soft and delicate taste of elderflowers.</p>
        <p>What impressed us the most, apart from the food, which we have already determined exceeded all expectations, was the pleasant atmosphere and the fact that no one smoked. I don’t know if we were lucky that no smoker stayed near us or if smoking is prohibited on the terrace, but I would be happy if it were so. I think that the cigarette smoke, inhaled while I was tasting and marveling at how good the avocado is or how aromatic the strawberries are, would have ruined the whole experience. We usually avoid other people’s smoke and we prefer to eat inside where smoking is prohibited than to sit on the terrace. It was so good to be able to sit in the sun in the fresh air while having breakfast!</p>
        <p>This breakfast raised our serotonin levels for the whole day.</p>
        {/* image weird */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar11} alt="Noua B.A.R. - inside the restaurant" width={1248} height={475} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We went to dinner as well at Noua B.A.R. a couple of times. At lunch and dinner, the menu is different. You can choose even a single dish, each dish having its own price. I repeat, the menu and prices change quite often from what we could tell. At the end of May 2023, a dish from the “Before everything” category cost 37 RON (~7.5 EUR), a dish from the “To begin with” category cost 45 RON (~9 EUR), a main dish from the “To continue over and over” category cost 58 RON (~11.5 EUR), and a dessert cost 34 RON (~7 EUR).</p>
        <p>And the drinks menu impressed us because we found infused water (15 RON a bottle / ~3 EUR), compote (18 RON / ~3.6 EUR), lemonades (21 RON / ~4.2 EUR), cocktails with names taken from Romanian fairy tales and other interesting combinations (from 35 RON/ ~7 EUR). A special drink is Cinderella (Cenuşăreasa), which contains borscht, lemon, violets, and chamomile. I didn’t feel the chamomile aroma, but I liked it a lot.</p>
        <p>The dinner with a dish that turned our world upside down: pike roe in smoked cream with chives, parsley, and fried bread dough. We were like two happy children eating that fried “scoverguţe” bathed in the salty pike roe and the delicately smoked cream.</p>
        <p>We also ordered homemade sourdough bread with smoked cheese, butter, lardon, and black truffles. I didn’t really taste the truffle, but I saw it grated on top. This warm and crispy bread with an interior full of melted cheese was incredible.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar4} alt="Noua B.A.R. - Basket with two types of homemade bread and butter" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We continued with an original twist on the Romanian “mici” made of beef-mutton meat in a fried potato crust, along with pickled cucumbers and homemade mustard.</p>
        <p>Since we are big fans of burrata since we traveled through Puglia (articles will come from there as well), we also ordered homemade burrata with salad from Grădina Corbilor. It was special and I appreciated it. It was pretty obvious that it was homemade. It wasn’t like the one in Italy, but it was closer to Romania, probably from the milk.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar10} alt="Noua B.A.R. - Homemade burrata with salad from Grădina Corbilor" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>And we continued with a reinterpreted burger, but also with a generous portion of chicken schnitzel with mushroom sauce and green salad. Everything was good, salty, aromatic, and tasty. And the schnitzel was crispy, as any schnitzel should be.</p>
        <p>On another occasion, we tasted the octopus with carrots in shrimp sauce and trout roe. It was good, but I liked, even more, the free-range chicken covered in seeds with a triple-fried potato, beetroot ketchup, and homemade mayonnaise. I understood that they portion the chicken into five and you get whatever part is next for service. We got the chest and a wing. It was the most tender chicken breast you could imagine.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar2} alt="Noua B.A.R. - Chicken schnitzel with mushroom sauce and green salad" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We tried all three desserts available on the menu and all of them were insanely good. The elderflower ice cream was fragrant and surprising. The rhubarb delight in a jar contained, in addition to rhubarb, meringue, and vanilla cream. And the OBOR-MI-SU (Noua’s take on TIRA-MI-SU), besides the dish itself that looked spectacular, we were also told a story about the dish that made us appreciate it even more. The green powder sprinkled on top of the cake is dehydrated, finely chopped greens (dill, parsley, lovage, etc.). And we were amazed to see how well the flavors fitted together! And the red sauce was a syrup made only from strawberries (without any sugar) and it was added after listening to the whole story of the dish for a note of spectacularity.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar3} alt="Noua B.A.R. - Elderflower ice cream" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>If I had to choose only one dessert from the three, I couldn’t. I liked them all. Everything was faultless.</p>
        <p>The service was very good, the waiters were attentive, they answered all the questions, and they told us about the food.</p>
        <p>We would absolutely want to go back because we love food, and the food at Noua B.A.R. is made to be loved, enjoyed, and appreciated.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar7} alt="Noua B.A.R. - Inside the restaurant 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar1} alt="Noua B.A.R. - Inside the restaurant 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={nouaBar6} alt="Noua B.A.R. - Inside the restaurant 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
      </main>
    </div>
  );
}