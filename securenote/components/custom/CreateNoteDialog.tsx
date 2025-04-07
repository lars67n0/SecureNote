'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { PlusCircleIcon } from "lucide-react";

export function CreateNoteDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setError("");
    setLoading(true);

    // Get the current session from Supabase
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    const userId = session.user.id;

    // Insert the new note including the user_id
    const { data, error: insertError } = await supabase
      .from("notes")
      .insert([{ title, description, content, user_id: userId }]);

    if (insertError) {
      console.error("Error creating note:", insertError.message);
      setError(insertError.message);
    } else {
      console.log("Note created successfully", data);
      // Optionally clear the form and close the dialog
      setTitle("");
      setDescription("");
      setContent("");
      setOpen(false);
      // Optionally, refresh the notes list here
      window.location.reload();
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-gradient-to-r from-emerald-500 to-green-800 text-white cursor-pointer hover:scale-105 ease-in-out duration-1000" onClick={() => setOpen(true)}>
           <PlusCircleIcon />
            New Note
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[75%] mt-10 bg-indigo-50 dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle>Create a new note</DialogTitle>
          <DialogDescription>
            Fill out the details below and click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-semibold"
          />
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-lg font-semibold"
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="md:min-h-[200px] min-h-[150px]"
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" className="bg-gradient-to-r from-red-500 to-rose-800 cursor-pointer text-white hover:text-white" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={loading} className="bg-gradient-to-r from-indigo-500 to-purple-800 text-white cursor-pointer">
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateNoteDialog;
