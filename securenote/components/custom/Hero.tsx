"use client";
import React, { useState, useEffect } from 'react';
import { Flex } from '../ui/flex';
import { Button } from '../ui/button';
import { ArrowRightCircleIcon, ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Tomorrow } from 'next/font/google';
import { Skeleton } from '../ui/skeleton';
import Link from 'next/link';

const Font = Tomorrow({ subsets: ['latin'], weight: ['400'] });

// Custom hook to check if screen is large
const useIsLargeScreen = (breakpoint = 1500) => {
  const [isLarge, setIsLarge] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLarge(window.innerWidth >= breakpoint);
    };

    checkScreenSize(); // initial check
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);
  
  return isLarge;
};

const Hero = () => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <Flex className="w-full h-full flex-col justify-between mt-20">
      {/* Conditionally render the right side parts on large screens */}
      {isLargeScreen && (
        <>
          {/* Right Side Part 1 */}
          <Flex className="bg-gradient-to-r from-violet-500/30 to-indigo-400/40 dark:from-violet-600/20 dark:to-indigo-400/20 w-[500px] h-[250px] p-2 rounded-md absolute right-80 top-140">
            <Flex className="flex-col items-center justify-center gap-4 bg-slate-200/6 rounded-md w-full h-full">
              <Skeleton className="h-4 bg-white dark:bg-zinc-700 w-[400px]" />
              <Skeleton className="h-4 bg-white dark:bg-zinc-700 w-[300px]" />
              <Skeleton className="h-4 bg-white dark:bg-zinc-700 w-[300px]" />
              <Skeleton className="h-4 bg-white dark:bg-zinc-700 w-[300px]" />
            </Flex>
          </Flex>
          
          {/* Right Side Part 2 */}
          <Flex className="bg-gradient-to-r from-violet-500/30 to-indigo-400/40 dark:from-violet-600/20 dark:to-indigo-400/20 w-[400px] h-[140px] p-2 rounded-md absolute right-60 top-100">
            <Flex className="flex-col items-center justify-center gap-4 bg-slate-200/6 rounded-md w-full h-full">
              <Skeleton className="h-4 bg-white dark:bg-zinc-700 w-[290px]" />
              <Skeleton className="h-4 bg-white dark:bg-zinc-700 w-[200px]" />
            </Flex>
          </Flex>
        </>
      )}

      <Flex className="flex-col items-center lg:items-start justify-center gap-10">
        <h1 className="font-bold  text-3xl md:text-7xl tracking-widest">
          Welcome to SecureNote
        </h1>
        <Flex className="flex-col justify-center gap-2">
          <h2 className="font-bold md:text-3xl text-sm text-gray-500">
            Lets Make Your Notes Secure and Private.
          </h2>
          <h2 className="font-bold md:text-3xl text-sm text-gray-500">
            Share Them With Friends and Family.
          </h2>
        </Flex>
        <Flex className="gap-10 flex-col md:items-start items-center">
          <Button
            size="lg"
            className="hover:scale-110 cursor-pointer ease-in-out duration-1000 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-md px-6 py-6 font-semibold flex items-center"
          >
            <Link href="/login" className="flex items-center">
              Get Started Now!
            </Link>
            <ArrowRightCircleIcon className="ml-2" size={20} />
          </Button>
          <Flex className="gap-6">
            <Button
              size="icon"
              variant={"outline"}
              className="hover:scale-110 cursor-pointer shadow-lg shadow-indigo-500/50 rounded-md font-semibold flex items-center"
            >
              <Facebook size={20} />
            </Button>
            <Button
              size="icon"
              variant={"outline"}
              className="hover:scale-110 cursor-pointer shadow-lg shadow-indigo-500/50 rounded-md font-semibold flex items-center"
            >
              <Instagram size={20} />
            </Button>
            <Button
              size="icon"
              variant={"outline"}
              className="hover:scale-110 cursor-pointer shadow-lg shadow-indigo-500/50 rounded-md font-semibold flex items-center"
            >
              <Linkedin size={20} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="flex-col items-center justify-center gap-4">
        Learn More
        <ChevronDown className="ml-2 text-indigo-500 animate-bounce duration-1000 ease-in-out" size={40} />
      </Flex>
    </Flex>
  );
};

export default Hero;
