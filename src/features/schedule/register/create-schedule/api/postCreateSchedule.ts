import createClient from "@/src/entities/supabase/config/server";

export const postCreateSchedule = async (selectedDateList: string[]) => {
  const supabase = await createClient();
  try {
    const newSchedules = selectedDateList.map((date) => ({
      date,
      is_open: true,
      is_confirmed: false,
    }));

    const { error } = await supabase.from("schedules").insert(newSchedules);

    if (error) {
      throw error;
    }

    alert("스케줄이 성공적으로 등록되었습니다.");
  } catch (error) {
    console.error("Error inserting schedules:", error);
    alert("스케줄 등록 중 오류가 발생했습니다.");
  }
};
