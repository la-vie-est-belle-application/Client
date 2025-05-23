import React from "react";
import { FaMagnifyingGlass, FaRegCalendar } from "react-icons/fa6";
import { PositionTable } from "@views/schedule/manage/position-table/position-table";
import { SelectOption } from "@features/select-option";
import { Button } from "@shared/shadcn-ui/components";

export const ScheduleManagePage = () => {
  return (
    <section className="w-full p-6">
      <div className="w-full h-full p-6 bg-white rounded-lg shadow-2xs">
        <h1 className="text-2xl font-bold mb-4">스케줄 관리</h1>

        <div className="flex justify-start items-center gap-4 max-w-[1000px] mb-6">
          <SelectOption className="w-full" icon={<FaRegCalendar />} />
          <SelectOption className="w-full" icon={<FaRegCalendar />} />

          <Button variant="primary">
            <FaMagnifyingGlass />
            조회
          </Button>
        </div>

        <PositionTable />
      </div>

      <div className="flex justify-center items-center  mt-4">
        <Button variant="primary" className="w-[100px]">
          확정
        </Button>
      </div>
    </section>
  );
};
