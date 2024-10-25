import { getPage } from "@/data/pages";
import Navbar from "../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";

const page = getPage(3);

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
        <h1>Contact</h1>
        <p className="font-semibold text-center">Email:</p>
        <p className="text-center">office@afkology.com</p>
      </main>
    </div>
  );
}
