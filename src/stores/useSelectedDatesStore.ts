import { SelectedDate, SelectedDates } from "src/types/calendar";
import { create } from "zustand";

const useSelectedDatesStore = create<{
  selectedDates: SelectedDates;
  updateSelectedDates: (date: SelectedDate) => void;
}>((set) => ({
  selectedDates: [],
  updateSelectedDates: (date) =>
    set((state) => {
      const { selectedDates } = state;

      if (!date) {
        return { selectedDates };
      }

      const isDuplicate = selectedDates.some(
        (d) => d && d.getTime() === date.getTime(),
      );
      const newDates = isDuplicate
        ? selectedDates.filter((d) => d && d.getTime() !== date.getTime())
        : [...selectedDates, date].sort((a, b) =>
            a && b ? a.getTime() - b.getTime() : 0,
          );

      return { selectedDates: newDates };
    }),
}));

export default useSelectedDatesStore;
