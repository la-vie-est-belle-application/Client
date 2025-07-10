"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { fetchApplicantList } from "@features/schedule/manage/api/fetch-applicant-list";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";

export const useUserPositionHook = () => {
  const userId = Math.floor(Math.random() * 10000);
  const [position, setPosition] = useState<string>("");
  const [name, setName] = useState<string[]>([]);
  const [isTrained, setIsTrained] = useState<boolean>(false);

  const positionList = [
    "팀장",
    "스캔",
    "메인",
    "드레스",
    "축가",
    "대기실",
    "매니저",
    "안내",
    "드레스실",
  ];

  return {
    userId,
    positionList,
    position,
    name,
    isTrained,
    setPosition,
    setName,
    setIsTrained,
  };
};

export const useSelectOptionHook = () => {
  const [selectCount, setSelectCount] = useState<number[]>([0]);

  const addSelectOption = () => {
    if (selectCount.length >= 3) {
      toast("최대 3명까지만 가능합니다");
      return;
    }
    setSelectCount((prev) => [...prev, prev.length]);
  };

  const removeSelectOption = () => {
    setSelectCount((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  return { selectCount, setSelectCount, addSelectOption, removeSelectOption };
};

export const useApplicantHook = () => {
  const selectedDate = useDateStore((state) => state.date);
  const [nameList, setNameList] = useState<string[]>([]);

  const getApplicantList = useCallback(async () => {
    const data = await fetchApplicantList(selectedDate);
    setNameList(data);
  }, [selectedDate]);

  useEffect(() => {
    getApplicantList();
  }, [getApplicantList]);

  return { nameList, selectedDate };
};
