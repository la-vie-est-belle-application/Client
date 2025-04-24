"use client";

import React from "react";
import { useScheduleCalenderStore } from "@/src/features/schedule/register/schedule-calender/model/store";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useShallow } from "zustand/react/shallow";
import "./calender.css";

export const ScheduleCalender = () => {
  const { selectedDateList, setSelectedDate } = useScheduleCalenderStore(
    useShallow((state) => ({
      selectedDateList: state.selectedDateList,
      setSelectedDate: state.setSelectedDate,
    })),
  );

  const handleClickDate = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
  };

  return (
    <div className="pt-8 pb-10">
      <FullCalendar
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
        events={selectedDateList.map((date) => ({
          start: date,
          display: "background",
          backgroundColor: "#159efa",
        }))}
      />
    </div>
  );
};
