// handleClickDate.test.tsx
import { act } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { scheduleCalenderStore } from "./store";

describe("handleClickDate", () => {
  beforeEach(() => {
    // 각 테스트마다 store 초기화
    scheduleCalenderStore.setState({
      selectedDate: new Set<string>(),
      selectedDateList: [],
    });
  });

  it("선택한 날짜가 selectedDate에 추가된다", () => {
    act(() => {
      scheduleCalenderStore.getState().setSelectedDate("2025-04-15");
    });

    expect(scheduleCalenderStore.getState().selectedDateList).toEqual([
      "2025-04-15",
    ]);
    expect(
      scheduleCalenderStore.getState().selectedDate.has("2025-04-15"),
    ).toBe(true);
  });

  it("같은 날짜를 다시 클릭하면 선택이 해제된다", () => {
    act(() => {
      scheduleCalenderStore.getState().setSelectedDate("2025-04-15");
      scheduleCalenderStore.getState().setSelectedDate("2025-04-15");
    });

    expect(scheduleCalenderStore.getState().selectedDateList).toEqual([]);
    expect(
      scheduleCalenderStore.getState().selectedDate.has("2025-04-15"),
    ).toBe(false);
  });

  it("여러 날짜를 순차적으로 선택할 수 있다", () => {
    act(() => {
      scheduleCalenderStore.getState().setSelectedDate("2025-04-15");
      scheduleCalenderStore.getState().setSelectedDate("2025-04-16");
    });

    expect(scheduleCalenderStore.getState().selectedDateList).toEqual([
      "2025-04-15",
      "2025-04-16",
    ]);
    expect(
      scheduleCalenderStore.getState().selectedDate.has("2025-04-15"),
    ).toBe(true);
    expect(
      scheduleCalenderStore.getState().selectedDate.has("2025-04-16"),
    ).toBe(true);
  });
});
