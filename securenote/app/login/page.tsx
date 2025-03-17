'use client'

import { Flex } from "@/components/ui/flex";
import { Grid, GridItem } from "@/components/ui/grid";
import { LoginWidget } from "@/components/custom/LoginWidget";

export default function LoginPage() {
  return (
    <Flex className="w-full mx-auto">
      <Grid className="lg:grid-cols-4 grid-cols-1 gap-4 w-full">
        <GridItem className="md:col-span-4 py-6 px-12 min-h-[85vh]">
          <LoginWidget />
          </GridItem>
      </Grid>
    </Flex>
  );
}
