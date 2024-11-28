import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import grigorescu1323 from "../../../../../../../public/grigorescu/IMG_1323.jpg";
import grigorescu20221029Dinner2 from "../../../../../../../public/grigorescu/IMG_20221029_210502.jpg";
import grigorescu1287 from "../../../../../../../public/grigorescu/IMG_1287.jpg";
import grigorescu20221028Food4 from "../../../../../../../public/grigorescu/IMG_20221028_195458.jpg";
import grigorescu20221028Food3 from "../../../../../../../public/grigorescu/IMG_20221028_195504.jpg";
import grigorescu20221028Food1 from "../../../../../../../public/grigorescu/IMG_20221028_195508.jpg";
import grigorescu20221028Food2 from "../../../../../../../public/grigorescu/IMG_20221028_203944.jpg";
import grigorescu20221028Dinner1 from "../../../../../../../public/grigorescu/IMG_20221028_210754.jpg";
import grigorescu1546 from "../../../../../../../public/grigorescu/IMG_1546.jpeg";
import grigorescu20221029Dinner3 from "../../../../../../../public/grigorescu/IMG_20221029_213709.jpg";
import grigorescu20221029Morning from "../../../../../../../public/grigorescu/IMG_20221029_111005.jpg";
import grigorescu1633 from "../../../../../../../public/grigorescu/IMG_1633.jpg";
import grigorescu1394 from "../../../../../../../public/grigorescu/IMG_1394.jpg";
import grigorescu1421 from "../../../../../../../public/grigorescu/IMG_1421.jpg";
import grigorescu1377 from "../../../../../../../public/grigorescu/IMG_1377.jpg";
import grigorescu1493 from "../../../../../../../public/grigorescu/IMG_1493-2.jpg";
import grigorescu1512 from "../../../../../../../public/grigorescu/IMG_1512-2.jpg";
import grigorescu20221029Evening1 from "../../../../../../../public/grigorescu/IMG_20221029_194106.jpg";
import pinGrigorescu2 from "../../../../../../../public/grigorescu/pin-grigorescu-2.jpg";
import grigorescu20221029Evening2 from "../../../../../../../public/grigorescu/IMG_20221029_195816.jpg";
import pinGrigorescu1 from "../../../../../../../public/grigorescu/pin-grigorescu-1.jpg";
import grigorescu20221029Evening3 from "../../../../../../../public/grigorescu/IMG_20221029_202723.jpg";

