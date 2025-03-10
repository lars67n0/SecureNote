import React from 'react'
import NoteCard from './NoteCard'
import { Flex } from '../ui/flex'

const Hero = () => {
  return (
    <Flex className='items-center justify-center'>
        <NoteCard />
    </Flex>
  )
}

export default Hero