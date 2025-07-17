"use client";

import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { fetchScheduleData } from "@admin/features/register/schedule-calender/api/fetch-schedule-data";
import { SelectOption } from "@admin/features/select-option/index";
import { Button } from "@admin/shared/shadcn-ui/components";
import { useConfirmedStore } from "@admin/shared/store/index";
import { useSelectedManageDateStore } from "@admin/shared/store/use-selected-manage-date-store/use-selected-manage-date-store";
import { fetchConfirmed } from "@admin/views/manage/schedule-control-bar/api/fetch-confirmed";
import { postConfirmed } from "@admin/views/manage/schedule-control-bar/api/post-confirmed";
import { putConfirmed } from "@admin/views/manage/schedule-control-bar/api/put-confirmed";
import { useShallow } from "zustand/react/shallow";

export const ScheduleControlBar = () => {
  const [dateList, setDateList] = useState<string[]>([]);

  const { isConfirmed, setIsConfirmed } = useConfirmedStore(
    useShallow((state) => ({
      isConfirmed: state.isConfirmed,
      setIsConfirmed: state.setIsConfirmed,
    })),
  );

  const { selectedDate, setSelectedDate } = useSelectedManageDateStore(
    useShallow((state) => ({
      selectedDate: state.selectedDate,
      setSelectedDate: state.setSelectedDate,
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
    const { success } = await postConfirmed(selectedDate);

    if (success) {
      setIsConfirmed(true);
    }
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
        onValueChange={setSelectedDate}
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
