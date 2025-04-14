"use client";

import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import "./calender.css";

export const ScheduleCalender = () => {
  return (
    <div className="pt-8 pb-10">
      <FullCalendar
        height="auto"
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
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
        events={[]}
      />
    </div>
  );
};
