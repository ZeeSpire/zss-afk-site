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
  ]
}