import Header from "@layout/Header";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import useCalendar from "@hooks/useCalendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import UtilityButton from "@components/Button/UtilityButton";

const ScheduleRegister = () => {
  const { selectedDates, onSelectedDateChange } = useCalendar();
  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <ScheduleCalendar onSelectedDateChange={onSelectedDateChange} />
      <StyledSelectedScheduleItemWrap>
        {selectedDates.length > 0 ? (
          <>
            {selectedDates.map((date, index) => (
              <ScheduleItem
                key={index}
                date={date}
                onSelectedDateChange={onSelectedDateChange}
              />
            ))}
            <UtilityButton />
          </>
        ) : (
          <NoScheduleItem />
        )}
      </StyledSelectedScheduleItemWrap>
    </StyledContainer>
  );
};

export default ScheduleRegister;

const StyledContainer = styled.div`
  min-height: 100vh;
`;

const StyledSelectedScheduleItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-top: 0.1rem solid ${COLORS.gray300};
  padding: 1.2rem;
  background-color: ${COLORS.gray100};
  min-height: 30rem;
`;
