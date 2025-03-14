'use client'
import { useEffect, useState } from "react";
import NoteEditor from "@/components/custom/NoteEditor"; 
import NoteCard from "@/components/custom/NoteCard"; 
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";
import SkeletonCard from "@/components/custom/SkeletonCard";

export default function NotePage() {
  const [notes, setNotes] = useState<{ id: string; title: string; description: string, }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // test
  // Fetch notes from API
  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await fetch("/api/notes");
        const data = await response.json();
        setTimeout(() => {
          setNotes(data);
          console.log(data);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setIsLoading(false);
      }
    }
    fetchNotes();
  }, []);

  return (
    <Flex className="w-full mx-auto">
      <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
        <GridItem className="md:col-span-4 py-6 px-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="md:text-2xl text-sm font-semibold">My Notes</h1>
            <NoteEditor />
          </div>
          <Grid className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : notes.length > 0 ? (
              notes.map((note) => (
                <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />
              ))
            ) : (
              <p>No notes found.</p>
            )}
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
}
