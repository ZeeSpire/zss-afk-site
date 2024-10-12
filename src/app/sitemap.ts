import { getArticles } from '@/data/data';
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {

  const articles = getArticles();

  const sitemapArticles = articles.map(a => ({
    url: 'https://afkology.com/' + a.slug,
    lastModified: a.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        ro: 'https://afkology.com/' + a.slugRo,
      },
    },
  }));
  
  return [
    ...sitemapArticles,
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
      url: 'https://afkology.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          ro: 'https://afkology.com/ro',
        },
      },
    }
  ]
}
