import { StaticImageData } from "next/image";

export interface Article {
    id: string;
    slug: string;
    roSlug: string;
    title: string;
    roTitle: string;
    featured: StaticImageData;
    featuredLandscape: StaticImageData;
    category: string;
    createdDate: Date;
    lastModified: Date;
  }
