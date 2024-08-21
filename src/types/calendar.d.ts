import React from "react";

export type SelectedDate = Date | null;
export type SelectedDates = SelectedDate[] | [];
export type OnChangeSelectedDate = (date: SelectedDate) => void;
export type SetSelectedDate = React.Dispatch<
  React.SetStateAction<SelectedDate>
>;
export type MarkSelectedDates = (
  date: Date,
  selectedDates: SelectedDates,
) => "highlight" | "exist" | "";
export type GetActiveMonth = (activeMonth: SelectedDate) => void;
