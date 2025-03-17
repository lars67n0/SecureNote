'use client'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card'
import { Flex } from '../ui/flex'
import { Input } from '../ui/input'
import { supabase } from '@/lib/supabase'

const SignupCard = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Sign up the user with Supabase Auth, passing the username as metadata.
    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }
      }
    })

    if (signupError) {
      setError(signupError.message)
    } else {
      console.log("Signup successful", data)
      
      // If a session is returned, user is automatically logged in.
      if (data.session) {
        window.location.href = "/notes"
      } else {
        // If no session is returned (e.g., email confirmation required),
        // attempt to sign in the user immediately.
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (signInError) {
          setError(signInError.message)
        } else {
          window.location.href = "/notes"
        }
      }
    }
    setLoading(false)
  }

  return (
    <Card className="w-full items-center">
      <Flex className="w-full text-2xl font-bold justify-center items-center gap-4">
        Create An Account
      </Flex>
      <CardHeader>
        Please Enter Your Credentials to Sign-Up
      </CardHeader>
      <form onSubmit={handleSignup} className='w-full'>
        <CardContent className="flex flex-col gap-4 items-start w-full">
          <Flex className="flex-col w-full gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              className=''
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Flex>
          <Flex className="flex-col w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Flex className="flex-col w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Flex>
          {error && <p className="text-red-500">{error}</p>}
        </CardContent>
        <CardFooter className="w-full mt-4">
          <Button
            type="submit"
            className="w-full dark:bg-indigo-300 dark:text-black dark:font-bold dark:hover:bg-indigo-400 mt-2"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign-Up"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default SignupCard
