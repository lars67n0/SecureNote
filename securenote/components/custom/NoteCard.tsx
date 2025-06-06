import { Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Flex } from "../ui/flex";
import NoteMenuDropDown from "./NoteMenuDropdown";
import { useState } from "react";
import React from "react";

import EditButton from "./EditButton";

interface NoteCardProps {
  id: string;
  title: string;
  description: string;
  content?: string;
  readOnly?: boolean; // <-- Tilføj denne
  isloggedin?: boolean;
}

const NoteCard: React.FC<NoteCardProps> = ({
  isloggedin,
  id,
  title,
  description,
  content,
  readOnly = false, // default false
}) => {
  const [notification, setNotification] = useState<string | null>(null);

  const handleShare = async () => {
    try {
      const noteUrl = `${window.location.origin}/notes/${id}`;
      await navigator.clipboard.writeText(noteUrl);
      setNotification("The Public Note URL has been copied!");
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error("Failed to copy URL:", error);
      setNotification("Failed to copy URL.");
    }
  };

  return (
    <>
      <Card className="min-h-40 dark:bg-zinc-900 bg-zinc-100 hover:scale-102 ease-in-out duration-500">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>{title}</CardTitle>
          {!readOnly && (
            <Flex className="items-center gap-2">
              <Button
                variant={"ghost"}
                className="hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                onClick={handleShare}
              >
                <Share2 className="text-blue-700 dark:text-blue-500" />
              </Button>
              <NoteMenuDropDown notename={title} noteid={id} />
            </Flex>
          )}
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          {content && (
            <p className="mt-4 text-gray-800 dark:text-gray-100 whitespace-pre-wrap">
              {content}
            </p>
          )}
        </CardContent>
        {isloggedin? 
        <>
        <CardFooter className="items-center justify-end">
           <EditButton noteid={id}/>
        </CardFooter>
        </>
        : 
        <>

        </>
        }
        
       
      </Card>
      {notification && (
        <div className="fixed bottom-4 right-4 p-4 bg-black text-sm text-white rounded-md">
          {notification}
        </div>
      )}
    </>
  );
};

export default NoteCard;