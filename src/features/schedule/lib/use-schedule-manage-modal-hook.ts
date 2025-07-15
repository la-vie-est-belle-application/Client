"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { fetchApplicantList } from "@features/schedule/manage/add-user-modal/api/fetch-applicant-list";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";

interface PositionData {
  name: string;
  isTrained: boolean;
}

export const useUserPositionHook = () => {
  const userId = Math.floor(Math.random() * 10000);
  const [position, setPosition] = useState<string>("");
  const [name, setName] = useState<string[]>([]);
  const [selectedNameIndex, setSelectedNameIndex] = useState<number | null>(
    null,
  );

  // 기본 포지션 데이터
  const defaultPositionData: Record<string, PositionData> = {
    팀장: { name: "팀장", isTrained: false },
    스캔: { name: "스캔", isTrained: false },
    메인: { name: "메인", isTrained: false },
    드레스: { name: "드레스", isTrained: false },
    축가: { name: "축가", isTrained: false },
    대기실: { name: "대기실", isTrained: false },
    매니저: { name: "매니저", isTrained: false },
    안내: { name: "안내", isTrained: false },
    드레스실: { name: "드레스실", isTrained: false },
  };

  // 초기 상태는 기본값으로 설정 (서버와 클라이언트 일치)
  const [positionData, setPositionData] =
    useState<Record<string, PositionData>>(defaultPositionData);
  const [isLoaded, setIsLoaded] = useState(false);

  const LOCAL_STORAGE_KEY = "position-training-status";

  // 로컬스토리지에서 데이터를 가져오는 함수
  const getStoredPositionData = (): Record<string, PositionData> => {
    if (typeof window === "undefined") return {};

    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("로컬스토리지에서 데이터를 가져오는 중 오류 발생:", error);
      return {};
    }
  };

  // 로컬스토리지에 데이터를 저장하는 함수
  const setStoredPositionData = (data: Record<string, PositionData>) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("로컬스토리지에 데이터를 저장하는 중 오류 발생:", error);
    }
  };

  // 클라이언트에서만 로컬스토리지 데이터 로드
  useEffect(() => {
    const stored = getStoredPositionData();
    if (Object.keys(stored).length > 0) {
      setPositionData({ ...defaultPositionData, ...stored });
    }
    setIsLoaded(true);
  }, []);

  // 각 포지션별 체크박스 상태를 설정하는 함수
  const setPositionTrained = useCallback(
    (position: string, trained: boolean) => {
      setPositionData((prev) => {
        const newData = {
          ...prev,
          [position]: {
            ...prev[position],
            isTrained: trained,
          },
        };

        setStoredPositionData(newData);
        return newData;
      });
    },
    [],
  );

  return {
    userId,
    positionData,
    isLoaded,
    position,
    name,
    selectedNameIndex,
    setPosition,
    setName,
    setSelectedNameIndex,
    setPositionTrained,
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
