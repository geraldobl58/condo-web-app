import { Property } from "@/types/property";
import NoResults from "./ui/no-results";

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
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
      >
        {items.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
