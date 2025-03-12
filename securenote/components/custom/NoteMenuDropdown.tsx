import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CiEdit } from "react-icons/ci";
import { Share2 } from "lucide-react";
import { VscKebabVertical } from "react-icons/vsc";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface NoteMenuDropDownProps {
  notename: string;
  noteid: string;
}

const NoteMenuDropDown: React.FC<NoteMenuDropDownProps> = ({ notename, noteid }) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/notes/${noteid}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Failed to delete note");
      } else {
        console.log("Note deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    setDeleteDialogOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-800">
            <VscKebabVertical />
          </Button>
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
              <Share2 className="text-blue-700 dark:text-blue-500" />
              Share Note
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
              <RiDeleteBin5Fill className="text-red-700 dark:text-red-400" />
              Delete Note
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the note {notename}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant={'destructive'} className="bg-red-700 hover:bg-red-800" onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NoteMenuDropDown;
