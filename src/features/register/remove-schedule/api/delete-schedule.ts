import { createClient } from "@supabase/supabase-js";
import { fetchExistingDateList } from "@shared/api/index";
import {
  errorToast,
  successToast,
  warningToast,
} from "@shared/shadcn-ui/lib/toast";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const deleteSchedule = async (selectedDateList: string[]) => {
  if (selectedDateList.length === 0) {
    warningToast("삭제할 스케줄이 없습니다");
    return;
  }

  const existingScheduleList = await fetchExistingDateList(selectedDateList);
  const nonExistingDates = selectedDateList.filter(
    (date) => !existingScheduleList.includes(date),
  );

  if (nonExistingDates.length > 0) {
    warningToast("선택한 날짜 중 스케줄이 등록되어 있지 않습니다");
    return;
  }

  const { error } = await supabase
    .from("schedules")
    .delete()
    .in("date", selectedDateList);

  if (error) {
    errorToast("스케줄 삭제에 실패했습니다");
    throw new Error("스케줄 삭제에 실패했습니다");
  }

  successToast("스케줄이 삭제되었습니다");

  return { success: true };
};
