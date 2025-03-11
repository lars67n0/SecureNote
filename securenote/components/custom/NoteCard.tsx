import { DotSquare, Share2, Trash2Icon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Flex } from "../ui/flex";
import { VscKebabVertical } from "react-icons/vsc";

interface NoteCardProps {
  title: string;
  description: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, description }) => {
  return (
    <Card className="hover:scale-103 duration-500 transition-transform">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <Flex className="items-center gap-2">
          <Button variant={"ghost"}> 
            <Share2 className="text-blue-700 dark:text-blue-500"/>
          </Button>
          <Button variant={"ghost"}>
             <VscKebabVertical />
          </Button>
        </Flex>
        
       
      </CardHeader>
      <CardContent>
         <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default NoteCard;