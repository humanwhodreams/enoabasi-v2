"use client";

import * as React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
  children: React.ReactNode;
}

export function NavLink({ children,label, href }: Props) {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        // base
        "inline-flex items-center justify-center px-3 py-1 rounded-md font-medium bg-transparent duration-300 group transition-colors",
        // active path
        isActive
          ? "underline underline-offset-2 decoration-wavy decoration-primary"
          : "",
        // focus
        "outline outline-offset-2 outline-0 focus-visible:outline-2",
        // outline color
        "outline-primary"
      )}
    >
      {children}
      {label}
    </Link>
  );
}
