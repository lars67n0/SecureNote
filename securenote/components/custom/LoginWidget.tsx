
import { Flex } from "../ui/flex"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import SigninCard from "./SigninCard"
import SignupCard from "./SignupCard"

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
                    <SigninCard />
                </TabsContent>
                <TabsContent value="Sign-Up" className="items-center justify-center w-full mt-2">
                  <SignupCard />
                </TabsContent>
            </Tabs>
        </Flex>
         
    </Flex>
  
  )
}
