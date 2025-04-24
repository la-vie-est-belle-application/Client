import React from "react";
import { CircleFadingPlus } from "lucide-react";
import { Button } from "@shared/shadcn-ui/components/button";

export const CreateSchedule = () => {
  return (
    <Button variant="default">
      <CircleFadingPlus />
      스케줄 등록
    </Button>
  );
};
