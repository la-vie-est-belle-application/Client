import { Role } from "@constants/role";
import { ScheduleList } from "@interfaces/schedule";

export const scheduleListActionType = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
} as const;

export const initialScheduleList: ScheduleList = {
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

export const scheduleListReducer = (
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
    case scheduleListActionType.ADD_USER:
      if (!action.payload?.role || !action.payload?.userName) return state;

      // eslint-disable-next-line no-case-declarations
      const currentUsers = state.role[action.payload.role] || [];

      return {
        ...state,
        role: {
          ...state.role,
          [action.payload.role]: [...currentUsers, action.payload.userName],
        },
      };
    case scheduleListActionType.DELETE_USER:
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
