import { Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Flex } from "../ui/flex";
import NoteMenuDropDown from "./NoteMenuDropdown";

interface NoteCardProps {
  id: string;
  title: string;
  description: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, description, id}) => {
  return (
    <Card className="min-h-40 dark:bg-zinc-900 bg-zinc-100">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <Flex className="items-center gap-2">
          <Button variant={"ghost"} className="hover:bg-gray-200 dark:hover:bg-gray-800"> 
            <Share2 className="text-blue-700 dark:text-blue-500 "/>
          </Button>
          <NoteMenuDropDown notename={title} noteid={id}/>
        </Flex>
        
       
      </CardHeader>
      <CardContent>
         <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default NoteCard;