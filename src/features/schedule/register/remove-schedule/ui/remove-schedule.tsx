"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { useShallow } from "zustand/react/shallow";
import { deleteSchedule } from "@features/schedule/register/remove-schedule/api/delete-schedule";
import { useScheduleCalenderStore } from "@features/schedule/register/schedule-calender";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
import { renderScheduleEvents } from "@features/schedule/register/schedule-calender/lib/render-schedule-events";
import { renderSelectedDateEvents } from "@features/schedule/register/schedule-calender/lib/render-selected-date-event";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/shadcn-ui/components";

export const RemoveSchedule = () => {
  const { calendarRef, selectedDateList, clearSelectedDate } =
    useScheduleCalenderStore(
      useShallow((state) => ({
        calendarRef: state.calendarRef,
        selectedDateList: state.selectedDateList,
        clearSelectedDate: state.clearSelectedDate,
      })),
    );

  const handleClickRemoveSchedule = async () => {
    await deleteSchedule(selectedDateList);

    const data = await fetchScheduleData();
    clearSelectedDate();
    renderSelectedDateEvents(selectedDateList, calendarRef);
    renderScheduleEvents(data, calendarRef);
  };
  return (
    <Dialog>
      <DialogTrigger
        className="bg-red-100 hover:bg-red-200 
    text-red-500
    cursor-pointer px-4 py-2 rounded-md h-9 ml-2"
      >
        <div className="flex items-center gap-1 text-sm font-medium">
          <FaTrash />
          스케줄 삭제
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>스케줄을 정말 삭제하시겠습니까?</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 mt-10">
          <DialogClose asChild>
            <Button variant="ghost" className="flex-1">
              취소
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              variant="remove"
              className="flex-1"
              onClick={handleClickRemoveSchedule}
            >
              삭제
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
