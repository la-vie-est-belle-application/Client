import { useCallback, useEffect, useReducer } from "react";
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
import { AppliedScheduleUser } from "src/types/schedule";
import { SCHEDULE_API } from "@api/schedule/schedule";
import useApplicants from "./useApplicants";
import useIsOpenDetailStore from "@stores/useIsOpenDetailStore";
import useSelectedRoleStore from "@stores/useSelectedRoleStore";
import useSelectedDateStore from "@stores/useSelectedDateStore";
// import { useGetSchedule } from "./queries";

const useSchedule = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const activeMonthParams = searchParams.get("activeMonth");
  const dateParams = searchParams.get("date");
  const { updateSelectedDate } = useSelectedDateStore();
  const { updateIsOpenDetail } = useIsOpenDetailStore();
  const { selectedRole } = useSelectedRoleStore();
  // const { temporaryScheduleList, updateTemporaryScheduleList } =
  //   useTemporaryScheduleListStore();
  // const { scheduleList, updateScheduleList } = useScheduleListStore();
  // const { data: scheduleData } = useGetSchedule(activeMonthParams);
  const {
    applicants,
    temporaryApplicants,
    handleApplicants,
    handleTemporaryApplicants,
  } = useApplicants();
  const [scheduleList, updateScheduleList] = useReducer(
    scheduleListReducer,
    INITIAL_SCHEDULE_LIST,
  );

  const [temporaryScheduleList, updateTemporaryScheduleList] = useReducer(
    scheduleListReducer,
    INITIAL_SCHEDULE_LIST,
  );

  useEffect(() => {
    if (!dateParams) {
      return updateIsOpenDetail(false);
    }
  }, [dateParams]);

  // useEffect(() => {
  //   // console.log("applicants :", applicants);
  //   console.log("temporaryApplicants :", temporaryApplicants);
  // }, [temporaryApplicants]);

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
      console.log("tempApplicants : ", temporaryApplicants);

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

  // 테스트 중
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
    handleAddToPendingList,
    handleRemoveFromPendingList,
    saveScheduleChanges,
    handleOnClose,
    handleCloseScheduleDetail,
    createSchedule,
    handleClickScheduleItem,
    scheduleList,
    temporaryScheduleList,
  };
};

export default useSchedule;
