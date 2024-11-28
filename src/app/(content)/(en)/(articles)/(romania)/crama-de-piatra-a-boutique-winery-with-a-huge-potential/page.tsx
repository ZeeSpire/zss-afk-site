import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Youtube from "@/components/youtube/Youtube";
import Link from "next/link";

import cramaDePiatra1 from "../../../../../../../public/crama-de-piatra/crama1_i0wazr_resized.jpeg"
import cramaDePiatra2 from "../../../../../../../public/crama-de-piatra/crama2_aiavmt.jpeg"
import cramaDePiatraInteriorRestaurant from "../../../../../../../public/crama-de-piatra/IMG_20220828_091948-e1_zvnsyk.jpeg"
import cramaDePiatraInteriorBeci from "../../../../../../../public/crama-de-piatra/IMG_20220827_154035-e1_amlsht.jpeg"
import cramaDePiatraInteriorRestaurant2 from "../../../../../../../public/crama-de-piatra/IMG_20220827_153954-e1_sknjoy.jpeg"
import cramaDePiatraVin from "../../../../../../../public/crama-de-piatra/IMG_20220827_161933-e1_pbgtj5.jpeg"
import cramaDePiatraMancare from "../../../../../../../public/crama-de-piatra/IMG_20220827_202428-e3_jlv1pm.jpeg"
import cramaDePiatraVitaDeVie from "../../../../../../../public/crama-de-piatra/IMG_20220827_183450-e1_uimxup.jpeg"

const article = getArticle(16);

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
        <p>Crama de Piatra is a boutique winery, with a small production of wine, which has all the assets to become a special destination for one’s soul. Here you can participate in winery tours and wine tastings, relax with friends on the terrace or take a walk through the vineyards. You will also find here a very tastefully decorated restaurant, with an open kitchen and a terrace surrounded by greenery, as well as accommodation spaces in case you want to spend the night. In other words, it is a worthy destination to consider for a well-spent weekend.</p>
        <Youtube videoId="cjNcnZGuS2o" />
        <p>Crama de Piatra is located in the renowned vine area - Dealul Mare, in Vadu Sapat commune in Prahova County on an area of at least six hectares. It is approximately 80 kilometers (about 49.71 mi) from Bucharest, which can be easily covered in an hour and a half by car. In the same area, you can also visit other wineries such as Licorna, Budureasca, Viile Metamorfosis, Mierla Alba, or Apogeum to which I have dedicated a <Link className="text-blue-700 hover:text-blue-900 underline" href="/apogeum-winery">separate article</Link>.</p>
        <p>Am vizitat crama într-o frumoasă zi de sâmbătă, la sfârșitul lunii august, chiar înainte de recoltarea strugurilor. Am ajuns cu ceva timp înainte de ora de check-in, dar am profitat de aceasta și am luat prânzul pe terasă. Am comandat gulaș, două tipuri de paste, o salată de roșii cu brânză și cartofi la cuptor cu rozmarin și usturoi. Serviciul a fost bun, deși nu foarte rapid, dar mâncarea în schimb nu a fost chiar atât de grozavă. Nu a fost rea, dar să spunem că ar putea fi îmbunătățită. Totuși, nu aș respinge întreaga experiență din această cauză, poate a fost doar un lucru care nu se întâmplă des.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraInteriorRestaurant} alt="Interior Restaurant Crama de Piatra" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>After lunch, they were very nice and allowed us to check in a little earlier. The interior, both of the restaurant and of the entire accommodation unit, is very pleasing to the eye. The modern mixes with the natural elements in an elegant, not ostentatious manner. Everywhere there are playful lights, decorative wooden elements, color accents, paintings made of moss plus other natural elements, and each of the 12 rooms is named after a grape variety. We stayed in the Muscat Ottonel room, a spacious, clean room with a comfortable bed and a beautiful view.</p>
        <p>Taking as a benchmark the presentation and tasting from Apogeum, we started the tour of the winery with one of the employees, an involved young man who spoke proudly about how the wines are produced at Crama de Piatra and who referred to the owners and the other colleagues as family. We could ask any question that crossed our minds and we talked lingeringly with the respective employee, being the only ones participating in the tour at that time. The tour started the moment we said we were ready, no specific time was set. I wonder how things would have been if there were more people interested to participate, probably in that case a time would have had to be established for all of us to respect, so it would have required a bit more organization.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraInteriorBeci} alt="Interior Crama de Piatra" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We learned the history of the place that began more than 100 years ago (we leave you to discover it by yourself if you’re gonna pay them a visit) and how it received a new appearance in 2018 with the rehabilitation works. The grape varieties that are cultivated here are Cabernet Sauvignon, Merlot, Feteasca Neagra, and Feteasca Alba, and the wine produced here, matured in Romanian oak barrels, is available under the Boian and Aldavin labels, the latter being a super-limited edition. The slogan of Crama de Piatra is “The quantities of wine are small, but correct” after all.</p>
        <p>In the end, we expected the journey to continue with the wine tasting, but instead, we sat down in the restaurant and we each ordered a glass of wine. It seemed that they do not offer tastings led by a professional. We paid only for the wine ordered. Therefore, I would say that there is a potential that would be a shame not to be exploited. However, we enjoyed the presentation of the winery and the information we received.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraInteriorRestaurant2} alt="Crama de Piatra Restaurant 2" width={720} height={1200} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraVin} alt="Crama de Piatra Wine" width={720} height={1200} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraMancare} alt="Crama de Piatra Food" width={720} height={1200} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>Just before sunset, we went for a long walk in the vineyard. As recommended, we tasted the grapes and noticed that as the altitude increased, the grapes became sweeter and more aromatic. We saw the ruins of the Buna Vestire Church, as well as a small almond orchard, but what is most important is that it was a relaxing and disconnecting walk.</p>
        <p>We spent the evening on the terrace with a carafe of the house wine, to which we added a platter of charcuterie and cheeses and some hummus with goat cheese. We had an amazing time. The music was a bit too loud, but it had to cover the music that came from a house nearby. All this noise could be heard in the rooms as well, and the music stopped around 1 AM, so it could be disturbing for someone who wants to sleep in absolute silence.</p>
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatraVitaDeVie} alt="Crama de Piatra Wineyard" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>The breakfast was very good, Swedish buffet style. We could choose from savory and sweet options: eggs cooked in various styles, cheeses, bacon, vegetables, bread, juices, milk, cereals, biscuits, croissants, Nutella, and fruit. And the coffee was excellent.</p>
        <p>The potential of this location is huge and except for the small minuses that can be easily corrected or overlooked, we felt very good here. It is a place we would love to return to.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatra1} alt="Crama de Piatra Pin 01" width={720} height={1200} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={cramaDePiatra2} alt="Crama de Piatra Pin 02" width={720} height={1200} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}
