import Header from "@layout/Header";
import ScheduleCalendar from "@pages/scheduleManagement/components/ScheduleCalendar";

const ScheduleManage = () => {
  return (
    <>
      <Header title="일정 관리" />
      <ScheduleCalendar></ScheduleCalendar>
    </>
  );
};

export default ScheduleManage;
