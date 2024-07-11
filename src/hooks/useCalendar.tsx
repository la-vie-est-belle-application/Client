import { useReducer } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

export type SelectedDate = Value | null;
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

  const onChangeSelectedDate = (date: SelectedDate) => {
    dispatch(date as Date | null);
  };

  return { selectedDates, onChangeSelectedDate };
};

export default useCalendar;
