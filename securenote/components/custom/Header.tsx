import React from "react";
import Link from "next/link";
import { Flex } from "@/components/ui/flex";
import { ThemeSwitch } from "./ThemeSwitch";
import NavMenu from "./NavMenu"; // Import navigation menu
import SignInButton from "./SignInButton"; // Import Sign In button

const Header = () => {
  return (
    <nav className="py-4 bg-slate-100 shadow-md dark:bg-gray-900 lg:block hidden">
      <Flex className="justify-between items-center max-w-[75%] mx-auto">
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link href="/">SecureNote</Link>
        </h1>
        <NavMenu />
        <Flex className="gap-4">
          <SignInButton />
          <ThemeSwitch />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Header;