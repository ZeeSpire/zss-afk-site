import { StaticImageData } from "next/image";

export interface Article {
    id: number;
    slug: string;
    roSlug: string;
    title: string;
    roTitle: string;
    descriptionEn: string;
    descriptionRo: string;
    keywordsEn: string;
    keywordsRo: string;
    featured: StaticImageData;
    featuredLandscape: StaticImageData;
    category: string;
    createdDate: Date;
    lastModified: Date;
    contentEn: string;
    contentRo: string;
  }
