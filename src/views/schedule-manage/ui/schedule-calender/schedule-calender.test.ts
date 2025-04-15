// handleClickDate.test.tsx
import { useState } from "react";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

interface DateClickArg {
  dateStr: string;
}

// 테스트용 훅 구현
const useDateSelection = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([]);

  const handleClickDate = (arg: DateClickArg) => {
    // 이미 선택된 날짜인지 확인
    if (selectedDate.includes(arg.dateStr)) {
      const filterDate = selectedDate.filter((date) => date !== arg.dateStr);

      setSelectedDate(filterDate);
      return;
    }

    setSelectedDate([...selectedDate, arg.dateStr]);
  };

  return { selectedDate, handleClickDate };
};

describe("handleClickDate", () => {
  it("선택한 날짜가 selectedDate에 추가된다", () => {
    const { result } = renderHook(() => useDateSelection());

    act(() => {
      result.current.handleClickDate({ dateStr: "2025-04-15" });
    });

    expect(result.current.selectedDate).toEqual(["2025-04-15"]);
  });

  it("중복된 날짜는 추가되지 않는다", () => {
    const { result } = renderHook(() => useDateSelection());

    act(() => {
      result.current.handleClickDate({ dateStr: "2025-04-15" });
      result.current.handleClickDate({ dateStr: "2025-04-15" });
    });

    expect(result.current.selectedDate).toEqual(["2025-04-15"]);
  });

  it("여러 날짜를 순차적으로 선택할 수 있다", () => {
    const { result } = renderHook(() => useDateSelection());

    act(() => {
      result.current.handleClickDate({ dateStr: "2025-04-15" });
    });

    act(() => {
      result.current.handleClickDate({ dateStr: "2025-04-16" });
    });

    expect(result.current.selectedDate).toEqual(["2025-04-15", "2025-04-16"]);
  });

  it("날짜를 선택 해제할 수 있다", () => {
    const { result } = renderHook(() => useDateSelection());

    act(() => {
      result.current.handleClickDate({ dateStr: "2025-04-15" });
    });

    act(() => {
      result.current.handleClickDate({ dateStr: "2025-04-15" });
    });

    expect(result.current.selectedDate).toEqual([]);
  });
});
