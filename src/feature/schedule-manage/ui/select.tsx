import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/index";
import { cn } from "@/lib/utils";

interface SelectOptionProps {
  className?: string;
  icon: React.ReactNode;
  selectItem?: string[];
}

export const SelectOption = ({
  className,
  icon,
  selectItem,
}: SelectOptionProps) => {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px]", className)} icon={icon}>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};
