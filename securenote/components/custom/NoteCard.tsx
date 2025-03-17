import { Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Flex } from "../ui/flex";
import NoteMenuDropDown from "./NoteMenuDropdown";
import { useState } from "react";

interface NoteCardProps {
  id: string;
  title: string;
  description: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, description, id}) => {
  const [notification, setNotification] = useState<string | null>(null);

  const handleShare = async () => {
    try {
      // link kopi til clipboard
      const noteUrl = `https://localhost:3000/note/${id}`;
      
      // Copy the URL to the clipboard
      await navigator.clipboard.writeText(noteUrl);
      
      // Vis notifikation
      setNotification("The Public Note URL has been copied!");
      
      // fjern notifikation efter noget tid
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error("Failed to copy URL:", error);
      setNotification("Failed to copy URL.");
    }
  };
  return (
    <>
    
    <Card className="min-h-40 dark:bg-zinc-900 bg-zinc-100">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <Flex className="items-center gap-2">
          <Button variant={"ghost"} className="hover:bg-gray-200 dark:hover:bg-gray-800" onClick={handleShare}> 
            <Share2 className="text-blue-700 dark:text-blue-500 "/>
          </Button>
          <NoteMenuDropDown notename={title} noteid={id}/>
        </Flex>
        
       
      </CardHeader>
      <CardContent>
         <CardDescription>{description}</CardDescription>
      </CardContent>
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