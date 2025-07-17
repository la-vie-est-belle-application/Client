import { supabase } from "@admin/shared/api/fetch-schedule-date";

export const fetchApplicantList = async (selectedDate: string) => {
  if (selectedDate) {
    const { data, error } = await supabase
      .from("schedule_applications")
      .select("applicants")
      .eq("date", selectedDate);

    if (error) {
      console.error("Error fetching applicant list:", error);
      return [];
    }

    return data[0]?.applicants;
  }
};
