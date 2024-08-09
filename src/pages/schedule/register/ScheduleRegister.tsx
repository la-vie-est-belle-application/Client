import Header from "@layout/Header";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import useCalendar from "@hooks/useCalendar";
import styled from "styled-components";
import useSchedule from "@hooks/useSchedule";
import Container from "@components/Container/Container";
import ScheduleRegisterButton from "./ScheduleRegisterButton";
import ScheduleRegisterBody from "./ScheduleRegisterBody";

const ScheduleRegister = () => {
  const {
    selectedDates,
    onChangeSelectedDates,
    markSelectedDates,
    getActiveMonth,
  } = useCalendar();
  const { setIsOpenDetail, isOpenDetail, onHandleNavigate, createSchedule } =
    useSchedule();
  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <Container>
        <ScheduleRegisterButton
          selectedDates={selectedDates}
          createSchedule={createSchedule}
        />
        <ScheduleCalendar
          onChangeSelectedDates={onChangeSelectedDates}
          selectedDates={selectedDates}
          markSelectedDates={markSelectedDates}
          getActiveMonth={getActiveMonth}
        />
        <ScheduleRegisterBody
          selectedDates={selectedDates}
          setIsOpenDetail={setIsOpenDetail}
          isOpenDetail={isOpenDetail}
          onHandleNavigate={onHandleNavigate}
        />
      </Container>
    </StyledContainer>
  );
};

export default ScheduleRegister;

const StyledContainer = styled.div`
  min-height: 100vh;
`;
