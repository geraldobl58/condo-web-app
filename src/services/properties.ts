import qs from "query-string";

import { api } from "@/config/api";

import { Property } from "@/types/property";

interface Query {
  categoryId?: string;
  bathroomId?: string;
  isFeatured?: boolean;
}

const getProperties = async (query: Query): Promise<Property[]> => {
  const url = qs.stringifyUrl({
    url: `http://localhost:3000/api/properties`,
    query: {
      categoryId: query.categoryId,
      bathroomId: query.bathroomId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProperties;
