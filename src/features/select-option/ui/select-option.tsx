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
        <SelectValue placeholder="날짜 선택" />
      </SelectTrigger>

      <SelectContent>
        {selectItem?.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
