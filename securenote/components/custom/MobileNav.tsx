import React from 'react'
import { Flex } from '../ui/flex'
import NavLink from './NavLink'
import { FileText, Home, Settings } from 'lucide-react'
import SignInButton from './SignInButton'
import { ThemeSwitch } from './ThemeSwitch'
import { TbShieldLockFilled } from 'react-icons/tb'
import { Si2Fas } from 'react-icons/si'

const MobileNav = () => {
  return (
    <Flex className='lg:hidden block'>
      <nav className=" shadow-md py-4 bg-slate-100 dark:bg-gray-900 fixed top-0 w-full z-50">
      <Flex className="justify-center items-center text-sm w-full gap-4">
        <NavLink href="/" icon={<Home size={20} />} label="Home" />
        <NavLink href="/notes" icon={<FileText size={20} />} label="Notes" />
        <NavLink href="/settings" icon={<Settings size={20} />} label="Settings" />
      </Flex>
    </nav>
    <Flex className=' items-center justify-between w-full gap-4 px-12 py-3 mt-20'>
      <Flex className='items-center w-full gap-4 '>
         <Flex>
          <Si2Fas className="h-10 w-10 mr-2 dark:text-indigo-400 text-indigo-500"/>
        </Flex>
        <Flex className='md:block hidden'>
          SecureNote
        </Flex>
      </Flex>
      <Flex className='gap-2'>
        <ThemeSwitch />
        <SignInButton />
      </Flex>
     
        
      </Flex>
      </Flex>
  )
}

export default MobileNav