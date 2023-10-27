"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import { Bath, Bed, CarFront, Grid2X2 } from "lucide-react";

import Currency from "./currency";

import { Property } from "@/types/property";

interface PropertyListCardProps {
  data: Property;
}

const PropertyListCard = ({ data }: PropertyListCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/property/${data.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="
        mb-10
        mt-10
        border
        bg-white 
        group 
        cursor-pointer
        rounded-xl
        p-3
        space-y-4
        ml-10
        w-[980px]
      "
    >
      <div className="relative">
        <div className="flex">
          <Image
            width={300}
            height={200}
            alt={data?.name}
            src={data?.images?.[0]?.url}
            className="aspect-square object-cover rounded-md mr-5"
          />
          <div>
            <h3 className="text-lg font-semibold text-black">{data.name}</h3>
            <p className="text-sm text-gray-500">{data.address}</p>
            <p className="text-sm text-gray-500">{data.neighborhood}</p>
            <p>
              <Currency value={data?.price} />
            </p>
            <div className="flex datas-center justify-between mt-5">
              <div className="flex">
                <Bath size={20} />
                <p className="ml-2 text-sm">
                  {data?.bathroom?.quantity} Banheiro(s)
                </p>
              </div>
              <div className="flex datas-center">
                <Bed size={20} />
                <p className="ml-2 text-sm">
                  {data?.bedroom?.quantity} Quarto(s)
                </p>
              </div>
              <div className="flex datas-center">
                <CarFront size={20} />
                <p className="ml-2 text-sm">{data?.garage?.quantity} Garagem</p>
              </div>
              <div className="flex datas-center">
                <Grid2X2 size={20} />
                <p className="ml-2 text-sm">{data?.land}m²</p>
              </div>
            </div>
            <div className="flex datas-center mt-5">
              <p className="text-sm leading-6">{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListCard;
