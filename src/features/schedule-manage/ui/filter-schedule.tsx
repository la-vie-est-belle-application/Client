import React from "react";
import { FaFilter } from "react-icons/fa";
import { Button } from "@shared/shadcn-ui/components";

export const FilterSchedule = () => {
  return (
    <Button variant="ghost" className="mr-2">
      <FaFilter />
      필터
    </Button>
  );
};
