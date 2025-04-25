"use client";

import React, { useEffect, useRef } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useShallow } from "zustand/react/shallow";
import { getScheduleData } from "@features/schedule/register/schedule-calender/lib/get-schedule-data";
import { renderScheduleEvents } from "@features/schedule/register/schedule-calender/lib/render-schedule-events";
import { renderSelectedDateEvents } from "@features/schedule/register/schedule-calender/lib/render-selected-date-event";
import { useScheduleCalenderStore } from "@features/schedule/register/schedule-calender/model/store";
import "./calender.css";

export const ScheduleCalender = () => {
  const calendarRef = useRef<FullCalendar | null>(null);

  const { selectedDateList, setSelectedDate } = useScheduleCalenderStore(
    useShallow((state) => ({
      selectedDateList: state.selectedDateList,
      setSelectedDate: state.setSelectedDate,
    })),
  );

  const handleClickDate = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
  };

  useEffect(() => {
    const data = getScheduleData();
    renderScheduleEvents(data, calendarRef);
  }, []);

  useEffect(() => {
    renderSelectedDateEvents(selectedDateList, calendarRef);
  }, [selectedDateList]);

  return (
    <div className="pt-8 pb-10">
      <FullCalendar
        ref={calendarRef}
        height="auto"
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="ko"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        buttonText={{
          prev: "이전",
          next: "다음",
          today: "오늘",
          month: "월",
          week: "주",
          day: "일",
        }}
        dateClick={handleClickDate}
      />
    </div>
  );
};
