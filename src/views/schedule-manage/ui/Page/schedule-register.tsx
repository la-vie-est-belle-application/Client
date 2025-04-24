import { ScheduleCalender } from "@views/schedule-manage/ui/schedule-calender";
import { CreateSchedule, FilterSchedule } from "@features/schedule-manage";

export const ScheduleRegisterPage = () => {
  return (
    <section className="w-full h-full p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">스케줄 등록</h1>
          <p className="text-sm text-gray-500">
            웨딩홀 스케줄 일정을 손쉽게 관리해 보세요
          </p>
        </div>

        <div>
          <FilterSchedule />
          <CreateSchedule />
        </div>
      </div>

      <ScheduleCalender />
    </section>
  );
};
