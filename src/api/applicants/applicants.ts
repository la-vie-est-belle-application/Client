import { API } from "..";
import { Applicants } from "src/types/applicants";

export const APPLICANTS_API = {
  getApplicants: async (date: string) => {
    return await API.get<Applicants>(
      `${import.meta.env.VITE_APPLICANTS_URL}/${date}`,
    );
  },
};
