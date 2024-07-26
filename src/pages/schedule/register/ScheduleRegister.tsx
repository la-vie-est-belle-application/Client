import Header from "@layout/Header";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import useCalendar from "@hooks/useCalendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import UtilityButton from "@components/Button/UtilityButton";
import useSchedule from "@hooks/useSchedule";
import ScheduleDetail from "../detail/ScheduleDetail";

const ScheduleRegister = () => {
  const { selectedDates, onChangeSelectedDate } = useCalendar();
  const { setIsOpenDetail, isOpenDetail, onHandleNavigate, selectedDate } =
    useSchedule();
  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <ScheduleCalendar onChangeSelectedDate={onChangeSelectedDate} />
      <StyledSelectedScheduleItemWrap>
        {selectedDates.length > 0 ? (
          <>
            {selectedDates.map((date, idx) => (
              <ScheduleItem
                date={date}
                key={idx}
                onClick={() => {
                  setIsOpenDetail(true);
                  onHandleNavigate(date);
                }}
              />
            ))}
            <UtilityButton />
          </>
        ) : (
          <NoScheduleItem text={"선택된 날짜가 없습니다."} />
        )}
        {isOpenDetail && (
          <ScheduleDetail date={selectedDate} isOpenDetail={isOpenDetail} />
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
  flex-wrap: wrap;
  gap: 1.2rem;
  border-top: 0.1rem solid ${COLORS.gray300};
  padding: 1.2rem;
  background-color: ${COLORS.gray100};
  min-height: 30rem;
`;
