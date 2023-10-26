"use client";

import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {/* <Button className="bg-white text-orange-600">Anunciar</Button> */}
      email@email.com
    </div>
  );
};

export default NavbarActions;
