import { supabase } from "@shared/api/fetch-schedule-date";

export const fetchUserList = async (selectedDate: string) => {
  const { data, error } = await supabase
    .from("schedules")
    .select("user_list")
    .eq("date", selectedDate)
    .single();

  if (error) {
    console.error("기존 데이터 가져오기 실패:", error);
    return [];
  }

  return data?.user_list;
};
