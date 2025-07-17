import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchScheduleData } from "./fetch-schedule-data";
import { supabase } from "@features/schedule/register/create-schedule/index";
import { ScheduleData } from "@features/schedule/register/create-schedule/index";

// supabase 모킹
vi.mock("@features/schedule/register/create-schedule/index", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe("getSchedule", () => {
  // 각 테스트 전에 모든 모킹을 초기화
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("스케줄 데이터를 성공적으로 가져와야 합니다", async () => {
    // 테스트용 더미 데이터
    const mockScheduleData: ScheduleData[] = [
      {
        date: "2024-03-20",
        is_open: true,
        is_confirmed: false,
      },
      {
        date: "2024-03-21",
        is_open: true,
        is_confirmed: false,
      },
    ];

    // supabase 응답 모킹
    const mockSelect = vi.fn().mockResolvedValue({
      data: mockScheduleData,
      error: null,
    });

    const mockFrom = vi.fn().mockReturnValue({
      select: mockSelect,
    });

    (supabase.from as any).mockImplementation(mockFrom);

    // 함수 실행
    const result = await fetchScheduleData();

    // 검증
    expect(supabase.from).toHaveBeenCalledWith("schedules");
    expect(mockSelect).toHaveBeenCalledWith("*");
    expect(result).toEqual(mockScheduleData);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);

    // 데이터 구조 검증
    result.forEach((schedule) => {
      expect(schedule).toHaveProperty("date");
      expect(schedule).toHaveProperty("is_open");
      expect(schedule).toHaveProperty("is_confirmed");

      // 타입 검증
      expect(typeof schedule.date).toBe("string");
      expect(typeof schedule.is_open).toBe("boolean");
      expect(typeof schedule.is_confirmed).toBe("boolean");
    });
  });

  it("에러가 발생했을 때 에러를 throw 해야 합니다", async () => {
    const mockError = new Error("Database error");

    const mockSelect = vi.fn().mockResolvedValue({
      data: null,
      error: mockError,
    });

    const mockFrom = vi.fn().mockReturnValue({
      select: mockSelect,
    });

    (supabase.from as any).mockImplementation(mockFrom);

    // 에러 검증
    await expect(fetchScheduleData()).rejects.toThrow("Database error");
  });
});
