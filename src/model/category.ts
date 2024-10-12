export interface Category {
    id: number;
    title: string;
    titleRo: string;
    description: string;
    descriptionRo: string;
    keywords: string;
    keywordsRo: string;
    slug: string;
    slugRo: string;
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
    slug: "",
    slugRo: "",
    name: "",
    nameRo: "",
    color: ""
  }