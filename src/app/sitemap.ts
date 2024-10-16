import { getArticles } from '@/data/articles';
import { getCategories } from '@/data/categories';
import { getPages } from '@/data/pages';
import type { MetadataRoute } from 'next'
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

export default function sitemap(): MetadataRoute.Sitemap {

  const articles = getArticles();
  const categories = getCategories();
  const pages = getPages();

  const sitemapArticles: Array<{ url: string; lastModified?: string | Date; changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; priority?: number; alternates?: { languages?: Languages<string>; }; }> =
    articles.map(a => ({
      url: 'https://afkology.com' + a.slug?.en,
      lastModified: a.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          ro: 'https://afkology.com' + a.slug?.ro,
        },
      },
    }));

  const sitemapCategories: Array<{ url: string; lastModified?: string | Date; changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; priority?: number; alternates?: { languages?: Languages<string>; }; }> =
    categories.map(c => ({
      url: 'https://afkology.com' + c.slug?.en,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: 'https://afkology.com' + c.slug?.ro,
        },
      },
    }))

  const sitemapPages: Array<{ url: string; lastModified?: string | Date; changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; priority?: number; alternates?: { languages?: Languages<string>; }; }> =
    pages.map(p => ({
      url: 'https://afkology.com' + (p.slug?.en !== "/" ? p.slug?.en : ""),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          ro: 'https://afkology.com' + p.slug?.ro,
        },
      },
    }))

  return [
    ...sitemapArticles, ...sitemapCategories, ...sitemapPages,
  ]
}
