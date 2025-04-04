import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../lib/utils";

export const Label = ({ className, ...props }: LabelPrimitive.LabelProps) => (
  <LabelPrimitive.Root
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
);
