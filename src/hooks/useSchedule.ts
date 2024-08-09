import { useCallback, useEffect, useReducer, useState } from "react";
import { initialWorkTime, workTimeReducer } from "@reducers/workTimeReducer";
import {
  INITIAL_SCHEDULE_LIST,
  SCHEDULE_LIST_ACTION_TYPE,
  scheduleListReducer,
} from "@reducers/scheduleListReducer";
import { APPLICANTS_ACTION_TYPE } from "@reducers/applicantsReducer";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { formatDateToYYYYMMDD } from "@utils/formatDate";
import { ROUTES } from "@constants/routes";
import { SelectedDate, SelectedDates } from "src/types/calendar";
import { AppliedScheduleUser, Roles } from "src/types/schedule";
import { SCHEDULE_API } from "@api/schedule/schedule";
import useApplicants from "./useApplicants";
import {
  useApplicantsStore,
  useTemporaryApplicantsStore,
} from "@stores/useApplicantsStore";

const useSchedule = () => {
  const { handleApplicants, handleTemporaryApplicants } = useApplicants();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dateParams = searchParams.get("date");
  const activeMonthParams = searchParams.get("activeMonth");
  const applicants = useApplicantsStore();
  const temporaryApplicants = useTemporaryApplicantsStore();

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
    navigate(`${ROUTES.REGISTER}${location.search}&date=${formatDate}`);
  };

  const handleCloseScheduleDetail = () => {
    navigate(`${ROUTES.REGISTER}?activeMonth=${activeMonthParams}`, {
      replace: true,
    });
  };

  const handleAddToPendingList = useCallback(
    (user: AppliedScheduleUser) => {
      if (!selectedRole) return;

      onUpdateUserInTemporaryScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
        payload: {
          role: selectedRole,
          kakaoId: user.kakaoId,
          name: user.name,
        },
      });

      handleApplicants({
        type: APPLICANTS_ACTION_TYPE.PENDING,
        payload: [user],
      });
    },
    [selectedRole],
  );

  const handleRemoveFromPendingList = useCallback(
    (user: AppliedScheduleUser) => {
      if (!selectedRole) return;

      onUpdateUserInTemporaryScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
        payload: {
          role: selectedRole,
          kakaoId: user.kakaoId,
          name: user.name,
        },
      });

      handleApplicants({
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

    currentUsersInSchedule.forEach(({ kakaoId, name }: AppliedScheduleUser) => {
      onUpdateUserInScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
        payload: { role: selectedRole, kakaoId, name },
      });
    });

    newTemporaryUsers.forEach(({ kakaoId, name }: AppliedScheduleUser) => {
      onUpdateUserInScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
        payload: { role: selectedRole, kakaoId, name },
      });
    });

    handleApplicants({
      type: APPLICANTS_ACTION_TYPE.CONFIRMED,
      payload: applicants.data.pending,
    });

    handleTemporaryApplicants({
      type: APPLICANTS_ACTION_TYPE.UPDATE,
      payload: applicants.data,
    });

    setIsOpenDetail(true);
  }, [selectedRole, scheduleList, temporaryScheduleList]);

  const handleOnClose = (onClose: () => void) => {
    handleApplicants({
      type: APPLICANTS_ACTION_TYPE.CANCEL,
      payload: temporaryApplicants.data,
    });

    onUpdateUserInTemporaryScheduleList({
      type: SCHEDULE_LIST_ACTION_TYPE.CANCEL,
      payload: scheduleList,
    });
    onClose && onClose();
  };

  const createSchedule = async (selectedDates: SelectedDates) => {
    try {
      const response = await SCHEDULE_API.createSchedule(selectedDates);

      return response;
    } catch {
      console.error("@@@");
    }
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
    handleAddToPendingList,
    handleRemoveFromPendingList,
    saveScheduleChanges,
    onHandleNavigate,
    setIsOpenDetail,
    handleOnClose,
    handleCloseScheduleDetail,
    createSchedule,
  };
};

export default useSchedule;
