import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";
import GoogleMaps from "@/components/googlemaps/GoogleMaps";

import aperitivoItalianoMateraAperol from "../../../../../../../public/matera/aperitivo-italiano-matera-aperol.jpg";
import aperitivoItalianoMateraBruschetta from "../../../../../../../public/matera/aperitivo-italiano-matera-bruschetta.jpg";
import materaItaly1 from "../../../../../../../public/matera/matera-italy-1.jpeg";
import materaItaly3 from "../../../../../../../public/matera/matera-italy-3.jpg";
import materaItaly4 from "../../../../../../../public/matera/matera-italy-4.jpg";
import materaItalyAtNight from "../../../../../../../public/matera/matera-italy-at-night.jpg";
import materaItalyBelvedereFromSaintAgostino from "../../../../../../../public/matera/matera-italy-belvedere-from-saint-agostino.jpg";
import materaItalyCasaGrottaCeraUnaVolta from "../../../../../../../public/matera/matera-italy-casa-grotta-c-era-una-volta.jpg";
import materaItalyCasaGrottaDelCasalnuovoBathroom from "../../../../../../../public/matera/matera-italy-casa-grotta-del-casalnuovo-bathroom.jpg";
import materaItalyCasaGrottaDelCasalnuovoBedroom from "../../../../../../../public/matera/matera-italy-casa-grotta-del-casalnuovo-bedroom.jpg";
import materaItalyCasaGrottaDelCasalnuovoDetails from "../../../../../../../public/matera/matera-italy-casa-grotta-del-casalnuovo-details.jpg";
import materaItalyCasaGrottaDiVicoSolitario1 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-1.jpg";
import materaItalyCasaGrottaDiVicoSolitario2 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-2.jpg";
import materaItalyCasaGrottaDiVicoSolitario3 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-3.jpg";
import materaItalyCasaGrottaDiVicoSolitario4 from "../../../../../../../public/matera/matera-italy-casa-grotta-di-vico-solitario-4.jpg";
import materaItalyCattedraleExterior from "../../../../../../../public/matera/matera-italy-cattedrale-exterior.jpg";
import materaItalyCattedraleInterior from "../../../../../../../public/matera/matera-italy-cattedrale-interior.jpg";
import materaItalyChiesaDelPurgatorio1 from "../../../../../../../public/matera/matera-italy-chiesa-del-purgatorio-1.jpeg";
import materaItalyChiesaDelPurgatorio2 from "../../../../../../../public/matera/matera-italy-chiesa-del-purgatorio-2.jpeg";
import materaItalyChiesaDelPurgatorio3 from "../../../../../../../public/matera/matera-italy-chiesa-del-purgatorio-3.jpeg";
import materaItalyChiesaDiSanFrancescoDiAssisi from "../../../../../../../public/matera/matera-italy-chiesa-di-san-francesco-di-assisi.jpg";
import materaItalyChiesaDiSanGiovanniBattista from "../../../../../../../public/matera/matera-italy-chiesa-di-san-giovanni-battista.jpg";
import materaItalyChiesaDiSanPietroCaveoso from "../../../../../../../public/matera/matera-italy-chiesa-di-san-pietro-caveoso.jpg";
import materaItalyChiesaDiSantaLuciaAlleMalveExterior from "../../../../../../../public/matera/matera-italy-chiesa-di-santa-lucia-alle-malve-exterior.jpg";
import materaItalyChiesaDiSantaLuciaAlleMalveNecropolis from "../../../../../../../public/matera/matera-italy-chiesa-di-santa-lucia-alle-malve-necropolis.jpg";
import materaItalyChiesaRupestreDiSantaMariaDiIdris from "../../../../../../../public/matera/matera-italy-chiesa-rupestre-di-santa-maria-di-idris.jpg";
import materaItalyFontanaDellAmore from "../../../../../../../public/matera/matera-italy-fontana-dell-amore.jpg";
import materaItalyPalazzoDegliAbatiRoom from "../../../../../../../public/matera/matera-italy-palazzo-degli-abati-room.jpg";
import materaItalyPalombaroLungo from "../../../../../../../public/matera/matera-italy-palombaro-lungo.jpg";
import materaItalyParcoRegionaleDellaMurgiaMateranaView from "../../../../../../../public/matera/matera-italy-parco-regionale-della-murgia-materana-view.jpg";
import materaItalyParcoRegionaleDellaMurgiaMaterana from "../../../../../../../public/matera/matera-italy-parco-regionale-della-murgia-materana.jpg";
import materaItalyStreet1 from "../../../../../../../public/matera/matera-italy-street-1.jpg";
import materaItalyStreet2 from "../../../../../../../public/matera/matera-italy-street-2.jpg";
import materaItalyStreet3 from "../../../../../../../public/matera/matera-italy-street-3.jpg";
import materaPin1 from "../../../../../../../public/matera/matera-pin-1.jpg";
import materaPin2 from "../../../../../../../public/matera/matera-pin-2.jpg";

