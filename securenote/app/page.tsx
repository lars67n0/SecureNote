import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import MobileNav from "@/components/custom/MobileNav";
import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";
export default function Home() {
  return (
    <Flex className="">
    <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
        <GridItem className="md:col-span-4 py-6 px-12 lg:block hidden items-center justify-center w-full">
          <Header />
        </GridItem>
        <GridItem className="md:col-span-4   py-6 px-12">
            <Hero />
        </GridItem>
        <GridItem className="md:col-span-4  py-6 px-12 block lg:hidden">
           <MobileNav />
        </GridItem>
    </Grid>

</Flex>
  );
}
