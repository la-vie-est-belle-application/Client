import { createClient } from "@supabase/supabase-js";

interface ScheduleData {
  date: string;
  is_open: boolean;
  is_confirmed: boolean;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ARON_KEY!,
);

export const postCreateSchedule = async (selectedDateList: string[]) => {
  if (selectedDateList.length === 0) {
    alert("선택된 날짜가 없습니다");
    return;
  }

  try {
    //테이블에 등록할 스케줄 데이터 생성
    const newSchedules: ScheduleData[] = selectedDateList.map((date) => ({
      date,
      is_open: true,
      is_confirmed: false,
    }));

    // supabase에서 기존 스케줄 조회
    const { data: existingScheduleData } = await supabase
      .from("schedules")
      .select("date")
      .in("date", selectedDateList);

    if (existingScheduleData) {
      // 날짜만 추출
      const existingDateList = existingScheduleData.map(
        (schedule) => schedule.date,
      );

      // 기존 스케줄과 선택된 날짜 중 중복되는 날짜가 있는지 확인
      const filteredDateList = selectedDateList.filter((date) =>
        existingDateList.includes(date),
      );

      if (filteredDateList.length > 0) {
        alert("선택하신 날짜 중 이미 등록되어 있는 날짜가 있습니다.");
        return;
      }

      // 기존 스케줄이 없는 경우 모두 추가
      const { error } = await supabase.from("schedules").insert(newSchedules);

      if (error) {
        throw error;
      }

      alert("새로운 스케줄이 성공적으로 등록되었습니다.");
    }
  } catch (error) {
    console.error("Error inserting schedules:", error);
    alert("스케줄 등록 중 오류가 발생했습니다.");
  }
};
