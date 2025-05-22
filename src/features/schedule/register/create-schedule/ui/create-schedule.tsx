"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { useShallow } from "zustand/react/shallow";
import { postCreateSchedule } from "@features/schedule/register/create-schedule/api/post-create-schedule";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
import { renderScheduleEvents } from "@features/schedule/register/schedule-calender/lib/render-schedule-events";
import { renderSelectedDateEvents } from "@features/schedule/register/schedule-calender/lib/render-selected-date-event";
import { useScheduleCalenderStore } from "@features/schedule/register/schedule-calender/model/store";
import { Button } from "@shared/shadcn-ui/components";

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
