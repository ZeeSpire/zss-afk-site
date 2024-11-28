import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import Youtube from "@/components/youtube/Youtube";

import santoriniPanoSunset from "../../../../../../../public/santorini/e-PANO_20210714_203525_copy_yjfd0q.jpeg";
import santoriniSunrise from "../../../../../../../public/santorini/e-IMG_20210715_064726_lmfke3.jpg";
import santoriniMorning from "../../../../../../../public/santorini/IMG_20210714_071841_uxxtj1.jpg";
import santoriniE1 from "../../../../../../../public/santorini/e_IMG_20210709_142741_kc3mxa.jpg";
import santoriniNightView from "../../../../../../../public/santorini/e-IMG_20210712_210954_copy_b15urj.jpg";
import santoriniDay1 from "../../../../../../../public/santorini/e-IMG_20210710_133647_copy_uwdges.jpg";
import santoriniNight2 from "../../../../../../../public/santorini/e-IMG_20210714_211333_iu0wrg.jpg";
import santoriniMorning2 from "../../../../../../../public/santorini/e-IMG_20210709_103956_gmkr2w.jpg";
import santoriniDrone1 from "../../../../../../../public/santorini/e-DJI_0596_copy_16_9_ekcjmf.jpg";
import santoriniThings from "../../../../../../../public/santorini/santo-things_vbanad.jpg";
import santoriniAfternoon from "../../../../../../../public/santorini/e-IMG_20210710_183249_copy_evjdu9.jpg";
import santoriniDrone2 from "../../../../../../../public/santorini/e-DJI_0348_copy_16_9_cszba2.jpg";
import santoriniDay2 from "../../../../../../../public/santorini/e-IMG_20210711_121317_copy_2_16_9_xmsou3.jpg";
import santoriniNight4 from "../../../../../../../public/santorini/e-IMG_20210714_215359_copy_ntc3iy.jpg";
import santoriniThings2 from "../../../../../../../public/santorini/santo-things2_hkswqu.jpg";
import santoriniDay3 from "../../../../../../../public/santorini/e-IMG_20210712_151502_fqug0r.jpg";

