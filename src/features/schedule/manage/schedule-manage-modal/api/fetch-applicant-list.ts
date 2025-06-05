import { supabase } from "@shared/api/fetch-schedule-date";

export const fetchApplicantList = async (selectedDate: string) => {
  if (selectedDate) {
    const { data, error } = await supabase
      .from("schedule_applications")
      .select("*")
      .eq("date", selectedDate);

    if (error) {
      console.error("Error fetching applicant list:", error);
      return [];
    }

    if (data.length === 0) {
      return [];
    }

    return data[0].applicants;
  }
};
