import { HttpResponse, PathParams } from "msw";
import { User } from "src/types/schedule";
import ScheduleList from "@datas/ScheduleList.json";

const emptyData: ScheduleListType = {
  "240817": {
    대기실: [],
    드레스: [],
    드레스실: [],
    매니저: [],
    메인: [],
    스캔: [],
    안내: [],
    축가: [],
    팀장: [],
  },
  "240818": {
    대기실: [],
    드레스: [],
    드레스실: [],
    매니저: [],
    메인: [],
    스캔: [],
    안내: [],
    축가: [],
    팀장: [],
  },
};

export const getScheduleResolver = (params: PathParams) => {
  const req = params.toString();
  const scheduleData = ScheduleList as ScheduleListType;

  if (scheduleData[req]) {
    return HttpResponse.json(scheduleData[req], { status: 200 });
  }

  return HttpResponse.json(emptyData[req] || {}, { status: 200 });
};
interface ScheduleData {
  대기실: User[];
  드레스: User[];
  드레스실: User[];
  매니저: User[];
  메인: User[];
  스캔: User[];
  안내: User[];
  축가: User[];
  팀장: User[];
}

interface ScheduleListType {
  [key: string]: ScheduleData;
}
