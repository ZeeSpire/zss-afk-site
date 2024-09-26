import { StaticImageData } from "next/image";

export interface Article {
    slug: string;
    title: string;
    featured: StaticImageData;
    featuredLandscape: StaticImageData;
    category: string;
  }
