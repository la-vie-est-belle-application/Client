import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/shadcn-ui/components";
import { cn } from "@shared/shadcn-ui/lib/utils";

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