const article = getArticle(23);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItaly1} alt="Matera Italy - View of Matera Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <h2>Why Matera should be on your travel list</h2>
        <p>The Italian city of Matera was the <LinkExternal link="https://www.europarl.europa.eu/news/en/headlines/society/20181205STO20960/plovdiv-and-matera-european-capitals-of-culture-in-2019" title="Link to European capital of culture" text="European capital of culture" /> in 2019, along with the city of Plovdiv in Bulgaria. That’s when I saw for the first time photos of the cave dwellings carved in rock in the Gravina river canyon. And that’s when I realized that I want to see with my own eyes this city that seemed to be from a very distant world.</p>
        <p>Matera is a city in southern Italy that has a rich history dating back over 9,000 years. Located in the Basilicata region of the country, it is considered one of the oldest continuously inhabited settlements in the world. At least, this is the information found on certain sites, while on others things differ. For example, on this <LinkExternal link="https://www.waitaly.net/en/matera-the-city-of-culture-landscape-and-heritage/#:~:text=Italy%20is%20famous%20for%20its,the%20UNESCO%20World%20Heritage%20sites" title="Link to WaItaly website" text="website" /> I found that “Matera is the oldest city in Italy and in Europe”, while on others is written that “Plovdiv is considered to be the oldest continuously inhabited city in Europe and one of the oldest in the world”. Plovdiv is on our destinations list as well.</p>
        <p>Nevertheless, Matera is famous for its unique architecture, including the “sassi”, a series of ancient cave dwellings carved into the rock. The sassi have been inhabited since prehistoric times and were used as homes, stables, and even churches until the 1950s.</p>
        <p>The depopulation of Matera in the 1950s was a significant event in the history of the city. In the mid-20th century, Matera was one of the poorest and most overcrowded cities in Italy, and its residents faced a range of social and economic challenges. The living conditions in the Sassi neighborhood were particularly difficult, with poor sanitation, limited access to water, and limited space.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItaly3} alt="Matera Italy - On the streets" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>To address these issues, the Italian government initiated a program in the 1950s to relocate residents of the Sassi to new housing developments on the outskirts of the city. This relocation was carried out rapidly and involved the forced eviction of many residents, who were given little notice and few options. As a result, many families were forced to leave behind their homes, businesses, and communities, and start new lives in unfamiliar surroundings.</p>
        <p>Sassi di Matera has been restored and revitalized, becoming a major tourist destination and cultural attraction. The once-abandoned houses have been restored and renovated and turned into museums, restaurants, and hotels, making them a popular tourist attraction.</p>
        <p>In 1993, Matera was designated a UNESCO World Heritage Site due to its cultural and historical significance. The city has also been used as a filming location for several movies, including “The Passion of the Christ,” which helped to bring it to the attention of a global audience.</p>
        <p>One of the most striking features of Matera is its distinctive architecture. The sassi, with their narrow alleys and stepped streets, are a testament to the city’s history and the ingenuity of its early inhabitants. In addition, the city has several beautiful churches, many of which date back to the Middle Ages.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItaly4} alt="Matera Italy - The city" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>About our trip - how we traveled, where we stayed, and how many days we spent in Matera</h2>
        <p>Matera is approximately 70 km from Bari, a distance that can be traveled by train or by car. We landed at Bari - Karol Wojtyla International Airport, and from there we rented a car to explore as many places as possible in southern Italy.</p>
        <p>As in all the cities visited on this trip, access by car to the historic center is prohibited (at least for tourists). And it is much better this way because these streets were not made for cars in the first place. For us, it wasn’t that hard to find a parking spot and pay, but we found the way of driving in Italy quite chaotic. It seems that no one respects the traffic rules, but that is a story for another time.</p>
        <p>We stayed two nights in the beautiful boutique hotel of <LinkExternal link="https://www.booking.com/hotel/it/palazzo-degli-abati.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link to Palazzo degli Abati" text="Palazzo degli Abati" /> (Palace of the Abbots) located in the heart of the Sasso Barisano, right next to Chiesa di San Pietro Barisano. Here I make a parenthesis to say that “sasso” (pl. sassi) means “stone” in Italian and that Sassi di Matera is divided into two districts: Sasso Caveoso and Sasso Barisano. Both of them were dug out of the rock on either side of Civita hill.</p>
        <p>Another thing I want to point out is that whenever you’ll see the word “chiesa” in this article, just know that “chiesa” means “church” in Italian.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyPalazzoDegliAbatiRoom} alt="Matera Italy - Palazzo Degli Abati Hotel Room" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>But let’s return to the <LinkExternal link="https://www.booking.com/hotel/it/palazzo-degli-abati.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link to Palazzo degli Abati" text="Palazzo degli Abati" />, which apparently dates back to 1756 and was carefully restored and transformed into a 4-stars hotel. We wanted to stay in a cave, this being in itself a memorable experience. So we booked the room “Suite in Cave – U Firn du Cidd” which exceeded our expectations. This room previously served as an oven as the name of the room tells us, “U Firn du Cidd” translating into “The oven of the mule”. In the walls of the cave, we could admire marine fossils that we found out that they were real and date back to 2 million years ago. But the piece de resistance was the glass floor through which we could see the archaeological finds on which the oven was built. Also, the view from the terrace where we served breakfast and an afternoon aperitif is breathtaking.</p>
        <p>These are the other luxury hotels that we considered when looking for accommodation:</p>
        <ul className="list-inside list-disc ml-4 mb-6">
          <li><LinkExternal link="https://www.booking.com/hotel/it/il-palazzotto-matera.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link to Palazzotto Residence & Winery" text="Palazzotto Residence & Winery" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/aquatio-cave-luxury-amp-spa.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link to Aquatio Cave Luxury Hotel & SPA" text="Aquatio Cave Luxury Hotel & SPA" /></li>
          <li><LinkExternal link="https://www.booking.com/hotel/it/sextantio-le-grotte-della-civita.en-gb.html?group_adults=2&no_rooms=1&aid=7913345" title="Link to Sextantio Le Grotte Della Civita" text="Sextantio Le Grotte Della Civita" /></li>
        </ul>
        <p>We spent a day and a half in Matera and here is what we were able to do and visit in this interval.</p>
        <h2>Top 20 things to do in Matera</h2>
        <h3>1. Parco Regionale della Murgia Materana</h3>
        <p>Parco Regionale della <LinkExternal link="http://www.parcomurgia.it" title="Link to Murgia Materana" text="Murgia Materana" /> is a regional park located in the Murgia area near the city of Matera and it was our first stop before heading to the city. It covers an area of approximately 50,000 hectares and it contains several important cultural and historical sites, including ancient cave dwellings, rock-hewn churches, and fortifications. These sites are testimony to the long and rich history of the region and are important cultural landmarks.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyParcoRegionaleDellaMurgiaMateranaView} alt="Matera Italy - Parco Regionale della Murgia Materana View" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyParcoRegionaleDellaMurgiaMaterana} alt="Matera Italy - Parco Regionale della Murgia Materana" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>2. Piazza Vittorio Veneto</h3>
        <p>Vittorio Veneto Square is a good starting point to explore the streets of Sasso Barisano district. The area is full of gelato shops, patisseries, souvenir boutiques, restaurants with terraces, and clothing and jewelry stores. And it becomes very lively and packed with tourists, especially in the evening.</p>
        <p>But before going further, tick off two other objectives that can be found right in this square: Chiesa di San Domenico and Palombaro lungo.</p>
        <h3>3. Chiesa di San Domenico</h3>
        <p>The Chiesa di San Domenico is a notable church built in the 13th century. Its facade is partially carved into the stone, in the Apulian Romanesque style, making it a unique example of architectural integration with the natural environment. It is also known for its elaborate frescoes and sculptures, including a painted wooden crucifix that dates back to the 1400s.</p>
        <h3>4. Palombaro lungo</h3>
        <p>It is one of the largest and most important cisterns in the area and is considered a remarkable example of ancient water management systems. The cistern was carved out of the rock and was used to collect rainwater and channel it into underground storage tanks. The water was then used for various purposes, including irrigation, drinking, and washing.</p>
        <p>Today, the <LinkExternal link="https://www.palombarolungo.it/index.htm" title="Link to Palombaro Lungo" text="Palombaro Lungo" /> is a popular tourist attraction and a symbol of the ingenuity and resourcefulness of the people who lived in the Sassi district. Visitors can explore the cistern and admire its architectural features, including the large underground chambers and the network of tunnels and channels that were used to collect and distribute water. The cistern is also an important cultural site and a testament to the rich history and heritage of the Matera region.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyPalombaroLungo} alt="Palombaro Lungo, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>5. Chiesa di San Giovanni Battista</h3>
        <p>Situated in Piazza San Giovani, only 170 m from Palombaro Lungo, this church was the first sacred structure built outside the city walls. It was built in the 13th century and underwent several changes over the centuries.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSanGiovanniBattista} alt="Chiesa di San Giovanni Battista, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>6. Casa grotta C’era una volta</h3>
        <p>We stumbled upon <LinkExternal link="https://www.anticamatera.it/" title="Link to Anticamera" text="this house" /> that exemplifies how people used to live here before the 1950s. The house was dug into the limestone rock and the only opening that allowed light and air to enter the room was the door. It was divided into three different areas: the sleeping area with the bed and the cradle, the area where the animals were kept, and the kitchen area.</p>
        <p>“Casa grotta” refers to these types of house museums that can be visited all over the Sassi. This is just one of them. Keep reading to discover more.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaCeraUnaVolta} alt="Casa grotta C'era una volta, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>7. Chiesa di San Pietro Barisano</h3>
        <p>The Church of San Pietro Barisano represents one of the largest rupestrian monastic settlements in the city of Matera. The central facade is the only part that can be observed from the outside. The church has a bell tower which was built after the last restoration in 1755. The underground spaces of the church are worth seeing and have an interesting history that involves draining of corpses.</p>
        <h3>8. Explore the streets of Matera</h3>
        <p>When in Sassi di Matera, everywhere you’ll look, you’ll find something to photograph. You are surrounded by so much beauty and history that you don’t know what to look at first. It can be overwhelming. You can take a break from all this by grabbing something local to eat, like a panzerotto filled with tomato sauce and mozzarella or a puccia which is a type of bread served with a variety of fillings (similar to a sandwich). Or maybe you prefer something sweet, so you’ll opt for Italian gelato.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyStreet1} alt="Matera, Italy - Streets 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyStreet2} alt="Matera, Italy - Streets 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyStreet3} alt="Matera, Italy - Streets 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>While walking along the winding streets, some going up, others going down, you have the chance to discover other tourist attractions on your way. Like Fontana dell’Amore.</p>
        <h3>9. Fontana dell’Amore</h3>
        <p>The Fontana dell’Amore, or the “Fountain of Love”, is a historic fountain and a well-known symbol of the city’s rich cultural heritage. The fountain is situated in the heart of the Sassi district, surrounded by narrow streets and historic buildings, and is considered a perfect example of the unique urban landscape of the area. The fountain was once used as a public water source, but today it is mainly a decorative element and a gathering place for visitors and locals alike.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyFontanaDellAmore} alt="Fontana dell'Amore, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>10. Cattedrale di Matera and Piazza Duomo</h3>
        <p>Located in Piazza Duomo, Cattedrale di Maria Santissima della Bruna e Sant’Eustachio (or Duomo di Matera) is the main Catholic place of worship in Matera. The cathedral is notable for its impressive facade, which features ornate carvings, sculptures, and frescoes. The interior of the cathedral is equally impressive, with high, vaulted ceilings, intricate frescoes, and gilded altarpieces.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCattedraleExterior} alt="Cattedrale di Matera, Duomo di Matera exterior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCattedraleInterior} alt="Cattedrale di Matera, Duomo di Matera interior" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>11. Chiesa Rupestre di Santa Maria di Idris</h3>
        <p>The Church of Saint Mary of Idris also known as Madonna de Idris is a historic church built on a hill overlooking the city, offering panoramic views of the surrounding landscape and is one of the oldest religious sites in the city, with parts of the church dating back to the 9th century. Whether you are interested in history, art, or religion, the Church of Saint Mary of Idris is a must-see destination in Matera.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaRupestreDiSantaMariaDiIdris} alt="Chiesa Rupestre di Santa Maria di Idris, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>12. Chiesa di San Pietro Caveoso</h3>
        <p>Just a stone’s throw from Madonna de Idris, there’s Piazza San Pietro where Chiesa di San Pietro Caveoso also known as Chiesa di San Pietro e Paolo is located. The church, built in 1218 in the Baroque style, has undergone several renovations and restorations over the centuries, but much of its original structure and architectural features have been preserved, making it a valuable historical and cultural site.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSanPietroCaveoso} alt="Chiesa di San Pietro Caveoso, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>After taking in the views from Piazza San Pietro, go on to Vico Solitario Street, where you’ll find in less than 150 meters Chiesa rupestre di Sant’Agostino al Casalnuovo and right next to it Casa Grotta nei Sassi di Matera.</p>
        <h3>13. Casa Grotta nei Sassi di Matera</h3>
        <p>Casa Grotta nei Sassi di Matera, how you’ll find it on Google, or <LinkExternal link="http://www.casagrotta.it/index.php?lang=en" title="Link to Casa Grotta di Vico Solitario" text="Casa Grotta di Vico Solitario" />, is a well-preserved example of the traditional cave dwellings that were common in the area for centuries. The house is carved into the rock face and is thought to date back to the 17th century or earlier. Although it is not the only house of this kind that can be visited in Matera, it is certainly the most popular one.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario4} alt="Casa Grotta di Vico Solitario interior 1, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>The historic house is now a museum and is open to the public. Visitors can explore the interior of the house and learn about the history of the Sassi neighborhood and the unique architecture of the cave dwellings. The house has been restored to reflect its original appearance and includes period furnishings and household items, giving visitors a glimpse into the daily life of the people who lived in the Sassi neighborhood in the past.</p>
        <p>The entrance fee includes also the Chiesa Rupestre S. Agostino al Casalnuovo and the Neviere. Le Neviere (snow cisterns) consist of underground cisterns, channels, and wells and were an essential part of daily life in the Sassi for many centuries. They were used to collect and channel water from the nearby hills for household and agricultural use.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario1} alt="Casa Grotta di Vico Solitario interior 1, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario2} alt="Casa Grotta di Vico Solitario interior 2, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDiVicoSolitario3} alt="Casa Grotta di Vico Solitario interior 3, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>After 100 meters more you’ll arrive at Chiesa di Santa Lucia alle Malve.</p>
        <h3>14. Chiesa di Santa Lucia alle Malve</h3>
        <p>Santa Lucia alle Malve, dedicated initially to Sant’Agata, is the first female monastic settlement of the Benedictine Order, dating back to the 8th century. It stands out among the others in the Matera area, due to the presence of numerous frescoes, still well preserved today, and an architectural layout of exquisite workmanship. Because it has undergone numerous changes and renovations over the centuries, today we can admire the frescoes from the 17th century.</p>
        <p>The steps next to the church will lead you to the roof where there’s a necropolis with rock tombs. When we were there, there were no signs or information boards. We only noticed the tombs because we had previously read about them on the Internet. Probably if you opt for a guided tour of the city you will find out more information.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSantaLuciaAlleMalveExterior} alt="Chiesa di Santa Lucia alle Malve exterior, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSantaLuciaAlleMalveNecropolis} alt="Chiesa di Santa Lucia alle Malve necropolis, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h3>15. Casa Grotta del Casalnuovo</h3>
        <p>After visiting Chiesa di Santa Lucia alle Malve and the necropolis, head to <LinkExternal link="https://www.casagrottamatera.com" title="Link to Casa Grotta del Casalnuovo" text="Casa Grotta del Casalnuovo" />. Don’t worry, you’ll have to walk only 150 meters. The Casa Grotta del Casalnuovo is another typical house of the Sassi, partially sculpted in the cave and partially built. You will see inside the original furnishings and tools that the family who lived there used in their everyday life before the depopulation that took place at the end of the 1950s.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDelCasalnuovoBedroom} alt="Casa Grotta del Casalnuovo bedroom, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDelCasalnuovoDetails} alt="Casa Grotta del Casalnuovo details, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyCasaGrottaDelCasalnuovoBathroom} alt="Casa Grotta del Casalnuovo bathroom, Matera, Italy" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h3>16. Chiesa del Purgatorio</h3>
        <p>Chiesa del Purgatorio is named after the Catholic doctrine of Purgatory, which is believed to be a state of purification after death where souls undergo penance to cleanse themselves of their sins before they can enter heaven. Skulls and skeletons ornate the church built in the 18th century. The display of skeletons in the church is thought to serve as a reminder of the importance of leading a good life, as well as of the idea of an afterlife and the need for purification. The skeletons also serve as an example of macabre art and religious symbolism.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDelPurgatorio1} alt="Chiesa del Purgatorio 1, Matera, Italy" width={720} height={1080} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDelPurgatorio2} alt="Chiesa del Purgatorio 2, Matera, Italy" width={720} height={1080} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDelPurgatorio3} alt="Chiesa del Purgatorio 3, Matera, Italy" width={720} height={1080} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <h3>17. Chiesa di San Francesco d’Assisi</h3>
        <p>Just one stone’s throw from Chiesa del Purgatorio, there’s Chiesa di San Francesco d’Assisi that overlooks a large square named (maybe you guessed) San Francesco. The first building on this site dates back to the 13th century, but the facade took on its current shape in the 18th century.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyChiesaDiSanFrancescoDiAssisi} alt="Chiesa di San Francesco d'Assisi, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>18. Enjoy an aperitivo as Italians do</h3>
        <p>The aperitivo typically takes place before dinner. It is a time to relax and unwind with friends or family while enjoying a drink and a light snack. We spent some incredible moments on the terrace of our hotel (Palazzo degli Abati) called <LinkExternal link="http://www.palazzodegliabati.it/crialoss" title="Link to Crialoss Café" text="Crialoss Café" /> Crialoss Café, with spectacular views over Sasso Caveoso. We sipped from a top-notch Aperol Spritz and ordered a light dinner. We tried some local foods like a trio of bruschetta and Cialledda which is a salad of cucumbers, tomatoes, onions, bread, and olive oil. It was very aromatic and fresh.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={aperitivoItalianoMateraAperol} alt="Italian aperitivo - Aperol spritz" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={aperitivoItalianoMateraBruschetta} alt="Italian aperitivo - bruschetta" width={720} height={1279} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
        <h3>19. Admire the view from the Convent of Saint Agostino</h3>
        <p>Even though you can visit the interior of the Chiesa Rupestre San Giuliano (sec. XV) and the convent of Saint Agostino, this is actually one of the best belvedere points over Matera. Don’t miss this spot for perfect photos at sunset.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyBelvedereFromSaintAgostino} alt="Belvedere from the Convent of Saint Agostino, Matera, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h3>20. Matera by night</h3>
        <p>Although you can get a pretty good idea of ​​Matera by ticking off tourist attractions for a whole day and taking in all the history, Matera by night is particularly beautiful. Bathed in warm lights, which let you partially see the ancient dwellings, the atmosphere becomes downright magical. Walking through Matera after the sun has set is not to be missed.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={materaItalyAtNight} alt="Matera by night, Italy" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <h2>Points of Interest Routes</h2>
        <p>Here are two routes that you can cross on foot through Matera, with most of the tourist attractions included in this article. Or, if you like, how to spend a full day in Matera or two days at a leisurely pace.</p>
        <p>Route 1:</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m54!1m8!1m3!1d3026.401598003985!2d16.6090351!3d40.6651195!3m2!1i1024!2i768!4f13.1!4m43!3e2!4m5!1s0x13477ed93296ccb1%3A0x3b23a4f91486fa80!2sVia%20Muro%2C%2026%2C%2075100%20Matera%20MT%2C%20Italy!3m2!1d40.66601!2d16.6115405!4m5!1s0x13477eded6345c53%3A0x16dcc2153397bf34!2sPiazza%20Duomo%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6665393!2d16.6111972!4m5!1s0x13477edbfdd0f36b%3A0xfcf7c374fd06da43!2sChiesa%20Rupestre%20di%20Santa%20Maria%20di%20Idris%2C%20Via%20Madonna%20dell'Idris%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.664211699999996!2d16.612159!4m5!1s0x13477edc1d13e9eb%3A0x2fabab3f3da8e454!2sChiesa%20di%20San%20Pietro%20Caveoso%2C%20Piazza%20San%20Pietro%20Caveoso%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6645!2d16.6124944!4m5!1s0x13477edbe48b2393%3A0xbbfb2aef0121b7eb!2sCasa%20Grotta%20nei%20Sassi%20di%20Matera%2C%20Vico%20Solitario%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6637768!2d16.6122649!4m5!1s0x13477edbfa592c21%3A0xcc62f2ce5ccee969!2sChiesa%20di%20Santa%20Lucia%20alle%20Malve%2C%20Rione%20Malve%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6633237!2d16.61246!4m5!1s0x13477edb98bda96b%3A0x37f800705d0bec83!2sCasa%20Grotta%20del%20Casalnuovo%2C%20Rione%20Casalnuovo%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6624627!2d16.612034299999998!5e0!3m2!1sen!2sro!4v1676219641918!5m2!1sen!2sro" />
        <p>Route 2:</p>
        <GoogleMaps link="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3026.323006814206!2d16.606164415403573!3d40.66685142933682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m5!1s0x13477ede92228945%3A0xb5a29f491fc56e2b!2sChiesa%20di%20San%20Francesco%20d'Assisi%2C%20Piazza%20S.%20Francesco%2C%2075100%20Matera%20MT%2C%20Italy!3m2!1d40.6653667!2d16.6093126!4m5!1s0x13477ede820911d1%3A0xca6215fb508978ad!2sChiesa%20del%20Purgatorio%2C%20Via%20Domenico%20Ridola%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6644108!2d16.6089304!4m5!1s0x13477ede3023446b%3A0x52cd8695902c5a19!2sPiazza%20Vittorio%20Veneto%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6667316!2d16.606555999999998!4m5!1s0x13477edfb305902b%3A0xea7bb2ed065c9f46!2sChiesa%20di%20San%20Giovanni%20Battista%2C%20Via%20San%20Biagio%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.667707!2d16.6080564!4m5!1s0x13477edf3d6b6a6d%3A0xa18adc0830c346c9!2sCasa%20grotta%20%E2%80%9CC%E2%80%99era%20una%20volta%E2%80%9D%20Antica%20Matera%2C%20Via%20Fiorentini%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6675104!2d16.6100791!4m5!1s0x13477edf6e48d0e9%3A0xfc47fbf54d5e77f2!2sChiesa%20di%20San%20Pietro%20Barisano%2C%20Via%20San%20Pietro%20Barisano%2C%20Matera%2C%20Province%20of%20Matera%2C%20Italy!3m2!1d40.6688276!2d16.609260199999998!5e0!3m2!1sen!2sro!4v1676444771540!5m2!1sen!2sro" />
        <p>In conclusion, Matera is a unique and fascinating city that offers a glimpse into the rich history of Italy and the Mediterranean region. With its ancient cave dwellings, beautiful churches, and vibrant cultural scene, it is a destination that appeals to travelers of all interests and backgrounds. We were left with wonderful memories after visiting this re-invented city.</p>
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaPin1} alt="Matera Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={materaPin2} alt="Matera Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
