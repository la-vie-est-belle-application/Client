"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { postCreateSchedule } from "@admin/features/register/create-schedule/api/post-create-schedule";
import { fetchScheduleData } from "@admin/features/register/schedule-calender/api/fetch-schedule-data";
import { renderScheduleEvents } from "@admin/features/register/schedule-calender/lib/render-schedule-events";
import { renderSelectedDateEvents } from "@admin/features/register/schedule-calender/lib/render-selected-date-event";
import { useScheduleCalenderStore } from "@admin/features/register/schedule-calender/model/store";
import { Button } from "@admin/shared/shadcn-ui/components";
import { useShallow } from "zustand/react/shallow";

export const CreateSchedule = () => {
  const { calendarRef, selectedDateList, clearSelectedDate } =
    useScheduleCalenderStore(
      useShallow((state) => ({
        calendarRef: state.calendarRef,
        selectedDateList: state.selectedDateList,
        clearSelectedDate: state.clearSelectedDate,
      })),
    );

  const handleClickCreateSchedule = async () => {
    await postCreateSchedule(selectedDateList);

    const data = await fetchScheduleData();
    clearSelectedDate();
    renderSelectedDateEvents(selectedDateList, calendarRef);
    renderScheduleEvents(data, calendarRef);
  };

  return (
    <Button variant="primary" onClick={handleClickCreateSchedule}>
      <FaPlus />
      스케줄 등록
    </Button>
  );
};
