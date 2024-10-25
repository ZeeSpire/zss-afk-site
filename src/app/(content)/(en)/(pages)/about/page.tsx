import { getPage } from "@/data/pages";
import Navbar from "../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";

const page = getPage(2);

export const metadata: Metadata = {
  title: `${page.title}`,
  description: `${page.description}`,
  keywords: `${page.keywords}`,
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: `${page.slug?.en}`,
    languages: {
      'en-US': `${page.slug?.en}`,
      'ro-RO': `${page.slug?.ro}`,
    },
  },
  openGraph: {
    title: `${page.title}`,
    description: `${page.description}`,
    url: `https://www.afkology.com${page.slug?.en}`,
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
  "name": `${page.title}`,
  "description": `${page.description}`,
  "url": `https://www.afkology.com${page.slug?.en}`,
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
    "@id": `https://www.afkology.com${page.slug?.en}`,
  }
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl="/ro/despre-noi" />
      <main className="flex-grow">
        <h1>About us</h1>
        <p>Hello, world! We are two passionate software engineers who appreciate every little pleasure in life from reading an interesting book or watching a nice movie in the evening to enjoying a freshly brewed cup of coffee in the morning talking about the next place we should visit. To be 100% accurate, we are talking about what we should eat at dinner, but for the sake of our presentation let’s leave it like this because we also love traveling.</p>
        <p>We are not the ones who hop in the car and surprise ourselves with a trip to the seaside or the mountains every other weekend. We are usually highly organized, we gather lots of information about a place before visiting it, we know what objectives are not to be missed, what restaurants serve the best food, what hotels to stay in, and other cool stuff recommended by locals. Because of this, we thought it’s time to give something back and share with you our perspective, our likes and dislikes, our discoveries, and things that boost our creativity.</p>

        <h2>Why AFKology?</h2>
        <p>Most of the time when we don’t sleep, we are online, usually coding. It brings us fulfillment and we do it with pleasure. But we also believe in the importance of just being away from the keyboard, disconnecting from the internet and reconnecting with ourselves, spending time with friends and family, enjoying a walk in the park, discovering a museum, exploring a new city, or admiring the sunset. The most precious moments in life happen offline. AFKology is a remembrance of that.</p>
        
        <h2>Contact</h2>
        <p>Email: office@afkology.com</p>
      </main>
    </div>
  );
}
