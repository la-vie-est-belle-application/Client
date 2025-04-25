import { ScheduleData } from "@features/schedule/register/create-schedule/index";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";

export const getScheduleData = async (): Promise<ScheduleData[]> => {
  const data = await fetchScheduleData();

  if (!data) {
    alert("스케줄 데이터를 가져오는데 실패했습니다.");
    return [];
  }

  return data;
};
