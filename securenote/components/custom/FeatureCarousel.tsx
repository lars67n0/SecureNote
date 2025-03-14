import React from 'react'
import { Flex } from '../ui/flex'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/Carousel'
import { Card, CardContent, CardHeader } from '../ui/card'

const reviews = [
    {
      id: 1,
      name: 'John Doe',
      text: `This product exceeded my expectations!
  I was blown away by its performance and reliability.
  I highly recommend it to anyone in the market.`
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: `Really enjoyed using this, would recommend to friends.
  It has become an essential tool in my daily routine.
  A couple of minor adjustments would make it perfect.`
    },
    {
      id: 3,
      name: 'Alice Brown',
      text: `It works fine, but there is room for improvement.
  The design is a bit outdated and some features are lacking.
  However, it gets the job done.`
    },
    {
      id: 4,
      name: 'Mark Davis',
      text: `Absolutely fantastic!
  The quality and attention to detail are second to none.
  I will be purchasing more products from this line in the future.`
    },
    {
      id: 5,
      name: 'Laura Johnson',
      text: `Very pleased with my purchase.
  The product offers excellent value and durability.
  A reliable choice for anyone looking for quality.`
    },
    {
      id: 6,
      name: 'Chris Wilson',
      text: `I was disappointed with the performance.
  It did not meet the advertised expectations and lacked key features.
  I had trouble justifying the cost.`
    },
    {
      id: 7,
      name: 'Amy Thompson',
      text: `This is a game-changer.
  The innovative features and seamless design are truly impressive.
  It has significantly enhanced my productivity.`
    },
    {
      id: 8,
      name: 'Peter Lee',
      text: `An average experience overall.
  There are a few notable strengths, but also some considerable drawbacks.
  With further refinements, it could become a top contender.`
    },
    {
      id: 9,
      name: 'Natalie Roberts',
      text: `Impressed by the robust build and intuitive interface.
  It works reliably and performs well under various conditions.
  A strong recommendation from my side.`
    },
    {
      id: 10,
      name: 'James Taylor',
      text: `Outstanding product!
  It delivers on its promises and exceeds expectations in every aspect.
  I am very satisfied with its performance and would buy it again.`
    }
  ]
  

const FeatureCarousel = () => {
  return (
    <Flex className='w-[90%]'>
      <Carousel className="w-full">
        <CarouselContent className='w-full'>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <Flex className="p-1 w-full h-full">
                <Card className='w-full h-full'>
                    <CardHeader>
                        <h2 className="text-xl font-bold">{review.name}</h2>
                    </CardHeader>
                  <CardContent className="flex justify-center p-6 h-full flex-col min-h-[20rem]">
                    <p className="mt-4 text-center text-3xl">{review.text}</p>
                  </CardContent>
                </Card>
              </Flex>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='h-42'/>
        <CarouselNext className='h-42'/>
      </Carousel>
    </Flex>
  )
}

export default FeatureCarousel
