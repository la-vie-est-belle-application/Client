"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/index";
import { postCreateSchedule } from "@/src/features/schedule/register/create-schedule/api/postCreateSchedule";
import { useScheduleCalenderStore } from "@/src/features/schedule/register/schedule-calender/index";
import { useShallow } from "zustand/react/shallow";

export const CreateSchedule = () => {
  const selectedDateList = useScheduleCalenderStore(
    useShallow((state) => state.selectedDateList),
  );

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="primary">
          <FaPlus />
          스케줄 등록
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">
            스케줄 등록 하시겠습니까?
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 pt-15">
          <DialogClose asChild>
            <Button variant="ghost" className="flex-1" size="lg">
              취소
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              variant="primary"
              className="flex-1"
              size="lg"
              onClick={() => postCreateSchedule(selectedDateList)}
            >
              등록
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
