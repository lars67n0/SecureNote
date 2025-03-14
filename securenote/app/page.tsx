import FeatureSection from "@/components/custom/FeatureSection";
import Hero from "@/components/custom/Hero";
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";

export default function Home() {
  return (
    <Flex className="w-full h-full mx-auto">
      <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 h-full w-full">
        <GridItem className="md:col-span-4 px-12 min-h-[85vh]">
          <Hero />
        </GridItem>
        <GridItem className="md:col-span-4 px-12 min-h-[85vh]">
          <FeatureSection />
        </GridItem>
      </Grid>
    </Flex>
   
  );
}
