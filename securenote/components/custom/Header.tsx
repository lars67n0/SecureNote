import React from "react";
import Link from "next/link";
import { Flex } from "@/components/ui/flex";
import { ThemeSwitch } from "./ThemeSwitch";
import NavMenu from "./NavMenu"; 
import SignInButton from "./SignInButton"; 
import { Si2Fas } from "react-icons/si";

const Header = () => {
  return (
    <nav className="mt-4 py-10 lg:block hidden shadow-2xl shadow-indigo-500/20 mb-10">
      <Flex className="justify-between items-center max-w-[75%] mx-auto">
          <Link href="/">  
            <Flex className="items-center gap-1">
              <Si2Fas className="h-12 w-12 mr-2 dark:text-indigo-400 text-indigo-500"/>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                 SecureNote
              </h1>
            </Flex>
          </Link>
        <NavMenu />
        <Flex className="gap-4">
        <ThemeSwitch />
        <SignInButton />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Header;