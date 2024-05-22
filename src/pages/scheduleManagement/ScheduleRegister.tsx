import Header from "@layout/Header.tsx";
import Calender from "@pages/scheduleManagement/components/Calender.tsx";
import ViewSchedule from "@pages/scheduleManagement/components/ViewSchedule.tsx";
import ManagementContainer from "@pages/scheduleManagement/components/ManagementContainer.tsx";

const ScheduleRegister = () => {
  return (
    <ManagementContainer>
      <Header title="일정 등록" />
      <Calender />
      <ViewSchedule />
    </ManagementContainer>
  );
};

export default ScheduleRegister;
