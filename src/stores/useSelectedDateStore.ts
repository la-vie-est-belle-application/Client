import { SelectedDate } from "src/types/calendar";
import { create } from "zustand";

const useSelectedDateStore = create<{
  selectedDate: SelectedDate;
  updateSelectedDate: (date: SelectedDate) => void;
}>((set) => ({
  selectedDate: null,
  updateSelectedDate: (selectedDate) => set(() => ({ selectedDate })),
}));

export default useSelectedDateStore;
