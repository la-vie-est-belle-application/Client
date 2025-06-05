"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaUserPlus } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { useShallow } from "zustand/react/shallow";
import { useDateStore } from "@views/schedule/manage/schedule-control-bar/model/useDateStore";
import { ScheduleManageModal } from "@features/schedule/manage/schedule-manage-modal/index";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
import { SelectOption } from "@features/select-option/index";
import { Button } from "@shared/shadcn-ui/components";

export const ScheduleControlBar = () => {
  const [dateList, setDateList] = useState<string[]>([]);

  const { selectedDate, setDate } = useDateStore(
    useShallow((state) => ({
      selectedDate: state.date,
      setDate: state.setDate,
    })),
  );

  const getDateList = async () => {
    const data = await fetchScheduleData();

    const dateList = data.map((item) => item.date);
    setDateList(dateList);
  };

  useEffect(() => {
    getDateList();
  }, []);

  return (
    <div className="flex justify-between items-center gap-4 mb-6">
      <SelectOption
        className="w-full"
        icon={<FaRegCalendar />}
        selectItem={dateList}
        placeholder={selectedDate}
        onValueChange={setDate}
      />

      <div className="flex justify-end items-center gap-2">
        <ScheduleManageModal
          label={"인원 등록"}
          icon={<FaUserPlus />}
          type="add"
        />

        <Button variant="primary" className="w-[100px]">
          <FaCheck />
          확정
        </Button>
      </div>
    </div>
  );
};
