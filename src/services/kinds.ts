import { api } from "@/config/api";

import { Kind } from "@/types/kind";

const getKinds = async (): Promise<Kind[]> => {
  const { data } = await api.get(`/kinds`);

  return data;
};

export default getKinds;
