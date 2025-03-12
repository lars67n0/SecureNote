import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignInButton = () => {
  return (
    <Button
      variant="outline"
      className="text-gray-900 dark:text-white border-gray-500 hover:bg-gray-900 dark:hover:bg-gray-400 hover:text-white dark:hover:text-white transition duration-200"
    >
      <Link href="/login">Sign In</Link>
     
    </Button>
  );
};

export default SignInButton;