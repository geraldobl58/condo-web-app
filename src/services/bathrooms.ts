import { api } from "@/config/api";

import { Bathroom } from "@/types/bathroom";

const getBathrooms = async (): Promise<Bathroom[]> => {
  const { data } = await api.get(`/bathrooms`);

  return data;
};

export default getBathrooms;
