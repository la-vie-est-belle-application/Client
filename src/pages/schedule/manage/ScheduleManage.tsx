import useCalendar from "@hooks/useCalendar";
import Header from "@layout/Header";
import styled from "styled-components";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import UtilityButton from "@components/Button/UtilityButton";
import { THEME_COLORS } from "@constants/color";

const ScheduleManage = () => {
  const { selectedDates, onChangeSelectedDates } = useCalendar();

  return (
    <StyledContainer>
      <Header title="일정 관리" />
      <ScheduleCalendar onChangeSelectedDates={onChangeSelectedDates} />
      <StyledSelectedScheduleItemWrap>
        {selectedDates.length > 0 ? (
          <>
            {selectedDates.map((date, index) => (
              <ScheduleItem
                key={index}
                date={date}
                onClick={onChangeSelectedDate}
              />
            ))}
            <UtilityButton></UtilityButton>
          </>
        ) : (
          <NoScheduleItem>등록된 스케줄이 없습니다</NoScheduleItem>
        )}
      </StyledSelectedScheduleItemWrap>
    </StyledContainer>
  );
};

export default ScheduleManage;

const StyledContainer = styled.div`
  height: 100vh;
`;

const StyledSelectedScheduleItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-top: 0.1rem solid ${THEME_COLORS.gray300};
  padding: 1.2rem;
  background-color: ${THEME_COLORS.gray100};
`;
