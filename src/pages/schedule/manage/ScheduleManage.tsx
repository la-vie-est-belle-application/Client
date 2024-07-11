import ButtonGroup from "@components/Button/ButtonGroup";
import useCalendar from "@hooks/useCalendar";
import Header from "@layout/Header";
import styled from "styled-components";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import { COLORS } from "@constants/color";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";

const ScheduleManage = () => {
  const { selectedDates, onChangeSelectedDate } = useCalendar();

  return (
    <StyledContainer>
      <Header title="일정 관리" />
      <ScheduleCalendar onChangeSelectedDate={onChangeSelectedDate} />
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
            <ButtonGroup />
          </>
        ) : (
          <NoScheduleItem text={"등록된 스케줄이 없습니다."} />
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
  border-top: 0.1rem solid ${COLORS.gray300};
  padding: 1.2rem;
  background-color: ${COLORS.gray100};
`;
