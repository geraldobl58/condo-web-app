"use client";

import { formattedPrice } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">{formattedPrice.format(Number(value))}</div>
  );
};

export default Currency;
