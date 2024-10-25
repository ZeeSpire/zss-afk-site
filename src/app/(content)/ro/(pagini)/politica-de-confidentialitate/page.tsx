import { getPage } from "@/data/pages";
import Navbar from "../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";

const page = getPage(4);

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
  }
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
        <h1>Politica de confidentialitate</h1>
        <p>AFKology, found at https://www.afkology.com/ (“Website”) is governed by the following privacy policy (“Privacy Policy”).</p>

        <p>I respect your privacy and are committed to protecting it. The purpose of this Privacy Policy is to inform you what personally identifiable information I may collect and how it may be used. This statement only applies to this Website.</p>

        <h2>WHAT INFORMATION DO I COLLECT AND HOW IS IT USED?</h2>
        <p>Information You Voluntarily Submit to the Website: I may collect personal information from you such as your name or email address. For example, you may voluntarily submit information to the Website by leaving a comment, subscribing to a newsletter, or submitting a contact form.</p>

        <p>Information I Collect from Others: I may receive information about you from other sources including the Disqus comment platform. You may link your Facebook, Instagram, and/or Google accounts to your user profile.</p>

        <p>Automatically-Collected Information: I automatically collect certain information about you and the device with which you access the Website. For example, when you use the Website, I will log your IP address, operating system type, browser type, referring website, pages you viewed, and the dates/times when you accessed the Website. I may also collect information about actions you take when using the Website, such as links clicked.</p>

        <p>Cookies: I may log information using cookies, which are small data files stored on your browser by the Website. I may use both session cookies, which expire when you close your browser, and persistent cookies, which stay on your browser until deleted, to provide you with a more personalised experience on the Website.</p>

        <h2>HOW YOUR INFORMATION MAY BE USED</h2>
        <p>I may use the information collected in the following ways:</p>

        <p>To operate and maintain the Website; To create your account, identify you as a user of the Website, and customise the Website for your account; To send you promotional information, such as newsletters. Each email promotion will provide information on how to opt-out of future mailings; To send you administrative communications, such as administrative emails, confirmation emails, technical notices, updates on policies, or security alerts; To respond to your comments or enquiries; To provide you with user support; To track and measure advertising on the Website; To protect, investigate, and deter against unauthorised or illegal activity.</p>

        <h2>THIRD-PARTY USE OF PERSONAL INFORMATION</h2>
        <p>I may share your information with third parties when you explicitly authorise me to share your information.</p>

        <p>Additionally, the Website may use third-party service providers to service various aspects of the Website. Each third-party service provider’s use of your personal information is dictated by their respective privacy policies.</p>

        <p>The Website currently uses the following third-party service providers:</p>

        <p>Google Analytics – this service tracks Website usage and provides information such as referring websites and user actions on the Website. Google Analytics may capture your IP address, but no other personal information is captured by Google Analytics.</p>

        <p>Mail Chimp – this service is used for delivery of email updates and newsletters. I store your name and email address for purposes of delivering such communications. Please refer to Mail Chimp’s privacy policy for further information.</p>

        <p>At this time, your personal information is not shared with any other third-party applications. This list may be amended from time to time in the Website’s sole discretion.</p>

        <p>Except when required by law, I will not sell, distribute, or reveal your email addresses or other personal information without your consent; however, I may disclose or transfer personal information collected through the Website to third parties who acquire all or a portion of our business, which may be the result of a merger, consolidation, or purchase of all or a portion of our assets, or in connection with any bankruptcy or reorganisation proceeding brought by or against us.</p>

        <h2>ANONYMOUS DATA</h2>
        <p>From time to time, I may use anonymous data, which does not identify you alone, or when combined with data from other parties. This type of anonymous data may be provided to other parties for marketing, advertising, or other uses. Examples of this anonymous data may include analytics or information collected from cookies.</p>

        <h2>PUBLICLY VISIBLE INFORMATION</h2>
        <p>If you create a user profile on the Website or leave a comment, certain information may be publicly visible. To create a user profile, you must choose a username and password and input your email address for profile confirmation. Your email address will never be available publicly. At your option, you may also add an avatar, a profile description, and a link to your website. You may also choose to link your Facebook, Instagram, and Google Account. Users may see your username, avatar, profile description and website information.</p>

        <h2>COOKIES</h2>
        <p>The Website uses cookies to store visitors’ preferences, record user-specific information on what pages users access or visit, ensure that visitors are not repeatedly sent the same banner ads, customise Website content based on visitors’ browser type or other information that the visitor sends. Cookies may also be used by third-party services, such as Google Analytics, as described herein.</p>

        <p>Users may, at any time, prevent the setting of cookies, by the Website, by using a corresponding setting of your internet browser and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. However, if users deactivate the setting of cookies in your Internet browser, not all functions of our Website may be entirely usable.</p>

        <h2>ADVERTISING</h2>
        <p>Display Ads</p>

        <p>I use third-party advertising companies to serve content and advertisements when you visit the Website, which may use cookies, as noted above.</p>

        <p>Retargeting Ads</p>

        <p>From time to time, the Website may engage in remarketing efforts with third-party companies, such as Google, Facebook, or Instagram, in order to market the Website. These companies use cookies to serve ads based on someone’s past visits to the Website.</p>

        <p>Affiliate Program Participation</p>

        <p>The Website may engage in affiliate marketing, which is done by embedding tracking links into the Website. If you click on a link for an affiliate partnership, a cookie may be placed on your browser to track any sales for purposes of commissions.</p>

        <p>Newsletters</p>

        <p>On the Website, you may subscribe to the newsletter, which may be used for advertising purposes. The newsletters sent may contain tracking pixels. The pixel is embedded in emails and allows an analysis of the success of online marketing campaigns. Because of these tracking pixels, I may see if and when you open an email and which links within the email you click. Also, this allows the Website to adapt the content of future newsletters to the interests of the user. This behaviour will not be passed on to third parties.</p>

        <h2>RIGHTS RELATED TO YOUR PERSONAL INFORMATION</h2>
        <p>Opt-out – You may opt-out of future email communications by following the unsubscribe links in our emails. You may also notify me at office@afkology.com to be removed from our mailing list.</p>

        <p>Access – You may access the personal information I have about you by submitting a request me at office@afkology.com.</p>

        <p>Amend – You may contact me at office@afkology.com to amend or update your personal information.</p>

        <p>Forget – In certain situations, you may request that I erase or forget your personal data. To do so, please submit a request at office@afkology.com.</p>

        <p>Please note that I may need to retain certain information for record-keeping purposes or to complete transactions, or when required by law.</p>

        <h2> SENSITIVE PERSONAL INFORMATION</h2>
        <p>At no time should you submit sensitive personal information to the website. If you elect to submit such information to us, it will be subject to this Privacy Policy.</p>

        <h2>CONTACT INFORMATION</h2>
        <p>At any time, please contact me at office@afkology.com with any questions related to this Privacy Policy.</p>
      </main>
    </div>
  );
}
