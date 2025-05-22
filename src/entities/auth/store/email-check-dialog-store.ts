import { create } from "zustand";
import { CheckResult } from "@entities/auth/types";

interface CheckEmailDialog {
  isOpen: boolean;
  isLoading: boolean;
  isDuplicated: CheckResult;
  errorMessage: string;
  setIsOpen: (isOpen: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsDuplicated: (isDuplicated: CheckResult) => void;
  setErrorMessage: (errorMessage: string) => void;
  reset: () => void;
}

export const useCheckEmailDialogStore = create<CheckEmailDialog>((set) => ({
  isOpen: false,
  isLoading: false,
  isDuplicated: null,
  errorMessage: "",
  setIsOpen: (isOpen) => set({ isOpen }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsDuplicated: (isDuplicated) => set({ isDuplicated }),
  setErrorMessage: (errorMessage) => set({ errorMessage }),
  reset: () =>
    set({
      isOpen: false,
      isLoading: false,
      isDuplicated: null,
      errorMessage: "",
    }),
}));
