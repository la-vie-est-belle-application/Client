import { SelectedDate } from "@hooks/useCalendar";
import { format, parseISO } from "date-fns";

export const formatDateWithDay = (date: SelectedDate) => {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    return `${year}.${month}.${day} (${dayOfWeek})`;
  }
};

export const formatDateToYYYYMMDD = (date: SelectedDate) => {
  const formatDate = new Date(date);
  return format(formatDate, "yyyyMMdd");
};
