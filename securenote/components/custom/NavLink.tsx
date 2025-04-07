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
      className={`flex items-center gap-2 px-4 py-1 rounded-md transition duration-200 ${
        isActive
          ? "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-gray-900 dark:text-white"
          : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
      }`}
    >
      {icon} {label}
    </Link>
  );
};

export default NavLink;