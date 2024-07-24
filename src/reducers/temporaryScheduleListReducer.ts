import { ScheduleList } from "@interfaces/schedule";
import {
  SCHEDULE_LIST_ACTION_TYPE,
  ScheduleListAction,
} from "./scheduleListReducer";

export const temporaryScheduleListReducer = (
  data: ScheduleList,
  action: ScheduleListAction,
): ScheduleList => {
  switch (action.type) {
    case SCHEDULE_LIST_ACTION_TYPE.ADD_USER: {
      const { role, userName, userId } = action.payload;
      const currentUsers = data.role[role] || [];
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
      const updatedUsers =
        data.role[role]?.filter((user) => user.userId !== userId) || [];
      return {
        ...data,
        role: {
          ...data.role,
          [role]: updatedUsers,
        },
      };
    }
    default:
      return data;
  }
};
