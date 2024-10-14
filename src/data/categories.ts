import { Category, defaultCategory } from "@/model/category";
import { slugs } from "./slugs";
import { Slug } from "@/model/slug";

export function getCategory(id: number): Category {
    const category = categoriesWithAllData.find(c => c.id === id);
    if (!category) {
      return defaultCategory;
    }
    return category;
  }

export const categories: Category[] = [
    {
      id: 1,
      title: "AFKology | Bulgaria - Discover Bulgaria’s Hidden Gems and Natural Beauty.",
      titleRo: "AFKology | Bulgaria - Descoperă comorile ascunse și frumusețea naturală a Bulgariei.",
      description: "Explore Bulgaria with AFKology. From majestic mountains to Black Sea beaches, discover the best travel experiences in Bulgaria.",
      descriptionRo: "Explorează Bulgaria cu AFKology. De la munți impunători la plajele Mării Negre, descoperă cele mai bune experiențe de călătorie în Bulgaria.",
      keywords: "afkology, bulgaria, travel bulgaria, bulgaria travel guide, places to visit in bulgaria, bulgarian food, bulgaria tourism",
      keywordsRo: "afkology, bulgaria, călătorie bulgaria, ghid de călătorie bulgaria, locuri de vizitat în bulgaria, bucătăria bulgară, turism bulgaria",
      slugId: 39,
      name: "Bulgaria",
      nameRo: "Bulgaria",
      color: "text-pink-400"
    },
    {
      id: 2,
      title: "AFKology | Romania - Discover the Best of Romania Travel, Lifestyle and Food.",
      titleRo: "AFKology | România - Descoperă frumusețile naturii și cultura diversă.",
      description: "Explore Romania with AFKology. Find out the best travel destinations, local cuisine, and hidden gems across the country.",
      descriptionRo: "Explorează România cu AFKology. Află despre peisajele spectaculoase, tradițiile locale și cele mai bune locuri de vizitat.",
      keywords: "afkology, romania, travel romania, romania travel guide, places to visit in romania, romanian food, romania tourism",
      keywordsRo: "afkology, romania, călătorie românia, ghid de călătorie românia, locuri de vizitat în românia, cultura română, turism românia",
      slugId: 38,
      name: "Romania",
      nameRo: "Romania",
      color: "text-indigo-400"
    },
    {
      id: 3,
      title: "AFKology | Italy - Discover the Best of Italy Travel and Culture.",
      titleRo: "AFKology | Italia - Descoperă cultura, gastronomie și peisaje spectaculoase.",
      description: "Explore Italy with AFKology. Discover the best destinations, Italian cuisine, and cultural treasures across the country.",
      descriptionRo: "Explorează Italia cu AFKology. De la orașele istorice la deliciile culinare, află cele mai bune locuri de vizitat și experiențe de neuitat.",
      keywords: "afkology, italy, travel italy, italy travel guide, places to visit in italy, italian food, italy tourism",
      keywordsRo: "afkology, italia, călătorie italia, ghid de călătorie italia, locuri de vizitat în italia, mâncare italiană, turism italia",
      slugId: 37,
      name: "Italy",
      nameRo: "Italia",
      color: "text-green-400"
    },
    {
      id: 4,
      title: "AFKology | Greece - Explore Greece's Rich History, Culture, and Beaches.",
      titleRo: "AFKology | Grecia - Descoperă frumusețea insulelor și cultura greacă.",
      description: "Discover Greece with AFKology. From ancient ruins to crystal-clear beaches, explore the best that Greece has to offer.",
      descriptionRo: "Explorează Grecia cu AFKology. De la plajele idilice la siturile istorice, descoperă cele mai bune destinații și experiențe în Grecia.",
      keywords: "afkology, greece, travel greece, greece travel guide, places to visit in greece, greek food, greece tourism",
      keywordsRo: "afkology, grecia, călătorie grecia, ghid de călătorie grecia, locuri de vizitat în grecia, mâncare grecească, turism grecia",
      slugId: 36,
      name: "Greece",
      nameRo: "Grecia",
      color: "text-sky-400"
    },
    {
      id: 5,
      title: "AFKology | Denmark - Unveil the Charm of Danish Culture and Travel.",
      titleRo: "AFKology | Danemarca - Descoperă cultura scandinavă și peisajele uimitoare din Danemarca.",
      description: "Explore Denmark with AFKology. Discover vibrant cities, stunning landscapes, and the rich cultural heritage of Denmark.",
      descriptionRo: "Explorează Danemarca cu AFKology. De la orașele vibrante la satele pitorești, descoperă cele mai bune locuri de vizitat și experiențe în Danemarca.",
      keywords: "afkology, denmark, travel denmark, denmark travel guide, places to visit in denmark, danish food, denmark tourism",
      keywordsRo: "afkology, danemarca, călătorie danemarca, ghid de călătorie danemarca, locuri de vizitat în danemarca, mâncare daneză, turism danemarca",
      slugId: 35,
      name: "Denmark",
      nameRo: "Danemarca",
      color: "text-orange-400"
    }
  ]
  
  const joinCategories = (categories: Category[], slugs: Slug[]): Category[] => {
    return categories.map(category => {
      category.slug = slugs.find(s => s.id === category.slugId);
      return category;
    });
  };
  
  const categoriesWithAllData = joinCategories(categories, slugs);