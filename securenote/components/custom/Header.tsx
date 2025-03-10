import React from 'react'
import { Flex } from '../ui/flex'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <Flex className='items-center justify-between'>
        <Flex>
            SecureNote
        </Flex>
        <Flex>
        <Button variant={"outline"}>
            Sign-In
        </Button>
        </Flex>
        
    </Flex>
  )
}

export default Header