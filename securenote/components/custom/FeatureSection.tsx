import React from 'react'
import { Flex } from '../ui/flex'
import FeatureCarousel from './FeatureCarousel'

const FeatureSection = () => {
  return (
    <Flex className="bg-zinc-100 dark:bg-zinc-900 flex-1 items-center flex-col justify-between p-10 rounded-md shadow-md">
      <FeatureCarousel />
    </Flex>
  )
}

export default FeatureSection
