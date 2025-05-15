import FullCalendar from "@fullcalendar/react";
import { ScheduleData } from "@features/schedule/register/create-schedule";

export const renderScheduleEvents = async (
  data: ScheduleData[],
  calendarRef: React.RefObject<FullCalendar | null>,
) => {
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
