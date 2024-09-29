import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://afkology.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro',
        },
      },
    },
    {
      url: 'https://afkology.com/romania',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/romania',
        },
      },
    },
    {
      url: 'https://afkology.com/bulgaria',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/bulgaria',
        },
      },
    },
    {
      url: 'https://afkology.com/greece',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/grecia',
        },
      },
    },
    {
      url: 'https://afkology.com/denmark',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/danemarca',
        },
      },
    },
    {
      url: 'https://afkology.com/italy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/italia',
        },
      },
    },
    {
      url: 'https://afkology.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/despre-noi',
        },
      },
    },
    {
      url: 'https://afkology.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/contact',
        },
      },
    },
    {
      url: 'https://afkology.com/magura-and-pestera-villages-brasov-county-romania',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/satele-magura-si-pestera-din-brasov-romania',
        },
      },
    },
    {
      url: 'https://afkology.com/tips-for-visiting-copenhagen-for-the-first-time',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/sfaturi-pentru-prima-vizita-in-copenhaga',
        },
      },
    },
    {
      url: 'https://afkology.com/free-attractions-to-visit-in-copenhagen',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/atractii-gratuite-de-vizitat-in-copenhaga',
        },
      },
    },
    {
      url: 'https://afkology.com/itinerary-three-days-in-copenhagen',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/trei-zile-in-copenhaga',
        },
      },
    },
    {
      url: 'https://afkology.com/frederiksborg-castle-1-day-trip-from-copenhagen',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/castelul-frederiksborg-excursie-de-o-zi-din-copenhaga',
        },
      },
    },
    {
      url: 'https://afkology.com/the-muddy-volcanoes-buzau-county-romania',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/vulcanii-noroiosi-judetul-buzau-romania',
        },
      },
    },
    {
      url: 'https://afkology.com/noua-bucatarie-romaneasca',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/noua-bucatarie-romaneasca',
        },
      },
    },
    {
      url: 'https://afkology.com/apogeum-winery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/crama-apogeum',
        },
      },
    },
    {
      url: 'https://afkology.com/remote-accomodations-in-romania',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/cazari-izolate-in-romania',
        },
      },
    },
    {
      url: 'https://afkology.com/art-safari-a-temporary-art-exhibition-in-bucharest',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/art-safari-o-expozitie-temporara-de-arta-in-bucuresti',
        },
      },
    },
    {
      url: 'https://afkology.com/neversea-festival-2022-edition',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/festivalul-neversea-editia-2022',
        },
      },
    },
    {
      url: 'https://afkology.com/our-divine-cave-experience-in-santorini',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/despre-divine-cave-experience-din-santorini',
        },
      },
    },
    {
      url: 'https://afkology.com/what-and-where-to-eat-in-santorini',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/ce-si-unde-sa-mananci-in-santorini',
        },
      },
    },
    {
      url: 'https://afkology.com/best-places-to-watch-the-sunset-in-santorini',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/cele-mai-bune-locuri-de-privit-apusul-in-santorini',
        },
      },
    },
    {
      url: 'https://afkology.com/top-things-to-do-in-santorini-greece',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/top-lucruri-de-facut-in-santorini-grecia',
        },
      },
    },
    {
      url: 'https://afkology.com/crama-de-piatra-a-boutique-winery-with-a-huge-potential',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/crama-de-piatra-o-crama-boutique-cu-un-potential-imens',
        },
      },
    },
    {
      url: 'https://afkology.com/viscri-the-most-popular-saxon-village-in-transylvania',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/viscri-cel-mai-popular-sat-sasesc-din-transilvania',
        },
      },
    },
    {
      url: 'https://afkology.com/truffle-hunting-and-a-special-culinary-experience-at-grigorescu-mansion',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/vanatoare-de-trufe-si-o-experienta-culinara-deosebita-la-conacul-grigorescu',
        },
      },
    },
    {
      url: 'https://afkology.com/art-safari-a-temporary-art-exhibition-in-bucharest-10th-edition',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/art-safari-o-expozitie-temporara-de-arta-in-bucuresti-editia-10',
        },
      },
    },
    {
      url: 'https://afkology.com/about-truffles-and-how-to-find-them',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/despre-trufe-si-gasirea-lor',
        },
      },
    },
    {
      url: 'https://afkology.com/valea-verde-a-successful-story-of-reviving-a-forgotten-transylvanian-village',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/valea-verde-o-poveste-de-succes-a-reinvierii-unui-sat-transilvanean-uitat',
        },
      },
    },
    {
      url: 'https://afkology.com/easter-offers-in-romania-2023',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/oferte-de-paste-in-romania-2023',
        },
      },
    },
    {
      url: 'https://afkology.com/everything-about-matera-italy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/totul-despre-matera-italia',
        },
      },
    },
    {
      url: 'https://afkology.com/lecce-a-baroque-gem-in-salento',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/lecce-bijuteria-baroca-din-salento',
        },
      },
    },
    {
      url: 'https://afkology.com/noua-bar-bucharest',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/noua-bar-bucuresti',
        },
      },
    },
    {
      url: 'https://afkology.com/national-village-museum-bucharest',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/muzeul-satului-dimitrie-gusti-bucuresti',
        },
      },
    },
    {
      url: 'https://afkology.com/cismigiu-garden',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/gradina-cismigiu',
        },
      },
    },
    {
      url: 'https://afkology.com/top-things-to-do-in-athens',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/top-lucruri-de-facut-in-atena',
        },
      },
    },
    {
      url: 'https://afkology.com/what-to-see-in-thessaloniki',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/ce-sa-vizitezi-in-salonic',
        },
      },
    },
    {
      url: 'https://afkology.com/dinner-at-the-artist-a-visual-feast-with-room-for-improvement',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/cina-la-the-artist-un-festin-vizual-cu-loc-de-mai-bine',
        },
      },
    },
    {
      url: 'https://afkology.com/exquisite-culinary-symphony-a-gastronomic-journey-at-noua-bucatarie-romaneasca',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/simfonie-culinara-exceptionala-o-calatorie-gastronomica-la-noua-bucatarie-romaneasca',
        },
      },
    },
    {
      url: 'https://afkology.com/valea-verde',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/valea-verde',
        },
      },
    },
    {
      url: 'https://afkology.com/bulgaria-rose-valley-rose-festival',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/bulgaria-valea-trandafirilor-festivalul-trandafirilor',
        },
      },
    },
    {
      url: 'https://afkology.com/exploring-the-fragrant-beauty-of-bulgaria-s-valley-of-roses',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro/explorand-frumusetea-parfumata-a-vaii-trandafirilor-din-bulgaria',
        },
      },
    },
  ]
}