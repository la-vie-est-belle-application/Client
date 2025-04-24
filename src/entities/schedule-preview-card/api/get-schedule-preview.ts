import { SchedulePreview } from "@/src/entities/schedule-preview-card/api/types";

export async function getSchedulePreview(): Promise<SchedulePreview[]> {
  const res = await fetch("/api/schedules");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
