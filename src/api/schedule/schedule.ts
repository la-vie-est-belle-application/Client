import { env } from "@constants/url";
import { API, handleApiError } from "..";
import { AxiosResponse } from "axios";
import { SelectedDate, SelectedDates } from "src/types/calendar";
import { ScheduleList } from "src/types/schedule";

export const SCHEDULE_API = {
  createSchedule: async <ScheduleList>(dates: SelectedDates) => {
    try {
      const response: AxiosResponse<ScheduleList> =
        await API.post<ScheduleList>(env.scheduleURL, dates);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  getSchedule: async (date: SelectedDate) => {
    try {
      const response = API.get<ScheduleList>(env.scheduleURL, { params: date });
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
};
