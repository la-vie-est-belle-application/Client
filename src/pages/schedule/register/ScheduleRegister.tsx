import Header from "@layout/Header";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import styled from "styled-components";
import Container from "@components/Container/Container";
import ScheduleRegisterButton from "./ScheduleRegisterButton";
import ScheduleRegisterBody from "./ScheduleRegisterBody";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import { useActiveMonthStore } from "@stores/useActiveMonthStore";

const ScheduleRegister = () => {
  const navigate = useNavigate();
  const { activeMonth } = useActiveMonthStore();

  useEffect(() => {
    navigate(`${ROUTES.REGISTER}?activeMonth=${activeMonth}`, {
      replace: true,
    });
  }, [activeMonth, navigate]);

  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <Container>
        <ScheduleRegisterButton />
        <ScheduleCalendar />
        <ScheduleRegisterBody />
      </Container>
    </StyledContainer>
  );
};

export default ScheduleRegister;

const StyledContainer = styled.div`
  min-height: 100vh;
`;
