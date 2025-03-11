import React from "react";
import { Button } from "@/components/ui/button";

const SignInButton = () => {
  return (
    <Button
      variant="outline"
      className="text-gray-900 dark:text-white border-gray-500 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition duration-200"
    >
      Sign In
    </Button>
  );
};

export default SignInButton;