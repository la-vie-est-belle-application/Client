import { useEffect, useReducer, useRef } from "react";
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

const scheduleListReducer = (
  state: ScheduleList,
  action: {
    type: string;
    payload?: {
      role: keyof typeof Role;
      userName?: string;
    };
  },
) => {
  switch (action.type) {
    case actionType.ADD_USER:
      if (!action.payload?.role || !action.payload?.userName) return state; // 조건 수정

      // eslint-disable-next-line no-case-declarations
      const currentUsers = state.role[action.payload.role] || [];

      return {
        ...state,
        role: {
          ...state.role,
          [action.payload.role]: [...currentUsers, action.payload.userName],
        },
      };
    case actionType.DELETE_USER:
      if (!action.payload?.role || !action.payload.userName) {
        return state;
      }
      // eslint-disable-next-line no-case-declarations
      const updatedUsers =
        state.role[action.payload.role]?.filter(
          (name) => name !== action.payload?.userName,
        ) || [];

      return {
        ...state,
        role: {
          ...state.role,
          [action.payload.role]: updatedUsers,
        },
      };
    default:
      return state;
  }
};

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
        type: actionType.ADD_USER,
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
        type: actionType.DELETE_USER,
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
  };
};

export default useSchedule;
