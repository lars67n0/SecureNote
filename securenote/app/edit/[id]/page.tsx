// app/edit/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";
import { Label } from "@/components/ui/label";

export default function EditPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      const { data, error } = await supabase
        .from("notes")
        .select("title, description, content")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching note:", error.message);
      } else if (data) {
        setTitle(data.title);
        setDescription(data.description);
        setContent(data.content);
      }

      setLoading(false);
    };

    if (id) fetchNote();
  }, [id]);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("notes")
      .update({ title, description, content })
      .eq("id", id);

    if (error) {
      console.error("Error saving note:", error.message);
    } else {
      router.push("/notes"); // or wherever you list notes
    }

    setSaving(false);
  };

  if (loading) return <div className="p-6">Loading note...</div>;

  return (

    <>
      <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
        <GridItem className="md:col-span-4 grid-cols-1 py-6 px-12 bg-zinc-100 dark:bg-stone-900 lg:mt-10 mt-2 rounded-md mb-10">
          <Flex className="flex-col gap-4">
            <Label className="font-bold text-lg">
              Title
            </Label>
            <Input
            className="mb-4"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          </Flex>
          <Flex className="flex-col gap-4">
          <Label className="font-bold text-lg">
              Description
            </Label>
            <Input
            className="mb-4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </Flex>
          
          <Flex className="flex-col gap-4">
          <Label className="font-bold text-lg">
              Note Content
            </Label>
            <Textarea
            className="mb-4 h-40"
            placeholder="Note content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
          </Flex>

          <Flex className="gap-4">
            <Button variant="outline" onClick={() => router.back()} className="bg-gradient-to-r from-red-500 to-rose-800 cursor-pointer text-white hover:text-white">
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving} className="bg-gradient-to-r from-indigo-500 to-purple-800 text-white cursor-pointer">
              {saving ? "Saving..." : "Save"}
            </Button>
          </Flex>
     
        </GridItem>
      </Grid>

      
    
    </>
  );
}