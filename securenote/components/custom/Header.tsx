'use client'
import React from 'react'
import { Flex } from '../ui/flex'
import { Button } from '../ui/button'
import { ThemeSwitch } from './ThemeSwitch'

const Header = () => {
  return (
    <Flex className='justify-center'>
      <Flex className='items-center justify-between w-[80%] bg-slate-300 dark:bg-slate-800 p-4 rounded-md'>
        <Flex>
            SecureNote
        </Flex>
        <Flex className='gap-4'>
        <ThemeSwitch />
        <Button variant={"outline"}>
            Sign-In
        </Button>
        </Flex>
      </Flex>
        
        
    </Flex>
  )
}

export default Header