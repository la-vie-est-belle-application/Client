import Calender from "@components/Calender/Calender";
import Header from "@layout/Header";
import ViewSchedule from "@components/ViewSchedule/ViewSchedule";

const ScheduleManage = () => {
  return (
    <>
      <Header title="일정 관리" />
      <Calender />
      <ViewSchedule />
    </>
  );
};

export default ScheduleManage;
