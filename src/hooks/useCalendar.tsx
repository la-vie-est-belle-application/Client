import { useReducer } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

type SelectedDate = Value | null;
type SelectedDates = (Date | null)[];

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
    return [...dates, date];
  }
};

const useCalendar = () => {
  const [selectedDates, dispatch] = useReducer(checkDuplicateDatesReducer, []);

  const onSelectedDateChange = (date: SelectedDate) => {
    dispatch(date as Date | null);
  };
  return { selectedDates, onSelectedDateChange };
};

export default useCalendar;