const article = getArticle(18);

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
      <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1546} alt="Truffle hunting and a special culinary experience at Grigorescu Mansion" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Ever since we saw the Flavors of Romania documentary presented by Charlie Ottley, we planned to go to Grigorescu Mansion, excited by the idea of Slow Food, of good food made from fresh organically grown ingredients, and also with the desire to meet involved and passionate people, for whom hospitality is a way of life, not a business. So, when Terra Carpatica - Grigorescu Mansion announced on its Facebook page that it was organizing a culinary weekend dedicated to truffle hunting, we didn’t think twice and booked a room.</p>
        <p>Let me start by saying that we are very pleased with the experience we had during the last weekend of this warm and dry October, and I could hardly find anything negative to say about it. At the same time, I would like to point out that all the reviews or articles I write are subjective, based on our experiences at a certain time and we are not paid or rewarded in any way for what I write, about the videos I publish on Youtube or about the pictures I post on Instagram. That’s precisely why, when it was the case, I also specified what I didn’t like about the accommodation, the restaurant, or the tourist attraction that I visited.</p>
        <p>We arrived on Friday evening at the destination: Grigorescu Mansion, Răteşti village, Berca commune, Buzau County. From Bucharest, it took us around two and a half hours.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1287} alt="Conacul Grigorescu 01" width={1248} height={876} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>From the moment we arrived, we were greeted by our host, Thorsten, who showed us the mansion built in 1930 and restored after its purchase in 2011, and the adjacent buildings: Sophie’s house, grandma’s house, and Noelia’s house where we were accommodated, in the King room. In these 3 houses, there are 5 apartments that can be rented, and the mansion is the permanent residence of the family.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1323} alt="Conacul Grigorescu 02" width={1248} height={965} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>After leaving our luggage in the room, we returned to the small restaurant, annex of the mansion, where we were greeted with Romanian “palinca” and liquor, as well as water from the house. The service, throughout the stay, was impeccable. All employees were always smiling and ready to help with anything. The menu was a fixed one, set by Chef Juranda, but we were asked in advance if we had dietary restrictions. In the drinks menu, we discovered artisan drinks (cola, tonic, beer), natural juices, homemade lemonade, mead (an alcoholic drink made from honey), blackberry wine as well as other wines produced in Dealul Mare, the renowned vine area.</p>
        <p>The dinner consisted of three appetizers, a main course, and a dessert, and was amazing from one end to the other.</p>
        <p>We started with a rustic tart with eggs, goat cheese, leeks, and bacon. We continued with eggplant rolls filled with mozzarella and basil, sprinkled with tomato sauce, and then put in the oven. And the third appetizer consisted of donuts with zucchini and yogurt sauce with mint and sumac. They were all aromatic and light and I promised myself that I would try to recreate them at home.</p>
        <p>The main course was a tenderloin of pork in Feteasca Neagra wine reduction with spices, a potato pie with goat cheese and greens, and a salad with baby spinach, arugula, grated beetroot, seeds, and yogurt sauce. The meat was so tender, and the salad was fresh and flavorful and went wonderfully with the rustic potato pie.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food4} alt="Grigorescu Mansion. Food. 01" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food3} alt="Grigorescu Mansion. Food. 02" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food2} alt="Grigorescu Mansion. Food. 03" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Food1} alt="Grigorescu Mansion. Food. 04" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221028Dinner1} alt="Grigorescu Mansion. Food. 05" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>For dessert, we received an espresso cheesecake with a base made of homemade biscuits with butter and maple syrup, a chocolate ganache with 85% cocoa, and raspberry syrup made with raspberries from the garden. Oh my God! It was the best cheesecake we’ve ever tasted, and it didn’t even resemble other cheesecakes we’ve tried because of the buttery biscuits, which were something else, not the usually used biscuits mixed with a lot of sugar and oils.</p>
        <p>After each dish, chef Juranda asked us if we were satisfied and if everything was okay. Yes, yes, yes! Three times yes!</p>
        <p>We started Saturday with a breakfast based on local products, most of which were made right at the mansion by our hosts. We could choose from cheeses with various flavors (including lavender), babic, bacon, prosciutto, fresh vegetables, homemade pate, Romanian “zacusca” with truffles, quail eggs, jams, cakes, and fresh bread.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1377} alt="Conacul Grigorescu 03" width={1248} height={936} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Then we all gathered in front of the mansion, we were briefed, we got into the two minibuses provided by the hosts and went to the forest in search of truffles. The search for truffles was conducted by two professional truffle hunters together with their dogs specially trained for this purpose. Besides the experience itself, which we found very interesting, we were able to enjoy the actual walk through the forest on a splendid October day. The fallen leaves formed a rustling carpet that made me think of a caramel river. The trees were covered in warm shades of gold, chocolate, amber, and rust. The sky was clear. The dogs were running happily around us when suddenly they were stopping to dig concentrated at the root of a tree. We quickly went to see what they found. Sometimes it was a small truffle quickly devoured by the dog, other times the truffle was big and the dog left it in the owner’s hand, impatiently waiting for its reward.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1421} alt="Conacul Grigorescu 03" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Truffles are fungi that live in symbiosis with a tree. Therefore, you can only farm truffles if you plant a forest. To grow, like any mushroom, they need heat and humidity. They live at the root of the tree, in the ground, and they needed to develop a strong smell to attract animals so that they could reproduce through spores. I kept smelling the truffles and they have a strong enough smell even for my human nose. Without a trained dog it is almost impossible to find truffles.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1493} alt="Truffle hunting 01" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Morning} alt="Truffle hunting 02" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1512} alt="Truffle hunting 03" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>All five participating families received truffles as they were found, but some families received only one truffle, while others received four. I think it would have been better if there had been an attendant designated to collect truffles in a basket, and at the end of the hunting, each family would receive a truffle from the ones found.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1394} alt="Truffle hunting 05" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>If you are curious to find out more about truffle hunting, check out <Link prefetch={false} href="/about-truffles-and-how-to-find-them" title="About truffles and how to find them" className="text-blue-600 underline hover:text-blue-800">this article</Link> that also has the link to the youtube video with images from our excursion in the forest.</p>
        <p>After this walk, which did not last more than two and a half hours, we returned to the minibuses where we had a picnic in the forest. We had a glass of palinca or liqueur according to each one’s preference and tasted the dishes carefully prepared by Chef Juranda: oriental salad, mini chicken breast schnitzels, mini burgers with pulled pork and platters with various types of charcuteries. We really binged.</p>
        <p>Back at the mansion, we had a few hours to rest before attending one of the most memorable dinners of our lives. We sat at a long table with the other guests, the atmosphere was friendly and relaxed, but at the same time sober and precious, the table was set impeccably with wine glasses, water jugs, and beautiful plates.</p>
        <p>We had a special guest, <LinkExternal link="https://www.facebook.com/people/Somelier-Buzau/100012366731915/" title="Link to Somelier Buzau" text="Liviu Birceanu" />, the only sommelier from Buzau, who currently works at the <LinkExternal link="https://budureasca.ro/" title="Link to Budureasca winery" text="Budureasca winery" />. He had the mission of finding the right wine for each of the five truffle dishes that we had on the menu. As usual, chef Juranda appeared after each dish to introduce us to what we were about to taste, but also to ask us if everything was good. Obviously, everything was incredibly good. The sommelier delighted us throughout the dinner with information about the wines, but also with jokes and other juicy stories.</p>
        <p>I wish I could remember which wine we tasted with each dish, but I only remember that we started with a Fume Blanc that we were told goes well with everything. Then I was too caught up in stories and delicious dishes to pay attention to what wine I had in my glass. At one point I know I had a Shiraz because there was a debate about the pronunciation. It seems that the Australian pronunciation won because they are now at the top with this type of wine.</p>
        <p>We started dinner with the three appetizers: a mushroom cappuccino with egg white foam and toasted bread, followed by cauliflower gratin marinated in olive oil and spices with sweet gorgonzola with truffles and a white wine reduction at the base, sprinkled on top with breadcrumbs made from toasted bread with garlic, thyme, and parsley, ending with beef carpaccio with truffle cream and arugula salad with goat cheese.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Evening1} alt="Grigorescu Mansion. Food. 06" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Evening2} alt="Grigorescu Mansion. Food. 07" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Evening3} alt="Grigorescu Mansion. Food. 08" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Dinner2} alt="Grigorescu Mansion. Food. 09" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu20221029Dinner3} alt="Grigorescu Mansion. Food. 10" width={720} height={720} sizes="(max-width: 768px) 90vw, 15vw" /></div>
        </div>
        <p>As the main course, we had beef ribeye cooked as everyone preferred (we asked for medium-well) with polenta with truffles, truffle cheese sauce, pear poached in Feteasca Neagra wine, and salad. The dessert consisted of a sweet and syrupy known by Romanians as savarina with a Romanian type of cheese similar to the Italian ricotta with truffles instead of whipped cream which is normally used for savarina. After such delicacies, I would have applauded with my ears if anatomy would allow it.</p>
        <p>On Sunday, our hosts prepared something special for us - a brunch. We could choose from the same dishes as at Saturday’s breakfast, to which were added many other dishes that were so appetizing: beans made as a puree similar to hummus, spring rolls, meat pies, spinach and cheese tarts, Plescoi sausages with polenta. But the pièce de résistance was the carrot cake with fine orange buttercream that went so well with the morning coffee.</p>
        <p>With a smile on our faces and two extra kilos each (no joke!), we started on our way home, not before buying a few jars of zacusca and jams produced by Juranda chef under the <LinkExternal link="https://www.rafineturi.ro/" title="Link to Rafineturi” label" text="'Rafineturi' label" />, and with two jars of sea buckthorn with honey from <LinkExternal link="https://melinis.ro/" title="Link to Melinis" text="Melinis" />.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={grigorescu1633} alt="Rafineturi" width={1248} height={631} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We also visited the Ratesti monastery and the hills in the area. But as an extra activity, I would recommend the Berca Boilers, located just 6 km from the mansion, where we found the same lunar landscape as at <Link prefetch={false} href="/the-muddy-volcanoes-buzau-county-romania" title="The Muddy Volcanoes, Buzău County, Romania" className="text-blue-600 underline hover:text-blue-800">Paclele Mari and Paclele Mici</Link>.</p>
        <p>It was a very beautiful experience that we enjoyed with all our hearts, and we recommend it to anyone who would like to try it and we thank Juranda and Thorsten from the bottom of our hearts. We can’t wait to return to the Grigorescu Mansion.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinGrigorescu1} alt="Grigorescu Mansion Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinGrigorescu2} alt="Grigorescu Mansion Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
    </main>
  </div>
  );
}