import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ARON_KEY!,
);

export const fetchExistingDateList = async (selectedDateList: string[]) => {
  const { data: existingScheduleData } = await supabase
    .from("schedules")
    .select("date")
    .in("date", selectedDateList);

  if (existingScheduleData) {
    const existingDateList = existingScheduleData.map(
      (schedule) => schedule.date,
    );

    return existingDateList;
  }

  return [];
};
