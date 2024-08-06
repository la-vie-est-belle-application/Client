import { ScheduleList, ScheduleListAction } from "src/types/schedule";

export const SCHEDULE_LIST_ACTION_TYPE = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  CANCEL: "CANCEL",
} as const;

export const INITIAL_SCHEDULE_LIST: ScheduleList = {
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
  data: ScheduleList,
  action: ScheduleListAction,
): ScheduleList => {
  switch (action.type) {
    case SCHEDULE_LIST_ACTION_TYPE.ADD_USER: {
      const { role, kakaoId, name } = action.payload;
      const currentUsers = data.role[role] || [];
      return {
        ...data,
        role: {
          ...data.role,
          [role]: [...currentUsers, { kakaoId, name }],
        },
      };
    }
    case SCHEDULE_LIST_ACTION_TYPE.DELETE_USER: {
      const { role, kakaoId } = action.payload;
      const updatedUsers = (data.role[role] || []).filter(
        (user) => user.kakaoId !== kakaoId,
      );
      return {
        ...data,
        role: {
          ...data.role,
          [role]: updatedUsers,
        },
      };
    }
    case SCHEDULE_LIST_ACTION_TYPE.CANCEL: {
      return action.payload;
    }
    default:
      return data;
  }
};
