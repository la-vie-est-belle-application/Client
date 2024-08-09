import { SelectedDate } from "src/types/calendar";
import { create } from "zustand";

type State = {
  selectedDate: SelectedDate;
};

type Action = {
  updateSelectedDate: (date: SelectedDate) => void;
};

const useSelectedDateStore = create<State & Action>((set) => ({
  selectedDate: null,
  updateSelectedDate: (selectedDate) => set(() => ({ selectedDate })),
}));

export default useSelectedDateStore;
