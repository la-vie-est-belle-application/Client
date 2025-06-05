import React from "react";
import { PositionTable } from "@views/schedule/manage/position-table/position-table";
import { ScheduleControlBar } from "@views/schedule/manage/schedule-control-bar/ui/schedule-control-bar";
import { Button } from "@shared/shadcn-ui/components";

export const ScheduleManagePage = () => {
  return (
    <section className="w-full p-6">
      <div className="w-full h-full p-6 bg-white rounded-lg shadow-2xs">
        <h1 className="text-2xl font-bold mb-4">스케줄 관리</h1>
        <ScheduleControlBar />
        <PositionTable />
      </div>
    </section>
  );
};
