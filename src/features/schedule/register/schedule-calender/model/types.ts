import FullCalendar from "@fullcalendar/react";

/* 스토어 */
export interface ScheduleCalenderStore {
  selectedDate: Set<string>;
  selectedDateList: string[];
  calendarRef: React.RefObject<FullCalendar | null>;
  setSelectedDate: (date: string) => void;
  clearSelectedDate: () => void;
}
