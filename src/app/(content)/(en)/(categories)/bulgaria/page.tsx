import Navbar from "@/app/components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Bulgaria - Discover Bulgaria’s Hidden Gems and Natural Beauty.",
  description: "Explore Bulgaria with AFKology. From majestic mountains to Black Sea beaches, discover the best travel experiences in Bulgaria.",
  keywords: ['afkology', 'bulgaria', 'travel bulgaria', 'bulgaria travel guide', 'places to visit in bulgaria', 'bulgarian food', 'bulgaria tourism'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/bulgaria',
    languages: {
      'en-US': '/bulgaria',
      'ro-RO': '/ro/bulgaria',
    },
  },
  openGraph: {
    title: "AFKology | Bulgaria - Discover Bulgaria’s Hidden Gems and Natural Beauty.",
  description: "Explore Bulgaria with AFKology. From majestic mountains to Black Sea beaches, discover the best travel experiences in Bulgaria.",
    url: 'https://www.afkology.com/bulgaria',
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
      <Navbar roUrl="/ro/bulgaria" />
      <main className="flex-grow">
        bulgaria
      </main>
    </div>
  );
}
