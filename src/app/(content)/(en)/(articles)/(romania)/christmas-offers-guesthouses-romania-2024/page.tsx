import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Link from "next/link";

import christmas2024 from "../../../../../../../public/christmas-offers-2024/christmas-offers-2024-landscape.jpg"
import christmas2024_2 from "../../../../../../../public/christmas-offers-2024/christmas-offers-guesthouses-romania-2024-1.jpg"
import christmas2024_3 from "../../../../../../../public/christmas-offers-2024/christmas-offers-guesthouses-romania-2024-2.jpg"

const article = getArticle(37);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={christmas2024} alt="Christmas Offers at Guesthouses in Romania (2024)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Explore a curated selection of magical Christmas packages at stunning locations across Romania. Each package offers unique experiences, including traditional festive meals, live entertainment, and activities for all ages. Whether you’re looking for a cozy retreat in the mountains or a luxurious stay by the Danube, these holiday packages promise unforgettable moments filled with joy and celebration. Indulge in local delicacies, enjoy scenic views, and create cherished memories with your loved ones this festive season.</p>
        <p>I have selected offers from various guesthouses in Romania for you. This selection is not exhaustive; it simply reflects my personal preferences. In this article, I have included the packages that I found most interesting and ordered them in ascending order by price. The prices listed are those from the guesthouses’ websites at the time of writing this article and refer to the lowest rates available for a double room. I have only included places that have rooms available at the time of publication, but these can sell out quickly. I hope you find an offer that suits you and have a wonderful Christmas!</p>
        <h2>Atra Doftana</h2>
        <p>The special 3-night package at Atra Doftana offers an unforgettable experience. It includes three buffet-style breakfasts, a warm welcome with mulled wine, țuică, and other traditional products, evenings by the campfire, and surprises for well-behaved children. Additionally, the package features a festive fine dining dinner on Christmas Eve, complete with a carefully curated selection of wines.</p>
        <p>Upon departure, you will receive a special gift containing zacuscă, jam, a bottle of wine, and other delicious treats.</p>
        <p>Price: <LinkExternal link="https://atradoftana.ro/oferte-de-vacanta-valea-doftanei/" title="Link to Atra Doftana" text="from 3500 RON / room" /></p>
        <h2>Portal Village</h2>
        <p>Discover the magic of Christmas at Portal Village with a special package that includes a minimum two-night stay with breakfast, lunch, and dinner. Enjoy evenings by the campfire and themed feasts on Christmas Eve and Christmas Day, with non-alcoholic beverages included.</p>
        <p>Each day, unwind with an hour of relaxation at Vortex Spa (sauna and hot tub) and a therapeutic massage ritual included in the package.</p>
        <p>Christmas at Portal Village is filled with activities and surprises: yoga sessions, Forest Bathing, a “cozonac” (traditional sweet bread) workshop on December 24th, and a magical Christmas Eve caroling moment with children from Mărginimea Sibiului in traditional costumes.</p>
        <p>Price: <LinkExternal link="https://portalvillage.ro/pachete-experiente-inedite-premium/" title="Link to Portal Village" text="from 3875 RON / 2 nights / room or from 5582 RON / 3 nights / room" /></p>
        <h2>Potcoava Mountain Hideaway</h2>
        <p>The Christmas package includes 3 nights of accommodation with full board, as well as a festive Christmas meal. Children will enjoy pony-drawn carriage rides, horseback riding, and various crafts workshops. Additionally, a special party will be organized just for them, adding even more magic to this festive season.</p>
        <p>Price: <LinkExternal link="https://atradoftana.ro/oferte-de-vacanta-valea-doftanei/" title="Link to Potcoava Mountain Hideaway" text="from 3880 RON / room" /></p>
        <h2>Green Village</h2>
        <p>Spend Christmas in the heart of the Danube Delta at Green Village with a special 3-night package that includes breakfast, a festive welcome with traditional treats on December 23rd, dinner on the evening of December 23rd, a Christmas Eve gala dinner, and another dinner on December 25th.</p>
        <p>On December 24th, the gala dinner includes water, soft drinks, a bottle of wine per room, and unlimited draft beer. The celebration will be lively with live entertainment and a DJ for a joyful atmosphere.</p>
        <p>During your stay, enjoy the resort’s facilities: Lotus Spa (dry sauna), entertainment center (cinema, billiards, backgammon, darts), and a kids club for the little ones.</p>
        <p>Situated on the Saint George branch of the Danube Delta, the package includes a round-trip transfer by speedboat on the Murighiol - Sfântu Gheorghe route, for a relaxing start and end to your holiday.</p>
        <p>Price: <LinkExternal link="https://www.greenvillage.ro/oferte-speciale/" title="Link to Green Village" text="from 3960 RON / room" /></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={christmas2024_2} alt="Christmas Offers 2024, christmas tree" width={720} height={960} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={christmas2024_3} alt="Christmas Offers 2024, raindeer" width={720} height={960} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h2>Valea Verde</h2>
        <p>Enjoy a storybook Christmas in the village of Cund, with three nights of accommodation in one of the beautifully restored village houses, where tradition and comfort come together harmoniously. Each morning begins with a generous breakfast, followed by two buffet-style lunches and two refined dinners, each featuring five courses. Christmas Eve brings a festive dinner with roast turkey and champagne, perfect for celebrating the holiday in style.</p>
        <p>The Christmas spirit will come alive with a campfire and a caroling concert, completing the festive atmosphere.</p>
        <p>We’ve had two memorable experiences at Valea Verde: a truffle hunting weekend and a New Year’s Eve celebration to welcome 2024. Both experiences are detailed <Link prefetch={false} href="/valea-verde-a-successful-story-of-reviving-a-forgotten-transylvanian-village" title="Valea Verde - a successful story of reviving a forgotten Transylvanian village" className="text-blue-600 underline hover:text-blue-800">here</Link> and <Link prefetch={false} href="/valea-verde" title="The full New Year's Eve Experience at Valea Verde Retreat: from timeless Transylvania to the reality check" className="text-blue-600 underline hover:text-blue-800">here</Link>.</p>
        <p>Price: <LinkExternal link="https://www.valeaverde.com/oferte/" title="Link to Valea Verde" text="from 4000 RON / room" /></p>
        <h2>Hotel Jelna</h2>
        <p>The holiday package includes three nights of accommodation with full board in an elegant hotel, part of Jelna Winery, where you can enjoy tastings of exceptional local wines. The hotel offers a fully equipped spa area, featuring a swimming pool, wet and dry saunas, a children’s pool, a saltwater pool, and a dedicated massage area for a complete relaxation experience.</p>
        <p>Price: <LinkExternal link="https://hoteljelna.ro/oferte/" title="Link to Hotel Jelna" text="from 4050 RON / room" /></p>
        <h2>Archia Manor</h2>
        <p>The special Christmas package includes 3 nights with half board and festive activities to immerse you in the holiday spirit. Among these activities are pig slaughtering, carolers, a campfire with live traditional music, the arrival of Santa Claus, and various activities for children, all designed to create unforgettable moments during this magical season.</p>
        <p>Price: <LinkExternal link="https://hoteljelna.ro/oferte/" title="Link to Archia Manor" text="from 4190 RON / room" /></p>
        <h2>Vatra Boiereasca</h2>
        <p>The package includes three nights of accommodation. Each morning begins with breakfast served from 9:00 AM and continuing late into the day, providing a perfect brunch experience for those who prefer to wake up later.</p>
        <p>In the evenings, guests can enjoy special dinners featuring traditional Bucovina dishes that pay homage to the local cuisine.</p>
        <p>On Christmas Eve, the traditional pig slaughter will take place, followed by the serving of Pomana Porcului, a dish specific to this festive season.</p>
        <p>The festive tables will be adorned with sarmale, roast pig, and “poale-n brâu” pastries, served alongside sour milk, all prepared with love and respect for tradition.</p>
        <p>Price: <LinkExternal link="https://www.vatraboiereasca.ro/oferte/" title="Link to Vatra Boiereasca" text="from 5300 RON / room" /></p>
        <h2>Casa Timiș</h2>
        <p>The “Fairy Tale Christmas” package includes 3 nights of accommodation with half board.</p>
        <p>The stay begins with a festive dinner on Christmas Eve, accompanied by live music and carolers, followed by a campfire with warm drinks, traditional snacks, and folk songs.</p>
        <p>On Christmas Day, the program includes breakfast, followed by a Christmas brunch with live music and organized activities for children.</p>
        <p>On December 26th, after breakfast, families will have the opportunity to participate in a “Treasure Hunt” with prizes, and at dinner, the dishes will be paired with a fine wine tasting.</p>
        <p>On December 27th, guests can enjoy a delicious breakfast before departing for home.</p>
        <p>Price: <LinkExternal link="https://casatimis.ro/winterwonderland/" title="Link to Casa Timiș" text="from 8400 RON / room" /></p>
        <h2>Matca Relais & Châteaux</h2>
        <p>At Matca Relais & Châteaux, the Christmas package includes two nights of accommodation, a welcome drink, and a festive dinner on the evening of December 24th. On Christmas Day, you will enjoy a delicious breakfast, a festive lunch, and a meal with an open bar, and on the morning of December 26th, another breakfast will await you to conclude this unforgettable experience.</p>
        <p>In addition to the superb accommodation and enchanting views, you can indulge in the spa, which includes a swimming pool, jacuzzi, saunas, and various relaxation areas, offering you a perfect escape from daily routines.</p>
        <p>Price: <LinkExternal link="https://matcahotel.com/ro/home-romana/" title="Link to Matca Relais & Châteaux" text="from 10500 RON / room" /></p>
      </main>
    </div>
  );
}
