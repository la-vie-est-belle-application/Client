import Calender from "@pages/scheduleManagement/components/Calender.tsx";
import Header from "@layout/Header.tsx";
import ViewSchedule from "@pages/scheduleManagement/components/ViewSchedule.tsx";
import ManagementContainer from "@pages/scheduleManagement/components/ManagementContainer.tsx";

const ScheduleManage = () => {
  return (
    <ManagementContainer>
      <Header title="일정 관리" />
      <Calender />
      <ViewSchedule />
    </ManagementContainer>
  );
};

export default ScheduleManage;
