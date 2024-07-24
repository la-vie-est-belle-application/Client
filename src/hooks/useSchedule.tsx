import { useCallback, useEffect, useReducer, useState } from "react";
import { SelectedDate } from "./useCalendar";
import { Roles, User } from "@interfaces/schedule";
import { initialWorkTime, workTimeReducer } from "@reducers/workTimeReducer";
import {
  INITIAL_SCHEDULE_LIST,
  SCHEDULE_LIST_ACTION_TYPE,
  scheduleListReducer,
} from "@reducers/scheduleListReducer";
import {
  APPLICANTS_ACTION_TYPE,
  applicantsReducer,
  INITIAL_APPLICANTS,
} from "@reducers/applicantsReducer";

const useSchedule = () => {
  const [selectedRole, setSelectedRole] = useState<Roles | undefined>(
    undefined,
  );
  const [isOpenDetail, toggleIsOpenDetail] = useReducer(
    (state) => !state,
    false,
  );
  const [scheduleList, onUpdateUserInScheduleList] = useReducer(
    scheduleListReducer,
    INITIAL_SCHEDULE_LIST,
  );

  const [workTime, onUpdateWorkTime] = useReducer(
    workTimeReducer,
    initialWorkTime,
  );

  const [temporaryScheduleList, onUpdateUserInTemporaryScheduleList] =
    useReducer(scheduleListReducer, INITIAL_SCHEDULE_LIST);

  const [applicants, onUpdateApplicants] = useReducer(
    applicantsReducer,
    INITIAL_APPLICANTS,
  );

  useEffect(() => {
    if (isOpenDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenDetail]);

  const onSelectRole = (role: Roles) => {
    setSelectedRole(role);
  };

  const onShowDetail = (date: SelectedDate) => {
    return date && toggleIsOpenDetail();
  };

  const handleAddToPendingList = useCallback(
    (user: User) => {
      if (!selectedRole) return;

      onUpdateUserInTemporaryScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
        payload: {
          role: selectedRole,
          userId: user.userId,
          userName: user.userName,
        },
      });

      onUpdateApplicants({
        status: APPLICANTS_ACTION_TYPE.DONE,
        payload: [user],
      });
    },
    [selectedRole],
  );

  const handleRemoveFromPendingList = useCallback(
    (user: User) => {
      if (!selectedRole) return;

      onUpdateUserInTemporaryScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
        payload: {
          role: selectedRole,
          userId: user.userId,
          userName: user.userName,
        },
      });

      onUpdateApplicants({
        status: APPLICANTS_ACTION_TYPE.PENDING,
        payload: [user],
      });
    },
    [selectedRole],
  );

  const saveScheduleChanges = useCallback(() => {
    if (!selectedRole) return;

    const currentUsersInSchedule = scheduleList.role[selectedRole] || [];
    const newTemporaryUsers = temporaryScheduleList.role[selectedRole] || [];

    currentUsersInSchedule.forEach(({ userName, userId }) => {
      onUpdateUserInScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
        payload: { role: selectedRole, userName, userId },
      });
    });

    newTemporaryUsers.forEach(({ userId, userName }) => {
      onUpdateUserInScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
        payload: { role: selectedRole, userName, userId },
      });
    });

    toggleIsOpenDetail();
  }, [selectedRole, scheduleList, temporaryScheduleList]);

  return {
    toggleIsOpenDetail,
    isOpenDetail,
    onShowDetail,
    scheduleList,
    onSelectRole,
    onUpdateWorkTime,
    workTime,
    selectedRole,
    temporaryScheduleList,
    applicants,
    handleAddToPendingList,
    handleRemoveFromPendingList,
    saveScheduleChanges,
  };
};

export default useSchedule;
