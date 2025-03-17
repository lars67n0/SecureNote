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
import { supabase } from "@/lib/supabase";

interface NoteMenuDropDownProps {
  notename: string;
  noteid: string;
}



const NoteMenuDropDown: React.FC<NoteMenuDropDownProps> = ({ notename, noteid }) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      const { data, error } = await supabase
        .from("notes")
        .delete()
        .eq("id", noteid);

      if (error) {
        console.error("Failed to delete note:", error.message);
      } else {
        console.log("Note deleted successfully", data);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    setDeleteDialogOpen(false);
  };

  const handleShare = async () => {
    try {
      // link kopi til clipboard
      const noteUrl = `${window.location.origin}/notes/${noteid}`;

      
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
            <DropdownMenuItem onClick={handleShare}>
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
              Are you sure you want to delete the note "{notename}"?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" className="bg-red-700 hover:bg-red-800" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {notification && (
        <div className="fixed bottom-4 right-4 p-4 bg-black text-sm text-white rounded-md">
          {notification}
        </div>
      )}
    </>
  );
};

export default NoteMenuDropDown;
