import { getArticle } from "@/data/articles";
import Navbar from "../../../../../../components/ro/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import LinkExternal from "@/components/linkexternal/LinkExternal";

import december2024 from "../../../../../../../public/december-2024/december-2024-offers-landscape.jpg"

const article = getArticle(36);

export const metadata: Metadata = {
    title: `AFKology | ${article.titleRo}`,
    description: `${article.descriptionRo}`,
    keywords: `${article.keywordsRo}`,
    metadataBase: new URL('https://www.afkology.com'),
    alternates: {
        canonical: `${article.slug?.ro}`,
        languages: {
            'ro-RO': `${article.slug?.ro}`,
            'en-US': `${article.slug?.en}`,
        },
    },
    openGraph: {
        title: `AFKology | ${article.titleRo}`,
        description: `${article.descriptionRo}`,
        url: `https://www.afkology.com${article.slug?.ro}`,
        siteName: 'AFKology',
        locale: 'ro_RO',
        type: 'article',
        publishedTime: `${article.createdDate}`,
        modifiedTime: `${article.lastModified}`,
        tags: `${article.keywordsRo}`,
        images: [
            {
                url: `https://www.afkology.com${article.featured.src}`,
                width: `${article.featured.width}`,
                height: `${article.featured.height}`,
            },
            {
                url: `https://www.afkology.com${article.featuredLandscape.src}`,
                width: `${article.featuredLandscape.width}`,
                height: `${article.featuredLandscape.height}`,
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
    "@type": "Article",
    "headline": `${article.titleRo}`,
    "description": `${article.descriptionRo}`,
    "url": `https://www.afkology.com${article.slug?.ro}`,
    "datePublished": `${article.createdDate}`,
    "dateModified": `${article.lastModified}`,
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
            "height": 107
        }
    },
    "image": {
        "@type": "ImageObject",
        "url": `https://www.afkology.com${article.featured.src}`,
        "width": `${article.featured.width}`,
        "height": `${article.featured.height}`
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.afkology.com${article.slug?.ro}`
    },
    "articleBody": `${article.textRo}`,
    "keywords": `${article.keywordsRo}`
}

export default function Page() {
    return (
        <div>
            <section>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </section>
            <Navbar enUrl={`${article.slug?.en}`} />
            <main className="flex-grow">
                <h1 className="text-center mb-8">{article.titleRo}</h1>
                {/* image 16/9 */}
                <Image className="mb-6 rounded-lg drop-shadow-xl" src={december2024} alt="Oferte Speciale pentru Weekendul de Sfântul Andrei și 1 Decembrie la pensiuni din România (2024)" width={1248} height={702} sizes="(max-width: 1280px) 90vw, 70vw" priority />
                <p>An de an, românii au motive de sărbătoare atât pe 30 noiembrie, cât și pe 1 decembrie, zile care sunt și libere legale. În 2024, aceste sărbători vor cădea în weekend, mai exact sâmbătă și duminică.</p>
                <p>Pe 30 noiembrie, românii îl sărbătoresc pe Sfântul Andrei, ocrotitorul României și “Apostolul românilor”, cel care a adus creștinismul pe teritoriul de astăzi al țării.</p>
                <p>Ziua Națională a României este celebrată pe 1 decembrie, când se marchează Marea Unire din 1918. În această zi istorică, la Alba Iulia, Adunarea Națională a votat unirea Transilvaniei, Banatului, Crișanei și Maramureșului cu România, finalizând astfel procesul de unificare a tuturor provinciilor locuite de români.</p>
                <p>Am căutat și am găsit oferte speciale ale pensiunilor din România, concepute special pentru acest weekend festiv.</p>
                <h2>Razelm Luxury Resort</h2>
                <p>Pachetul special pentru weekendul de 1 decembrie include două nopți de cazare cu mic dejun, o cină tradițională pe 30 noiembrie, acompaniată de muzică live, care aduce farmecul sărbătorilor românești. Te așteaptă un foc de tabără, marshmallow prăjit și shoturi tradiționale pentru a încălzi atmosfera și a completa o experiență de neuitat!</p>
                <p>Preț: <LinkExternal link="https://razelmluxuryresort.ro/oferte-speciale/" title="Link catre Razelm Luxury Resort" text="de la 1500 lei / cameră" /></p>
                <h2>Conacul Grigorescu</h2>
                <p>La Conacul Grigorescu, chef Juranda, co-gazda dumneavoastră, va găti cu migală cele mai rafinate preparate din ingrediente locale, special pregătite pentru acest weekend de sărbătoare. Pachetul include, pe lângă două nopți de cazare, o băutură de bun venit, două mic dejunuri și două cine, dintre care cina de sâmbătă va fi una festivă.</p>
                <p>Preț: <LinkExternal link="https://conacul-grigorescu-terra-carpatica.pynbooking.direct/" title="Link catre Conacul Grigorescu" text="de la 2100 RON / cameră" /></p>
                <h2>Hotel Ozone</h2>
                <p>Oferta pentru minivacanța de Sfântul Andrei și 1 Decembrie include două nopți de cazare cu pensiune completă, acces la SPA, primire tradițională cu cozonac și afinată, precum și un program artistic deosebit.</p>
                <p>Preț: <LinkExternal link="https://www.o3zone.ro/oferte-speciale/" title="Link catre Hotel Ozone" text="de la 2100 RON / cameră" /></p>
                <h2>Hadar Chalet</h2>
                <p>Acest pachet include două nopți de cazare (29 noiembrie – 1 decembrie), pensiune completă (mic dejun, prânz și cină), acces la toate facilitățile complexului, un foc de tabără de neuitat și o masă festivă pentru a sărbători cum se cuvine.</p>
                <p>Preț: <LinkExternal link="https://hadarchalet.ro/" title="Link catre Hadar Chalet" text="de la 2400 lei / cameră" /></p>
                <h2>Potcoava Mountain Hideaway</h2>
                <p>Acest pachet oferă un sejur de două nopți cu pensiune completă, incluzând activități deosebite pentru toate vârstele: plimbare cu trăsurica trasă de ponei pentru copii, foc de tabără, atelier meșteșugăresc și acces la zona SPA. De asemenea, adulții se pot bucura de o drumeție călare de o oră, perfectă pentru a explora frumusețea munților.</p>
                <p>Preț: <LinkExternal link="https://potcoava.ro/pachete-de-vacanta/" title="Link tcatreo Potcoava Mountain Hideaway" text="de la 2726,5 RON / cameră" /></p>
                <h2>Atra Doftana</h2>
                <p>Pachetul include două nopți de cazare (29 noiembrie – 1 decembrie) cu mic dejun inclus și două cine deosebite: una cu 3 feluri de mâncare și cealaltă cu 5 feluri. După cina din 29 noiembrie, te vei putea bucura de un foc de tabără acompaniat de vin fiert, iar cina gourmet din 30 noiembrie va fi o experiență fine dining, cu preparate asociate atent cu vinuri de calitate.</p>
                <p>Preț: <LinkExternal link="https://atradoftana.ro/" title="Link catre Atra Doftana" text="de la 2950 RON / cameră" /></p>
                <h2>Casa Timiș</h2>
                <p>Pachetul include un sejur de 3 nopți (29 noiembrie – 2 decembrie) cu demipensiune și acces la SPA. Pe lângă relaxare, oferta cuprinde o degustare de vinuri, un tur la fermă cu degustare de produse lactate, o sesiune de yoga pentru adulți, activități interactive pentru copii organizate de animatori, muzică live la cină și un foc de tabără acompaniat de muzică folk și gustări tradiționale.</p>
                <p>Preț: <LinkExternal link="https://casatimis.ro/" title="Link catre Casa Timis" text="de la 7400 RON / cameră" /></p>
            </main>
        </div>
    );
}