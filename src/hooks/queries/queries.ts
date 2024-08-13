import { useQuery } from "@tanstack/react-query";
import { APPLICANTS_API } from "@api/applicants/applicants";
import { SelectedDate } from "src/types/calendar";

export function useGetApplicants(date: SelectedDate) {
  return useQuery({
    queryKey: ["applicants"],
    queryFn: () => APPLICANTS_API.getApplicants(date),
  });
}
