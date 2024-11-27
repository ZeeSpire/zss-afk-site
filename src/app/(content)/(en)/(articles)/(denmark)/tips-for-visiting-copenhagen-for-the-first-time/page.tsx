import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import nyhavnView1 from "../../../../../../../public/copenhaga/poza1_nyhavn_nfwm3x.jpeg";
import nyhavnFunFact from "../../../../../../../public/copenhaga/poza4_funfact_nyhavn_ubdros.jpeg";
import foodPhoto1 from "../../../../../../../public/copenhaga/food1_hzuzng.jpeg";
import foodPhoto2 from "../../../../../../../public/copenhaga/food02_sbeqsn.jpeg";
import foodPhoto3 from "../../../../../../../public/copenhaga/food03_xsiqzv.jpeg";
import foodPhoto4 from "../../../../../../../public/copenhaga/food04_uossl6.jpeg";
import pinImage1 from "../../../../../../../public/copenhaga/pin2_puskrs.jpeg";
import pinImage2 from "../../../../../../../public/copenhaga/pin2_puskrs.jpeg";
import cityFromAbove from "../../../../../../../public/copenhaga/fromabove_uschxi.jpeg";
import poza6 from "../../../../../../../public/copenhaga/poza6_howToGetAround_tbh0xw.jpeg";
import howToGetAround from "../../../../../../../public/copenhaga/poza5_howToGetAround_uacmd6.jpeg";
import timeToVisit from "../../../../../../../public/copenhaga/timetovisit_ixkctt.jpeg";

