'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Flex } from "../ui/flex";
import { FaUserCircle } from "react-icons/fa";

const SignInButton = () => {
  const [userData, setUserData] = useState<{
    id: string;
    email: string;
    name: string;
    expiry: number;
  } | null>(null);
  const [isSignOutDialogOpen, setSignOutDialogOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const now = new Date().getTime();
      if (now < parsedData.expiry) {
        setUserData(parsedData);
      } else {
        localStorage.removeItem("userData");
        setUserData(null);
      }
    }
  }, []);

  const confirmSignOut = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    setSignOutDialogOpen(false);
  };

  if (userData) {
    return (
      <>
        <Flex className="items-center gap-2">
          {userData.name}
          <FaUserCircle size={20}/>
        </Flex>
        <Button
          variant="outline"
          onClick={() => setSignOutDialogOpen(true)}
          className="text-gray-900 dark:text-white border-gray-500 hover:bg-gray-900 dark:hover:bg-gray-400 hover:text-white dark:hover:text-white transition duration-200"
        >
          Sign Out
        </Button>
        <Dialog open={isSignOutDialogOpen} onOpenChange={setSignOutDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Sign Out</DialogTitle>
              <DialogDescription>
                Are you sure you want to sign out?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSignOutDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="bg-red-700 hover:bg-red-800"
                onClick={confirmSignOut}
              >
                Sign Out
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }

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
