import {
  applicantsReducer,
  INITIAL_APPLICANTS,
} from "@reducers/applicantsReducer";
import { Applicants, ApplicantsAction } from "src/types/applicants";
import { create } from "zustand";

export const useApplicantsStore = create<{
  applicants: Applicants;
  updateApplicants: (action: ApplicantsAction) => void;
}>((set) => ({
  applicants: INITIAL_APPLICANTS,
  updateApplicants: (action: ApplicantsAction) =>
    set((state) => ({
      applicants: applicantsReducer(state.applicants, action),
    })),
}));

export const useTemporaryApplicantsStore = create<{
  temporaryApplicants: Applicants;
  updateTemporaryApplicants: (action: ApplicantsAction) => void;
}>((set) => ({
  temporaryApplicants: INITIAL_APPLICANTS,
  updateTemporaryApplicants: (action: ApplicantsAction) =>
    set((state) => ({
      temporaryApplicants: applicantsReducer(state.temporaryApplicants, action),
    })),
}));
