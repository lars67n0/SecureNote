'use client'
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Flex } from "../ui/flex";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Separator } from "../ui/separator";
import { RiGoogleFill, RiGithubFill, RiFacebookFill } from "react-icons/ri";
import { Checkbox } from "../ui/checkbox";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const SigninCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // When component mounts, check for saved email in localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error);
      setError(error.message);
    } else {
      console.log("Logged in successfully", data);
      // Save or remove the email based on the "remember" checkbox state.
      if (remember) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      // Optionally, store user info in localStorage if needed.
      const userData = {
        id: data.user?.id,
        email: data.user?.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirect the user to your notes page.
      window.location.href = "/notes";
    }
  };

  const handleForgotPassword = async () => {
    setError("");
    setMessage("");
    if (!email) {
      setError("Please enter your email to reset your password.");
      return;
    }
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/reset-password",
    });

    if (error) {
      console.error("Password reset error:", error.message);
      setError(error.message);
    } else {
      console.log("Password reset email sent", data);
      setMessage("Password reset email sent. Please check your inbox.");
    }
  };

  return (
    <Card className="w-full items-center">
      Continue With
      <Flex className="gap-8">
        <Button className="hover:bg-slate-700 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          <RiGoogleFill className="dark:text-indigo-300" />
        </Button>
        <Button className="hover:bg-slate-700 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          <RiGithubFill className="dark:text-indigo-300" />
        </Button>
        <Button className="hover:bg-slate-700 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          <RiFacebookFill className="dark:text-indigo-300" />
        </Button>
      </Flex>
      <Flex className="w-[20%] justify-center items-center gap-4">
        <Separator className="w-full" /> Or <Separator className="w-full" />
      </Flex>
      <CardHeader>Please Enter Your Credentials to Sign-In</CardHeader>
      <form onSubmit={handleLogin} className="w-full">
        <CardContent className="flex flex-col gap-4 items-start w-full">
          <Flex className="flex-col w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Flex className="flex-col w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Flex className="w-full justify-between items-center mt-2">
              <Flex className="items-center gap-2">
                <Checkbox
                  className="dark:bg-zinc-300"
                  id="remember-me"
                  checked={remember}
                  onCheckedChange={(checked) => setRemember(!!checked)}
                />
                <Label
                  htmlFor="remember-me"
                  className="text-sm text-gray-800 dark:text-gray-200"
                >
                  Remember Email
                </Label>
              </Flex>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </Flex>
          </Flex>
          {error && <p className="text-red-500 text-sm py-2">{error}</p>}
          {message && <p className="text-green-500 text-sm py-2">{message}</p>}
        </CardContent>
        <CardFooter className="w-full mt-4">
          <Button
            type="submit"
            className="w-full dark:bg-indigo-300 dark:text-black dark:font-bold dark:hover:bg-indigo-400 mt-2"
          >
            Sign-In
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SigninCard;
