import {
  useApplicantsStore,
  useTemporaryApplicantsStore,
} from "@stores/useApplicantsStore";
import { useEffect } from "react";
import { ApplicantsAction } from "src/types/applicants";
import { useGetApplicants } from "./queries/queries";
import { APPLICANTS_ACTION_TYPE } from "@reducers/applicantsReducer";
import useSelectedDateStore from "@stores/useSelectedDateStore";

const useApplicants = () => {
  const selectedDate = useSelectedDateStore((state) => state.selectedDate);
  const applicantsQuery = useGetApplicants(selectedDate);
  const applicantsStore = useApplicantsStore();
  const temporaryApplicantsStore = useTemporaryApplicantsStore();

  useEffect(() => {
    if (!selectedDate) return;
    if (!applicantsQuery.data) return;

    applicantsStore.dispatch({
      type: APPLICANTS_ACTION_TYPE.UPDATE,
      payload: applicantsQuery.data.data,
    });
  }, [selectedDate]);

  const handleApplicants = (action: ApplicantsAction) => {
    applicantsStore.dispatch(action);
  };

  const handleTemporaryApplicants = (action: ApplicantsAction) => {
    temporaryApplicantsStore.dispatch(action);
  };

  return {
    handleApplicants,
    handleTemporaryApplicants,
  };
};

export default useApplicants;
