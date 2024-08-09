import { ScheduleList, ScheduleListAction } from "src/types/schedule";
import { SCHEDULE_LIST_ACTION_TYPE } from "./scheduleListReducer";

export const temporaryScheduleListReducer = (
  data: ScheduleList,
  action: ScheduleListAction,
): ScheduleList => {
  switch (action.type) {
    case SCHEDULE_LIST_ACTION_TYPE.ADD_USER: {
      const { role, name, kakaoId } = action.payload;
      const currentUsers = data.role[role] || [];
      return {
        ...data,
        role: {
          ...data.role,
          [role]: [...currentUsers, { name, kakaoId }],
        },
      };
    }
    case SCHEDULE_LIST_ACTION_TYPE.DELETE_USER: {
      const { role, kakaoId } = action.payload;
      const updatedUsers =
        data.role[role]?.filter((user) => user.kakaoId !== kakaoId) || [];
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
