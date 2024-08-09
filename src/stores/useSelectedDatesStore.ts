import { SelectedDates } from "src/types/calendar";
import { create } from "zustand";

const useSelectedDatesStore = create<{
  selectedDates: SelectedDates | [];
  setSelectedDates: (dates: SelectedDates) => void;
}>((set) => ({
  selectedDates: [],
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));

export default useSelectedDatesStore;
