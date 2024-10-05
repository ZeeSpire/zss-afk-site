import Navbar from "../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Contact Us - The most precious moments in life happen offline.",
  description: "Get in touch with us! We're here to answer your questions, hear your feedback, and help you plan your next adventure.",
  keywords: ['afkology', 'contact us', 'get in touch', 'travel inquiries', 'customer support', 'feedback', 'travel assistance'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/contact',
      'ro-RO': '/ro/contact',
    },
  },
  openGraph: {
    title: "AFKology | Contact Us - The most precious moments in life happen offline.",
    description: "Get in touch with us! We're here to answer your questions, hear your feedback, and help you plan your next adventure.",
    url: 'https://www.afkology.com/contact',
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | Contact Us - The most precious moments in life happen offline.",
  "description": "Get in touch with us! We're here to answer your questions, hear your feedback, and help you plan your next adventure.",
  "url": "https://www.afkology.com/contact",
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
    "@id": `https://www.afkology.com/contact`
  }
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl="/ro/contact" />
      <main className="flex-grow">
        contact
      </main>
    </div>
  );
}
