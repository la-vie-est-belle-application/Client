import { supabase } from "@admin/features/register/create-schedule";

export const putConfirmed = async (selectedDate: string) => {
  const { error } = await supabase
    .from("schedules")
    .update({ is_confirmed: false })
    .eq("date", selectedDate);

  if (error) {
    console.error(error);
  }
};
