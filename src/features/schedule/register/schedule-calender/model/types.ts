import FullCalendar from "@fullcalendar/react";

/**
 * @template S zustand store 상태
 * @template K selector가 없는 경우 default로 사용할 key
 */
export type SelectorHook<S, K extends keyof S> = {
  <U>(selector: (state: S) => U): U;
  (): S[K];
};

/* 스토어 */
export interface ScheduleCalenderStore {
  selectedDate: Set<string>;
  selectedDateList: string[];
  calendarRef: React.RefObject<FullCalendar | null>;
  setSelectedDate: (date: string) => void;
  clearSelectedDate: () => void;
}
