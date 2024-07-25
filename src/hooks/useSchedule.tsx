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
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDateToYYYYMMDD } from "@utils/formatDate";
import { ROUTES } from "@constants/routes";

const useSchedule = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dateParams = searchParams.get("date");

  const [selectedDate, setSelectedDate] = useState<SelectedDate | undefined>(
    undefined,
  );

  const [selectedRole, setSelectedRole] = useState<Roles | undefined>(
    undefined,
  );
  const [workTime, onUpdateWorkTime] = useReducer(
    workTimeReducer,
    initialWorkTime,
  );
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [scheduleList, onUpdateUserInScheduleList] = useReducer(
    scheduleListReducer,
    INITIAL_SCHEDULE_LIST,
  );

  const [temporaryScheduleList, onUpdateUserInTemporaryScheduleList] =
    useReducer(scheduleListReducer, INITIAL_SCHEDULE_LIST);

  const [applicants, onUpdateApplicants] = useReducer(
    applicantsReducer,
    INITIAL_APPLICANTS,
  );

  const [temporaryApplicants, onUpdateUserInTemporaryApplicants] = useReducer(
    applicantsReducer,
    INITIAL_APPLICANTS,
  );

  useEffect(() => {
    if (dateParams) {
      setIsOpenDetail(true);
    } else {
      setIsOpenDetail(false);
    }
  }, [dateParams]);

  const onSelectRole = (role: Roles) => {
    setSelectedRole(role);
  };

  const onShowDetail = (date: SelectedDate) => {
    return date && setIsOpenDetail(true);
  };

  const onHandleNavigate = (date: SelectedDate) => {
    const formatDate = formatDateToYYYYMMDD(date);
    setSelectedDate(date);
    navigate(`${ROUTES.REGISTER}?date=${formatDate}`);
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
        type: APPLICANTS_ACTION_TYPE.PENDING,
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
        type: APPLICANTS_ACTION_TYPE.RETURN_TO_APPLIED,
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

    onUpdateApplicants({
      type: APPLICANTS_ACTION_TYPE.CONFIRMED,
      payload: applicants.pending,
    });

    onUpdateUserInTemporaryApplicants({
      type: APPLICANTS_ACTION_TYPE.UPDATE,
      payload: applicants,
    });
    setIsOpenDetail(true);
  }, [selectedRole, scheduleList, temporaryScheduleList, applicants]);

  const handleOnClose = (onClose: () => void) => {
    onUpdateApplicants({
      type: APPLICANTS_ACTION_TYPE.CANCEL,
      payload: temporaryApplicants,
    });
    onUpdateUserInTemporaryScheduleList({
      type: SCHEDULE_LIST_ACTION_TYPE.CANCEL,
      payload: scheduleList,
    });
    console.log("scheduleList", scheduleList);
    console.log("temporaryScheduleList", temporaryScheduleList);
    onClose && onClose();
  };

  return {
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
    onHandleNavigate,
    selectedDate,
    setIsOpenDetail,
    temporaryApplicants,
    handleOnClose,
  };
};

export default useSchedule;
