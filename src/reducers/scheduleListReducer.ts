import { Roles, ScheduleList, ScheduleListAction } from "@interfaces/schedule";

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
      const { role, userName, userId } = action.payload;
      const currentUsers = data.role[role as Roles] || [];
      return {
        ...data,
        role: {
          ...data.role,
          [role]: [...currentUsers, { userName, userId }],
        },
      };
    }
    case SCHEDULE_LIST_ACTION_TYPE.DELETE_USER: {
      const { role, userId } = action.payload;
      const updatedUsers = (data.role[role as Roles] || []).filter(
        (user) => user.userId !== userId,
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
