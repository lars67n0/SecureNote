"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border border-gray-300 lg:min-h-[450px] max-h-[25px] dark:border-gray-700 bg-white dark:bg-zinc-950 text-gray-900 dark:text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500/80 focus:outline-none w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };