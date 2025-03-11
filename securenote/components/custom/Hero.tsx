import NoteCard from "@/components/custom/NoteCard";
import { Flex } from "@/components/ui/flex";

const Hero = () => {
  return (
    <Flex className="items-center justify-center flex-col gap-4 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to SecureNote</h1>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
        Organize your thoughts and ideas in a secure and easy way.
      </p>

      {/* Example Notes */}
      <Flex className="gap-4">
        <NoteCard title="Getting Started" description="Click '+ New Note' to create your first note!" />
        <NoteCard title="Stay Organized" description="Your notes are always accessible and easy to manage." />
      </Flex>
    </Flex>
  );
};

export default Hero;