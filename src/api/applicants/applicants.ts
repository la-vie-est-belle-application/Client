import { SelectedDate } from "src/types/calendar";
import { API, handleApiError } from "..";
import { Applicants } from "src/types/applicants";

export const APPLICANTS_API = {
  getApplicants: async (date: SelectedDate) => {
    try {
      const response = API.get<Applicants>(
        `${import.meta.env.VITE_APPLICANTS_URL}/${date}`,
      );

      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
};
