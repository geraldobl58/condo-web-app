import Link from "next/link";

import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import PropertyListCard from "@/components/ui/property-list-card";
import Filter from "./components/filter";

import getProperties from "@/services/properties";
import getBathrooms from "@/services/bathrooms";
import getBedrooms from "@/services/bedrooms";
import getGarages from "@/services/garages";
import getKinds from "@/services/kinds";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    bathroomId: string;
    bedroomId: string;
    garageId: string;
    kindId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const properties = await getProperties({
    categoryId: params.categoryId,
    bathroomId: searchParams.bathroomId,
    bedroomId: searchParams.bedroomId,
    garageId: searchParams.garageId,
    kindId: searchParams.kindId,
  });

  const bathrooms = await getBathrooms();
  const bedrooms = await getBedrooms();
  const garages = await getGarages();
  const kinds = await getKinds();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:flex lg:grid-cols-5 lg:gap-x-8">
            <div className="hidden lg:block">
              <div className="mt-10">
                <Filter
                  valueKey="bathroomId"
                  name="Banheiros"
                  bathroom={bathrooms}
                />
              </div>
              <div className="mt-10">
                <Filter
                  valueKey="bedroomId"
                  name="Quartos"
                  bedroom={bedrooms}
                />
              </div>
              <div className="mt-10">
                <Filter valueKey="garageId" name="Garagem" garage={garages} />
              </div>
              <div className="mt-10">
                <Filter valueKey="kindId" name="Tipo" kind={kinds} />
              </div>
              <div className="hidden lg:block">
                <Link
                  href={`/category/${params.categoryId}`}
                  className="
                    bg-slate-700
                    text-white
                    rounded-md
                    p-3
                    cursor-pointer
                  "
                >
                  Limpar
                </Link>
              </div>
            </div>
            <div className="mt-6 lg:col-span-6 lg:mt-0">
              {properties.length === 0 && <NoResults />}
              <div>
                {properties.map((item) => (
                  <PropertyListCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
