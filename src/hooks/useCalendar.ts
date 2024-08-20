import { useActiveMonthStore } from "@stores/useActiveMonthStore";
import { format } from "date-fns";
import { SelectedDate, SelectedDates } from "src/types/calendar";

const useCalendar = () => {
  const { setActiveMonth } = useActiveMonthStore();

  const markCalendarDates = (date: Date, selectedDates: SelectedDates) => {
    if (selectedDates.length > 0) {
      return selectedDates.some((d) => d && d.getTime() === date.getTime())
        ? "highlight"
        : "";
    }

    return "";
  };

  const getActiveMonth = (activeMonth: SelectedDate) => {
    if (activeMonth instanceof Date) {
      const newActiveMonth = format(activeMonth, "yyyyMM");
      setActiveMonth(newActiveMonth);
    }
  };

  return {
    markCalendarDates,
    getActiveMonth,
  };
};

export default useCalendar;
