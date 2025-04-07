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
import { supabase } from "@/lib/supabase";
import { ArrowBigLeft, ArrowRight } from "lucide-react";

interface UserData {
  id: string;
  email: string;
  name: string;
}

const SignInButton = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isSignOutDialogOpen, setSignOutDialogOpen] = useState(false);

  useEffect(() => {
    // Check for an existing session using Supabase's auth API.
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        // You can use user_metadata to get additional info if you've set it up.
        const name =
          session.user.user_metadata?.full_name || session.user.email;
        setUserData({
          id: session.user.id,
          email: session.user.email || '',
          name,
        });
      } else {
        setUserData(null);
      }
    };

    getSession();

    // Optionally, you can listen to auth state changes to update the UI in real time.
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          const name =
            session.user.user_metadata?.full_name || session.user.email;
          setUserData({
            id: session.user.id,
            email: session.user.email || '',
            name,
          });
        } else {
          setUserData(null);
        }
      }
    );

    // Cleanup the subscription on unmount.
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const confirmSignOut = async () => {
    await supabase.auth.signOut();
    setUserData(null);
    setSignOutDialogOpen(false);
    window.location.reload();
  };

  if (userData) {
    return (
      <>
        <Flex className="items-center gap-2">
          <FaUserCircle size={20} />
        </Flex>
        <Button
          variant="outline"
          onClick={() => setSignOutDialogOpen(true)}
          className=" min-w-[120px] border-gray-700 cursor-pointer"
        >
          Sign Out
          <ArrowRight className="text-rose-500 h-6 w-6" />
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
                className="bg-red-700 hover:bg-red-800 cursor-pointer"
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
      variant="default"
      className="bg-gradient-to-r min-w-[120px] from-indigo-500 to-blue-500 text-white hover:bg-gradient-to-l hover:from-indigo-300 hover:to-blue-400 transition duration-400 px-6"
    >
      <Link href="/login">Sign In</Link>
    </Button>
  );
};

export default SignInButton;
