import React from 'react'
import { Flex } from '../ui/flex'
import { Grid, GridItem } from '../ui/grid'
import FeatureStats from './FeatureStats'
import { Button } from '../ui/button'

const FeatureSection = () => {
  return (
    <>
    <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 h-full w-full">
        <GridItem className="md:col-span-4 items-center justify-center flex">
          <Flex className='md:justify-between flex-col md:flex-row items-center md:gap-4 gap-12 bg-indigo-300/20 dark:bg-transparent dark:shadow-xl shadow-indigo-500/10 w-full h-full rounded-md px-12 py-4'>
          <FeatureStats StatsText="Reliability" StatsNumber="2 %" />
          <FeatureStats StatsText="Satisfactory" StatsNumber="11.4%" />
          <FeatureStats StatsText="Users" StatsNumber="4" />  
          <FeatureStats StatsText="Rating" StatsNumber="10/10" />
          
          </Flex>
        </GridItem>
        <GridItem className="md:col-span-4 items-center justify-center flex">
          <Flex className='flex-col items-center justify-center gap-4 rounded-md min-h-[30vh] bg-indigo-300/10 dark:bg-transparent dark:shadow-xl shadow-indigo-500/10 w-full h-full p-4'>
            <p className='dark:text-gray-400 font-bold'>
              Start using SecureNote today and experience the difference.
            </p>
            <Button
            size="lg"
            className="hover:scale-110 cursor-pointer ease-in-out duration-1000 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 rounded-md px-6 py-6 font-semibold flex items-center"
            >
              Get Started Now!
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </>
  )
}

export default FeatureSection
