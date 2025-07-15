"use client";

import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { useShallow } from "zustand/react/shallow";
import { fetchConfirmed } from "@views/schedule/manage/schedule-control-bar/api/fetch-confirmed";
import { postConfirmed } from "@views/schedule/manage/schedule-control-bar/api/post-confirmed";
import { putConfirmed } from "@views/schedule/manage/schedule-control-bar/api/put-confirmed";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";
import { fetchScheduleData } from "@features/schedule/register/schedule-calender/api/fetch-schedule-data";
import { SelectOption } from "@features/select-option/index";
import { Button } from "@shared/shadcn-ui/components";
import { useConfirmedStore } from "@shared/store/index";

export const ScheduleControlBar = () => {
  const [dateList, setDateList] = useState<string[]>([]);

  const { isConfirmed, setIsConfirmed } = useConfirmedStore(
    useShallow((state) => ({
      isConfirmed: state.isConfirmed,
      setIsConfirmed: state.setIsConfirmed,
    })),
  );

  const { selectedDate, setDate } = useDateStore(
    useShallow((state) => ({
      selectedDate: state.date,
      setDate: state.setDate,
    })),
  );

  const getDateList = async () => {
    const data = await fetchScheduleData();

    const dateList = data.map((item) => item.date);
    const confirmed = data.some((item) => item.is_confirmed);
    setDateList(dateList);
    setIsConfirmed(confirmed);
  };

  const handleClickConfirm = async () => {
    await postConfirmed(selectedDate);

    setIsConfirmed(true);
  };

  const handleClickEditConfirm = async () => {
    await putConfirmed(selectedDate);

    setIsConfirmed(false);
  };

  useEffect(() => {
    getDateList();
  }, []);

  // 선택된 날짜가 변경될 때마다 확정 상태 확인
  useEffect(() => {
    const checkConfirmedStatus = async () => {
      if (selectedDate) {
        const confirmed = await fetchConfirmed(selectedDate);
        setIsConfirmed(confirmed);
      }
    };

    checkConfirmedStatus();
  }, [selectedDate]);

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
        {isConfirmed ? (
          <Button
            variant="primary"
            className="w-[100px]"
            onClick={handleClickEditConfirm}
          >
            수정 하기
          </Button>
        ) : (
          <Button
            variant="primary"
            className="w-[100px]"
            onClick={handleClickConfirm}
          >
            확정 하기
          </Button>
        )}
      </div>
    </div>
  );
};
