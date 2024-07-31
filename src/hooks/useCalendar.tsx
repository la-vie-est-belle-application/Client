import { useEffect, useReducer, useState } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

export type SelectedDate = Value;
export type SelectedDates = Date[] | [];

const checkDuplicateDatesReducer = (
  dates: SelectedDates,
  date: Date | null,
) => {
  if (!date) {
    return dates;
  }

  const isDuplicate = dates.some((d) => d && d.getTime() === date.getTime());
  if (isDuplicate) {
    return dates.filter((d) => d && d.getTime() !== date.getTime());
  } else {
    const newDates = [...dates, date];
    return newDates.sort((a, b) => (a && b ? a.getTime() - b.getTime() : 0));
  }
};

const useCalendar = () => {
  const [selectedDates, dispatch] = useReducer(checkDuplicateDatesReducer, []);
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(null);

  const onChangeSelectedDates = (date: SelectedDate) => {
    dispatch(date as Date | null);
  };

  useEffect(() => {
    console.log("selectedDate : ", selectedDate);
  }, [selectedDate]);

  const markSelectedDates = (date: Date, selectedDates: SelectedDates) => {
    if (selectedDates.length > 0) {
      return selectedDates.some((d) => d && d.getTime() === date.getTime())
        ? "highlight"
        : "";
    }
    return "";
  };

  return {
    selectedDates,
    onChangeSelectedDates,
    selectedDate,
    setSelectedDate,
    markSelectedDates,
  };
};

export default useCalendar;
