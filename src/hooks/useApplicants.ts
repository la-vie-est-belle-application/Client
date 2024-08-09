import {
  useApplicantsStore,
  useTemporaryApplicantsStore,
} from "@stores/useApplicantsStore";
import { ApplicantsAction } from "src/types/applicants";

const useApplicants = () => {
  const applicants = useApplicantsStore();
  const temporaryApplicants = useTemporaryApplicantsStore();

  const handleApplicants = (action: ApplicantsAction) => {
    applicants.dispatch(action);
  };

  const handleTemporaryApplicants = (action: ApplicantsAction) => {
    temporaryApplicants.dispatch(action);
  };

  return {
    handleApplicants,
    handleTemporaryApplicants,
    applicants: applicants.data,
    temporaryApplicants: temporaryApplicants.data,
  };
};

export default useApplicants;
