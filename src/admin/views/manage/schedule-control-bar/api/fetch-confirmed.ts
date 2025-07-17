import { supabase } from "@admin/features/register/create-schedule";

export const fetchConfirmed = async (selectedDate: string) => {
  const { data, error } = await supabase
    .from("schedules")
    .select("is_confirmed")
    .eq("date", selectedDate)
    .single();

  if (error) {
    console.error("기존 데이터 가져오기 실패:", error);
    return;
  }

  return data?.is_confirmed || false;
};
