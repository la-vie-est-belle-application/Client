import {
  ScheduleData,
  supabase,
} from "@features/schedule/register/create-schedule/index";

export const fetchScheduleData = async (): Promise<ScheduleData[]> => {
  try {
    const { data, error } = await supabase.from("schedules").select("*");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
};
