import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ARON_KEY!,
);

export const deleteSchedule = async (selectedDateList: string[]) => {
  if (selectedDateList.length === 0) {
    toast("삭제할 스케줄이 없습니다");
    return;
  }

  const { error } = await supabase
    .from("schedules")
    .delete()
    .in("date", selectedDateList);

  if (error) {
    toast("스케줄 삭제에 실패했습니다");
    throw new Error("스케줄 삭제에 실패했습니다");
  }

  toast("스케줄이 삭제되었습니다");

  return { success: true };
};
