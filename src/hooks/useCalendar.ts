import { useActiveMonthStore } from "@stores/useActiveMonthStore";
import { format } from "date-fns";
import { useState } from "react";
import { SelectedDate, SelectedDates } from "src/types/calendar";

const useCalendar = () => {
  const { setActiveMonth } = useActiveMonthStore();
  const [selectedDates, setSelectedDates] = useState<SelectedDates>([]);

  const handleSelectedDates = (date: SelectedDate | null) => {
    if (!date || !selectedDates) {
      return selectedDates;
    }

    const isDuplicate = selectedDates.some(
      (d) => d && d.getTime() === date.getTime(),
    );

    const newDates = isDuplicate
      ? selectedDates.filter((d) => d && d.getTime() !== date.getTime())
      : [...selectedDates, date].sort((a, b) =>
          a && b ? a.getTime() - b.getTime() : 0,
        );

    setSelectedDates(newDates);
  };

  const markCalendarDates = (
    date: Date,
    selectedDates: SelectedDates | null,
  ) => {
    if (!selectedDates) return;

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
    selectedDates,
    handleSelectedDates,
  };
};

export default useCalendar;
