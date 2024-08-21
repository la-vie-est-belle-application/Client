import { env } from "@constants/url";
import { http, HttpResponse } from "msw";

const allSchedules = new Map();

export const getScheduleHandler = http.get(`${env.scheduleURL}`, () => {
  const schedulesArray = Array.from(allSchedules.values());
  return HttpResponse.json(schedulesArray, { status: 200 });
});

export const createScheduleHandler = http.post(
  `${env.createScheduleURL}`,
  async ({ request }) => {
    const newSchedule = await request.json();

    if (!newSchedule) return;
    allSchedules.set(newSchedule.toString(), newSchedule);

    return HttpResponse.json(newSchedule, { status: 201 });
  },
);
