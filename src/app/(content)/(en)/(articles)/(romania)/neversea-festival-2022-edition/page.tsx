import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";

import neversea3 from "../../../../../../../public/neversea/neversea3_yuclp6.jpeg";
import neversea6 from "../../../../../../../public/neversea/neversea6_idtsfo.jpg";
import never1 from "../../../../../../../public/neversea/never1_whjiob.jpg";
import neversea4 from "../../../../../../../public/neversea/neversea4_muspyb.jpg";
import neversea2 from "../../../../../../../public/neversea/neversea2_crfr9x.jpg";
import neversea5 from "../../../../../../../public/neversea/neversea5_fr4l6e.jpg";
import never2 from "../../../../../../../public/neversea/never2_zm790c.jpg";
import neversea1 from "../../../../../../../public/neversea/neversea1_ygmf96.jpg";

const article = getArticle(11);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea3} alt="Neversea Festival, 2022 edition" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Last weekend we participated in the fourth edition (July 7-10) of the Neversea festival on the Black Sea coast. So, here are my impressions of this year’s festival.</p>
        <h2>Transport and parking</h2>
        <p>We came by personal car from Bucharest, so the transport consisted of refueling with diesel. One evening we went to the festival with Uber. There are both Uber and Bolt in Constanta. Prices fluctuated between 20 - 70 lei (4 - 14 euros) for a 7 km long ride depending on how busy it was at that time. We left at 8:30 PM and returned around 3 AM, and Uber cost us 100 lei (20 euros) round trip. On the other evenings, we went there by personal car and parked 700 meters from the stairs leading to the Neversea beach, in parking zone 1. The parking cost 7.5 lei/3 hours (1.55 euros/3 hours), to which are added 3 more lei (0.6 euros) for each additional hour.</p>
        <h2>Accommodation</h2>
        <p>Fortunately, we had the accommodation provided and did not have to pay for the 4 nights of Neversea. This is why I cannot give much information about accommodation in Constanta.</p>
        <h2>Tickets</h2>
        <p>We purchased 4-day passes, with general access, in February, at the price of 150 euros/person. I noticed that the price fluctuated, it was more expensive, then it became cheaper again just before the festival, but the differences were not very substantial.</p>
        <h2>Food and drinks</h2>
        <p>Inside the festival, there were many stalls where you could buy water, juices, beer, and other alcoholic beverages. At all stalls, the prices were the same. A bottle of half a liter of water or juice cost 10 lei (approx. 2 euros). A beer or a shot cost 15 lei (approx. 3 euros).</p>
        <p>There were also quite a few food options consisting of food trucks that sold mainly burgers, French fries, pizza, pancakes, tacos, sandwiches, and even sushi (although there weren’t many people that wanted sushi at the festival). To give you an idea, at the Cartofisserie stand a large portion of French fries cost 27.5 lei (5.5 euros) while in the mall you can find the same potatoes from the same Cartofisserie at 16.5 lei (3.35 euros). If you also wanted sauce with your potatoes, you had to add another 5.5 lei (1.1 euros) while in the mall the same sauce costs 4.4 lei (0.9 euros). The burger from Circus Pub cost 39 lei (7.9 euros) versus 31 lei (6.3 euros) the price in the restaurant, and the fries 15 lei versus 8 lei. I don’t want to sound dissatisfied or discontented, because it seems normal that the prices will be higher at the festival than they normally are, especially since employees worked late into the night going the extra mile, the queues being quite long at most food trucks. Pancakes with various toppings cost around 22-28 lei, a small pizza cost between 30-50 lei, and tacos were about the same price.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea1} alt="Neversea Festival, 2022 edition, view from the drone" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Instagram</h2>
        <p>Neversea’s Instagram page was updated daily with valuable information as the start date approached, but also during the 4 days of the festival. I used it whenever I needed to find out something fast, such as how long the Black Eyed Peas were going to be late (they were half an hour late). I liked that in the vast majority the announced schedule for each scene/artist was followed.</p>
        <h2>Online check-in, top-up, and refund</h2>
        <p>We chose to make the check-in online as well as the top-up of the bracelets with the desired amount of money. You cannot use cash or card at the festival. To buy drinks, food, clothes, and other things you use the bracelet on which you previously added money. It seemed easier and faster for us to do this online, otherwise, we could have stayed in long queues on the spot. You could get the money left on the bracelet back, online, by requesting a refund.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea6} alt="Neversea Festival, 2022 edition, people from the festival" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>The bracelet</h2>
        <p>We picked up our bracelets on Wednesday, July 6th, to avoid standing in line. It was very good that they offered the option of picking up the bracelets before the actual start of the festival.</p>
        <p>Once the bracelet is put tight at your hand, it can no longer be taken down. Which can be pretty annoying, but I understand that if it weren’t so, many people would have come to say that they lost their bracelet and that they want to enter without one. There is another possibility to give the bracelet from one to another, but I don’t think that’s a real reason because it’s very simple to make an app that displays the face associated with the bracelet when it is scanned.</p>
        <h2>Security check</h2>
        <p>On their website, they posted information about the size of the bag/backpack you were allowed to enter with, as well as its allowed contents. We only had the mobile phones, a small video camera, a disinfectant, IDs, and keys with us. So, we quickly went through security. From what I noticed, they checked you quite well, it was obvious that you cannot enter the festival with drinks, knives, and other crazy things. One girl was upset that they wouldn’t let her in with the perfume bottle. :-)</p>
        <h2>Drugs</h2>
        <p>I saw on the news that some people were caught with drugs at the festival. I smelled weed when I went near the seashore, where it was dark. Inside the festival, we saw police dogs trained for drug detection, as well as police checks on the streets nearby.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea4} alt="Neversea Festival, 2022 edition, main stage" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Overcrowding</h2>
        <p>I saw on the news that 60,000 people a day would participate, even 70,000 people on Saturday.</p>
        <p>It was a little too crowded for my taste. The festival gates opened at 2 PM. By 9 PM it was still airy, then the number of people coming was growing. I think that the crowd can raise the atmosphere of a concert or bring it down, and I think that when there are a lot of people and everyone sings, applauds, dances, and interacts with the artists on stage, it’s really wonderful. But for me, it was a bit too crowded because without exaggeration I think 80% of people were smokers. Staying 20-30 cm away from a few smokers, when you are not used to cigarette smoke, even outdoors, was terrible. At one point I felt like I was suffocating, my eyes and nose were burning from the smoke, and I had no place to retire so I could still enjoy the concert. It may sound silly to some, but cigarette smoke was the main reason I left pretty early every night. I stayed until 3 AM only on Friday because I wanted to see Netsky, but I was about to give up several times along the way. I was wondering how someone would feel if I put a smoke flare in his or her face, only because this makes me feel good, would he/she have liked it? That’s how I felt among so many smokers. And they also threw their cigarette butts in the sand, as if the beach were their ashtray. I realize this depends on education, respect, and empathy and that some people lack these qualities.</p>
        <p>Also, about this subject, I have another mention. On the path between the Main Stage and The Ark stage, there was super crowded, some came, others left, others stood in queues, some burned others with cigarettes, and others took selfies in the middle of the path. I think it would have been a good idea to make two paths with distinct directions of walking. Or that the single path should have the directions of walking drawn on it in order to reduce the risk of being trampled on or pushed by those coming from the opposite direction.</p>
        <h2>The artists</h2>
        <p>At first, I was not attracted by the names in the lineup. In February when I bought the tickets, I didn’t know who will perform, and then I was a little disappointed with the final lineup. I knew I wanted to see Parov Stelar and Netsky. Well, I have to say I was pleasantly surprised. I liked the music on the smaller stages as well. On Sunday night I felt very good at Albwho on the Oasis stage, for example. Among the Romanian artists, I went to Carla’s Dreams and Delia. I also really loved Parov Stelar. The most pleasant surprise was The Black Eyed Peas who, although they were late, did a super show, and made it worth the wait.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea5} alt="Neversea Festival, 2022 edition, Netsky" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Organization</h2>
        <div className="mb-6">
          <span>I liked how the festival was organized, from the entrance gate to the exit.</span><br />
          <span>I felt safe throughout the festival due to the number of guards.</span><br />
          <span>There were many places where you could buy water and food, we didn’t wait in line for a long time.</span><br />
          <span>The toilets were clean.</span><br />
          <span >I liked the diversity of the stages, the music, and the atmosphere. And I think that was the most important thing.</span>
        </div>
        <p>In conclusion, at the Neversea festival, 2022 edition, we felt good, we liked it, we enjoyed it and if we have the opportunity we will definitely participate in the next editions as well.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={neversea2} alt="Neversea Festival, 2022 edition, drone view, main stage, beach" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={never1} alt="Neversea Festival, 2022 edition - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={never2} alt="Neversea Festival, 2022 edition - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
