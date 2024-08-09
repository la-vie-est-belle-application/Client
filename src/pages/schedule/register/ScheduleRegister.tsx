import Header from "@layout/Header";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import useCalendar from "@hooks/useCalendar";
import styled from "styled-components";
import Container from "@components/Container/Container";
import ScheduleRegisterButton from "./ScheduleRegisterButton";
import ScheduleRegisterBody from "./ScheduleRegisterBody";

const ScheduleRegister = () => {
  const { markSelectedDates, getActiveMonth } = useCalendar();
  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <Container>
        <ScheduleRegisterButton />
        <ScheduleCalendar
          markSelectedDates={markSelectedDates}
          getActiveMonth={getActiveMonth}
        />
        <ScheduleRegisterBody />
      </Container>
    </StyledContainer>
  );
};

export default ScheduleRegister;

const StyledContainer = styled.div`
  min-height: 100vh;
`;
