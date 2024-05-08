import Calender from "@components/Calender/Calender";
import Header from "@components/Header/Header";
import ViewSchedule from "@components/ViewSchedule/ViewSchedule";

const ScheduleMnage = () => {
  return (
    <>
      <Header title="일정 관리" />
      <Calender />
      <ViewSchedule />
    </>
  );
};

export default ScheduleMnage;
