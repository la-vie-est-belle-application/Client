"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { useShallow } from "zustand/react/shallow";
import { postCreateSchedule } from "@features/schedule/register/create-schedule/api/postCreateSchedule";
import { useScheduleCalenderStore } from "@features/schedule/register/schedule-calender/model/store";
import { Button } from "@shared/shadcn-ui/components";

export const CreateSchedule = () => {
  const selectedDateList = useScheduleCalenderStore(
    useShallow((state) => state.selectedDateList),
  );

  return (
    <Button
      variant="primary"
      onClick={() => postCreateSchedule(selectedDateList)}
    >
      <FaPlus />
      스케줄 등록
    </Button>
  );
};
