import { api } from "@/config/api";

import { Property } from "@/types/property";

const getProperty = async (id: string): Promise<Property> => {
  const { data } = await api.get(`/properties/${id}`);

  return data;
};

export default getProperty;
