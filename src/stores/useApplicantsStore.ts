import {
  applicantsReducer,
  INITIAL_APPLICANTS,
} from "@reducers/applicantsReducer";
import { Applicants, ApplicantsAction } from "src/types/applicants";
import { create } from "zustand";

export const useApplicantsStore = create<{
  applicants: Applicants;
  dispatch: (action: ApplicantsAction) => void;
}>((set) => ({
  applicants: INITIAL_APPLICANTS,
  dispatch: (action: ApplicantsAction) =>
    set((state) => ({
      applicants: applicantsReducer(state.applicants, action),
    })),
}));

export const useTemporaryApplicantsStore = create<{
  temporaryApplicants: Applicants;
  dispatch: (action: ApplicantsAction) => void;
}>((set) => ({
  temporaryApplicants: INITIAL_APPLICANTS,
  dispatch: (action: ApplicantsAction) =>
    set((state) => ({
      temporaryApplicants: applicantsReducer(state.temporaryApplicants, action),
    })),
}));
