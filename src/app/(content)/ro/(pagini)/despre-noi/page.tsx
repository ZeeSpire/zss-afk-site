import { getPage } from "@/data/pages";
import Navbar from "../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";

const page = getPage(2);

export const metadata: Metadata = {
  title: `${page.titleRo}`,
  description: `${page.descriptionRo}`,
  keywords: `${page.keywordsRo}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${page.slug?.ro}`,
    languages: {
      'ro-RO': `${page.slug?.ro}`,
      'en-US': `${page.slug?.en}`,
    },
  },
  openGraph: {
    title: `${page.titleRo}`,
    description: `${page.descriptionRo}`,
    url: `https://www.afkology.com${page.slug?.ro}`,
    siteName: 'AFKology',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: 'https://www.afkology.com/logo.png',
        width: 190,
        height: 107,
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
  "@type": "WebPage",
  "name": `${page.titleRo}`,
  "description": `${page.descriptionRo}`,
  "url": `https://www.afkology.com${page.slug?.ro}`,
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
      "height": 107,
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.afkology.com${page.slug?.ro}`,
  }
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar enUrl={`${page.slug?.en}`} />
      <main className="flex-grow">
        <h1>Despre noi</h1>
        <p>Hello World! Suntem doi ingineri de software pasionați de ceea ce facem, care apreciază fiecare mică plăcere oferită de viață, de la citirea unei cărți interesante sau vizionarea unui film relaxant până la o ceașcă de cafea proaspăt râșnită dimineața, vorbind despre următorul loc pe care ne dorim să-l vizităm. De fapt, ca să fim corecți, vorbim mai degrabă despre ce ar trebui să mâncăm la cină, dar de dragul prezentării noastre, să lăsăm așa, pentru că ne plac într-adevar și călătoriile.</p>
        <p>Noi nu suntem genul care se urcă în mașină pentru o excursie surpriză la mare sau la munte. Din când în când mai procedăm și așa. De obicei suntem foarte organizați, adunăm o mulțime de informații despre un loc înainte de a-l vizita, știm ce obiective nu trebuie ratate, ce restaurante servesc cea mai bună mâncare, în ce hoteluri să ne cazăm și alte lucruri interesante recomandate de către localnici. Din acest motiv, ne-am gândit că este timpul să dăm ceva înapoi și să vă împărtășim perspectiva noastră, ce ne-a plăcut sau nu ne-a plăcut, descoperirile noastre, dar și lucruri care ne stimulează creativitatea.</p>

        <h2>De ce AFKology?</h2>
        <p>De cele mai multe ori, când nu dormim, suntem online, de obicei dezvoltând software. Ne aduce împlinire și o facem cu plăcere. Dar credem cu tărie în importanța timpului petrecut cât mai departe de tastatură, de a ne deconecta de la internet și de a ne reconecta cu noi înșine, de a petrece timp cu prietenii și familia, de a ne bucura de o plimbare în parc, de a descoperi un muzeu, de a explora un oraș nou sau de a admira un apus de soare. Cele mai prețioase momente din viață au loc offline. AFKology este o readucere aminte a acestui fapt.</p>
        
        <h2>Contact</h2>
        <p>Email: office@afkology.com</p>
      </main>
    </div>
  );
}
