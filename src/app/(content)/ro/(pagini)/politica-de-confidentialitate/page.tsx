import Navbar from "@/app/components/ro/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Politica de Confidențialitate - Cele mai prețioase momente din viață se petrec offline.",
  description: "Citește despre cum AFKology colectează, folosește și protejează informațiile tale personale. Confidențialitatea ta este importantă pentru noi.",
  keywords: ['afkology', 'politica de confidențialitate', 'protecția datelor', 'confidențialitate utilizator', 'informații personale', 'colectarea datelor'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/ro/politica-de-confidentialitate',
    languages: {
      'ro-RO': '/ro/politica-de-confidentialitate',
      'en-US': '/privacy-policy',
    },
  },
  openGraph: {
    title: "AFKology | Politica de Confidențialitate - Cele mai prețioase momente din viață se petrec offline.",
    description: "Citește despre cum AFKology colectează, folosește și protejează informațiile tale personale. Confidențialitatea ta este importantă pentru noi.",
    url: 'https://www.afkology.com/ro/politica-de-confidentialitate',
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
  "name": "Politica de Confidențialitate",
  "description": "Citește despre cum AFKology colectează, folosește și protejează informațiile tale personale.",
  "url": "https://www.afkology.com/ro/politica-de-confidentialitate",
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
  "mainEntityOfPage": "https://www.afkology.com/ro/politica-de-confidentialitate"
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar enUrl="/privacy-policy" />
      <main className="flex-grow">
        polictica
      </main>
    </div>
  );
}
