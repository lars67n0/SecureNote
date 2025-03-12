import React from 'react'
import { Flex } from '../ui/flex'
import NavLink from './NavLink'
import { FileText, Home, Settings } from 'lucide-react'
import SignInButton from './SignInButton'
import { ThemeSwitch } from './ThemeSwitch'

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
    <Flex className='justify-between items-center gap-4 px-12 py-3 mt-20'>
        <Flex>
          SecureNote
        </Flex>
        <ThemeSwitch />
        <SignInButton />
      </Flex>
      </Flex>
  )
}

export default MobileNav