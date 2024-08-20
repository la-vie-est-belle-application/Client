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
  const { selectedDate } = useSelectedDateStore();
  const applicantsQuery = useGetApplicants(selectedDate);
  const { updateApplicants } = useApplicantsStore();
  const { updateTemporaryApplicants } = useTemporaryApplicantsStore();

  useEffect(() => {
    if (!selectedDate) return;
    if (!applicantsQuery.data) return;

    updateApplicants({
      type: APPLICANTS_ACTION_TYPE.UPDATE,
      payload: applicantsQuery.data,
    });
  }, [selectedDate]);

  const handleApplicants = (action: ApplicantsAction) => {
    updateApplicants(action);
  };

  const handleTemporaryApplicants = (action: ApplicantsAction) => {
    updateTemporaryApplicants(action);
  };

  return {
    handleApplicants,
    handleTemporaryApplicants,
  };
};

export default useApplicants;
