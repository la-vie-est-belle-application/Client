import { useEffect, useReducer } from "react";
import { SelectedDate } from "./useCalendar";
import { ScheduleList, Roles } from "src/interfaces/schedule";
import { Role } from "@constants/role";

const actionType = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
} as const;

const initialScheduleList: ScheduleList = {
  role: {
    팀장: [],
    스캔: [],
    메인: [],
    드레스: [],
    드레스실: [],
    대기실: [],
    축가: [],
    매니저: [],
    안내: [],
  },
};

// 스케줄 리스트 업데이트 리듀서 함수
const scheduleListReducer = (
  state: ScheduleList,
  action: {
    type: string;
    payload?: {
      role: keyof typeof Role;
      userName?: string;
      userNameToDelete?: string;
    };
  },
) => {
  switch (action.type) {
    case actionType.ADD_USER:
      console.log("유저 추가됨");
      return {
        ...state,
      };
    case actionType.DELETE_USER:
      console.log("유저 제거됨");
      return {
        ...state,
      };
    default:
      return state;
  }
};

const useSchedule = () => {
  const [isOpenDetail, toggleIsOpenDetail] = useReducer(
    (state) => !state,
    false,
  );
  const [scheduleList, onUpdateScheduleList] = useReducer(
    scheduleListReducer,
    initialScheduleList,
  );

  useEffect(() => {
    if (isOpenDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenDetail]);

  const onAddUserToScheduleList = (role: Roles, userName: string) => {
    onUpdateScheduleList({
      type: actionType.ADD_USER,
      payload: { role, userName },
    });
  };

  const onDeleteUserFromScheduleList = (
    role: Roles,
    userNameToDelete: string,
  ) => {
    onUpdateScheduleList({
      type: actionType.DELETE_USER,
      payload: { role, userNameToDelete },
    });
  };

  // 상세 정보 패널 토글 핸들러
  const onShowDetail = (date: SelectedDate) => {
    return date && toggleIsOpenDetail();
  };

  return {
    isOpenDetail,
    onShowDetail,
    onAddUserToScheduleList,
    onDeleteUserFromScheduleList,
    scheduleList,
  };
};

export default useSchedule;
