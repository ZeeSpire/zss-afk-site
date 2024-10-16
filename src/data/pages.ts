import { defaultPage, Page } from "@/model/page";
import { getArticles } from "./articles";
import { Slug } from "@/model/slug";
import { slugs } from "./slugs";

export function getPage(id: number): Page {
    const page = pagesWithAllData.find(p => p.id === id);
    if (!page) {
        return defaultPage;
    }
    return page;
}

export function getPages(): Page[] {
    return pagesWithAllData;
  }

export function getPageTitle(id: number, languageCode: string, pageNumber?: string): string | undefined {
    const page = pagesWithAllData.find(p => p.id === id);
    if(languageCode && languageCode === 'ro') {
        if (pageNumber) {
            return page?.titleWithPageNumberRo?.replace('${currentPage}', `${pageNumber}`)
        }
        return page?.titleRo 
    } else {
        if (pageNumber) {
            return page?.titleWithPageNumber?.replace('${currentPage}', `${pageNumber}`)
        }
        return page?.title 
    }
}

export const pages: Page[] = [
    {
        id: 1,
        title: "AFKology | The most precious moments in life happen offline.",
        titleRo: "AFKology | Cele mai prețioase momente din viață se petrec offline.",
        titleWithPageNumber: "AFKology | Page ${currentPage} - The most precious moments in life happen offline.",
        titleWithPageNumberRo: "AFKology | Pagina ${currentPage} - Cele mai prețioase momente din viață se petrec offline.",
        description: "Travel information. What to visit, where to eat, how to spend your free time and holidays.",
        descriptionRo: "Informații de călătorie. Ce să vizitezi, unde să mănânci, cum să-ți petreci timpul liber și sărbătorile.",
        keywords: "afkology, travel, cinematic travel, travel ideas, travel guide, food guide, travel europe, restaurants, places to visit",
        keywordsRo: "afkology, călătorie, idei de călătorie, ghid de călătorie, ghid de restaurante, călătorii în europa, restaurante, locuri de vizitat",
        slugId: 40,
        hasPagination: true,
        itemsPerPage: 9,
        offset: 5,
        totalItems: getArticles().length
    },
    {
        id: 2,
        title: "AFKology | About Us - The most precious moments in life happen offline.",
        titleRo: "AFKology | Despre Noi - Cele mai prețioase momente din viață se petrec offline.",
        titleWithPageNumber: "AFKology | About Us - The most precious moments in life happen offline.",
        titleWithPageNumberRo: "AFKology | Despre Noi - Cele mai prețioase momente din viață se petrec offline.",
        description: "Learn more about AFKology, our mission, and the journey we take to explore the world and its hidden gems.",
        descriptionRo: "Descoperă povestea AFKology, pasiunea noastră pentru călătorii și angajamentul nostru de a oferi informații utile pentru aventurile tale.",
        keywords: "afkology, about us, our mission, travel community, travel stories, cinematic travel, exploration",
        keywordsRo: "afkology, despre noi, informații despre echipă, povestea noastră, călătorii, aventuri",
        slugId: 41,
        hasPagination: false,
        itemsPerPage: 0,
        offset: 0,
        totalItems: 0
    },
    {
        id: 3,
        title: "AFKology | Contact Us - The most precious moments in life happen offline.",
        titleRo: "AFKology | Contact - Cele mai prețioase momente din viață se petrec offline.",
        titleWithPageNumber: "AFKology | Contact Us - The most precious moments in life happen offline.",
        titleWithPageNumberRo: "AFKology | Contact - Cele mai prețioase momente din viață se petrec offline.",
        description: "Get in touch with us! We're here to answer your questions, hear your feedback, and help you plan your next adventure.",
        descriptionRo: "Contactează-ne pentru informații despre călătorie, întrebări sau colaborări. Suntem aici să te ajutăm să-ți planifici aventura perfectă.",
        keywords: "afkology, contact us, get in touch, travel inquiries, customer support, feedback, travel assistance",
        keywordsRo: "afkology, contact, întrebări, informații de călătorie, colaborări, ajutor călătorie",
        slugId: 42,
        hasPagination: false,
        itemsPerPage: 0,
        offset: 0,
        totalItems: 0
    },
    {
        id: 4,
        title: "AFKology | Privacy Policy - The most precious moments in life happen offline.",
        titleRo: "AFKology | Politica de Confidențialitate - Cele mai prețioase momente din viață se petrec offline.",
        titleWithPageNumber: "AFKology | Privacy Policy - The most precious moments in life happen offline.",
        titleWithPageNumberRo: "AFKology | Politica de Confidențialitate - Cele mai prețioase momente din viață se petrec offline.",
        description: "Read about how AFKology collects, uses, and protects your personal information. Your privacy is important to us.",
        descriptionRo: "Citește despre cum AFKology colectează, folosește și protejează informațiile tale personale. Confidențialitatea ta este importantă pentru noi.",
        keywords: "afkology, privacy policy, data protection, user privacy, personal information, data collection",
        keywordsRo: "afkology, politica de confidențialitate, protecția datelor, confidențialitate utilizator, informații personale, colectarea datelor",
        slugId: 43,
        hasPagination: false,
        itemsPerPage: 0,
        offset: 0,
        totalItems: 0
    }
]

const joinPages = (pages: Page[], slugs: Slug[]): Page[] => {
    return pages.map(page => {
        page.slug = slugs.find(s => s.id === page.slugId);
        return page;
    });
};

const pagesWithAllData = joinPages(pages, slugs);