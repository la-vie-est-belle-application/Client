import ButtonGroup from "@components/Button/ButtonGroup";
import useCalendar from "@hooks/useCalendar";
import Header from "@layout/Header";
import styled from "styled-components";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";

const ScheduleManage = () => {
  const { selectedDates, onSelectedDateChange } = useCalendar();

  return (
    <StyledContainer>
      <Header title="일정 관리" />
      <ScheduleCalendar onSelectedDateChange={onSelectedDateChange} />
      {selectedDates.length > 0 && (
        <>
          <StyledSelectedSchduleItemWrap>
            {selectedDates.map((date, index) => (
              <ScheduleItem key={index} date={date} />
            ))}
          </StyledSelectedSchduleItemWrap>
          <ButtonGroup />
        </>
      )}
    </StyledContainer>
  );
};

export default ScheduleManage;

const StyledContainer = styled.div`
  height: 100vh;
`;

const StyledSelectedSchduleItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