const article = getArticle(15);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniPanoSunset} alt="Top 15 things to do in Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Santorini looks like it’s straight off a postcard, but this place is much more than a pretty picture. It’s about amazing sunsets, jaw-dropping views, luxurious hotels, friendly people, romance floating in the air, and delicious food.</p>
        <p>First, let’s start with some generic information about this Greek island because before traveling there, we tried to read as much as possible about it and we found some super interesting facts.</p>
        <p>Santorini is a small, circular group of islands in the southern Aegean Sea, it forms the southernmost member of the Cyclades.</p>
        <p>Initially, Santorini was one round volcanic island (one of its previous names was Strongýlē which means “the circular one”). The name Santorini comes from Saint Irene, but the official name of the island is actually Thira.</p>
        <p>The island’s volcano erupted many times with varying degrees of explosivity. Some eruptions formed the caldera (a term that comes from Latin caldaria, meaning “cooking pot”). One of the biggest eruptions in history, known as the Minoan eruption, took place in 1600 B.C. and supposedly led to the collapse of the Minoan civilization on the island of Crete.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniAfternoon} alt="Santorini caldera" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Santorini now includes the inhabited islands of Thira and Therasia, as well as the uninhabited islands of Nea Kameni, Palea Kameni, and Aspronisi. Nea Kameni is the remaining active part of the volcano and can be visited.</p>
        <p>The capital is the town of Fira which is conveniently located in the center of the island, and five kilometers from the airport.</p>
        <p>The best months to visit Santorini are June and September, but we went there in the middle of July, and we had a great time despite the strong winds, the scorching sun, and the hordes of tourists.</p>
        <p>The Meltemi winds are strong, dry northern winds that blow in the Aegean Sea from May to October, having their maximum strength and duration during July and August.</p>
        <p>Although it’s a super small island, I feel that it has a lot to offer, it has something for everyone. So, it’s up to you to choose what you prefer best.</p>
        <p>We stayed in Santorini 7 nights/8 days, and we switched 3 different hotels. We stayed in Oia, Akrotiri, and Imerovigli, and explored almost the entire island from these points. It’s perfectly fine if you stay in one place because the island is small enough and can be traveled easily especially if you rent a car. We rented a car to travel along and across the island and it was the best decision. All three of our hotels offered private parking, but it was a bit difficult to find parking spaces in the popular places.</p>
        <Youtube videoId="IeswQFH_G-w" />
        <p>I’ve put together a list of 15 things that can be done in Santorini. You can do all of these in a week spent on the island or maybe even less. Pick what suits you best.</p>
        <h2>1. Wander on the streets of Oia.</h2>
        <p>In Oia everywhere you look there’s another picture-perfect view, it’s like a painting. Although many paths are private, you can at least explore as much of this beautiful borough full of souvenir shops. From all the souvenirs that could be bought, there were some gold-blown figurines in the shape of olive trees that caught our attention. There were on the expensive side, but they were really beautiful. There are many instagrammable spots here, like the blue domes of Oia (Saint Spyridon Oia Holy Orthodox Church and Resurrection of the Lord Holy Orthodox Church), the windmills, and the famous Kastro Oia Houses. You can also visit the ruins of the Castle of Oia where you can watch the sunset.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight4} alt="Santorini, olive tree" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniMorning} alt="Beautiful lady on the streets of Santorini" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSunrise} alt="Kastro Oia Houses in Santorini" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h2>2. Eat freshly caught fish in Ammoudi Bay</h2>
        <p>You can reach this wonderful small port packed with restaurants that promise fresh caught fish and seafood by going down the stairs from Oia, or by car (just add the destination Ammoudi Bay on Google Maps). Please refrain from using the donkeys to go back up to Oia. This is <LinkExternal link="https://ammoudisantorini.com/taste/" title="Link to Ammoudi Santorini" text="the website" /> of one of the fish taverns located in Ammoudi Bay. They have lots of local specialties, like the sundried octopus. There is a cliff jumping area as well. We didn’t dare to jump, but it was fun watching others doing it.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNightView} alt="Ammoudi Bay, Santorini" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>3. Watch the sunset</h2>
        <p>It doesn’t matter where you watch the sunset from, it will paint some fantastic memories that you can carry in your heart. Santorini is a destination known for its beautiful sunsets. If you want to see my top 5 places where you can watch the Santorinian sunset from, check out <Link prefetch={false} href="/best-places-to-watch-the-sunset-in-santorini" title="Best places to watch the sunset in Santorini" className="text-blue-600 underline hover:text-blue-800">this article</Link>.</p>
        <h2>4. Enjoy Santorini’s remarkable beaches</h2>
        <p>Because of the volcanic eruptions, you’ll find here some of the most interesting and apart beaches, like Vlychada for example. You can choose a boat tour and visit the Red Beach, the White Beach, and the Black Beach. We only went to the Red Beach by car and foot to snap some beautiful photos. Perissa and Perivolos are the most known beaches on this island, and there are sunbeds, tavernas, and shops. If you prefer a more secluded beach, go for Vourvoulos or Koloumpo. Bring your swimming shoes as most beaches are rocky.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniMorning2} alt="Red Beach, Santorini’s remarkable beaches" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>5. Do some window shopping in Fira</h2>
        <p>Fira, the capital of Santorini, has an abundance of accommodation options, restaurants, and shops. Besides visiting the Museum of Prehistoric Thera, you can also see the Cathedral of Saint John the Baptist, the Three Bells of Fira Church, and Fira Theotokopoulos Main Square. And you can also go down the Karavolades Stairs or take the cable car to the main harbor of the island.</p>
        <h2>6. Take a boat tour to Nea Kameni Volcanic Park</h2>
        <p>I highly recommend taking a boat tour and visiting Nea Kameni Volcanic Park. There is still some volcanic activity that is monitored by scientists. We took a tour from the port of Fira which included swimming time in the sulfurous hot springs, and climbing the volcano, the guide gave us information about the volcanic activity in particular and about Thira in general, and a visit for lunch on the island of Therasia.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDrone1} alt="Santorini - Nea Kameni Volcanic Park" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>7. Go on the hiking trail from Fira to Oia</h2>
        <p>The hiking trail it is more than 12 kilometers (about 7.46 mi) long so don’t forget your water. There are other hikes that you can do on the island, but this one is the most recommended by travel sites. Unfortunately, we couldn’t do it because we went there in the middle of July, and it was too hot even in the morning. We couldn’t get up at 5 AM when it was chillier.</p>
        <h2>8. Taste locally grown vegetables and some of Santorini’s famous dishes</h2>
        <p>Thanks to the nutrients from the volcanic soil, the veggies grown on the island are so flavorsome. You must try the Santorinian tomatoes, the “Katsuni” cucumber, the white eggplants, capers, and bell peppers. You can thank me later. While you are there don’t miss the Santorinian Salad, the tomato fritters, and the local dish of fava. I dedicated an entire article to <Link prefetch={false} href="/what-and-where-to-eat-in-santorini" title="What and where to eat in Santorini" className="text-blue-600 underline hover:text-blue-800">what and where to eat in Santorini</Link>.</p>
        <h2>9. Go for a wine tasting at one of Santorini’s Wineries</h2>
        <p>There are a lot of wineries and wine tasting tours that you can pick from. Don’t forget to try the famous Vinsanto Wine made from sun-dried grapes.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDay3} alt="Santorini - Inside a wineries, Vinsanto Wine" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>10. Attend a cooking class</h2>
        <p>We booked a cooking class at Artemis Karamolegos Winery in Exo Gonia, and it was one of the best experiences we had. We cannot recommend this place more. If you go there, you can try their locally grown products, participate in a wine tasting, visit their winery, enjoy a meal at their restaurant, or even learn how to cook some of the Santorinian dishes.</p>
        <h2>11. Visit Akrotiri Archaeological Site</h2>
        <p>Akrotiri was a small fishing and farming village that was destroyed in the eruption of the 16th century BC. Also known as the ‘Greek Pompeii’, the site was covered in volcanic ash which helped the preservation of fine frescoes and many objects and artworks. Many of the artifacts are exposed today in the Museum of Prehistoric Thera.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDrone2} alt="Santorini - inside Akrotiri Archaeological Site" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>12. Admire the exhibits at the Museum of Prehistoric Thera</h2>
        <p>The Museum of Prehistoric Thera, located in Fira, can be considered an extension of the archaeological site of Akrotiri, and exhibits some well-preserved finds from the excavations that were carried out on the island.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDay1} alt="Santorini - inside the Museum of Prehistoric Thera, located in Fira" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>13. Climb Mesa Vouno Mountain to the Historical Landmark of Ancient Thera</h2>
        <p>Ancient Thera is an archaeological site located on the top of Mesa Vouno Mountain, in the southeast corner of the island, and is the second most important archaeological site in Santorini after Akrotiri.</p>
        <h2>14. Don’t miss Imerovigli and other picturesque villages</h2>
        <p>Go to the Church of the Resurrection of the Lord in Imerovigli for a picture-perfect view. While you are in Imerovigli, you could also hike to Skaros Rock which is in fact the ruins of a Venetian Castle. The hike isn’t that strenuous, and the views are worth it. I wouldn’t recommend climbing the rock, as it seems dangerous and it’s actually prohibited, but when we were there no one seemed to mind. It’s also a good spot for sunset. There are other picturesque villages on the island that are not that popular among the tourists, like Pyrgos, Megalochori, and Firostefani.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniDay2} alt="Santorini - Church of the Resurrection of the Lord in Imerovigli - a picture-perfect view" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniE1} alt="Santorini - Don’t miss Imerovigli and other picturesque villages" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>15. Stay in a cave hotel</h2>
        <p>Santorini is known for its luxurious cave-like hotels with pools or hot tubs from which you have a generous view over the caldera. Couples all over the world consider Santorini one of the best destinations for their honeymoon so it can be said that romance is floating in the air. Staying in an exquisite hotel can be an amazing experience on its own. Read about <Link prefetch={false} href="/our-divine-cave-experience-in-santorini" title="Our Divine Cave Experience in Santorini" className="text-blue-600 underline hover:text-blue-800">our experience at Divine Cave</Link> in Imerovigli.</p>
        <p>This was my list of things to do in Santorini. What do you think? Are there things worth mentioning that I haven’t? Did you try or plan to try some of the things from this list? Interact with us on our Instagram account. Follow our hashtag to see our journey: <LinkExternal link="https://www.instagram.com/explore/tags/afkingreece/" title="Link to AFKingreece" text="#afkingreece" />.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight2} alt="Santorini - Oia view by night" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniThings} alt="Santorini Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniThings2} alt="Santorini Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}