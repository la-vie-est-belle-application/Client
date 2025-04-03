import React from "react";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/index";

export const CreateSchedule = () => {
  return (
    <Button variant="primary">
      <FaPlus />
      스케줄 등록
    </Button>
  );
};
