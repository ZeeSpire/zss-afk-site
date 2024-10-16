import { Slug } from "./slug";

export interface Page {
    id: number;
    title: string;
    titleRo: string;
    titleWithPageNumber: string;
    titleWithPageNumberRo: string;
    description: string;
    descriptionRo: string;
    keywords: string;
    keywordsRo: string;
    slug?: Slug;
    slugId: number;
    hasPagination: boolean;
    itemsPerPage: number;
    offset: number;
    totalItems: number;
}

export const defaultPage: Page = {
    id: 0,
    title: "",
    titleRo: "",
    titleWithPageNumber: "",
    titleWithPageNumberRo: "",
    description: "",
    descriptionRo: "",
    keywords: "",
    keywordsRo: "",
    slugId: 0,
    hasPagination: false,
    itemsPerPage: 0,
    offset: 0,
    totalItems: 0
}