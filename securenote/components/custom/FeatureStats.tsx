import React from 'react'
import { Flex } from '../ui/flex';

interface FeatureStatsProps {
  StatsText: string;
  StatsNumber?: string;
}

const FeatureStats: React.FC<FeatureStatsProps> = ({ StatsText, StatsNumber }) => {
  return (
    <Flex className='flex-col items-center justify-center gap-2 min-w-[100px]'>
      <p className='text-2xl font-bold text-indigo-500'>
        {StatsNumber}
      </p>
      <p>
        {StatsText}
      </p>
      
    </Flex>
  )
}

export default FeatureStats
