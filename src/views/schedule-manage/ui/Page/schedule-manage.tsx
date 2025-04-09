import React from "react";
import { FaMagnifyingGlass, FaRegCalendar } from "react-icons/fa6";
import { Button } from "@/components/ui/index";
import { SelectOption } from "@/src/feature/schedule-manage/index";

export const ScheduleManagePage = () => {
  return (
    <section className="w-full h-full p-6">
      <h1 className="text-2xl font-bold mb-4">스케줄 관리</h1>
      <div className="flex justify-start items-center gap-4 max-w-[1000px]">
        <SelectOption className="w-full" icon={<FaRegCalendar />} />
        <SelectOption className="w-full" icon={<FaRegCalendar />} />

        <Button variant="primary">
          <FaMagnifyingGlass />
          조회
        </Button>
      </div>
    </section>
  );
};
