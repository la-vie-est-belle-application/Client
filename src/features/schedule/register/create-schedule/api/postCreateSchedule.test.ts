import { createClient } from "@supabase/supabase-js";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { postCreateSchedule } from "./postCreateSchedule";

vi.mock("@supabase/supabase-js", () => {
  const insertMock = vi.fn();

  const supabaseMock = {
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      in: vi.fn(() => Promise.resolve({ data: [] })), // 기본값: 기존 스케줄 없음
      insert: insertMock,
    })),
  };

  return {
    createClient: vi.fn(() => supabaseMock),
  };
});

vi.stubGlobal("alert", vi.fn());

describe("postCreateSchedule", () => {
  const mockSchedule = ["2025-05-01", "2025-05-02"];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("새로운 스케줄 등록", async () => {
    const supabase = createClient("", "") as any;
    const insertMock = vi.fn(() => Promise.resolve({ error: null }));
    supabase.from = vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      in: vi.fn(() => Promise.resolve({ data: [] })),
      insert: insertMock,
    }));

    await postCreateSchedule(mockSchedule);

    expect(insertMock).toHaveBeenCalled(); // insert가 실제 호출됐는지 확인
    expect(alert).toHaveBeenCalledWith(
      "새로운 스케줄이 성공적으로 등록되었습니다.",
    );
  });

  it("기존 스케줄 존재할 경우", async () => {
    const supabase = createClient("", "") as any;
    supabase.from = vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      in: vi.fn(() =>
        Promise.resolve({
          data: [{ date: "2025-05-01" }],
        }),
      ),
    }));

    await postCreateSchedule(mockSchedule);
    expect(alert).toHaveBeenCalledWith(
      "선택하신 날짜 중 이미 등록되어 있는 날짜가 있습니다.",
    );
  });

  it("스케줄 등록 오류 발생할 경우", async () => {
    const supabase = createClient("", "") as any;
    supabase.from = vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      in: vi.fn(() => Promise.resolve({ data: [] })),
      insert: vi.fn(() =>
        Promise.resolve({ error: new Error("Insert error") }),
      ),
    }));

    await postCreateSchedule(mockSchedule);
    expect(alert).toHaveBeenCalledWith("스케줄 등록 중 오류가 발생했습니다.");
  });
});
