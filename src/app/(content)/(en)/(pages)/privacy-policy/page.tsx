import Navbar from "@/app/components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Privacy Policy - The most precious moments in life happen offline.",
  description: "Read about how AFKology collects, uses, and protects your personal information. Your privacy is important to us.",
  keywords: ['afkology', 'privacy policy', 'data protection', 'user privacy', 'personal information', 'data collection'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'en-US': '/privacy-policy',
      'ro-RO': '/ro/politica-de-confidentialitate',
    },
  },
  openGraph: {
    title: 'AFKology | Privacy Policy - The most precious moments in life happen offline.',
    description: 'Discover how AFKology handles your personal information and ensures your privacy is protected.',
    url: 'https://www.afkology.com/privacy-policy',
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | Privacy Policy - The most precious moments in life happen offline.",
  "description": "Read about how AFKology collects, uses, and protects your personal information. Your privacy is important to us.",
  "url": "https://www.afkology.com/privacy-policy",
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
  "mainEntityOfPage": "https://www.afkology.com/privacy-policy"
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl="/ro/politica-de-confidentialitate" />
      <main className="flex-grow">
        privacy
      </main>
    </div>
  );
}
