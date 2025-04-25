"use client";

import React, { useEffect, useRef } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useShallow } from "zustand/react/shallow";
import { ScheduleData } from "@features/schedule/register/create-schedule/index";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
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

  const renderScheduleEvents = async (data: Promise<ScheduleData[]>) => {
    const calendarApi = calendarRef.current?.getApi();

    if (!calendarApi) return;

    calendarApi.removeAllEvents();

    (await data).forEach((schedule) => {
      calendarApi.addEvent({
        id: `schedule-${schedule.date}`,
        start: schedule.date,
        end: schedule.date,
        color: schedule.is_confirmed ? "var(--color-primary)" : "#FEF9C3",
      });
    });
  };

  const renderSelectedDateEvents = (dates: string[]) => {
    const calendarApi = calendarRef.current?.getApi();

    if (!calendarApi) return;

    calendarApi.getEvents().forEach((event) => {
      if (event.display === "background") {
        event.remove();
      }
    });

    dates.forEach((date) => {
      calendarApi.addEvent({
        id: `bg-${date}`,
        start: date,
        display: "background",
        backgroundColor: "#159efa",
      });
    });
  };

  const getScheduleData = async (): Promise<ScheduleData[]> => {
    const data = await fetchScheduleData();

    if (!data) {
      alert("스케줄 데이터를 가져오는데 실패했습니다.");
      return [];
    }

    return data;
  };

  useEffect(() => {
    const data = getScheduleData();
    renderScheduleEvents(data);
  }, []);

  useEffect(() => {
    renderSelectedDateEvents(selectedDateList);
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
