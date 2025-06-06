'use client'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircleIcon, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import React from "react";

const NoteEditor = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      // Optionally clear the form and close the editor
      setTitle("");
      setDescription("");
      setContent("");
      setIsOpen(false);
      // Optionally, refresh the notes list here
      window.location.reload()
    }
    setLoading(false);
  };

  return (
    <>
      <Button
        variant="outline"
        className="text-gray-900 items-center dark:text-gray-400 border-gray-400 hover:bg-gray-900 dark:hover:bg-slate-500 hover:text-white dark:hover:text-white transition-transform hover:scale-110 duration-200"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircleIcon /> New Note
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="note-editor"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed left-0 right-0 top-[8rem] h-[calc(100vh-4.7rem)] bg-white dark:bg-background z-40 flex flex-col p-6 shadow-xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Write Your Note</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-6">
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
                placeholder="Start writing..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="md:min-h-[450px] min-h-[250px]"
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <div className="mt-auto flex gap-4">
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NoteEditor;
