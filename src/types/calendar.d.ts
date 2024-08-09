import React from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

export type SelectedDate = Value | null;
export type SelectedDates = Date[] | [];
export type OnChangeSelectedDate = (date: SelectedDate) => void;
export type SetSelectedDate = React.Dispatch<
  React.SetStateAction<SelectedDate>
>;
export type MarkSelectedDates = (
  date: Date,
  selectedDates: SelectedDates,
) => "highlight" | "";
export type GetActiveMonth = (activeMonth: SelectedDate) => void;
