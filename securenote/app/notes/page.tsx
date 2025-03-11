'use client'
import { useEffect, useState } from "react";
import NoteEditor from "@/components/custom/NoteEditor"; // Import Full-Page Editor
import NoteCard from "@/components/custom/NoteCard"; // Display Notes
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";

export default function NotePage() {
  const [notes, setNotes] = useState<{ id: string; title: string; content: string }[]>([]);

  // Fetch notes from API
  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await fetch("/api/notes");
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
    fetchNotes();
  }, []);

  return (
    <>
      <Flex className="w-full px-12">
        <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
          
          {/* Notes Section */}
          <GridItem className="md:col-span-4 py-6 px-12">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold">My Notes</h1>
              <NoteEditor /> {/* Opens Full-Page Editor */}
            </div>

            {/* Displaying Notes */}
            <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {notes.length > 0 ? (
                notes.map((note) => (
                  <NoteCard key={note.id} title={note.title} description={note.content} />
                ))
              ) : (
                <p>No notes found.</p>
              )}
            </Grid>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
