import Navbar from "@/app/components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Romania - Discover the Best of Romania Travel, Lifestyle and Food.",
  description: "Explore Romania with AFKology. Find out the best travel destinations, local cuisine, and hidden gems across the country.",
  keywords: ['afkology', 'romania', 'travel romania', 'romania travel guide', 'places to visit in romania', 'romanian food', 'romania tourism'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/romania',
    languages: {
      'en-US': '/romania',
      'ro-RO': '/ro/romania',
    },
  },
  openGraph: {
    title: "AFKology | Romania - Discover the Best of Romania Travel, Lifestyle and Food.",
    description: "Explore Romania with AFKology. Find out the best travel destinations, local cuisine, and hidden gems across the country.",
    url: 'https://www.afkology.com/romania',
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
  verification: {
    google: 'ADDD CODEE', 
  },
};

export default function Page() {
  return (
    <div>
      <Navbar roUrl="/ro/romania" />
      <main className="flex-grow">
        romania
      </main>
    </div>
  );
}
