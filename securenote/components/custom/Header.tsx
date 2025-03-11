import React from "react";
import Link from "next/link";
import { Flex } from "@/components/ui/flex";
import { ThemeSwitch } from "./ThemeSwitch";
import NavMenu from "./NavMenu"; // Import navigation menu
import SignInButton from "./SignInButton"; // Import Sign In button

const Header = () => {
  return (
    <nav className=" shadow-md p-4 ">
      <Flex className="justify-between items-center max-w-6xl mx-auto">
        {/* Logo / App Name */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link href="/">SecureNote</Link>
        </h1>

        {/* Navigation Links */}
        <NavMenu />

        {/* Sign In & Theme Switch */}
        <Flex className="gap-4">
          <SignInButton />
          <ThemeSwitch />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Header;