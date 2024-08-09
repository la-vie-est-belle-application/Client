import React from "react";

export type SelectedDate = Date | undefined;
export type SelectedDates = SelectedDate[] | [];
export type OnChangeSelectedDate = (date: SelectedDate) => void;
export type SetSelectedDate = React.Dispatch<
  React.SetStateAction<SelectedDate>
>;
export type MarkSelectedDates = (
  date: Date,
  selectedDates: SelectedDates,
) => "highlight" | "";
export type GetActiveMonth = (activeMonth: SelectedDate) => void;
