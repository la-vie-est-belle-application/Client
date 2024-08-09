import { ROUTES } from "@constants/routes";
import { format } from "date-fns";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedDate, SelectedDates } from "src/types/calendar";

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
  const navigate = useNavigate();
  const currentMonth = format(new Date(), "yyyyMM");
  const [selectedDates, dispatch] = useReducer(checkDuplicateDatesReducer, []);
  const [activeMonth, setActiveMonth] = useState<string>(currentMonth);

  const onChangeSelectedDates = (date: SelectedDate) => {
    dispatch(date as Date | null);
  };

  useEffect(() => {
    navigate(`${ROUTES.REGISTER}?activeMonth=${activeMonth}`, {
      replace: true,
    });
  }, [activeMonth]);

  const markSelectedDates = (date: Date, selectedDates: SelectedDates) => {
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
    selectedDates,
    onChangeSelectedDates,
    markSelectedDates,
    getActiveMonth,
  };
};

export default useCalendar;
