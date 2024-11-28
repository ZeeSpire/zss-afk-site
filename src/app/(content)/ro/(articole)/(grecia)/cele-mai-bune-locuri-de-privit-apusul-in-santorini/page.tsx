import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import santoriniE2Sunset from "../../../../../../../public/santorini/e2-IMG_20210714_203245_stzjz0.jpeg";
import santorini2 from "../../../../../../../public/santorini/santorini2_qmsaoe.jpg";
import santoriniNight from "../../../../../../../public/santorini/e-IMG_20210708_203101_copy_xj2k2n.jpg";
import santoriniSunset1 from "../../../../../../../public/santorini/e-IMG_20210710_203541_jspgxr.jpg";
import santorini1 from "../../../../../../../public/santorini/sanotrini1_ux262e.jpg";
import santoriniEvening2 from "../../../../../../../public/santorini/e-IMG_20210712_202809_rujnzt.jpg";
import santoriniSunset2 from "../../../../../../../public/santorini/e-IMG_20210714_203716_copy_tjmd2z.jpg";
import santoriniNight3 from "../../../../../../../public/santorini/e-IMG_20210711_203255_p2btyw.jpg";


const article = getArticle(14);

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
        <p>I start by saying that Santorini is a world-renowned place for beautiful sunsets and that many tourists go to Santorini, especially for this.</p>
        <p>Of course, the sun sets at a different hour and in a different place depending on the time of year you visit this amazing island. We visited the island in the middle of summer, but these recommendations can be applied regardless of the time of year, and if you want to know the exact time at which the sunset takes place in Santorini, you can check <LinkExternal link="https://www.timeanddate.com/sun/greece/santorini" title="Link to Santorini time and date" text="this website" />.</p>
        <p>I made a list of places from which we saw the sunset. We found it just as special and spectacular from any of these places.</p>
        <h2>Oia</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniE2Sunset} alt="Santorini - Sunset seen from Oia, with city view" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Everyone knows the beautiful photos taken at sunset with the white houses scattered on the caldera in Oia. It is the most known image of Santorini after all, maybe even of the whole of Greece.</p>
        <p>If you want to see with your own eyes the splendid images of the sun setting in the boundless sea while the white houses are bathed in the warm lights of the sunset, you must know that most of these photos are taken from the ruins of the castle of Oia.</p>
        <p>But I warn you that you will not be alone. Depending on the season, hundreds, if not thousands of tourists gather in the area, all eager to take photos with the sunset or to snap a perfect selfie. It would be a good idea to get there at least two hours before sunset to choose your favorite spot. You can take a bottle of local wine or beer with you and just enjoy waiting for a memorable sunset.</p>
        <p>Even though we were there two hours earlier, when the sunset time came, people didn’t respect our personal space, it got very crowded rapidly, even though we were in the middle of the covid pandemic.</p>
        <p>If you arrive a little later and can’t find a good spot to admire the sunset from, but you don’t want to invade the personal space of others either, you can go down some steps that lead to the Ammoudi Port. The view from there is just as enchanting.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight3} alt="Santorini - Sunset seen from Oia" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Near the ruins of the Castle of Oia, there is the Castro house which is also a very popular place for photos at any time of day. You can enjoy the sunset a few steps above the Castro house as well.</p>
        <h2>Katharos Beach</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEvening2} alt="Santorini - Sunset seen from Katharos Beach" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Near Oia, approx. 1.5 kilometers (0.93 miles) or 20 minutes walk from the ruins of the Castle of Oia, there is Katharos beach, which is a wild beach with pebbles, and is spectacular, especially at sunset.</p>
        <p>We went there a couple of hours early to enjoy the beach itself (bring swimming shoes). Surrounded by the cliff, with no other people around us, even though it was the peak of the tourist season, we witnessed a breathtaking sunset.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniEvening2} alt="Santorini - Katharos Beach" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>This was our favorite spot because we enjoyed the spectacle of nature as the only spectators. So, for a truly romantic sunset without the crowds of Oia, opt for Katharos beach instead.</p>
        <h2>Imerovigli</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSunset1} alt="Santorini - Sunset seen from Imerovigli" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>On the hiking trail between Imerovigli and Oia, you can admire an extraordinarily beautiful sunset with Oia scattered on the caldera on the right, the sun in the center setting into the blue sea, and the volcano on the left. A picture values more than a thousand words.</p>
        <p>We were fortunate enough to witness this amazing sunset from <Link prefetch={false} href="/our-divine-cave-experience-in-santorini" title="Our Divine Cave Experience in Santorini" className="text-blue-600 underline hover:text-blue-800">our accommodation - Divine Cave Experience</Link>.</p>
        <p>You can also watch it from Skaros Rock.</p>
        <h2>Akrotiri Lighthouse</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniNight} alt="Santorini - Sunset seen from Akrotiri Lighthouse" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Akrotiri Lighthouse is in the southern part of the island, approx. 14 kilometers (8.69 miles) from the island’s capital - Fira.</p>
        <p>Near the lighthouse, you will find different paths in the grass that lead you to spots from where you can see how the sun sets in the sea of an intense, unreal blue. But here we found another spot that is perfect because we could frame the sunset and the lighthouse in the same picture. We climbed on the hill right before the tavern near the lighthouse. From there we had an overview of the whole of Santorini bathed in sunset lights, and in the photos we took, the lighthouse is a beautiful detail.</p>
        <h2>Admire the sunset from the boat or the helicopter</h2>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={santoriniSunset2} alt="Santorini - Admire the sunset from the boat or the helicopter" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>In Santorini are countless options of agencies or private operators that offer “sunset cruise” trips. You should search for them online or ask at your hotel reception and pick whatever suits best for you. Some of them offer pick-up from the hotel, others leave from Fira’s port or Ammoudi Bay or Vlychada or any other port, some offer dinner, and drinks, some offer private or semi-private tours, and so on. This one from <LinkExternal link="https://www.santosails.com/sailing-cruises/sunset-sailing-cruise/" title="Link to Santorini Santo Sails" text="Santo Sails" /> is just an example of a sunset cruise.</p>
        <p>If you want something even more special, you can opt for a helicopter ride at sunset.</p>
        <p>There are other places where you can witness splendid sunsets on the island of Santorini, but which we did not manage to check. One of them is in the village of Pyrgos, on the terrace of Franco’s Cafè, for example. We went there in the middle of the day and wanted to return for the sunset, but our plans changed.</p>
        <p>Regardless of the place, the sunsets on the island of Santorini are romantic and worth enjoying with a glass of Santorini wine and your loved one.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santorini1} alt="Santorini Sunsets Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={santorini2} alt="Santorini Sunsets Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}