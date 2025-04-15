import { SchedulePreview } from "@/src/entities/schedule/preview-schedule-card/api/types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getSchedulePreview } from "./get-schedule-preview";

global.fetch = vi.fn();

describe("스케줄 미리보기 데이터 호출 테스트", () => {
  const mockData: SchedulePreview[] = [
    {
      date: "2024년 12월 24일 (토)",
      confirmed: true,
      startTime: "9:00 AM",
      endTime: "18:00 PM",
      dDay: 3,
    },
  ];

  beforeEach(() => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });
  });

  it("모든 필드가 존재하고 타입이 올바른지 확인", async () => {
    const result = await getSchedulePreview();

    expect(Array.isArray(result)).toBe(true);
    const schedule = result[0];

    expect(typeof schedule.date).toBe("string");
    expect(typeof schedule.confirmed).toBe("boolean");
    expect(typeof schedule.startTime).toBe("string");
    expect(typeof schedule.endTime).toBe("string");
    expect(typeof schedule.dDay).toBe("number");

    expect(schedule.date).toMatch(/^\d{4}년 \d{1,2}월 \d{1,2}일 \(.+\)$/);
    expect(schedule.dDay).toBeGreaterThanOrEqual(0);
  });
});
