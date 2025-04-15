"use client";

import React, { useEffect, useState } from "react";
import { DayCellMountArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import "./calender.css";

export const ScheduleCalender = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([]);

  const handleClickDate = (arg: DateClickArg) => {
    if (selectedDate.includes(arg.dateStr)) {
      const filterDate = selectedDate.filter((date) => date !== arg.dateStr);

      setSelectedDate(filterDate);
      return;
    }

    setSelectedDate([...selectedDate, arg.dateStr]);
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

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
        events={selectedDate.map((date) => ({
          start: date,
          display: "background",
          backgroundColor: "#facc15", // 원하는 색상으로 변경 가능
        }))}
      />
    </div>
  );
};
