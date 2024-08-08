import {
  applicantsReducer,
  INITIAL_APPLICANTS,
} from "@reducers/applicantsReducer";
import { Applicants, ApplicantsAction } from "src/types/applicants";
import { create } from "zustand";

export const useApplicantsStore = create<{
  data: Applicants;
  dispatch: (action: ApplicantsAction) => void;
}>((set) => ({
  data: INITIAL_APPLICANTS,
  dispatch: (action: ApplicantsAction) =>
    set((state) => ({
      data: applicantsReducer(state.data, action),
    })),
}));

export const useTemporaryApplicantsStore = create<{
  data: Applicants;
  dispatch: (action: ApplicantsAction) => void;
}>((set) => ({
  data: INITIAL_APPLICANTS,
  dispatch: (action: ApplicantsAction) =>
    set((state) => ({
      data: applicantsReducer(state.data, action),
    })),
}));
