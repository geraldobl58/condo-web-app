import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import PropertyListCard from "@/components/ui/property-list-card";

import Filter from "./components/filter";

import getProperties from "@/services/properties";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    categoryId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const properties = await getProperties({
    categoryId: params.categoryId,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Filters Mobile */}
            {/* <div className="hidden lg:block">
              <Filter
                valueKey="categoryId"
                name="Categorias"
                data={properties}
              />
            </div> */}
            <div className="mt-6 lg:col-span-6 lg:mt-0">
              {properties.length === 0 && <NoResults />}
              <div className="block">
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
