import Navbar from "@/app/components/ro/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Italia - Descoperă cultura, gastronomie și peisaje spectaculoase.",
  description: "Explorează Italia cu AFKology. De la orașele istorice la deliciile culinare, află cele mai bune locuri de vizitat și experiențe de neuitat.",
  keywords: ['afkology', 'italia', 'călătorie italia', 'ghid de călătorie italia', 'locuri de vizitat în italia', 'mâncare italiană', 'turism italia'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/ro/italia',
    languages: {
      'ro-RO': '/ro/italia',
      'en-US': '/italy',
    },
  },
  openGraph: {
    title: "AFKology | Italia - Descoperă cultura, gastronomie și peisaje spectaculoase.",
    description: "Explorează Italia cu AFKology. De la orașele istorice la deliciile culinare, află cele mai bune locuri de vizitat și experiențe de neuitat.",
    url: 'https://www.afkology.com/ro/italia',
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
  verification: {
    google: 'ADDD CODEE',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | Italia - Descoperă cultura, gastronomie și peisaje spectaculoase.",
  "description": "Explorează Italia cu AFKology. De la orașele istorice la deliciile culinare, află cele mai bune locuri de vizitat și experiențe de neuitat.",
  "url": "https://www.afkology.com/ro/italia",
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
  "mainEntityOfPage": "https://www.afkology.com/ro/italia"
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar enUrl="/italy" />
      <main className="flex-grow">
        italia
      </main>
    </div>
  );
}
