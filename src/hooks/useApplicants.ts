import { useEffect, useReducer } from "react";
import { ApplicantsAction } from "src/types/applicants";
import { useGetApplicants } from "./queries";
import {
  APPLICANTS_ACTION_TYPE,
  applicantsReducer,
  INITIAL_APPLICANTS,
} from "@reducers/applicantsReducer";
import useSelectedDateStore from "@stores/useSelectedDateStore";
import { useSearchParams } from "react-router-dom";

const useApplicants = () => {
  const { selectedDate } = useSelectedDateStore();
  const [searchParams] = useSearchParams();
  const dateParams = searchParams.get("date");
  const applicantsQuery = useGetApplicants(selectedDate);
  const [applicants, updateApplicants] = useReducer(
    applicantsReducer,
    INITIAL_APPLICANTS,
  );
  const [temporaryApplicants, updateTemporaryApplicants] = useReducer(
    applicantsReducer,
    INITIAL_APPLICANTS,
  );

  useEffect(() => {
    if (!dateParams) return;
    if (!applicantsQuery.data) return;
    updateApplicants({
      type: APPLICANTS_ACTION_TYPE.UPDATE,
      payload: applicantsQuery.data,
    });
  }, [dateParams]);

  const handleApplicants = (action: ApplicantsAction) => {
    updateApplicants(action);
  };

  const handleTemporaryApplicants = (action: ApplicantsAction) => {
    updateTemporaryApplicants(action);
  };

  return {
    handleApplicants,
    handleTemporaryApplicants,
    applicants,
    updateApplicants,
    temporaryApplicants,
    updateTemporaryApplicants,
  };
};

export default useApplicants;
