import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";
import Image from "next/image";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import cityPhoto1 from "../../../../../../../public/copenhaga/DSCF0700_dioxdk-square.jpeg";
import cityPhoto2 from "../../../../../../../public/copenhaga/DSCF1002_gb5c3c-square.jpeg";
import cityPhoto3 from "../../../../../../../public/copenhaga/DSCF1163_hvfg2z.jpeg";
import cityPhoto4 from "../../../../../../../public/copenhaga/DSCF1502_hjmlbc.jpeg";
import cityPhoto5 from "../../../../../../../public/copenhaga/DSCF1559_j0msbq.jpeg";
import cityPhoto6 from "../../../../../../../public/copenhaga/DSCF1831_zbgp3z.jpeg";
import pinImage41 from "../../../../../../../public/copenhaga/pin-copenhagen-3days_qftven.jpeg";
import pinImage4 from "../../../../../../../public/copenhaga/pin-copenhagen-3days-2_mszdqv.jpeg";
import activityPhoto1 from "../../../../../../../public/copenhaga/IMG_20210910_092256_qry4l9.jpeg";
import activityPhoto2 from "../../../../../../../public/copenhaga/IMG_20210910_094245_acxxaa.jpeg";
import activityPhoto3 from "../../../../../../../public/copenhaga/IMG_20210911_113916_oa1oeu-square.jpeg";
import activityPhoto4 from "../../../../../../../public/copenhaga/IMG_20210911_152438_pmsfkf.jpeg";

