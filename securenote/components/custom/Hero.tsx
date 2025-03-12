import React from 'react';
import { Flex } from '../ui/flex';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
    
    <Flex className="bg-zinc-100 dark:bg-zinc-900 flex-1 items-center flex-col justify-between mt-6 md:mt-10 p-4 min-h-[75vh] rounded-md shadow-md">
      <Flex className='flex-col items-center justify-center w-full h-full mx-auto mt-20'>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-zinc-100 mb-4">
        Secure Note
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
        Your notes, secured and accessible anywhere.
      </p>
      <Button className="bg-gray-900 dark:bg-zinc-100 text-zinc-100 dark:text-gray-900 
                         text-lg font-semibold py-3 px-6 rounded-md shadow-lg 
                         transition duration-300 ease-in-out transform 
                         hover:-translate-y-1 hover:scale-105 p-6">
        <Link href="/login">Get Started</Link>
      </Button>
      </Flex>
      <Flex className='flex-col items-center justify-center'>
        Learn More
        <ChevronDown size={40} className='animate-bounce duration-1000 ease-in-out'/>
      </Flex>
    </Flex>
  </>
    
   
  );
};

export default Hero;
