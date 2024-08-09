import { useQuery } from "@tanstack/react-query";
import { APPLICANTS_API } from "@api/applicants/applicants";

export function useGetApplicants(date: string | undefined) {
  return useQuery({
    queryKey: ["applicants"],
    queryFn: () => APPLICANTS_API.getApplicants(date),
  });
}