const article = getArticle(2);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nyhavnView1} alt="Tips for visiting Copenhagen for the first time" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Originally a Viking fishing village established in the 10th century known at the time as a merchants harbor it is now an exciting environmentally friendly city with vibrant-colored townhouses, top-notch infrastructure, exquisite restaurants, and the reputation of being one of the happiest cities in the world. Copenhagen, the city of fairy tales, with more bikes than cars, has this enticing cool and laid-back vibe that makes you want to move there and start fresh. After just a couple of days spent there, you will start to feel this mood of coziness and contentment also known as hygge that will remain in your heart after returning home.</p>
        <p>Copenhagen is a must-see destination so let’s start with some tips for a perfect trip to this wonderful city.</p>
        <h2>Copenhagen Card</h2>
        <p>The Copenhagen Card is by far the most convenient and affordable way to experience Copenhagen.</p>
        <p>It includes free public transportation by train, bus, metro (including to and from the airport), and by regional train outside Copenhagen, free entrance to lots of museums and castles, free entrance to Tivoli Gardens, Zoo, Botanical Garden, a couple of free boat tours and some other discounts at cafes and restaurants or when you purchase a sightseeing tour or rent a bike.</p>
        <p>You can buy the card for different durations (24, 48, 72, 96, and 120 hours) and if you plan to take a boat tour and visit some main attractions, this card will definitely save you money and time. You can opt for a digital card, download the CPH Card app and show the QR code from your mobile phone when you want to enter an attraction or when you use public transport. The mobile application is very intuitive and easy to use.</p>
        <p>Here’s the website where you can buy the card and where you can find all the information you need about the <LinkExternal link="https://copenhagencard.com/" title="Link to Copenhagen Card" text="Copenhagen Card" />.</p>
        <Youtube videoId="tms-6Y5OYFc" />
        <h2>Best time to visit Copenhagen</h2>
        <p>The best time to visit Copenhagen may depend on person to person, but it is accepted that between May and September the weather is friendlier, and you can enjoy more activities outside. The peak season is in July and August, and you may find long queues at the museums or at Tivoli Gardens for example. In winter, the weather is gloomy; the days are shorter and maybe you’ll prefer spending more time inside cafes or museums than outside.</p>
        <p>We visited Copenhagen in September and the weather was really nice in the majority although there were light showers, but nothing that ruined our plans. We honestly would return to Copenhagen any time, even in February.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={timeToVisit} alt="Best time to visit Copenhagen" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Fun fact</h2>
        <p>Copenhagen was officially founded in 1167 when a bishop named Absalon, who is regarded as the city’s founder, built a castle where Christiansborg Palace is today. Originally there was only a small settlement called Havn (harbor), but with the increased trading in the Middle Ages the name was changed to Købmannehavn, which means “the merchant’s harbor”. It was later shortened to its current name København.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={nyhavnFunFact} alt="Copenhagen - Nyhavn" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>How to get around Copenhagen</h2>
        <p>Copenhagen is a relatively small city compared to other European capitals, but it’s packed with attractions (impossible to visit in just a couple of days). Most of them are quite close to each other and it is worth mentioning that Copenhagen’s public transportation system is very efficient. If you don’t want to buy the Copenhagen Card that includes unlimited public transport, you have other options like buying a City Pass which gives you the freedom to make unlimited use of public transport. Visit this site for more information about all types of tickets, routes, bus stops timetables, and the city pass: <LinkExternal link="https://dinoffentligetransport.dk/en/" title="Link to dinoffentligetransport" text="dinoffentligetransport.dk" /> or you can get the “DOT Tickets” app.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={howToGetAround} alt="Copenhagen - How to get around Copenhagen, subway" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Other ways of navigating through the city:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>
            By boat. You can choose between several types of boats and tours, with or without a guide. Below are the ones that caught our eye:
            <ul className="list-inside list-none ml-4 mb-2">
              <li>- <LinkExternal link="https://www.stromma.com/en-dk/copenhagen/" title="Link to stromma.com" text="stromma.com" /></li>
              <li>- <LinkExternal link="https://goboat.dk/en/" title="Link to goboat.dk" text="goboat.dk" /></li>
              <li>- <LinkExternal link="https://kayakrepublic.dk/en/" title="Link to kayakrepublic.dk" text="kayakrepublic.dk" /></li>
              <li>- <LinkExternal link="https://www.heycaptain.dk/" title="Link to heycaptain.dk" text="heycaptain.dk" /></li>
              <li>- <LinkExternal link="https://www.friendships.dk/en/boat-rental-christianshavn/" title="Link to friendships.dk" text="friendships.dk" /></li>
            </ul>
          </li>
          <li>Renting a bicycle. Copenhagen is the most bike-friendly city in the world and has excellent bike infrastructure. If you want to explore the city by bike you can rent one. Check out these websites if this is something that suits you:
            <ul className="list-inside list-none ml-4 mb-2">
              <li>- <LinkExternal link="https://www.donkey.bike/cities/bike-rental-copenhagen/" title="Link to donkey.bike" text="donkey.bike" /></li>
              <li>- <LinkExternal link="http://rentabike.dk/uk/" title="Link to rentabike.dk" text="rentabike.dk" /></li>
              <li>- <LinkExternal link="https://www.visitcopenhagen.com/copenhagen/activities/copenhagen-bike-rentals" title="Link to visitcopenhagen.com" text="visitcopenhagen.com" /></li>
            </ul>
          </li>
          <li>Taking a taxi. Not just any taxi, but an eco-friendly one:
            <ul className="list-inside list-none ml-4 mb-2">
              <li>- <LinkExternal link="https://dantaxi.dk/english/" title="Link to dantaxi.dk" text="dantaxi.dk" /></li>
              <li>- <LinkExternal link="https://www.viggo.com/" title="Link to viggo.com" text="viggo.com" /></li>
            </ul>
          </li>
        </ul>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityFromAbove} alt="Copenhagen - seen from above" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Where to stay</h2>
        <p>Because there are so many options to travel through the city and that most points of interest are concentrated in the city center, you can opt to stay in any of Copenhagen’s charming and unique neighborhoods based on your budget and preferences. That being said, I made a list of the hotels I found interesting:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.booking.com/hotel/dk/nyhavn.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to 71 Nyhavn Hotel" text="71 Nyhavn Hotel" />  - this hotel located in the iconic Nyhavn (New Harbour) is housed in 2 converted warehouses from the 1800s.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/nimb.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Nimb Hotel" text="Nimb Hotel" /> - Moorish-style building located right in the middle of Tivoli Gardens.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/sanders.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Hotel Sanders" text="Hotel Sanders" /> - luxury boutique hotel, very central, very stylish.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/nh-collection-copenagen.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to NH Collection Copenhagen" text="NH Collection Copenhagen" /> - located in Christianshavn, close to the city center and to the metro station, has two restaurants and a bar presented by a Michelin-starred chef, along with other nice amenities.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/villa-copenhagen-kobenhavn.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Villa Copenhagen" text="Villa Copenhagen" /> - building from 1909, located in Vesterbro, has a restaurant, a bar, a garden, a terrace with heated pool, sauna, fitness center and it looks amazing. Plus their Instagram account (villacph) is splendid.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/copenhagen-admiral.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Copenhagen Admiral Hotel" text="Copenhagen Admiral Hotel" /> - waterfront hotel with attractive design located in a heritage-listed 1780s building.</li>
          <li><LinkExternal link="https://www.booking.com/hotel/dk/hotel-skt-petri.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Hotel Skt Petri" text="Hotel Skt Petri" /> - centrally located hotel in old Latin Quarter.</li>
        </ul>
        <p>OK, I see a pattern here. Maybe I let myself be a little bit carried away. But there are tons of other options much cheaper than these that have their charm.</p>
        <p>We chose NH Collection Copenhagen having at the time of our reservation the best value for money. It was newly inaugurated, exceptionally clean, and nicely decorated, close to the city center and the breakfast was really good and it included lots of choices. We enjoyed the scrambled eggs and the porridge with fresh fruits. We even had champagne at breakfast which was an experience itself.</p>
        <h2>What foods to try in Copenhagen</h2>
        <p>Copenhagen can be considered a foody destination with some of the best restaurants in the world. Food in Copenhagen is expensive, but on the other hand, the Danes value locally produced, organic, premium ingredients and have some of the best restaurants in the world.</p>
        <p>Noma and Geranium, with 3 Michelin stars each, are at the top of the list of the World’s 50 Best Restaurants in 2021. There are at least 10 other restaurants with one or two Michelin stars which for some may be a good enough reason to visit Copenhagen.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto4} alt="Copenhagen - food 1" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto3} alt="Copenhagen - food 2" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto2} alt="Copenhagen - food 3" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>We tried some of the dishes for which Denmark is best known. Here’s our selection:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Smørrebrød - a slice of rye bread with various combinations of toppings such as fried fish, pickled herring, roast beef, boiled egg with mayo, shrimps, etc.</li>
          <li>Porridge - with different toppings such as homemade caramel, roasted almonds, fresh fruits, freeze-dried raspberries, homemade Nutella, or peanut butter. From Grød.</li>
          <li>Fiskefrikadeller (fish cakes) or Frikadeller (pork meatballs) with potato salad and mayo. Yum.</li>
          <li>Hot dogs from street vendors with different toppings and sauces.</li>
          <li>Carlsberg and other locally brewed beers were above expectations.</li>
          <li>Cinnamon rolls.</li>
          <li>Stegt flæsk med persillesovs - crispy pork, potatoes, and parsley sauce.</li>
          <li>Fresh fruit from the market (very tasty).</li>
        </ul>
        <p>Our favorite spot to grab something to eat and a beer to quench our thirst was Torvehallerne, an urban, covered, fresh food market. I’m still dreaming of the duck sandwich from Ma Poule washed down by the delicious lemonade from Fresh Market.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={foodPhoto1} alt="Copenhagen - Torvehallerne" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Things to do in Copenhagen</h2>
        <p>Aside from the usual tourist attractions, Copenhagen has a special charm that you can feel walking through the streets and admiring the wonderful buildings, canals and beautiful parks. You can also grab a coffee from Espresso House or a smoothie from Joe and the Juice and you can go for a walk in the Botanical Garden, admiring the plants.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={poza6} alt="Copenhagen - canals" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Or you can buy some beers and rent an electric boat for a ride on the canals as the locals do. It takes very little to feel the spirit of Copenhagen, so here’s the things that made our trip a memorable one:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li>Viewing Copenhagen from above. There are several places where you can have views of the city such as the Church of Our Saviour tower, the Round Tower, the City Hall Tower, and the Christiansborg Palace tower.</li>
          <li>Taking a canal tour. We chose Stromma’s Grand Canal Tour which was a live guided tour, and we spent a nice hour navigating the canals.</li>
          <li>Exploring the lesser-known areas of Copenhagen and its surroundings. Because we got the Copenhagen Card, we were able to travel anywhere we wanted thanks to their top-notch public transport and visit more remote areas, and less visited by tourists neighborhoods.</li>
          <li>Amager Strandpark. We enjoyed taking a break from visiting museums and palaces on this serene beach with fine sand and friendly seagulls.</li>
          <li>We rediscovered our inner child in Tivoli Gardens amusement park, one of the oldest operating amusement parks in the world.</li>
        </ul>
        <p>For a more comprehensive list of places to visit and things to do in Copenhagen, check out our <Link prefetch={false} href="/free-attractions-to-visit-in-copenhagen" title="15 free attractions to visit in Copenhagen" className="text-blue-600 underline hover:text-blue-800">next post</Link>.</p>
        <p>The official currency of Denmark is the Danish Krone (DKK) so all prices are in DKK. You can easily pay by debit or with a credit card everywhere in Copenhagen. You don’t necessarily need to exchange cash in DKK as the tips are optional because the Danes are paid fair wages.</p>
        <p>Everyone speaks English very well so it’s the only language you need to know. But here are some words if you’d like to practice your Danish. Also don’t forget to pin the article.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage1} alt="Copenhagen - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage2} alt="Copenhagen - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
