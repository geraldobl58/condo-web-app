import NoResults from "@/components/ui/no-results";
import PropertyCard from "@/components/ui/property-card";

import { Property } from "@/types/property";

interface PropertyListProps {
  title: string;
  items: Property[];
}

const PropertyList = ({ title, items }: PropertyListProps) => {
  return (
    <div className="space-y-4">
      <h5 className="font-bold text-2xl">{title}</h5>
      {items.length === 0 && <NoResults />}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
        "
      >
        {items.map((item) => (
          <PropertyCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
