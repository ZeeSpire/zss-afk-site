import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Youtube from "@/components/youtube/Youtube";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import magura1 from "../../../../../../../public/magura/IMG_20211010_113305_zcuzus.jpeg";
import maguraPin1 from "../../../../../../../public/magura/pin1_zuxpxv.jpeg";
import maguraPin2 from "../../../../../../../public/magura/pin2_ivbksh.jpeg";
import magura2 from "../../../../../../../public/magura/IMG_20211010_113741_yufvam.jpeg";
import maguraDrone1 from "../../../../../../../public/magura/DJI_0115_fayob4-square.jpeg";
import maguraDrone2 from "../../../../../../../public/magura/DJI_0142_rfm1qt-square.jpeg";
import magura3 from "../../../../../../../public/magura/IMG_20211009_135725_rc5ktb.jpeg";
import magura4 from "../../../../../../../public/magura/IMG_20211009_130910_uzkeba.jpeg";
import maguraDrone3 from "../../../../../../../public/magura/DJI_0101_cc05bn-square.jpeg";
import magura5 from "../../../../../../../public/magura/IMG_20211009_113543_ct8jiq.jpeg";

const article = getArticle(1);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura2} alt="Măgura & Peștera villages, Brașov county, Romania" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Măgura and Peștera are two picturesque villages in a spectacular setting where the magic of time passing slowly takes place. The first time we got here we thought we arrived in heaven, this was the first raw impression of the place.</p>
        <p>Măgura means large, round, and isolated hill, usually forested, while Peștera means cave.</p>
        <p>They are located at approximately 1000-1100 meters altitude, at the foot of Piatra Craiului mountains in Brașov county. You need a car to get there. The easiest route to Măgura is from Zărnești. There is an asphalt road till Botorog’s Fountain, then there is a dirt serpentine road through the forest. To Peștera you can get from Moieciu de Jos on an asphalt road. The roads are bad, especially those in Măgura, but they can be traveled by car, although ideally, it would be a car with a high guard. It takes a lot of patience and skill to get to Măgura because the roads are full of potholes, and in winter they can even be impractical. The distance between the two villages is about 6 kilometers which can be hiked.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura5} alt="Măgura & Peștera villages, two picturesque villages in a spectacular setting" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Best time to visit</h2>
        <p>We visited the area both in summer when the weather is suitable for longer or shorter hikes depending on how much you can walk, and in autumn when the landscape is dreamy, the trees have yellow or rusty leaves, the mountain ridges are white, and the fog dances through the valleys. If you add to this image a slice of homemade bread with butter and jam and a hot tea or a baked apple with cinnamon after a walk outside in the fresh, crisp air, you will discover the perfect definition for the Danish term “hygge”. Every season has its charm. If you make sure that you can reach the accommodation with the chosen means of transport, then it is worth a visit in any season.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraDrone3} alt="Măgura & Peștera villages - beautiful landscape" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraDrone1} alt="Măgura & Peștera villages - beautiful nature" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraDrone2} alt="Măgura & Peștera villages - forest in the fog" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>Accommodation and restaurant options</h2>
        <p>The first time we visited the area we were not accommodated in either of the two villages because there are more accommodation options in the more touristy areas nearby such as Bran, Râșnov, or Moieciu. But we wanted to return and stay in Măgura. Our first option would have been <LinkExternal link="https://www.booking.com/hotel/ro/samedru-magura8.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Samedru" text="Samedru" />, but because we did not find any available weekend, we chose to stay at <LinkExternal link="https://www.booking.com/hotel/ro/mosorel-moieciu-de-jos.en.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Mosorel" text="Mosorel" /> with 4.8* out of over 200 reviews on Google, but we would say that a more suitable rating for Mosorel would be 2*.</p>
        <p>The third time we visited, we finally stayed at Samedru which exceeded our expectations especially after staying at Mosorel. The room we got had a beautiful view, it was clean and had everything we needed. The restaurant had a nice selection of local wines, a good house white wine, and a very good mulled wine. The food was very tasty and the portions were enormous. Also, the buffet breakfast included many options. So we can say that Samedru deserves 5*.</p>
        <p>There aren’t many restaurants in these two villages. Most guesthouses offer different board types such as breakfast, half board, or a kitchen where guests can prepare their meals. It is best to talk to the host beforehand about dining options if you do not plan to travel by car to areas where there are several restaurants (Bran or Moieciu for example). Mosorel offers breakfast and dinner, but because we were not satisfied with the breakfast, we decided to eat dinner at Brandeberg restaurant in Șimon and have the next breakfast at Panner Bakery in Bran. Both were good enough options, but not excellent. The food from Samedru on the other hand was delicious.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura3} alt="Măgura & Peștera, picturesque villages" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Things to do and see</h2>
        <p>Here time seems to stand still, the silence is interrupted only by cowbells or cock-a-doodle-doos, the air is clean, and the landscapes are heavenly. It is the perfect place to disconnect. Literally, because the mobile and internet network coverage are not good. Even if you only stay for a weekend, you will leave this place energized as it’s urging you to relax and take it slowly. Nature is in its purest state, so it is easy to admire and appreciate its beauty.</p>
        <Youtube videoId="PpNKnzD_3vo" />
        <p>In the area, there are mountain trails that can be traveled both on foot and by bike. The Peștera-Măgura-Şirnea route is appreciated by mountain biking enthusiasts and can be covered even by beginners.</p>
        <p>In Peștera you can find the Bat Cave which houses rare species of bats. We hiked there, but we did not enter because it is not arranged.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura4} alt="Măgura & Peștera, foggy landscapes" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>The trail that starts from Botorog’s Fountain through the Zărnești Gorges (Cheile Zărneștilor) and goes up to Curmătura Chalet is incredibly beautiful and easy to follow. The descent can be done through Poiana Zănoaga. All trails are well marked. The area is also appreciated by foreign tourists. We became friends with a group of Germans staying in Măgura on our way to Curmătura Chalet.</p>
        <p>For more information about the hiking trails, about the fauna and flora in Piatra Craiului National Park, but also to find out the visiting rules, you can access the official <LinkExternal link="https://www.pcrai.ro/" title="Link to Piatra Craiului National Park" text="website" />.</p>
        <p>Also if you want to see more pictures from our trips, follow <LinkExternal link="https://www.instagram.com/afkology/" title="Link to afkinmagura" text="#afkinmagura" /> on <LinkExternal link="https://www.instagram.com/afkology/" title="Link to Afkology Instagram" text="Instagram" /> and <LinkExternal link="https://www.instagram.com/afkology/reels/" title="Link to Afkology Reels" text="Reels" />.</p>
        <p>In these isolated villages the locals are hospitable and friendly. It was a pleasure for us to discover this! We were looking at the sky because we wanted to land the drone when an old man who reminded me of my grandfather approached and asked us what we were looking at. That’s how the conversation started, and it was heart-warming.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={magura1} alt="Măgura & Peștera, autumn landscapes" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraPin1} alt="Măgura & Peștera - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={maguraPin2} alt="Măgura & Peștera - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}