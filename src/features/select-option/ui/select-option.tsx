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
  placeholder?: string;
  disabledItems?: string[];
  onValueChange?: (value: string) => void;
}

export const SelectOption = ({
  className,
  icon,
  selectItem,
  placeholder,
  disabledItems = [],
  onValueChange,
}: SelectOptionProps) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={cn("w-[180px]", className)} icon={icon}>
        <SelectValue placeholder={placeholder || "선택"} />
      </SelectTrigger>

      <SelectContent className={"max-h-[280px]"}>
        {selectItem?.map((item, index) => {
          const isItemDisabled = disabledItems.includes(item);
          return (
            <SelectItem
              key={`${item}-${index}`}
              value={item}
              disabled={isItemDisabled}
            >
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
