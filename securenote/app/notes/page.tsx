'use client'
import { useEffect, useState } from "react";
import NoteEditor from "@/components/custom/NoteEditor"; 
import NoteCard from "@/components/custom/NoteCard"; 
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";
import SkeletonCard from "@/components/custom/SkeletonCard";
import { supabase } from "@/lib/supabase";

export default function NotePage() {
  const [notes, setNotes] = useState<{ id: string; title: string; description: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      // Get the current session to determine the logged in user.
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setIsLoading(false);
        return;
      }

      // Query only notes for the logged in user using the user_id from the session.
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("user_id", session.user.id);

      if (error) {
        console.error("Error fetching notes:", error.message);
      } else {
        console.log("Fetched notes:", data);
        setNotes(data);
      }
      setIsLoading(false);
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
                <NoteCard 
                  key={note.id} 
                  title={note.title} 
                  description={note.description} 
                  id={note.id} 
                />
              ))
            ) : (
              <p>
                Please Sign-In To See Your Notes
              </p>
            )}
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
}
