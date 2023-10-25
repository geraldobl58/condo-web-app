"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { Category } from "@/types/category";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          passHref
          className={cn(
            `
            text-sm
            font-medium
            transition-colors
            hover:text-orange-600
      `,
            route.active ? "text-orange-600" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
