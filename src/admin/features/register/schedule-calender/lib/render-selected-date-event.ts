import FullCalendar from "@fullcalendar/react";

export const renderSelectedDateEvents = (
  dates: string[],
  calendarRef: React.RefObject<FullCalendar | null>,
) => {
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
