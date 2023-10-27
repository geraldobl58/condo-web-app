import { api } from "@/config/api";

import { Garage } from "@/types/garage";

const getGarages = async (): Promise<Garage[]> => {
  const { data } = await api.get(`/garages`);

  return data;
};

export default getGarages;
