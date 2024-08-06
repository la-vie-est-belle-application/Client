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
  const {
    selectedDates,
    onChangeSelectedDates,
    selectedDate,
    setSelectedDate,
    markSelectedDates,
    getActiveMonth,
  } = useCalendar();
  const { setIsOpenDetail, isOpenDetail, onHandleNavigate } = useSchedule();
  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <ScheduleCalendar
        onChangeSelectedDates={onChangeSelectedDates}
        selectedDates={selectedDates}
        setSelectedDate={setSelectedDate}
        markSelectedDates={markSelectedDates}
        getActiveMonth={getActiveMonth}
      />
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
          <NoScheduleItem>등록된 스케줄이 없습니다</NoScheduleItem>
        )}
        {isOpenDetail && (
          <ScheduleDetail
            selectedDate={selectedDate}
            isOpenDetail={isOpenDetail}
          />
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
