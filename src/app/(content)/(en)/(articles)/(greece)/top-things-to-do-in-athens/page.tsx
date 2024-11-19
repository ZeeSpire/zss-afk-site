import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
// import Link from "next/link";
import LinkExternal from "@/components/linkexternal/LinkExternal";

// import acropolisMuseumAthens from "../../../../../../../public/athens/acropolis-museum-athens.jpg"
import acropolisSeenFromPhilopapposHill from "../../../../../../../public/athens/acropolis-seen-from-philopappos-hill.jpg"
import athensCentralMarketVarvakios from "../../../../../../../public/athens/athens-central-market-varvakios.jpg"
import athensNationalGarden from "../../../../../../../public/athens/athens-national-garden.jpg"
import beautifulDoorAthensGreece1 from "../../../../../../../public/athens/beautiful-door-athens-greece-1.jpg"
import beautifulDoorAthensGreece2 from "../../../../../../../public/athens/beautiful-door-athens-greece-2.jpg"
import beautifulDoorAthensGreece3 from "../../../../../../../public/athens/beautiful-door-athens-greece-3.jpg"
import erechtheionAcropolisAthens from "../../../../../../../public/athens/erechtheion-acropolis-athens.jpg"
import insideATavernInAthens from "../../../../../../../public/athens/inside-a-tavern-in-athens.jpg"
import kerameikosCemeteryAthens from "../../../../../../../public/athens/kerameikos-cemetery-athens.jpg"
import littleKookDecorAthens1 from "../../../../../../../public/athens/little-kook-decor-athens-1.jpg"
// import littleKookDecorAthens2 from "../../../../../../../public/athens/little-kook-decor-athens-2.jpg"
import localGreekFoodAthens from "../../../../../../../public/athens/local-greek-food-athens.jpg"
// import monastirakiSquareAtNightAthens from "../../../../../../../public/athens/monastiraki-square-at-night-athens.jpg"
import panathenaicStadiumAthens from "../../../../../../../public/athens/panathenaic-stadium-athens.jpg"
import parthenonAcropolisAthensWithoutPeople from "../../../../../../../public/athens/parthenon-acropolis-athens-without-people.jpg"
// import parthenonAcropolisAthens from "../../../../../../../public/athens/parthenon-acropolis-athens.jpg"
// import parthenonFromTheDroneAthens1 from "../../../../../../../public/athens/parthenon-from-the-drone-athens-1.jpg"
import parthenonFromTheDroneAthens2 from "../../../../../../../public/athens/parthenon-from-the-drone-athens-2.jpeg"
import pinAthens from "../../../../../../../public/athens/pin-athens.jpg"
import pinAthens2 from "../../../../../../../public/athens/pin-athens2.jpg"
import romanAgoraAthens from "../../../../../../../public/athens/roman-agora-athens.jpg"
// import scenicViewOverAthens1 from "../../../../../../../public/athens/scenic-view-over-athens-1.jpg"
// import scenicViewOverAthens2 from "../../../../../../../public/athens/scenic-view-over-athens-2.jpg"
import syntagmaSquareChangingOfTheGuardAthens from "../../../../../../../public/athens/syntagma-square-changing-of-the-guard-athens.jpg"
import templeOfAthenaNikeAcropolisAthens from "../../../../../../../public/athens/temple-of-athena-nike-acropolis-athens.jpg"
import templeOfHephaestusAthens from "../../../../../../../public/athens/temple-of-hephaestus-athens.jpg"
import theatreOfDionysusAcropolisSlopeAthensAndAcropolisMuseum from "../../../../../../../public/athens/theatre-of-dionysus-acropolis-slope-athens-and-acropolis-museum.jpg"
// import theatreOfDionysusAcropolisSlopeAthens from "../../../../../../../public/athens/theatre-of-dionysus-acropolis-slope-athens.jpg"
import zizisFish from "../../../../../../../public/athens/zizis-fish.jpg"

