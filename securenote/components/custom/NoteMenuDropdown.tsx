"use client";

import { useRouter } from "next/navigation";
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
import { VscKebabVertical } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { Share2 } from "lucide-react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase";

interface NoteMenuDropDownProps {
  notename: string;
  noteid: string;
}

const NoteMenuDropDown: React.FC<NoteMenuDropDownProps> = ({ notename, noteid }) => {
  const router = useRouter();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from("notes").delete().eq("id", noteid);
      if (error) throw error;
      window.location.reload();
    } catch (err) {
      console.error("Delete failed:", err);
    }
    setDeleteDialogOpen(false);
  };

  const handleShare = async () => {
    try {
      const noteUrl = `${window.location.origin}/notes/${noteid}`;
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer">
            <VscKebabVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
          <DropdownMenuLabel className="truncate">{notename}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push(`/edit/${noteid}`)}>
              <CiEdit className="mr-2 text-orange-700 dark:text-orange-400" />
              Edit Note
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShare}>
              <Share2 className="mr-2 text-blue-700 dark:text-blue-500" />
              Share Note
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
              <RiDeleteBin5Fill className="mr-2 text-red-700 dark:text-red-400" />
              Delete Note
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the note "{notename}"?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
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