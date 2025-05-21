import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { deleteSchedule } from "@features/schedule/register/remove-schedule/api/delete-schedule";
import { fetchExistingDateList } from "@shared/api/index";

vi.mock("@supabase/supabase-js", () => {
  const supabaseMock = {
    from: vi.fn(() => ({
      delete: vi.fn().mockReturnThis(),
      in: vi.fn(() => Promise.resolve({ data: null, error: null })),
    })),
  };

  return {
    createClient: vi.fn(() => supabaseMock),
  };
});

vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

vi.mock("@shared/api/index", () => ({
  fetchExistingDateList: vi.fn(),
}));

describe("deleteSchedule", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("스케줄 삭제 성공", async () => {
    const selectedDates = ["2024-04-01"];
    const supabase = createClient("", "") as any;

    supabase.from = vi.fn(() => ({
      delete: vi.fn().mockReturnThis(),
      in: vi.fn(() => Promise.resolve({ data: null, error: null })),
    }));

    vi.mocked(fetchExistingDateList).mockResolvedValue(selectedDates);

    const result = await deleteSchedule(selectedDates);

    expect(supabase.from).toHaveBeenCalledWith("schedules");
    expect(toast).toHaveBeenCalledWith("스케줄이 삭제되었습니다");
    expect(result).toEqual({ success: true });
  });

  it("스케줄 삭제 실패", async () => {
    const selectedDates = ["2024-04-01"];
    const supabase = createClient("", "") as any;

    supabase.from = vi.fn(() => ({
      delete: vi.fn().mockReturnThis(),
      in: vi.fn(() => Promise.resolve({ error: new Error("DB Error") })),
    }));

    vi.mocked(fetchExistingDateList).mockResolvedValue(selectedDates);

    await expect(deleteSchedule(selectedDates)).rejects.toThrow(
      "스케줄 삭제에 실패했습니다",
    );
    expect(toast).toHaveBeenCalledWith("스케줄 삭제에 실패했습니다");
  });
});