const article = getArticle(4);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto2} alt="Three days in Copenhagen" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <hr className="mb-6" />
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div>
            <h2>Day 1</h2>
            <div><a href="#Nyhavn" className="text-blue-600 underline hover:text-blue-800">Nyhavn</a></div>
            <div><a href="#Old_Stock_Exchange" className="text-blue-600 underline hover:text-blue-800">Old Stock Exchange</a></div>
            <div><a href="#Christiansborg_Palace" className="text-blue-600 underline hover:text-blue-800">Christiansborg Palace</a></div>
            <div><a href="#boat_tour" className="text-blue-600 underline hover:text-blue-800">Boat Tour (Black Diamond library, the Opera, Nyhavn, the Little Mermaid statue, etc.)</a></div>
            <div><a href="#Agnete_Statue" className="text-blue-600 underline hover:text-blue-800">Agnete and the Merman Statue</a></div>
            <div><a href="#Gammel_Strand" className="text-blue-600 underline hover:text-blue-800">Gammel Strand</a></div>
            <div><a href="#City_Hall_Square" className="text-blue-600 underline hover:text-blue-800">City Hall Square</a></div>
            <div><a href="#Stroget_street" className="text-blue-600 underline hover:text-blue-800">Strøget street</a></div>
          </div>
          <div>
            <h2>Day 2</h2>
            <div><a href="#Torvehallerne_market" className="text-blue-600 underline hover:text-blue-800">Torvehallerne market</a></div>
            <div><a href="#Botanical_Garden" className="text-blue-600 underline hover:text-blue-800">Botanical Garden</a></div>
            <div><a href="#Natural_History_Museum" className="text-blue-600 underline hover:text-blue-800">Natural History Museum of Denmark</a></div>
            <div><a href="#Rosenborg_Castle" className="text-blue-600 underline hover:text-blue-800">Rosenborg Castle</a></div>
            <div><a href="#Frederiks_Church" className="text-blue-600 underline hover:text-blue-800">Frederik&#39;s Church</a></div>
            <div><a href="#Amalienborg" className="text-blue-600 underline hover:text-blue-800">Amalienborg</a></div>
            <div><a href="#Round_Tower" className="text-blue-600 underline hover:text-blue-800">Round Tower (Rundetaarn)</a></div>
            <div><a href="#Tivoli_Gardens" className="text-blue-600 underline hover:text-blue-800">Tivoli Gardens</a></div>
          </div>
          <div>
            <h2>Day 3</h2>
            <div><a href="#Amager_StrandPark" className="text-blue-600 underline hover:text-blue-800">Amager StrandPark</a></div>
            <div><a href="#Den_Bla_Planet" className="text-blue-600 underline hover:text-blue-800">National Aquarium of Denmark, Den Blå Planet</a></div>
            <div><a href="#Church_of_Our_Saviour" className="text-blue-600 underline hover:text-blue-800">Church of Our Saviour</a></div>
            <div><a href="#Freetown_Christiania" className="text-blue-600 underline hover:text-blue-800">Freetown Christiania</a></div>
            <div><a href="#Ny_Carlsberg_Glyptotek" className="text-blue-600 underline hover:text-blue-800">Ny Carlsberg Glyptotek</a></div>
            <div><a href="#Assistens_Cemetery" className="text-blue-600 underline hover:text-blue-800">Assistens Cemetery</a></div>
            <div>&nbsp;</div>
            <div><a href="#Extra" className="text-blue-600 underline hover:text-blue-800">Other options</a></div>
          </div>
        </div>
        <hr className="mb-6" />
        <p>This is my guide on what you can do in Copenhagen in just three days to get the most out of it. But first make sure you already read this article: <Link prefetch={false} href="/tips-for-visiting-copenhagen-for-the-first-time" title="Tips for visiting Copenhagen for the first time" className="text-blue-600 underline hover:text-blue-800">Tips for visiting Copenhagen for the first time</Link>. It includes lots of information about special accommodations, Danish food, means of transport around the city, and the Copenhagen Card which will save you money and will enable you to use public transport at your discretion. Also, you should read this article as well to find more about what you can visit in Copenhagen: <Link prefetch={false} href="/free-attractions-to-visit-in-copenhagen" title="15 free attractions in Copenhagen" className="text-blue-600 underline hover:text-blue-800">15 free attractions in Copenhagen</Link>. Some of these attractions are included in this guide below, but most of them aren’t, so it’s up to you to visit them if you have some extra time on your hands. Last, but not least, check out the videos we’ve put together to make an impression of what Copenhagen has to offer.</p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div>
            <Youtube videoId="zAgFIyUTVNI" />
          </div>
          <div>
            <Youtube videoId="tms-6Y5OYFc" />
          </div>
        </div>
        <h2>Day 1</h2>
        <p>Being the most popular spot in Copenhagen, it may be a good idea to visit <a id="Nyhavn">Nyhavn</a> early in the morning. The area will be much freer from tourists, and you can take the photos you want without the hassle.</p>
        <p>From there you have a 15-minute walk to the <a id="Old_Stock_Exchange">Old Stock Exchange</a> building with a very impressive exterior and a spire in the shape of twined dragons.</p>
        <p>After 100 meters you will reach <a id="Christiansborg_Palace">Christiansborg Palace</a>. You will need four tickets to visit different areas of the palace: The Royal Reception Rooms, The Royal Kitchen, The Ruins under the Palace, and The Royal Stables. With the Copenhagen Card, you will have all of them included. We enjoyed most the Royal Reception Rooms.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto3} alt="Christiansborg Palace - The Royal Stables" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto2} alt="Christiansborg Palace - outside the palace" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto1} alt="Christiansborg Palace - inside the palace" width={720} height={720} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>After you finished your royal visit, cross the street to take a <a id="boat_tour">boat tour<a id="Christiansborg_Palace">Christiansborg Palace</a></a> from the Ved Stranden station, also included in the Copenhagen Card. The tour is guided, and you will see some major attractions such as the Black Diamond library, the Opera, Nyhavn, and the Little Mermaid statue. This tour takes about an hour.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto6} alt="Copenhagen - Black Diamond library" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>When you return to Ved Stranden, look in the canal for the <a id="Agnete_Statue">Agnete and the Merman Statue</a>. The bronze sculptures depict a merman and his seven children begging Agnete to return home. We found it creepy and interesting at the same time.</p>
        <p>After another 150 meters, you will reach <a id="Gammel_Strand">Gammel Strand</a> which is supposed to be Copenhagen’s cradle. Copenhagen was founded as a small fishing and trading settlement in the 11th century in this area. The houses date back to the 18th and 19th centuries and are as charming and picturesque as the ones from Nyhavn.</p>
        <p>Head over to the <a id="City_Hall_Square">City Hall Square</a>, one of the main public squares of Copenhagen being a popular location for events, concerts, and demonstrations. From there you can go shopping on <a id="Stroget_street">Strøget street</a>, one of the longest pedestrian shopping streets in Europe. You will pass by the Caritas Fountain and the Stork Fountain and reach the King’s New Square, the largest square in the city surrounded by impressive buildings. You can grab a hot dog from a street vendor and enjoy your first evening in one of the happiest cities in the world wandering the streets or you can return to Nyhavn to admire this aesthetic site also at night.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m66!1m8!1m3!1d8998.858616707283!2d12.5779371!3d55.676562!3m2!1i1024!2i768!4f13.1!4m55!3e2!4m5!1s0x46525322aa676daf%3A0x99c2a00928e5eaeb!2sNyhavn%2C%20K%C3%B8benhavn%20K%2C%20Denmark!3m2!1d55.679776!2d12.591304099999999!4m5!1s0x4652531666d78e63%3A0xcb924fd6aad3ae55!2sB%C3%B8rsen%2C%20Copenhagen%2C%20Denmark!3m2!1d55.6755013!2d12.5840128!4m5!1s0x4652538d12a41301%3A0xb44cfa4245bd8df4!2sChristiansborg%20Copenhagen%2C%20Christiansborg%20Palace%2C%20Copenhagen%2C%20Denmark!3m2!1d55.676289!2d12.5804019!4m5!1s0x4652531132405b13%3A0xd5b59a4549d09a53!2sThe%20Grand%20Tour%20of%20Copenhagen%2C%20Ved%20Stranden%2C%20Copenhagen%2C%20Denmark!3m2!1d55.6775847!2d12.5804913!4m5!1s0x46525316dcbff121%3A0xffc50f2c11ae9ed5!2sAgnete%20og%20Havmanden%2C%20H%C3%B8jbro%2C%20Copenhagen%2C%20Denmark!3m2!1d55.677639299999996!2d12.5802315!4m5!1s0x46525316cc48f263%3A0x3cf3d1e36592af02!2sGammel%20Strand%2C%20K%C3%B8benhavn%2C%20Denmark!3m2!1d55.677633799999995!2d12.5783206!4m5!1s0x46525321d36e3015%3A0x117d3c48892c496f!2zU3Ryw7hnZXQsIFN0csO4Z2V0LCBDb3BlbmhhZ2VuLCBEZW5tYXJr!3m2!1d55.6773016!2d12.5713223!4m5!1s0x465253182013b227%3A0x36248075ccf0be0!2sKing's%20New%20Square%2C%20Kongens%20Nytorv%2C%20Copenhagen%2C%20Denmark!3m2!1d55.680521999999996!2d12.585956999999999!4m5!1s0x46525322aa676daf%3A0x99c2a00928e5eaeb!2sNyhavn%2C%20K%C3%B8benhavn%20K%2C%20Denmark!3m2!1d55.679776!2d12.591304099999999!5e0!3m2!1sen!2sro!4v1642610179190!5m2!1sen!2sro" />
        <h2>Day 2</h2>
        <p>Grab something to eat for breakfast from <a id="Torvehallerne_market">Torvehallerne market</a>. The duck sandwich from Ma Poule is to die for. Or if you prefer something sweet, try the porridge from Grød with homemade caramel sauce, roasted almonds, and fresh apples. Or better try them both.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto4} alt="Copenhagen - Torvehallerne market" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>After breakfast, take your morning stroll inside the <a id="Botanical_Garden">Botanical Garden</a>, home of Denmark’s largest collection of plants from all over the world, and maybe you’ll be lucky to encounter a joyful squirrel. The visit inside the Victorian Palm House is included in the Copenhagen Card.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto4} alt="Copenhagen - Botanical Garden" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Next head to the <a id="Natural_History_Museum">Natural History Museum of Denmark</a>, located in the corner of the Botanical Garden. In the inner courtyard, you will see Agpalilik - one of the largest iron meteorites in the world, sitting on the same steel sleigh that was used to pull it free from the rocks in Northwestern Greenland.</p>
        <p>At a distance of only 400 meters, you will reach <a id="Rosenborg_Castle">Rosenborg Castle</a>. Even though the ticket is included in the Copenhagen Card, you still need to book a timeslot before the visit. The castle’s gardens are worth a visit as well. If you happen to be there at 11:30 AM, you can see Den Kongelige Livgarde, the guard that march from Rosenborg Castle and execute the changing of the guard in front of Amalienborg at 12:00 PM.</p>
        <p>Don’t forget to stop and admire <a id="Frederiks_Church">Frederik’s Church</a>, popularly known as Marmorkirken on your way to <a id="Amalienborg">Amalienborg</a>.</p>
        <p>For views over Copenhagen, 34.8 meters above the street to be exact, head over to the <a id="Round_Tower">Round Tower (Rundetaarn)</a>. The Round Tower was built to enable astronomers from the University of Copenhagen to gaze at the stars far above the lights and the smoke of the city and was finished in 1642. King Christian IV was advised to place it outside Copenhagen, but he wanted it in the middle of the city close to the rest of the university. The observatory is the oldest functioning in Europe. Inside the tower, you will also find The Hollow Core. You can stand on a glass floor and look 25 meters down. Spooky. Besides the observatory, the hollow core, and the spiral ramp that goes up to the platform, you can also see The Planetarium, The Library Hall, and The Bell Loft.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto3} alt="Copenhagen - Seen from above" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>End your day with an evening full of joy at <a id="Tivoli_Gardens">Tivoli Gardens</a>, the second oldest amusement park in the world, opening its gates in 1843. Fairytale writer Hans Christian Andersen visited multiple times, as did Walt Disney who was so bewitched with Tivoli that he exclaimed to his wife: “Now this is what an amusement place should be!”. The Copenhagen Card covers your entry, but if you wish to try the rides, you must purchase additional tickets or a multi-ride wristband.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m70!1m12!1m3!1d10856.239616869032!2d12.568397289156245!3d55.679891694521366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m55!3e2!4m5!1s0x465253051285311b%3A0x7374ede35ce9623b!2sTorvehallerne!3m2!1d55.6836899!2d12.569765499999999!4m5!1s0x4652531ad1631ced%3A0x1336d3d2f30fb334!2sBotanical%20Garden!3m2!1d55.6874295!2d12.5729916!4m5!1s0x4652531c98c88a69%3A0xe671ef5e7dd8fd4e!2sStatens%20Naturhistoriske%20Museum!3m2!1d55.6874652!2d12.5767806!4m5!1s0x4652531b429e531d%3A0x52359c3345281b3c!2sRosenborg%20Castle!3m2!1d55.685857!2d12.577218!4m5!1s0x46525318a59afc11%3A0xb1f38e76a7e7960b!2sMarmorkirken%20Station!3m2!1d55.6849827!2d12.5895742!4m5!1s0x46525322363e0673%3A0x5cf17fab9d15553f!2sAmalienborg!3m2!1d55.684058799999995!2d12.593020099999999!4m5!1s0x46525319c09c8cb3%3A0xbbe45b15a6fc4c20!2sAtelier%20September!3m2!1d55.6821553!2d12.5829869!4m5!1s0x4652531a7dbeff47%3A0x6c74bdf274c54d8!2sRundet%C3%A5rn!3m2!1d55.681335499999996!2d12.5757152!4m5!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2sTivoli%20Gardens%2C%20Vesterbrogade%2C%20K%C3%B8benhavn%20V%2C%20Denmark!3m2!1d55.673684099999996!2d12.5681471!5e0!3m2!1sen!2sro!4v1642617728755!5m2!1sen!2sro" />
        <h2>Day 3</h2>
        <p>Begin your day with some good vibes on <a id="Amager_StrandPark">Amager StrandPark</a>, an artificial 2-kilometer-long beach, and a popular place for active Copenhageners.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cityPhoto5} alt="Copenhagen - Amager StrandPark" width={1248} height={703} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Then head over to the <a id="Den_Bla_Planet">National Aquarium of Denmark, Den Blå Planet</a>. The ticket is not included in the Copenhagen Card and costs approximately 25 EUR/28 USD, but we thought it was worth it. Access to Den Blå Planet is limited and tickets must be purchased in their webshop for a designated timeslot. We saw some very interesting species, like Arapaima, a gigantic fish from the Amazon. They are among the world’s largest freshwater fish, and they are really impressive. Another cool feature of this aquarium is that you can touch some of the animals. I touched a starfish and a stingray.</p>
        <p>From Kastrup metro station, you will reach Christianshavn in 20 minutes with M2. Nearby you will find the <a id="Church_of_Our_Saviour">Church of Our Saviour</a>, a baroque church, most famous for the external spiral winding staircase that can be climbed to the top. Be warned though the steps can be very narrow and steep and that are 400 of them, the views are totally worth it.</p>
        <p>Close to the Church of Our Saviour, there is <a id="Freetown_Christiania">Freetown Christiania</a>, a community that has its own rules and regulations completely independent of the Danish government. You can find lots of information about Christiania online and it is described everywhere as a must-see attraction in Copenhagen. This is the reason I’m mentioning it, but I have to say that I didn’t enjoy it at all. I didn’t feel that hygge vibe that I felt in the rest of Copenhagen, it wasn’t even clean, and I didn’t feel safe, although everybody says that is a safe place, this is how I felt. Long story short, I find it funny that at the time of this article being written, Christiania has 24k reviews on Google with 4.4, but one of the most iconic images of Copenhagen - the Little Mermaid statue - has only 15k reviews with 4.0. Maybe it’s because the tourists can’t get stoned with the little mermaid.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={activityPhoto1} alt="Copenhagen - Walking on the streets" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Head to <a id="Ny_Carlsberg_Glyptotek">Ny Carlsberg Glyptotek</a> to enjoy a really beautiful art museum and to meet some Egyptian mummies.</p>
        <p>End your day in a calm and relaxing way, the same way it has begun, but this time in <a id="Assistens_Cemetery">Assistens Cemetery</a>. I don’t know what you are thinking, but the cemetery is actually a place where many locals take their strolls, and it’s really like a big park full of squirrels. Besides that, it is the resting place of many famous Danes, like the author Hans Christian Andersen, “the father of existentialism” Søren Kierkegaard, and the Golden Age painter Christen Købke.</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d36006.421435968135!2d12.568043736849539!3d55.66462080324002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m5!1s0x4652536a5bd9c8a7%3A0xf9685ff987876942!2sAmager%20Strandpark%2C%20Amager%20Strand%20Promenaden%201%2C%202300%20K%C3%B8benhavn%2C%20Denmark!3m2!1d55.654532499999995!2d12.6496067!4m5!1s0x4653ab7d0c9194f5%3A0x631374f9159e11dc!2sDen%20Bl%C3%A5%20Planet%2C%20Jacob%20Fortlingsvej%2C%20Kastrup%2C%20Denmark!3m2!1d55.6381446!2d12.6561446!4m5!1s0x46525339463aedc9%3A0xc11801eab74fb42b!2sChurch%20of%20Our%20Saviour%2C%20Sankt%20Ann%C3%A6%20Gade%2C%20Copenhagen%2C%20Denmark!3m2!1d55.6727591!2d12.5939553!4m5!1s0x4652533907ed3da7%3A0xae183de2099528b9!2sChristiania%2C%20Copenhagen%20Municipality%2C%20Denmark!3m2!1d55.673412!2d12.5964061!4m5!1s0x465253130411747d%3A0x599f2e4fe338e7a1!2sNy%20Carlsberg%20Glyptotek%2C%20Dantes%20Plads%2C%20Copenhagen%2C%20Denmark!3m2!1d55.672979999999995!2d12.572543!4m5!1s0x465253ac149dd23b%3A0x68e7d52ac48fdeb!2sAssistens%20Kirkeg%C3%A5rd%2C%20Kapelvej%2C%20K%C3%B8benhavn%20N%2C%20Denmark!3m2!1d55.6910102!2d12.550153199999999!5e0!3m2!1sen!2sro!4v1642617754807!5m2!1sen!2sro" />
        <h2>Conclusion</h2>
        <p>This guide was based on our experience in Copenhagen. We stayed 5 days in September and the weather was nice enough to walk a lot. We visited more attractions in those 5 days than I presented here, but I selected the ones that fitted best a 3-days plan. There were lots of other attractions we wanted to visit, but we just couldn’t in the time frame we had. Also, we visited Copenhagen in the pandemic and some of the attractions were closed for different reasons. On the other hand, there weren’t so many tourists.</p>
        <p><a id="Extra"></a>Some of the attractions that are on our list for a future trip to Copenhagen:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.visitcarlsberg.com/" title="Link to Carlsberg Brewery" text="Carlsberg Brewery" /></li>
          <li>Amalienborg</li>
          <li>The Royal Library (Det Kongelige Bibliotek)</li>
          <li>City hall Tower</li>
          <li>Vestre Kirkegård</li>
          <li>dinner in a fancy restaurant</li>
          <li>the amber museum</li>
          <li>and many more</li>
        </ul>
        <p>You can choose Copenhagen for a 3-day city break to visit the major attractions, but this wonderful city is the kind of destination to return to.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage41} alt="Three days in Copenhagen - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={pinImage4} alt="Three days in Copenhagen - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
