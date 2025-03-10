'use client'
import React from 'react'
import { Flex } from '../ui/flex'
import { Button } from '../ui/button'
import { ThemeSwitch } from './ThemeSwitch'

const Header = () => {
  return (
    <Flex className='items-center justify-between'>
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
  )
}

export default Header