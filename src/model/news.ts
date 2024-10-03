import { StaticImageData } from "next/image";

export interface News {
    slug: string;
    title: string;
    featured: StaticImageData;
  }