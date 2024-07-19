import { useEffect, useReducer, useRef } from "react";
import { SelectedDate } from "./useCalendar";
import { Roles } from "@interfaces/schedule";
import { initialWorkTime, workTimeReducer } from "@reducers/workTimeReducer";
import {
  initialScheduleList,
  scheduleListActionType,
  scheduleListReducer,
} from "@reducers/scheduleListReducer";

const useSchedule = () => {
  const selectedRoleRef = useRef<Roles | null>(null);
  const [isOpenDetail, toggleIsOpenDetail] = useReducer(
    (state) => !state,
    false,
  );
  const [scheduleList, onUpdateScheduleList] = useReducer(
    scheduleListReducer,
    initialScheduleList,
  );

  const [workTime, onUpdateWorkTime] = useReducer(
    workTimeReducer,
    initialWorkTime,
  );

  useEffect(() => {
    if (isOpenDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenDetail]);

  const onAddUserToScheduleList = (selectedRole: Roles, userName: string) => {
    if (selectedRole) {
      onUpdateScheduleList({
        type: scheduleListActionType.ADD_USER,
        payload: { role: selectedRole, userName },
      });
    }
  };

  const onDeleteUserFromScheduleList = (
    selectedRole: Roles,
    userName: string,
  ) => {
    if (selectedRole) {
      onUpdateScheduleList({
        type: scheduleListActionType.DELETE_USER,
        payload: { role: selectedRole, userName },
      });
    }
  };

  const onSelectRole = (role: Roles) => {
    selectedRoleRef.current = role;
  };

  const onShowDetail = (date: SelectedDate) => {
    return date && toggleIsOpenDetail();
  };

  return {
    toggleIsOpenDetail,
    isOpenDetail,
    onShowDetail,
    onAddUserToScheduleList,
    onDeleteUserFromScheduleList,
    scheduleList,
    onSelectRole,
    selectedRoleRef,
    onUpdateWorkTime,
    workTime,
  };
};

export default useSchedule;
