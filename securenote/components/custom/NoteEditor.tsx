"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import Backdrop from "@/components/ui/Backdrop"; // Keep Backdrop for blur effect

const NoteEditor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      {/* Button to Open Full-Page Note Editor */}
      <Button
        variant="outline"
        className="text-gray-900 dark:text-white border-gray-500 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition duration-200"
        onClick={() => setIsOpen(true)}
      >
        + New Note
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background */}
            <Backdrop key="backdrop" onClick={() => setIsOpen(false)} />

            {/* Full-Page Note Editor */}
            <motion.div
              key="note-editor"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col p-6 shadow-xl"
            >
              {/* Header with Close Button */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Write Your Note</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300">
                  <X size={28} />
                </button>
              </div>

              {/* Note Input Fields */}
              <div className="flex flex-col gap-4 mt-6">
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg font-semibold"
                />
                <Textarea
                  placeholder="Start writing..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="h-64"
                />
              </div>

              {/* Save & Cancel Buttons */}
              <div className="mt-auto flex gap-4">
                <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button onClick={() => console.log({ title, content })}>Save</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NoteEditor;