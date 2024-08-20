import { env } from "@constants/url";
import { API, handleApiError } from "..";
import { SelectedDates } from "src/types/calendar";

export const SCHEDULE_API = {
  createSchedule: async (dates: SelectedDates) => {
    try {
      await API.post(env.createScheduleURL, dates);
    } catch (error) {
      handleApiError(error);
    }
  },
  getSchedule: async (activeMonth: string | null) => {
    try {
      const response = await API.get<string[]>(env.scheduleURL, {
        params: { activeMonth },
      });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },
};
