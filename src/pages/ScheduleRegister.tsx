import Header from "@layout/Header";
import Calender from "@components/Calender/Calender";
import ViewSchedule from "@components/ViewSchedule/ViewSchedule";

const ScheduleRegister = () => {
  return (
    <>
      <Header title="일정 등록" />
      <Calender />
      <ViewSchedule />
    </>
  );
};

export default ScheduleRegister;
