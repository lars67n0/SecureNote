"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Flex } from "../ui/flex";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export const ThemeSwitch: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { setTheme, theme } = useTheme();
  const [themeLabel, setThemeLabel] = useState<string>("pending");
  const [initialChecked, setInitialChecked] = useState<boolean>(false);
  const [initialRender, setInitialRender] = useState<boolean>(true);

  const setThemeBasedOnPreference = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setThemeLabel(savedTheme);
      setInitialChecked(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      setThemeLabel(defaultTheme);
      setInitialChecked(prefersDark);
      localStorage.setItem("theme", defaultTheme);
    }
    setInitialRender(false);
  };

  useEffect(() => {
    if (initialRender) {
      setThemeBasedOnPreference();
    }
  }, [initialRender]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setThemeLabel(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Flex
      className={"gap-2 items-center justify-center" + className}
      {...props}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full cursor-pointer"
      >
        <SunIcon className="h-[20px] w-[20px] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[20px] w-[20px] rotate-90 scale-0 dark:scale-100 dark:rotate-0 " />
      </Button>
    </Flex>
  );
};