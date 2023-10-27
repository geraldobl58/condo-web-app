import { api } from "@/config/api";

import { Bedroom } from "@/types/bedroom";

const getBedrooms = async (): Promise<Bedroom[]> => {
  const { data } = await api.get(`/bedrooms`);

  return data;
};

export default getBedrooms;
