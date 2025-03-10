import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";


const gridVariants = cva("grid");


export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  asChild?: boolean;
}


const Grid = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp className={cn(gridVariants({ className }))} ref={ref} {...props} />
    );
  },
);
Grid.displayName = "Grid";


const GridItem = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return <Comp ref={ref} className={className} {...props} />;
  },
);
GridItem.displayName = "GridItem";


export { Grid, GridItem, gridVariants };