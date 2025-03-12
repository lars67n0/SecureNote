"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label }) => {
  const pathname = usePathname(); 

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-1 rounded-md transition duration-200 ${
        isActive
          ? "bg-slate-200 dark:bg-gray-700 text-black dark:text-white"
          : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
      }`}
    >
      {icon} {label}
    </Link>
  );
};

export default NavLink;