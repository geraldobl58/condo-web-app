"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { Bath, Bed, CarFront, Expand, Eye, Grid2X2 } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

import { Property } from "@/types/property";

interface PropertyCardProps {
  data: Property;
}

const PropertyCard = ({ data }: PropertyCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/property/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        bg-white 
        group 
        cursor-pointer
        rounded-xl
         border
         p-3
         space-y-4
      "
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          alt={data?.name}
          src={data?.images?.[0]?.url}
          className="aspect-square object-cover rounded-md"
        />
        <div
          className="
            opacity-0 
            group-hover:opacity-100
            transition
            absolute
            w-full
            px-6
            bottom-5
          "
        >
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<Eye size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{data.category.name}</p>
        <p className="text-sm text-gray-500">{data.neighborhood}</p>
      </div>
      <div>
        <p className="font-medium">{data.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <Bed size={20} />
          <p className="ml-2 text-sm">{data?.bathrooms}</p>
        </div>
        <div className="flex items-center">
          <Bath size={20} />
          <p className="ml-2 text-sm">{data?.bedrooms}</p>
        </div>
        <div className="flex items-center">
          <CarFront size={20} />
          <p className="ml-2 text-sm">{data?.garage}</p>
        </div>
        <div className="flex items-center">
          <Grid2X2 size={20} />
          <p className="ml-2 text-sm">{data?.land}m²</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default PropertyCard;
