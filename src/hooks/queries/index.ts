import { useQuery } from "@tanstack/react-query";
import { APPLICANTS_API } from "@api/applicants/applicants";
import { SelectedDate } from "src/types/calendar";
import { SCHEDULE_API } from "@api/schedule/schedule";
import { applicantsKey, scheduleKey } from "@constants/queryKey";

export function useGetApplicants(date: SelectedDate) {
  return useQuery({
    queryKey: applicantsKey,
    queryFn: () => APPLICANTS_API.getApplicants(date),
  });
}

export function useGetSchedule(activeMonth: string | null) {
  return useQuery({
    queryKey: scheduleKey,
    queryFn: () => SCHEDULE_API.getSchedule(activeMonth),
  });
}
