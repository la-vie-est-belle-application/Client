import React from "react";
import { SchedulePreviewCard } from "@entities/schedule-preview-card/ui/schedule-preview-card";

export const SchedulePanel = () => {
  return (
    <div className="mt-5">
      <p className="text-xs font-bold text-gray-500 ml-2">오늘의 스케줄</p>
      <SchedulePreviewCard />
      <p className="text-xs font-bold text-gray-500 ml-2 mt-4">
        다가오는 스케줄
      </p>
      <SchedulePreviewCard />
    </div>
  );
};
