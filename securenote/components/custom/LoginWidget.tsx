
import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Flex } from "../ui/flex"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RiFacebookBoxFill, RiGithubFill, RiGoogleFill } from "react-icons/ri"
import { Separator } from "../ui/separator"
import { Checkbox } from "../ui/checkbox"

export function LoginWidget() {
  return (
    <Flex className="bg-zinc-100 dark:bg-zinc-900 flex-1 justify-center min-h-[75vh] rounded-md shadow-md">
        <Flex className="mt-10 flex-col items-center">
            <Flex className="text-xl md:text-5xl font-bold flex-col items-center mb-4">
                Welcome Back
                <Flex className="text-xs md:text-sm text-gray-800 dark:text-gray-200 font-light">
                    Please Enter your details to proceed
                </Flex>
            </Flex>
            <Tabs defaultValue="Sign-In" className="w-full px-2 md:px-0">
                <TabsList className="lg:min-w-[600px] md:min-w-[500px] w-full bg-zinc-300 dark:bg-zinc-500"> 
                    <TabsTrigger value="Sign-In">Sign-In</TabsTrigger>
                    <TabsTrigger value="Sign-Up">Sign-Up</TabsTrigger>
                </TabsList>
                <TabsContent value="Sign-In" className="items-center justify-center w-full mt-2">
                    <Card className="w-full items-center">
                        Continue With
                        <Flex className="gap-8">
                            <Button className="hover:bg-slate-700">
                                <RiGoogleFill />
                            </Button>
                            <Button className="hover:bg-slate-700">
                                <RiGithubFill />
                            </Button>
                            <Button className="hover:bg-slate-700">
                                <RiFacebookBoxFill />
                            </Button>
                        </Flex>
                        <Flex className="w-[20%] justify-center items-center gap-4">
                            <Separator className="w-full" /> Or <Separator className="w-full" />
                        </Flex>
                        <CardHeader>
                            Please Enter Your Credentials to Sign-In
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 items-start w-full">
                            <Flex className="flex-col w-full gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Enter your email" /> 
                            </Flex>
                            <Flex className="flex-col w-full gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Enter your password" />
                                <Flex className="items-center gap-2">
                                    <Checkbox id="remember-me" />
                                    <Label htmlFor="remember-me" className="text-sm text-gray-800 dark:text-gray-200">Remember Email</Label>
                                </Flex>
                            </Flex>
                            
                            
                        </CardContent>
                        <CardFooter className="w-full">
                            <Button className="w-full">
                                Sign-In
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="Sign-Up" className="items-center justify-center w-full mt-2">
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
                            <Button className="w-full">
                                Sign-Up
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </Flex>
         
    </Flex>
  
  )
}
