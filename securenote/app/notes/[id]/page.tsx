"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import NoteCard from "@/components/custom/NoteCard";
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";

interface Note {
  id: string;
  title: string;
  description: string;
  content: string;
  user_id: string;
}

export default function SingleNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState<Note | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    fetchNote();
  }, [id]);

  async function fetchNote() {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Fejl ved hentning af note:", error);
      setError(error.message);
    } else {
      setNote(data);
    }
  }

  if (error) {
    return <p className="text-red-500 text-center mt-6">Fejl: {error}</p>;
  }

  if (!note) {
    return <p className="text-center mt-6">Indlæser note...</p>;
  }

  return (
    <Flex className="w-full mx-auto">
      <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
        <GridItem className="md:col-span-4 grid-cols-1 py-6 px-12">
          <NoteCard
            id={note.id}
            title={note.title}
            description={note.description}
            content={note.content}
            readOnly={true}
          />
        </GridItem>
      </Grid>

      
    </Flex>
  );
}
