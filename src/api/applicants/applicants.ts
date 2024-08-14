import { SelectedDate } from "src/types/calendar";
import { API, handleApiError } from "..";
import { Applicants } from "src/types/applicants";
import { env } from "@constants/url";

export const APPLICANTS_API = {
  getApplicants: async (date: SelectedDate) => {
    try {
      const response = API.get<Applicants>(`${env.applicantsURL}/${date}`);

      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
};
