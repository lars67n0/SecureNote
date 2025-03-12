import React from "react";
import Link from "next/link";
import { Flex } from "@/components/ui/flex";
import { ThemeSwitch } from "./ThemeSwitch";
import NavMenu from "./NavMenu"; 
import SignInButton from "./SignInButton"; 
import { TbShieldLockFilled } from "react-icons/tb";

const Header = () => {
  return (
    <nav className="py-4 bg-slate-100 shadow-md dark:bg-gray-900 lg:block hidden">
      <Flex className="justify-between items-center max-w-[75%] mx-auto">
          <Link href="/">  
            <Flex className="items-center gap-1">
              <TbShieldLockFilled className="h-6 w-6 dark:text-indigo-300"/>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                 SecureNote
              </h1>
            </Flex>
          </Link>
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