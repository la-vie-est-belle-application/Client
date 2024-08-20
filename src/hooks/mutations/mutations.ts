import { handleApiError } from "@api/index";
import { SCHEDULE_API } from "@api/schedule/schedule";
import { queryClient } from "@constants/query";
import { scheduleKey } from "@constants/queryKey";
import { useMutation } from "@tanstack/react-query";
import { SelectedDates } from "src/types/calendar";

export function useCreateSchedule() {
  return useMutation({
    mutationFn: (dates: SelectedDates) => SCHEDULE_API.createSchedule(dates),
    onMutate: () => {
      console.log("mutate");
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      console.log("success");
    },
    onSettled: async (_, error) => {
      if (error) {
        handleApiError(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: scheduleKey });
      }
    },
  });
}