const article = getArticle(28);

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
        <Image className="mb-4" src={parthenonFromTheDroneAthens2} alt="Top 15 things to do in Athens plus other recommendations" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>Athens wasn’t on our bucket list for the near future, but we are glad that things have settled in such a way that we traveled to this steeped-in-history city.</p>
        <p>What we knew about Athens was the super-popular image of the Acropolis and the fact that it is the capital of Greece. We also knew that it is one of the oldest continuously inhabited cities in the world, with a history that spans over 3,400 years. Athens is also the oldest capital city in Europe, but although it has roots in ancient times, it remains a vibrant and cosmopolitan city that attracts millions of visitors from around the world every year.</p>
        <p>Being a trip planned shortly before, we did not find many accommodation options. We chose to stay at <LinkExternal link="https://www.booking.com/hotel/gr/the-social-athens-a-member-of-radisson-indi.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to The Social Athens Hotel, a member of Radisson Individuals website" text="The Social Athens Hotel, a member of Radisson Individuals" />, with which we were very satisfied, and we have nothing but praise for this hotel. All the employees were smiling, we received bottled water every day, we got a more spacious room than we had booked, and the toiletries were from Apivita, the beloved Greek brand. And it was a good deal, as it didn’t cost much either.</p>
        <p>Here are five more spectacular hotel options in Athens:</p>
        <ul className="list-inside list-disc ml-4 mb-4">
          <li><LinkExternal link="https://www.booking.com/hotel/gr/asomaton.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Asomaton's website" text="Asomaton" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/the-modernist-athens.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to The Modernist Athens's website" text="The Modernist Athens" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/grandbretagneathens.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Hotel Grande Bretagne, a Luxury Collection Hotel, Athens's website" text="Hotel Grande Bretagne, a Luxury Collection Hotel, Athens" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/coco-mat-athens-bc.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Coco-mat Athens BC's website" text="Coco-mat Athens BC" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/gr/mgallery-athens-capital.en-gb.html?aid=7913345&no_rooms=1&group_adults=2" title="Link to Athens Capital Center Hotel - MGallery Collection's website" text="Athens Capital Center Hotel - MGallery Collection" /></li>
        </ul>
        <p>But let’s jump into our top 15 things to do in Athens after a lot of research and after we tried them all and more!</p>
        <h2>Top 15 things to do in Athens</h2>
        <p>Before starting, it’s worth mentioning that there are lots of archaeological sites in this city. For some, you have to pay a ticket to enter, while others can be visited for free as they are on the side of the road or inside some metro stations. For the main archaeological sites, there is a special ticket package valid for 5 days that costs 30 euros at the time of writing this article (June 2023). This combined ticket includes the entry to the most important archeological sites: the Acropolis and the Slopes (both entries), the Ancient Agora, the Roman Agora, Kerameikos, Hadrian’s Library, the Temple of Olympian Zeus, and Aristotle’s Lyceum. I will talk about each one below, but the main recommendation is to purchase this type of ticket.</p>
        <h3>1. Stand in awe of the mighty Acropolis</h3>
        <p>The Acropolis is one of the most famous archaeological sites not only in Greece but in the world, and it includes several ancient buildings and monuments, including the Parthenon, the Propylaea, the Temple of Athena Nike, and the Erechtheion.</p>
        <p>In ancient Greek mythology, the goddess Athena was the patron goddess of Athens. Athena was the goddess of wisdom, warfare, and crafts, and she was considered one of the twelve Olympian gods and goddesses who resided on Mount Olympus. The Parthenon temple, located on the Acropolis Hill, was dedicated to Athena, and it is considered one of the greatest architectural achievements of ancient Greece.</p>
        <p>We visited Athens in the off-season, at the beginning of April, and there were no queues anywhere, but still, I recommend arriving at the Acropolis when it opens early in the morning to take beautiful shots with as few people as possible.</p>
        <p>If there is just one thing you have to tick off while in Athens, this is it. The Acropolis alone made our trip worthwhile.</p>
        {/* image 16/9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center font-light text-sm"><Image className="mb-4" src={templeOfAthenaNikeAcropolisAthens} alt="Athens - Temple of Athena Nike" width={720} height={405} sizes="(max-width: 768px) 90vw, 20vw" />Temple of Athena Nike</div>
          <div className="text-center font-light text-sm"><Image className="mb-4" src={parthenonAcropolisAthensWithoutPeople} alt="Athens - Parthenon" width={720} height={405} sizes="(max-width: 768px) 90vw, 20vw" />Parthenon</div>
          <div className="text-center font-light text-sm"><Image className="mb-4" src={erechtheionAcropolisAthens} alt="Athens - Erechtheion" width={720} height={405} sizes="(max-width: 768px) 90vw, 20vw" />Erechtheion</div>
        </div>
        <h3>2. Check out Hadrian’s Library</h3>
        <p>Hadrian’s Library was built by the Roman Emperor Hadrian in the 2nd century AD and was the largest library in Athens. The western wall and the columns are very impressive, and although they can be seen from outside the archaeological site, we didn’t regret entering, especially since we bought the ticket package.</p>
        <h3>3. Walk through the Ancient Agora</h3>
        <p>The Ancient Agora was the political and commercial center of ancient Athens and included several important buildings, the most impressive of which seemed to us to be the Temple of Hephaestus. We took lots of photos of it from different angles, but other people appear in most of the photos.</p>
        <p>We walked through the Ancient Agora like in a park. It was a really interesting walk.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={templeOfHephaestusAthens} alt="Athens - Temple of Hephaestus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>4. Don’t miss the Temple of Olympian Zeus and Hadrian’s Arch</h3>
        <p>The Temple of Olympian Zeus is one of the largest ancient temples in Greece and was dedicated to the god Zeus. It was built over several centuries and completed in the 2nd century AD.</p>
        <p>I could only imagine how impressive it once was based on the few columns that were still standing. Most of the columns were under maintenance and couldn’t be seen. Right next to this site, is Hadrian’s Arch, which can be visited for free. Don’t miss it.</p>
        <h3>5. Take in the history of the Roman Agora</h3>
        <p>The Roman Agora was built during the Roman period and includes several important structures, such as the Tower of the Winds, the Gate of Athena Archegetis, and the Fethiye Mosque.</p>
        <p>Inside the site, you can see the details carved into the marble up close, as well as a beautiful mosaic, or what remains of it.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={romanAgoraAthens} alt="Athens - The Roman Agora" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>6. Visit Aristotle’s Lyceum</h3>
        <p>This was the place where the philosopher Aristotle taught and conducted his philosophical and scientific research. The school was established in the 4th century BC and was one of the most prominent educational institutions in ancient Greece. Because it closes at 3 PM and we were 5 minutes late, we’ve seen it from outside, unfortunately.</p>
        <h3>7. Stroll through the tombs of Kerameikos</h3>
        <p>The Kerameikos Cemetery was the main cemetery of ancient Athens from the 8th century BC to the Roman period. The walk here was quiet, with only a few tourists.</p>
        <p>Don’t forget to enter the museum before you leave. Artifacts found in the ancient tombs are exhibited in the museum, and they were really surprising.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={kerameikosCemeteryAthens} alt="Athens - The Kerameikos Cemetery" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>8. Go to the Acropolis Museum</h3>
        <p>The Acropolis Museum is an excellent complement to a visit to the Acropolis itself. The museum houses a large collection of artifacts from the Acropolis, including statues, reliefs, and other ancient objects.</p>
        <p>One of the most impressive features of the Acropolis Museum is its glass floor, which allows visitors to view the remains of an ancient Athenian neighborhood that was discovered during the construction of the museum. The museum also features a restaurant with a stunning view of the Acropolis and the city of Athens.</p>
        <p>I would recommend visiting this one in the afternoon because it stays open longer than the archaeological sites above. You can check out the opening hours on the  <LinkExternal link="https://www.theacropolismuseum.gr/en" title="Link to The Acropolis Museum's website" text="official website" />.</p>
        <p>In some parts of the museum, you can take photos, while in others, it is prohibited.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={theatreOfDionysusAcropolisSlopeAthensAndAcropolisMuseum} alt="Athens - The Acropolis Museum and Theatre of Dionysus" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>9. Run on the track at Panathenaic Stadium</h3>
        <p>The Panathenaic Stadium is the only stadium in the world made entirely of marble and was originally built in the 4th century BC as a venue for the Panathenaic Games, a festival held every four years in honor of the goddess Athena. The stadium was renovated and rebuilt several times over the centuries, with the most significant renovation taking place in the 2nd century AD by the Roman Emperor Hadrian.</p>
        <p>The current form was given when Athens was chosen as the venue for the first Olympic Games in 1896. For its reconstruction, Pentelic marble was used, a white marble used for sculpture and buildings that has been quarried at Mt. Pentelicus, north of Athens.</p>
        <p>We paid 10 euros per ticket, including an audio guide. Because the audio guide had to be returned in 30 minutes, we hurried to visit the stadium, but we could have stayed even longer. It was really fun, we sat on the marble seats and ran on the track, and it was one of our favorite attractions in Athens.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={panathenaicStadiumAthens} alt="Athens - Panathenaic Stadium" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>10. Attend the changing of the guard ceremony in Syntagma Square</h3>
        <p>Syntagma Square is the central square of Athens and is located in the heart of the city’s commercial district. The square is named after the Greek word “syntagma” which means “constitution”, and it’s home to the Greek Parliament building. The changing of the guard ceremony, known as the Evzones, takes place in front of the Parliament building every hour.</p>
        <p>It is a popular attraction for tourists, so if it’s something you’re interested in, try to get there as early as possible to get a seat in front.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={syntagmaSquareChangingOfTheGuardAthens} alt="Athens - Attend the changing of the guard ceremony in Syntagma Square" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>11. Take a break inside the National Gardens of Athens</h3>
        <p>The National Garden of Athens offers a peaceful escape from the hustle and bustle of the city. The public garden is located in the heart of Athens and features a wide variety of plants, flowers, and trees, as well as several ponds and a small zoo.</p>
        <p>We walked through the smell of blossoming orange trees and the sound of parrots. It was awesome.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={athensNationalGarden} alt="Athens - National Gardens" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>12. Go shopping in the Varvakios Central Market</h3>
        <p>The Central Market of Athens, also known as Varvakios (or Varvakeios) Market, is one of the city’s oldest and largest markets. It’s located in the heart of Athens, near Omonia Square, and it is a tourist attraction in itself.</p>
        <p>It’s known for its lively atmosphere and is a great place to experience the local culture and cuisine. The market is particularly busy in the mornings when locals come to shop for fresh ingredients for their meals.</p>
        <p>We bought Greek mountain tea from here as a souvenir. The tea is made from dried Sideritis plants and tastes similar to other herbs for tea, like mint or chamomile.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={athensCentralMarketVarvakios} alt="Athens - Varvakios Central Market" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>13. Climb Philopappos Hill</h3>
        <p>Before going to Athens, we read about Lycabettus Hill, which represents the highest point in Athens, with stunning views of the city and a small chapel at the top. We also read about Areopagus Hill, which is located northwest of the Acropolis and has panoramic views of the city.</p>
        <p>But we chose to climb Philopappos Hill. This hill is known for its scenic views of Athens, particularly of the Acropolis and the city skyline, and it’s a great place to escape the crowds and experience a quieter side of the city.</p>
        <p>At the summit of the hill is the Philopappos Monument, a grand mausoleum built in honor of Philopappos, a prince from the Kingdom of Commagene who lived in Athens in the 2nd century AD.</p>
        <p>Even though it was a rainy day, the climb up the hill seemed easy, and the view was worth all the effort.</p>
        {/* image 16/9 */}
        <Image className="mb-4" src={acropolisSeenFromPhilopapposHill} alt="Athens - Acropolis seen from Philopappos Hill" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>14. Explore the central neighborhoods</h3>
        <p>Athens is made up of many distinct neighborhoods, each with its own unique character and atmosphere.</p>
        <p>You can spend a couple of hours wandering the streets of Plaka, the oldest neighborhood in Athens, known for its charming cobblestone streets, quaint cafes, and shops selling handmade crafts.</p>
        <p>Monastiraki is a bustling neighborhood that’s popular with tourists and locals alike. It’s home to the famous Monastiraki Flea Market, where you can find all sorts of souvenirs, antiques, and other goods.</p>
        <p>Psirri is an up-and-coming neighborhood known for its trendy cafes, bars, and restaurants.</p>
        <p>Anafiotika is a small and charming neighborhood located in the historic district of Plaka, just below the Acropolis. It’s known for its distinctive island-like atmosphere.</p>
        <p>We spent a few hours here early in the morning, enjoying a cup of coffee and a delicious spanakopita (a pie with spinach and feta cheese). Maybe this is why Anafiotika was our favorite neighborhood in Athens.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={beautifulDoorAthensGreece1} alt="Athens - Beautiful Door 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={beautifulDoorAthensGreece2} alt="Athens - Beautiful Door 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={beautifulDoorAthensGreece3} alt="Athens - Beautiful Door 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h3>15. Indulge in Greek food</h3>
        <p>In Athens, you can find a lot of options where you can dine, including street food, taverns, steakhouse restaurants, and sky bars. Visiting so many places, naturally, we needed “fuel”. We opted especially for quick bites on the street and in taverns; in this way, we made the most of our time and didn’t even break the bank.</p>
        <h2>These are the places where we ate and which we can recommend:</h2>
        <h3>1. Kostas Souflaki</h3>
        <p>Located in Agia Irini Square, it is a small place that sells authentic souflaki. These were the best pork souflakis we had while in Athens, and maybe in our lives. They were super delicious, and they had a slightly spicy tomato sauce that made them different.</p>
        <p>Unfortunately, the place is closed on Sundays, and we were left with an unsatisfied appetite when we returned for the best souflaki.</p>
        <h3>2. Zisis fish in a cone</h3>
        <p>We ate here twice. The first time, we sat at the table and ordered three cones: one with shrimp, one with anchovies, and one with squid. We liked only the anchovies and the squid.</p>
        <p>The prices are higher if you sit down, this is why we recommend taking a cone and eating it while wandering the streets, as we did the second time.</p>
        <h3>3. Falafellas</h3>
        <p>At Falafellas, we had some super tasty wraps. There are two choices: falafel or meatball wrap; each comes in two sizes. We stood in line to get our hands on these delicious wraps. The whole area was filled with people eating falafel from Falafellas, from locals to tourists, from youngsters to seniors.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-4" src={zizisFish} alt="Athens - Zisis fish in a cone" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={insideATavernInAthens} alt="Athens - Inside a tavern" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-4" src={localGreekFoodAthens} alt="Athens - Local greek food" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h3>4. Krasopoulio tou Kokkora Tavern</h3>
        <p>This is an authentic Greek restaurant, popular with locals, and quieter than other places. A nice gesture was to offer us tap water from the house.</p>
        <p>Here, we had the best meal while in Athens. We ordered dolmades, which are stuffed grape leaves filled with rice; the customary Greek salad; some simple and rustic zucchini croquettes; and pork souvlaki, of course. Everything was fresh and delicious.</p>
        <p>We also tried halva for dessert, which we didn’t like too much; it was too sweet for our taste. Only after we ordered it did we notice that at the other tables, halva was offered from the house. So we were even more sorry that we ordered it.</p>
        <h3>5. Little Kook</h3>
        <p>This is a fairytale-looking cafe, very close to Krasopoulio tou Kokkora Tavern. We sat here because we liked the decor very much. We understood that the decoration changes depending on the time of year (in October it is decorated for Halloween, in December it is dedicated to Christmas, etc.). When we were there, the theme was Alice in Wonderland, and probably this is the usual setting.</p>
        <p>Although you feel like you’re in a fairy tale (even the waiters are dressed accordingly), the cafe is very popular among tourists, so it can be rather crowded. The prices are high for the quality offered, and we didn’t like anything from what we ordered. I would normally say that this is a tourist trap, but we liked the decor and had fun taking pictures of it, so I can’t say that I didn’t like it at all. </p>
        {/* image 16/9 */}
        <Image className="mb-4" src={littleKookDecorAthens1} alt="Athens - Little Kook" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>6. Lukumades</h3>
        <p>Near Agia Irini Square, we found a wonderful place, which is always crowded, that sells Loukoumades. Loukoumades are small fried dough balls drizzled with honey syrup and sprinkled with cinnamon. The place is called <LinkExternal link="https://www.lukumades.com/" title="Link to Lukumades's website" text="Lukumades" />. You could choose from several toppings, but we chose the classic version: honey + cinnamon. We ate them hot, and they were delicious.</p>
        <p>This was our Athenian experience. We spent two and a half days in Athens, during which we managed to take the pulse of the city, visit the most important archaeological sites, walk through the charming neighborhoods of Athens, and taste the food we were longing for.</p>
        <p>If you want to see footage from the spot, where we walked, and what we saw, you can find a playlist dedicated to Greece on our <LinkExternal link="https://www.youtube.com/channel/UC6cO4CO-T5PGkeXWc8Sf1lw" title="Link to AFKology YouTube channel" text="YouTube channel" />.</p>
        <p>Enjoy life!</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-4" src={pinAthens} alt="Athens - Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-4" src={pinAthens2} alt="Athens - Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
