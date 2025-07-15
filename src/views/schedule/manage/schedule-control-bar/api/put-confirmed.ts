import { supabase } from "@features/schedule/register/create-schedule";

export const putConfirmed = async (selectedDate: string) => {
  await supabase
    .from("schedules")
    .update({ isConfirmed: false })
    .eq("date", selectedDate);
};
