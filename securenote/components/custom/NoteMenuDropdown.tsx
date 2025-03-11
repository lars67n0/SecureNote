import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleDotIcon, Share2 } from "lucide-react";
import { CiEdit } from "react-icons/ci";
import { VscKebabVertical } from "react-icons/vsc";
import { RiDeleteBin5Fill } from "react-icons/ri";

function NoteMenuDropDown({notename}: {notename: string}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost"><VscKebabVertical /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 items-center justify-center">
        <DropdownMenuLabel className="truncate">{notename}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <CiEdit className="text-orange-700 dark:text-orange-400" />
            Edit Note
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2 className="text-blue-700 dark:text-blue-500"/>
            Share Note
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiDeleteBin5Fill className="text-red-700 dark:text-red-400"/>
            Delete Note
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default NoteMenuDropDown;
