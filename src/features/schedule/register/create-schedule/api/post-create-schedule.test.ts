import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { postCreateSchedule } from "@features/schedule/register/create-schedule/api/post-create-schedule";
import * as sharedApi from "@shared/api/fetch-schedule-date";

// 모킹 설정
vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

// Supabase 모킹
const mockSupabaseInsert = vi.fn();
const mockSupabaseSelect = vi.fn();

vi.mock("@supabase/supabase-js", () => ({
  createClient: () => ({
    from: () => ({
      insert: (...args: any[]) => mockSupabaseInsert(...args),
      select: () => ({
        in: (...args: any[]) => mockSupabaseSelect(...args),
      }),
    }),
  }),
}));

describe("postCreateSchedule", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("선택된 날짜가 없을 경우 토스트 메시지를 표시하고 종료", async () => {
    const emptyDateList: string[] = [];

    const result = await postCreateSchedule(emptyDateList);

    expect(toast).toHaveBeenCalledWith("등록할 스케줄이 없습니다");
    expect(result).toBeUndefined();
    expect(mockSupabaseSelect).not.toHaveBeenCalled();
    expect(mockSupabaseInsert).not.toHaveBeenCalled();
  });

  it("이미 존재하는 날짜가 있을 경우 토스트 메시지를 표시하고 종료", async () => {
    const selectedDates = ["2024-03-20", "2024-03-21"];

    // 이미 존재하는 날짜가 있는 상황 모킹
    mockSupabaseSelect.mockResolvedValue({
      data: [{ date: "2024-03-20" }],
      error: null,
    });

    const result = await postCreateSchedule(selectedDates);

    expect(toast).toHaveBeenCalledWith(
      "선택하신 날짜 중 이미 등록되어 있는 날짜가 있습니다.",
    );
    expect(result).toBeUndefined();
    expect(mockSupabaseInsert).not.toHaveBeenCalled();
  });

  it("새로운 날짜 등록 성공 시 성공 메시지를 표시하고 success: true 반환", async () => {
    const selectedDates = ["2024-03-20", "2024-03-21"];

    // 존재하는 날짜가 없는 상황 모킹
    mockSupabaseSelect.mockResolvedValue({
      data: [],
      error: null,
    });

    // insert 성공 모킹
    mockSupabaseInsert.mockResolvedValue({
      data: null,
      error: null,
    });

    const result = await postCreateSchedule(selectedDates);

    expect(mockSupabaseSelect).toHaveBeenCalled();
    expect(mockSupabaseInsert).toHaveBeenCalledWith(
      selectedDates.map((date) => ({ date })),
    );
    expect(toast).toHaveBeenCalledWith(
      "새로운 스케줄이 성공적으로 등록되었습니다.",
    );
    expect(result).toEqual({ success: true });
  });

  it("스케줄 등록 실패 시 에러 메시지를 표시하고 에러를 throw", async () => {
    const selectedDates = ["2024-03-20"];

    // 존재하는 날짜가 없는 상황 모킹
    mockSupabaseSelect.mockResolvedValue({
      data: [],
      error: null,
    });

    // insert 실패 모킹
    mockSupabaseInsert.mockResolvedValue({
      data: null,
      error: new Error("DB 에러"),
    });

    await expect(postCreateSchedule(selectedDates)).rejects.toThrow(
      "스케줄 등록 중 오류가 발생했습니다.",
    );
    expect(toast).toHaveBeenCalledWith("스케줄 등록 중 오류가 발생했습니다.");
  });
});
