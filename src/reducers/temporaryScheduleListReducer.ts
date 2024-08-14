import { ScheduleList, ScheduleListAction } from "src/types/schedule";
import { SCHEDULE_LIST_ACTION_TYPE } from "./scheduleListReducer";

export const temporaryScheduleListReducer = (
  temporaryScheduleList: ScheduleList,
  action: ScheduleListAction,
): ScheduleList => {
  const { type, payload } = action;
  switch (type) {
    case SCHEDULE_LIST_ACTION_TYPE.ADD_USER: {
      const { role, name, kakaoId } = payload;
      const currentUsers = temporaryScheduleList.role[role] || [];
      return {
        ...temporaryScheduleList,
        role: {
          ...temporaryScheduleList.role,
          [role]: [...currentUsers, { name, kakaoId }],
        },
      };
    }
    case SCHEDULE_LIST_ACTION_TYPE.DELETE_USER: {
      const { role, kakaoId } = payload;
      const updatedUsers =
        temporaryScheduleList.role[role]?.filter(
          (user) => user.kakaoId !== kakaoId,
        ) || [];
      return {
        ...temporaryScheduleList,
        role: {
          ...temporaryScheduleList.role,
          [role]: updatedUsers,
        },
      };
    }
    default:
      return temporaryScheduleList;
  }
};
