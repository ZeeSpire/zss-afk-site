import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import isolatedChaletMain from "../../../../../../../public/isolated-chalet/nor-11_xrj7cx.jpeg";
import isolatedChaletView1 from "../../../../../../../public/isolated-chalet/IMG_20220507_112805_a15yfj.jpg";
import isolatedChaletView2 from "../../../../../../../public/isolated-chalet/IMG_20220507_092901_modif_r3pkem.jpg";
import isolatedChaletOutside from "../../../../../../../public/isolated-chalet/DSCF3690_modif_ty4r5e.jpeg";
import isolatedChaletInterior1 from "../../../../../../../public/isolated-chalet/IMG_20220507_131911_modif_nz0nzb.jpg";
import isolatedChaletNor1 from "../../../../../../../public/isolated-chalet/nor1_tmoqkq.jpg";
import isolatedChaletEvening from "../../../../../../../public/isolated-chalet/IMG_20220507_174852_hgmvei.jpg";
import piataCentrala from "../../../../../../../public/isolated-chalet/piata-lui-visan_web2_oohdca.jpg";
import isolatedChaletInterior2 from "../../../../../../../public/isolated-chalet/IMG_20220507_131322_modif_utmqxn.jpg";
import isolatedChaletNor2 from "../../../../../../../public/isolated-chalet/nor2_p1pzu7.jpg";
import isolatedChaletMorning from "../../../../../../../public/isolated-chalet/IMG_20220508_110645_modif_dbkkkg.jpg";
import isolatedChaletDisconnect from "../../../../../../../public/isolated-chalet/nor-2-disconnect3_axwi32.jpg";
import isolatedChaletBreakfast from "../../../../../../../public/isolated-chalet/IMG_20220508_095110_modif_q7steh.jpg";

