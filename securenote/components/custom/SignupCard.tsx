import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card'
import { Flex } from '../ui/flex'
import { Input } from '../ui/input'

const SignupCard = () => {
  return (
    <Card className="w-full items-center">
    <Flex className="w-full text-2xl font-bold justify-center items-center gap-4">
        Create An Account
    </Flex>
    <CardHeader>
        Please Enter Your Credentials to Sign-Up
    </CardHeader>
    <CardContent className="flex flex-col gap-4 items-start w-full">
        <Flex className="flex-col w-full gap-2">
            <Label htmlFor="username">Username</Label>
            <Input type="username" id="username" placeholder="Enter your username" /> 
        </Flex>
        <Flex className="flex-col w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
        </Flex>
        <Flex className="flex-col w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Enter your password" />
        </Flex>
    </CardContent>
    <CardFooter className="w-full">
        <Button className="w-full dark:bg-indigo-300 dark:text-black dark:font-bold dark:hover:bg-indigo-400 mt-2">
            Sign-Up
        </Button>
    </CardFooter>
</Card>
  )
}

export default SignupCard
