import { ROUTES } from "@constants/routes";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedDate, SelectedDates } from "src/types/calendar";

const useCalendar = () => {
  const navigate = useNavigate();
  const currentMonth = format(new Date(), "yyyyMM");
  const [activeMonth, setActiveMonth] = useState<string>(currentMonth);

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
    markSelectedDates,
    getActiveMonth,
  };
};

export default useCalendar;
