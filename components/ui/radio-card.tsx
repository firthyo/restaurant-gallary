import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

interface RadioCardsProps {
  defaultValue: string;
  columns?: { initial: string; sm?: string }; // Responsive column count
  children: React.ReactNode;
}

const RadioCardsRoot: React.FC<RadioCardsProps> = ({
  defaultValue,
  columns = { initial: "1", sm: "1" },
  children,
}) => {
  return (
    <RadioGroup.Root
      className={cn(
        "grid gap-4",
        `grid-cols-${columns.initial}`,
        columns.sm ? `sm:grid-cols-${columns.sm}` : ""
      )}
      defaultValue={defaultValue}
    >
      {children}
    </RadioGroup.Root>
  );
};

const RadioCardsItem: React.FC<
  React.ComponentPropsWithoutRef<typeof RadioGroup.Item>
> = ({ children, className, ...props }) => {
  return (
    <RadioGroup.Item
      className={cn(
        "flex flex-col items-center justify-center p-4 border border-gray-300 rounded-xl cursor-pointer focus:outline-none focus:border-primary hover:border-primary bg-white",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroup.Item>
  );
};

export const RadioCards = {
  Root: RadioCardsRoot,
  Item: RadioCardsItem,
};
