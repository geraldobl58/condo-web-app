import { Category } from "./category";
import { Image } from "./image";

export interface Property {
  id: string;
  category: Category;
  name: string;
  images: Image;
  address: string;
  neighborhood: string;
  price: string;
  description: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  land: number;
  isFeatured: boolean;
}
