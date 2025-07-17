"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchApplicantList } from "@shared/api/fetch-applicant-list";
import { useSelectedManageDateStore } from "@shared/store/use-selected-manage-date-store/use-selected-manage-date-store";

export const useApplicantHook = () => {
  const selectedDate = useSelectedManageDateStore(
    (state) => state.selectedDate,
  );
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
