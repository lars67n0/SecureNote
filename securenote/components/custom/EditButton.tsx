"use client";
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation'; // Updated import here
import { CiEdit } from 'react-icons/ci';import { LiaArrowCircleRightSolid } from "react-icons/lia";

interface EditButtonProps {
  noteid: string;
}

const EditButton = ({ noteid }: EditButtonProps) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(`/edit/${noteid}`)} className='justify-end rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:text-white cursor-pointer hover:scale-105' variant={"outline"}>
      Edit Note
      <LiaArrowCircleRightSolid className=''/>
    </Button>
  );
}

export default EditButton;
