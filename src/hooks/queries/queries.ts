import { useQuery } from "@tanstack/react-query";
import { APPLICANTS_API } from "@api/applicants/applicants";
import { SelectedDate } from "src/types/calendar";
import { SCHEDULE_API } from "@api/schedule/schedule";

export function useGetApplicants(date: SelectedDate) {
  return useQuery({
    queryKey: ["applicants"],
    queryFn: () => APPLICANTS_API.getApplicants(date),
  });
}

export function useGetSchedule(date: SelectedDate | undefined) {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: () => SCHEDULE_API.getSchedule(date),
  });
}
