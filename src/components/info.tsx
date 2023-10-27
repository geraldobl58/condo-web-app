import { Bath, Bed, CarFront, Grid2X2 } from "lucide-react";

import Currency from "./ui/currency";

import { Property } from "@/types/property";

interface InfoProps {
  data: Property;
}

const Info = ({ data }: InfoProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
      <div>
        <p className="text-sm text-gray-500 pb-2 pt-2">
          Categoria: {data?.category?.name}
        </p>
        <p className="text-sm text-gray-500 pb-2 pt-2">
          Bairro: {data?.neighborhood}
        </p>
        <p className="text-sm text-gray-500 pb-2 pt-2">
          Endereço: {data?.address}
        </p>
        <p className="text-sm text-gray-500 pb-2 pt-2">
          Tipo: {data?.kind?.name}
        </p>
        <Currency value={data?.price} />
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex">
          <Bath size={20} />
          <p className="ml-2 text-sm">{data?.bathroom?.quantity} Banheiro(s)</p>
        </div>
        <div className="flex items-center">
          <Bed size={20} />
          <p className="ml-2 text-sm">{data?.bedroom?.quantity} Quarto(s)</p>
        </div>
        <div className="flex items-center">
          <CarFront size={20} />
          <p className="ml-2 text-sm">{data?.garage?.quantity} Garagem</p>
        </div>
        <div className="flex items-center">
          <Grid2X2 size={20} />
          <p className="ml-2 text-sm">{data?.land}m²</p>
        </div>
      </div>
      <div className="flex items-center mt-5">
        <p className="text-sm leading-6">{data?.description}</p>
      </div>
    </div>
  );
};

export default Info;
