import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";


const flexVariants = cva("flex");


export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  asChild?: boolean;
}


const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp className={cn(flexVariants({ className }))} ref={ref} {...props} />
    );
  },
);
Flex.displayName = "Flex";


export { Flex, flexVariants };