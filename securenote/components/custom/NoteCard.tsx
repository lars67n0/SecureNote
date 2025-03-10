import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

const NoteCard = () => {
  return (
    <Card className='min-w-[70%]'>
  <CardHeader>
    <CardTitle>I am a note card</CardTitle>
    <CardDescription>Note Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Im a form?</p>
  </CardContent>
  <CardFooter>
    <Button>
      Submit
    </Button>
  </CardFooter>
</Card>

  )
}

export default NoteCard