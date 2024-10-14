import { Slug } from "./slug";

export interface Category {
    id: number;
    title: string;
    titleRo: string;
    description: string;
    descriptionRo: string;
    keywords: string;
    keywordsRo: string;
    slug?: Slug;
    slugId: number;
    name: string;
    nameRo: string;
    color: string;
  }

  export const defaultCategory: Category = {
    id: 0,
    title: "",
    titleRo: "",
    description: "",
    descriptionRo: "",
    keywords: "",
    keywordsRo: "",
    slugId: 0,
    name: "",
    nameRo: "",
    color: ""
  }