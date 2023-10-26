import Gallery from "@/components/gallery";
import Info from "@/components/info";
import PropertyList from "@/components/property-list";
import Container from "@/components/ui/container";

import getProperties from "@/services/properties";
import getProperty from "@/services/property";

interface PropertyPageProps {
  params: {
    propertyId: string;
  };
}

const PropertyPage = async ({ params }: PropertyPageProps) => {
  const property = await getProperty(params.propertyId);
  const suggestedProperties = await getProperties({
    categoryId: property?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2  lg:gap-x-8">
            <Gallery images={property.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={property} />
            </div>
          </div>
          <hr className="my-10" />
          <PropertyList
            title="Imóveis novos para você"
            items={suggestedProperties}
          />
        </div>
      </Container>
    </div>
  );
};

export default PropertyPage;
