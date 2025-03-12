import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Flex } from "../ui/flex";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Separator } from "../ui/separator";
import { RiGoogleFill, RiGithubFill, RiFacebookBoxFill } from "react-icons/ri";
import { Checkbox } from "../ui/checkbox";
import { redirect } from "next/navigation";

const SigninCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

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

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
        console.log("Logged in successfully", data);
        const userData = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.name,
          expiry: new Date().getTime() + 10 * 60 * 1000,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("User data saved to localStorage", userData);
        await window.location.reload();
        window.location.href = "/notes";
      }
  };

  return (
    <Card className="w-full items-center">
      Continue With
      <Flex className="gap-8">
        <Button className="hover:bg-slate-700 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          <RiGoogleFill className="dark:text-indigo-300"/>
        </Button>
        <Button className="hover:bg-slate-700 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          <RiGithubFill className="dark:text-indigo-300"/>
        </Button>
        <Button className="hover:bg-slate-700 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          <RiFacebookBoxFill className="dark:text-indigo-300"/>
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
            <Flex className="items-center gap-2 mb-3">
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
          </Flex>
          {error && <p className="text-red-500 text-sm py-2">{error}</p>}
        </CardContent>
        <CardFooter className="w-full">
          <Button type="submit" className="w-full dark:bg-indigo-300 dark:text-black dark:font-bold dark:hover:bg-indigo-400 mt-2">
            Sign-In
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SigninCard;
