import { api } from "@/config/api";

import { Category } from "@/types/category";

const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get(`/categories`);

  return data;
};

export default getCategories;
