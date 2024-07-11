import { useEffect, useReducer } from "react";
import { SelectedDate } from "./useCalendar";

const useSchedule = () => {
  const [isOpenDetail, toggleIsOpenDetail] = useReducer((state) => {
    return !state;
  }, false);

  useEffect(() => {
    if (isOpenDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenDetail]);

  const onShowDetail = (date: SelectedDate) => {
    return date && toggleIsOpenDetail();
  };

  return { isOpenDetail, onShowDetail };
};

export default useSchedule;
