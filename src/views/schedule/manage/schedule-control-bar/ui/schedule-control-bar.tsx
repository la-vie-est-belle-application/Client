"use client";

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { useShallow } from "zustand/react/shallow";
import { AddUserModal } from "@features/schedule/manage/add-user-modal/index";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";
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
        <Button variant="primary" className="w-[100px]">
          <FaCheck />
          확정
        </Button>
      </div>
    </div>
  );
};
