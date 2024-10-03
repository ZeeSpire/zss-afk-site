import Navbar from "../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Greece - Explore Greece's Rich History, Culture, and Beaches.",
  description: "Discover Greece with AFKology. From ancient ruins to crystal-clear beaches, explore the best that Greece has to offer.",
  keywords: ['afkology', 'greece', 'travel greece', 'greece travel guide', 'places to visit in greece', 'greek food', 'greece tourism'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/greece',
    languages: {
      'en-US': '/greece',
      'ro-RO': '/ro/grecia',
    },
  },
  openGraph: {
    title: "AFKology | Greece - Explore Greece's Rich History, Culture, and Beaches.",
    description: "Discover Greece with AFKology. From ancient ruins to crystal-clear beaches, explore the best that Greece has to offer.",
    url: 'https://www.afkology.com/greece',
    siteName: 'AFKology',
    locale: 'en_US',
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
  // verification: {
  //   google: 'ADDD CODEE',
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | Greece - Explore Greece's Rich History, Culture, and Beaches.",
  "description": "Discover Greece with AFKology. From ancient ruins to crystal-clear beaches, explore the best that Greece has to offer.",
  "url": "https://www.afkology.com/greece",
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
      "url": "https://www.afkology.com/logo.png"
    }
  },
  "mainEntityOfPage": "https://www.afkology.com/greece"
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl="/ro/grecia" />
      <main className="flex-grow">
        greece
      </main>
    </div>
  );
}
