import { useCallback, useEffect, useReducer } from "react";
import { initialWorkTime, workTimeReducer } from "@reducers/workTimeReducer";
import { SCHEDULE_LIST_ACTION_TYPE } from "@reducers/scheduleListReducer";
import { APPLICANTS_ACTION_TYPE } from "@reducers/applicantsReducer";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { formatDateToYYYYMMDD } from "@utils/formatDate";
import { ROUTES } from "@constants/routes";
import { SelectedDate, SelectedDates } from "src/types/calendar";
import { AppliedScheduleUser } from "src/types/schedule";
import { SCHEDULE_API } from "@api/schedule/schedule";
import useApplicants from "./useApplicants";
import {
  useApplicantsStore,
  useTemporaryApplicantsStore,
} from "@stores/useApplicantsStore";
import useIsOpenDetailStore from "@stores/useIsOpenDetailStore";
import useSelectedRoleStore from "@stores/useSelectedRoleStore";
import useSelectedDateStore from "@stores/useSelectedDateStore";
import {
  useScheduleListStore,
  useTemporaryScheduleListStore,
} from "@stores/useScheduleListStore";

const useSchedule = () => {
  const { handleApplicants, handleTemporaryApplicants } = useApplicants();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const activeMonthParams = searchParams.get("activeMonth");
  const dateParams = searchParams.get("date");
  const applicants = useApplicantsStore((state) => state.applicants);
  const temporaryApplicants = useTemporaryApplicantsStore(
    (state) => state.temporaryApplicants,
  );
  const updateIsOpenDetail = useIsOpenDetailStore(
    (state) => state.updateIsOpenDetail,
  );
  const selectedRole = useSelectedRoleStore((state) => state.selectedRole);
  const [workTime, onUpdateWorkTime] = useReducer(
    workTimeReducer,
    initialWorkTime,
  );

  const scheduleList = useScheduleListStore((state) => state.scheduleList);
  const updateScheduleList = useScheduleListStore((state) => state.dispatch);
  const temporaryScheduleList = useTemporaryScheduleListStore(
    (state) => state.temporaryScheduleList,
  );
  const updateTemporaryScheduleList = useTemporaryScheduleListStore(
    (state) => state.dispatch,
  );
  const updateSelectedDate = useSelectedDateStore(
    (state) => state.updateSelectedDate,
  );

  useEffect(() => {
    if (!dateParams) updateIsOpenDetail(false);
    console.log(scheduleList);
  }, [dateParams]);

  const handleNavigateToScheduleDetail = (date: SelectedDate) => {
    const formatDate = formatDateToYYYYMMDD(date);
    navigate(`${ROUTES.REGISTER}${location.search}&date=${formatDate}`);
  };

  const handleCloseScheduleDetail = () => {
    navigate(`${ROUTES.REGISTER}?activeMonth=${activeMonthParams}`, {
      replace: true,
    });

    updateIsOpenDetail(false);
  };

  const handleAddToPendingList = useCallback(
    (user: AppliedScheduleUser) => {
      if (!selectedRole) return;

      updateTemporaryScheduleList({
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

      updateTemporaryScheduleList({
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
      updateScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
        payload: { role: selectedRole, kakaoId, name },
      });
    });

    newTemporaryUsers.forEach(({ kakaoId, name }: AppliedScheduleUser) => {
      updateScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
        payload: { role: selectedRole, kakaoId, name },
      });
    });

    handleApplicants({
      type: APPLICANTS_ACTION_TYPE.CONFIRMED,
      payload: applicants.pending,
    });

    handleTemporaryApplicants({
      type: APPLICANTS_ACTION_TYPE.UPDATE,
      payload: applicants,
    });

    updateIsOpenDetail(true);
  }, [selectedRole, scheduleList, temporaryScheduleList]);

  const handleOnClose = (onClose: () => void) => {
    handleApplicants({
      type: APPLICANTS_ACTION_TYPE.CANCEL,
      payload: temporaryApplicants,
    });

    updateTemporaryScheduleList({
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

  const handleClickScheduleItem = (date: SelectedDate) => {
    handleNavigateToScheduleDetail(date);
    updateIsOpenDetail(true);
    updateSelectedDate(date);
  };

  return {
    onUpdateWorkTime,
    workTime,
    selectedRole,
    handleAddToPendingList,
    handleRemoveFromPendingList,
    saveScheduleChanges,
    handleOnClose,
    handleCloseScheduleDetail,
    createSchedule,
    handleClickScheduleItem,
  };
};

export default useSchedule;
