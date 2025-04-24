"use client";

import React, { useEffect, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useShallow } from "zustand/react/shallow";
import { ScheduleData } from "@features/schedule/register/create-schedule/index";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
import { useScheduleCalenderStore } from "@features/schedule/register/schedule-calender/model/store";
import "./calender.css";

export const ScheduleCalender = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);
  const { selectedDateList, setSelectedDate } = useScheduleCalenderStore(
    useShallow((state) => ({
      selectedDateList: state.selectedDateList,
      setSelectedDate: state.setSelectedDate,
    })),
  );

  const handleClickDate = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
  };

  const getScheduleData = async () => {
    const scheduleData = await fetchScheduleData();

    if (!scheduleData) {
      alert("스케줄 데이터를 가져오는데 실패했습니다.");
      return;
    }

    setScheduleData(scheduleData);
  };

  useEffect(() => {
    getScheduleData();
  }, []);

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
        events={[
          ...selectedDateList.map((date) => ({
            start: date,
            display: "background",
            backgroundColor: "#159efa",
          })),
          ...scheduleData.map((schedule) => ({
            start: schedule.date,
            color: "#159efa",
          })),
        ]}
      />
    </div>
  );
};
