"use client";

import { useState } from "react";
import { warningToast } from "@admin/shared/shadcn-ui/lib/toast";

export const useSelectOptionHook = () => {
  const [selectCount, setSelectCount] = useState<number[]>([0]);

  const addSelectOption = () => {
    if (selectCount.length >= 3) {
      warningToast("최대 3명까지만 가능합니다");
      return;
    }
    setSelectCount((prev) => [...prev, prev.length]);
  };

  const removeSelectOption = () => {
    setSelectCount((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  return { selectCount, setSelectCount, addSelectOption, removeSelectOption };
};
