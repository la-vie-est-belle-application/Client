import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import { fetchExistingDateList } from "@shared/api/index";

export interface ScheduleData {
  is_open: boolean;
  is_confirmed: boolean;
  date: string;
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ARON_KEY!,
);

export const postCreateSchedule = async (selectedDateList: string[]) => {
  if (selectedDateList.length === 0) {
    toast("등록할 스케줄이 없습니다");
    return;
  }

  const existingScheduleList = await fetchExistingDateList(selectedDateList);

  if (existingScheduleList.length > 0) {
    toast("선택하신 날짜 중 이미 등록되어 있는 날짜가 있습니다.");
    return;
  }

  const { error } = await supabase
    .from("schedules")
    .insert(selectedDateList.map((date) => ({ date })));

  if (error) {
    toast("스케줄 등록 중 오류가 발생했습니다.");
    throw new Error("스케줄 등록 중 오류가 발생했습니다.");
  }

  toast("새로운 스케줄이 성공적으로 등록되었습니다.");
  return { success: true };
};
