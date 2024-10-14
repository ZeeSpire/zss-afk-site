import { StaticImageData } from "next/image";
import { Category } from "./category";

import maguraSquare from "../../public/magura/IMG_20211010_113741_yufvam-square.jpg"
import magura from "../../public/copenhaga/poza1_nyhavn_nfwm3x.jpg"
import { Slug } from "./slug";



export interface Article {
    id: number;
    slugId: number;
    slug?: Slug;
    title: string;
    titleRo: string;
    description: string;
    descriptionRo: string;
    keywords: string;
    keywordsRo: string;
    featured: StaticImageData;
    featuredLandscape: StaticImageData;
    categoryId: number;
    category?: Category; 
    createdDate: Date;
    lastModified: Date;
    content: string;
    contentRo: string;
    text: string;
    textRo: string;
  }

  export const defaultArticle: Article = {
    id: 0,
    slugId: 1,
    title: "",
    titleRo: "",
    description: "",
    descriptionRo: "",
    keywords: "",
    keywordsRo: "",
    featured: maguraSquare,
    featuredLandscape: magura,
    categoryId: 1,
    createdDate: new Date("2021-10-26T12:00:00.000Z"),
    lastModified: new Date("2024-10-02T12:00:00.000Z"),
    content: "",
    contentRo: "",
    text: "",
    textRo: ""
  }
