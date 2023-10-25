import PropertyList from "@/components/property-list";
import Banner from "@/components/ui/banner";
import Container from "@/components/ui/container";

import getProperties from "@/services/properties";

export const revalidate = 0;

const HomePage = async () => {
  const properties = await getProperties({
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <PropertyList title="Imóveis em destaques" items={properties} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
