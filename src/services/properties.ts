import qs from "query-string";

import { Property } from "@/types/property";

interface Query {
  categoryId?: string;
  bathroomId?: string;
  bedroomId?: string;
  garageId?: string;
  kindId?: string;
  isFeatured?: boolean;
}

const getProperties = async (query: Query): Promise<Property[]> => {
  const url = qs.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/properties`,
    query: {
      categoryId: query.categoryId,
      bathroomId: query.bathroomId,
      bedroomId: query.bedroomId,
      garageId: query.garageId,
      kindId: query.kindId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProperties;
