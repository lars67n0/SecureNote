import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

const SkeletonCard = () => {
  return (
    <Card className='dark:bg-zinc-900 bg-zinc-100'>
        <CardHeader>
            <Skeleton className="h-4 w-1/2 mb-4" />
        </CardHeader>
        <CardContent>
            <Skeleton className="h-3 w-full mb-4" />
            <Skeleton className="h-3 w-full mb-4" />
        </CardContent>
    </Card>
  )
}

export default SkeletonCard
