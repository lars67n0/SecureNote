import Header from "@/components/custom/Header";
import NoteEditor from "@/components/custom/NoteEditor"; // Import Full-Page Editor
import NoteCard from "@/components/custom/NoteCard"; // Display Notes
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";

export default function Home() {
  return (
    <>
      <Header />

      <Flex className="w-full">
        <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
          
          {/* Notes Section */}
          <GridItem className="md:col-span-4 py-6 px-12">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold">My Notes</h1>
              <NoteEditor /> {/* Opens Full-Page Editor */}
            </div>

            {/* Displaying Notes */}
            <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <NoteCard title="Note 1" description="This is a test note." />
              <NoteCard title="Note 2" description="Another example note." />
              <NoteCard title="Note 3" description="More sample text here." />
            </Grid>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
