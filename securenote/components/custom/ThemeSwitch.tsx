"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Flex } from "../ui/flex";
import { Switch } from "../ui/switch";

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
      <Switch
        checked={initialRender ? initialChecked : theme === "dark"}
        onCheckedChange={(isChecked) => {
          const newTheme = isChecked ? "dark" : "light";
          handleThemeChange(newTheme);
        }}
      />
      <p>{themeLabel === "dark" ? <MoonIcon /> : <SunIcon />}</p>
    </Flex>
  );
};