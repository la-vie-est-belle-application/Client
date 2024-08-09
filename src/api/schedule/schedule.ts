import { API } from "..";
import { AxiosResponse } from "axios";

export const SCHEDULE_API = {
  createSchedule: async <T>(dates: T): Promise<T> => {
    const response: AxiosResponse<T> = await API.post<T>(
      import.meta.env.VITE_SCHEDULE_URL,
      dates,
    );
    return response.data;
  },
};
