"use client";

import React, { useMemo } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useShallow } from "zustand/react/shallow";
import { useScheduleCalenderStore } from "../model/store";
import "./calender.css";

export const ScheduleCalender = () => {
  const { selectedDateList, setSelectedDateList } = useScheduleCalenderStore(
    useShallow((state) => ({
      selectedDateList: state.selectedDateList,
      setSelectedDateList: state.setSelectedDateList,
    })),
  );

  const selectedDateArray = useMemo(
    () => Array.from(selectedDateList),
    [selectedDateList],
  );

  const handleClickDate = (arg: DateClickArg) => {
    setSelectedDateList(arg.dateStr);
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
        events={selectedDateArray.map((date: string) => ({
          start: date,
          display: "background",
          backgroundColor: "#159efa",
        }))}
      />
    </div>
  );
};
