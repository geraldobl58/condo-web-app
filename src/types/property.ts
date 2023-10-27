import { Bathroom } from "./bathroom";
import { Bedroom } from "./bedroom";
import { Category } from "./category";
import { Garage } from "./garage";
import { Image } from "./image";
import { Kind } from "./kind";

export interface Property {
  id: string;
  category: Category;
  name: string;
  images: Image[];
  address: string;
  neighborhood: string;
  price: string;
  description: string;
  kind: Kind;
  bathroom: Bathroom;
  bedroom: Bedroom;
  garage: Garage;
  land: number;
  isFeatured: boolean;
}
