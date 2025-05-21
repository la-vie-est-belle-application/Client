"use client";

import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
import { useDateStore } from "@views/schedule/manage/schedule-control-bar/model/useDateStore";
import { ScheduleManageModal } from "@features/schedule/manage/schedule-manage-modal/index";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
import { SelectOption } from "@features/select-option/index";
import { Button } from "@shared/shadcn-ui/components";

export const ScheduleControlBar = () => {
  const [dateList, setDateList] = useState<string[]>([]);
  const selectedDate = useDateStore((state) => state.date);

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
      />

      <div className="flex justify-end items-center gap-2">
        <Link href={`/schedule-dashboard/manage/${selectedDate}`}>
          <Button variant="primary">
            <FaMagnifyingGlass />
            조회
          </Button>
        </Link>

        <ScheduleManageModal label={"인원 등록"} icon={<FaUserPlus />} />
      </div>
    </div>
  );
};
