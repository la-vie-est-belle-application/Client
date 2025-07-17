import { fetchExistingDateList } from "@admin/shared/api/index";
import { successToast, warningToast } from "@admin/shared/shadcn-ui/lib/toast";
import { createClient } from "@supabase/supabase-js";

export interface ScheduleData {
  is_open: boolean;
  is_confirmed: boolean;
  date: string;
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const postCreateSchedule = async (selectedDateList: string[]) => {
  if (selectedDateList.length === 0) {
    warningToast("등록할 스케줄이 없습니다");
    return;
  }

  const existingScheduleList = await fetchExistingDateList(selectedDateList);

  if (existingScheduleList.length > 0) {
    warningToast("선택하신 날짜 중 이미 등록되어 있는 날짜가 있습니다.");
    return;
  }

  const formattedDateList = selectedDateList.map((date) => ({
    is_open: true,
    is_confirmed: false,
    date: date,
  }));

  const { error } = await supabase.from("schedules").insert(formattedDateList);

  if (error) {
    warningToast("스케줄 등록 중 오류가 발생했습니다.");
    throw new Error("스케줄 등록 중 오류가 발생했습니다.");
  }

  successToast("새로운 스케줄이 성공적으로 등록되었습니다.");
  return { success: true };
};