const article = getArticle(9);

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
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletMain} alt="Remote accommodations in Romania" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
        <p>During the pandemic, with the restrictions caused by the covid and the beginning of the work-from-home era, most of us spent the majority of our time inside our own homes. Life goes on, and time continues to pass so we had to adapt, but we can hardly stand the cities suffocated by concrete, dusty streets, and hellish traffic. So, we began to appreciate the time spent outdoors, in natural settings, surrounded by greenery and tranquility.</p>
        <p>Therefore, the “isolated chalet” accommodations have been very successful in the last years and still enjoy success even if the price of renting such chalets is quite high in Romania at least.</p>
        <p>While we were working between the same four walls, we looked longingly at Instagram photos of those who spent their weekends at a cottage on top of a mountain, only them surrounded by nature, without finding any availability any time soon for us to go there as well. Given the high demand, more and more such accommodations have started to appear. Which is great! Especially since most of them are made with respect for the environment, by reusing materials and having a design that matches the natural environment. And you will see that in the description of these locations the same inviting words “nature”, “quiet”, “secluded”, and “no neighbors” are used. So, you can totally and easily “disconnect”.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletDisconnect} alt="Remote accommodations in Romania - mountain views" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>Although my favorite platform is booking.com, I found several such accommodations on airbnb.com, and I made a list of 10 such special accommodations in Romania. So here is my selection:</p>
        <p><LinkExternal link="https://www.airbnb.com/rooms/44628810?federated_search_id=f8f20d3e-9bc3-499a-a724-8d3058dda38d&source_impression_id=p3_1652088740_KCtVf9tb42vgw%2BVB" title="Link to TripSylvania Tiny House" text="1. TripSylvania Tiny House" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;Located on a 14000 sqm land, our tiny house gives you the freedom to explore the surroundings and enjoy their vibrant energy, away from the city hustle. We aim to offer you the best tiny house experience, surrounded by nature, without having to let go of all the required amenities for the most comfortable stay. During the day you can sit and relax with your favorite book and enjoy an amazing view through the large window in the living area, overlooking the mountains and the village. As the night falls, explore the Universe through the 1.4m x 1.4m skylight, right above the bed in the tiny loft.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/20000984?source_impression_id=p3_1652088504_wrYvS7aqi1oqMa3S0" title="Link to The Tree Cottage" text="2. The Tree Cottage" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;Tiny wood cottage build on top of a hill for a unique nature experience. Far away from the busy city, this is perfect for a couple who just wants to have a break, relax, hike, read.&quot;</span><br />
          <span>This cottage provides a unique nature experience: no neighbors in site, just trees, pastures and maybe some cows.</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/24928590?source_impression_id=p3_1652088947_cGPUQz5fkVjAM5Pe" title="Link to Casa Maria" text="3. Casa Maria" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;Casa Maria is a charming and elegant hideout that satisfy a yearning for simplicity, clarity, and a retreat in pure nature.&quot;</span><br />
          <span>Casa Maria is, together with the timber home of Lili & Ivo, located on the edge of the National Park Apuseni, Transylvania, on an estate of 20.000 m².</span><br />
          <span>Walking here without seeing anyone is the rule rather than the exception. But you do have a chance of passing stray cows and horses.</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/52708536?adults=2&federated_search_id=80eb13e9-a883-41ae-a36e-f48f7a7a4610&source_impression_id=p3_1652089399_asi7ZKx8ym6hcID4" title="Link to Moon Lake Bicaz" text="4. Moon Lake Bicaz" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;Enjoy a holiday in a unique place, just yours, with no neighbors, with a great view over the Ceahlau massif and the biggest artificial lake in Europe.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/35854800?source_impression_id=p3_1652089371_J75qVr%2BYlcH8DUp%2B&guests=2&adults=2" title="Link to Transylvania Loft Treehouse" text="5. Transylvania Loft Treehouse" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;A beautiful treehouse for an exquisite experience perfect for an individual or family (max 2 adults 1 child) looking for a night or more away. Surrounded by towering trees and set back in a 3-acre domain, this treehouse offers you an intimate and relaxing stay.“</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/50627171?source_impression_id=p3_1652089373_AjHTG83Hp2pPnwm0" title="Link to Outlook Cabin" text="6. Outlook Cabin" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;Cozy restored cabin in the middle of nowhere. Our wooden hut is a newly renovated and ideal for a couple or a small family. There is an open space downstairs with a wood burning stove for heating, a small kitchen area and the sleeping area is upstairs. There is also a small bathroom and an outside patio to enjoy the beautiful view and take in the silence and the singing of the birds.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/52860822?adults=2&federated_search_id=80eb13e9-a883-41ae-a36e-f48f7a7a4610&source_impression_id=p3_1652089404_0pscmQ45gKd%2BVYDY" title="Link to NorAtlas Heritage" text="7. NorAtlas Heritage" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>&quot;Welcome to our lovely cabin, the place where you can disconnect, relax and treat yourself with a little “me time”, while enjoying the benefits of your best accommodation experience. Before you book your reservation with us, please note that NorAtlas is located in the middle of nature, without neighbours and with a fairytale view.&quot;</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/52633498?adults=2&federated_search_id=5c0151ec-f29b-4524-aed1-73dd2b092905&source_impression_id=p3_1652090307_pfxoiWoUdeR8Ig6H" title="Link to Cottage in the Beautiful Pit 4" text="8. Cottage in the Beautiful Pit 4" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>“The chalet is situated on the Glajeria Valley 3 km from Rasnov town in a quiet secluded area at the edge of the ideal forest to make you forget about the tumult of everyday days!”</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/14025909?adults=2&federated_search_id=15a7d652-7270-4787-8c06-9ea73997ae9b&source_impression_id=p3_1652090317_VDpXEimWYHOuGfsf" title="Link to Cozy mountain retreat" text="9. Cozy mountain retreat" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>“Set at the foot of the Fagaras mountains, our cozy cabin offers a rare chance to completely escape into the heart of nature, while enjoying the full comfort of a modern home - electricity provided by solar power panels and a small generator, clear running water, toilet, fridge, fireplace, fully equipped kitchen and so on. If you enjoy privacy, nature, fresh mountain air and quietness, you will love our place.“</span>
        </div>
        <p><LinkExternal link="https://www.airbnb.com/rooms/50320366?adults=2&federated_search_id=7aa34caa-11bd-417a-9f09-dceadcb3c1ba&source_impression_id=p3_1652090919_IOMHR9QaMpo%2FULZz" title="Link to The Tiny House" text="10. The Tiny House" /></p>
        <div className="mb-6">
          <span>What do they say?</span><br />
          <span>“The Tiny House is a cozy, friendly, remote house on wheels in the middle of the nature, surrounded by mountains, with all the comfort of a home, yet just a short drive to the city of Brasov! Designed to accommodate a comfortable stay for couples, solo adventurers and people who love nature!”</span>
        </div>
        <p className="italic">All the descriptions were taken from Airbnb.</p>
        <h2>What did we choose?</h2>
        <h3>NorAtlas Heritage, Varlaam, Gura Teghii, Buzau</h3>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletMorning} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>We spent a relaxing weekend at NorAtlas Heritage, where we disconnected. We arrived quite late on Friday night after 3 hours of driving from Bucharest. The roads to get there are OK, but there are also parts with potholes. The main problem was that we went through many villages, and on serpentines and because I have motion sickness it wasn’t a very pleasant trip for me. But when I arrived at the destination and breathed the fresh air, I felt it was worth it. The tiny house is located in the Varlaam village, Gura Teghii commune, Buzau County, near the Penteleu massif, on the river Basca.</p>
        <p>As they said in the description, “NorAtlas is located in the middle of nature, without neighbors and with a fairytale view.” But this thing is about to change as they are building another house in front of NorAtlas. You will still have some privacy, but we would have liked to know this detail before booking with them. Overcoming this inconvenience, the view is still wonderful. Everywhere you look, you see only greenery which is so refreshing and invigorating. We were very pleased with the idea of living alone in a house positioned in such a natural setting, far from civilization, but still with a minimum of comfort: hot water, shower, the necessary tools to be able to prepare something to eat, air conditioning, Wi-Fi.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletEvening} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 1" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletInterior1} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 2" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletBreakfast} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 3" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>We appreciated that there were nets on all windows, that there was a hairdryer in the bathroom, that the kitchen was equipped with what was needed to prepare and serve the meal, that they left a small disinfectant and cleaning products, and that they left two bottles of water and two colas in the fridge, that they left some leaflets about what to visit in the area, that we found cleanliness, that we had a barbecue in the yard and a place to dine outdoors.</p>
        <p>The hosts were very welcoming, but like everywhere some aspects can be improved. For example, slippers would have been more appropriate not to be “of the house” or to be made of a material that can be disinfected. We didn’t give in to the plastic greenery in the bathroom or to the Christmas arrangements present in May. I would have liked to find a basket of a few apples instead of the carbonated drinks. I would also have liked to have wood and charcoal for the grill, not to come with them from home. But we believe that all these aspects can be easily corrected.</p>
        {/* image 9/16 (1000x1777) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletOutside} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 4" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletView1} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 5" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletView2} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau 6" width={720} height={1279} sizes="(max-width: 768px) 90vw, 20vw" /></div>
        </div>
        <p>We set out to leave the car for the weekend and to walk around the accommodation on foot. We went to Piatra lui Visan, which we filmed and photographed from all angles, and then we climbed the hill behind the tiny house where a sheepfold is, but we quickly returned because we were afraid of the dogs.</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={piataCentrala} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau - Piatra lui Visan" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        <p>I would like to end with the strongest point of NorAtlas Heritage (this is only our honest opinion of course): the surrounding nature, the silence during the night, the crickets, the chirping of the birds, and the fresh mountain air. These were the reasons we came in the first place, and we feel that we have reached our goal.</p>
        <p>Here’s to discovering new destinations and unique accommodations!</p>
        {/* image 16/9 */}
        <Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletInterior2} alt="NorAtlas Heritage, Varlaam, Gura Teghii, Buzau - Splendid nature" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" />
        {/* image 2/3 (1000x1500) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletNor1} alt="NorAtlas Heritage Pin 01" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
          <div><Image className="mb-6 rounded-lg drop-shadow-xl" src={isolatedChaletNor2} alt="NorAtlas Heritage Pin 02" width={720} height={1080} sizes="(max-width: 768px) 90vw, 35vw" /></div>
        </div>
      </main>
    </div>
  );
}