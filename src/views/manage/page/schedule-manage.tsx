import { PositionTable } from "@views/manage/position-table/position-table";
import { ScheduleControlBar } from "@views/manage/schedule-control-bar/ui/schedule-control-bar";

export const ScheduleManagePage = () => {
  return (
    <section className="w-full p-6">
      <div className="w-full p-6 bg-white rounded-lg shadow-2xs">
        <h1 className="text-2xl font-bold mb-4">스케줄 관리</h1>
        <ScheduleControlBar />
        <PositionTable />
      </div>
    </section>
  );
};
