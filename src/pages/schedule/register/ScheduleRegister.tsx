import Header from "@layout/Header";
import ScheduleCalendar from "../calendar/ScheduleCalendar";
import useCalendar, { SelectedDate } from "@hooks/useCalendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import UtilityButton from "@components/Button/UtilityButton";
import useSchedule from "@hooks/useSchedule";
import ScheduleDetail from "../detail/ScheduleDetail";
import Dimmed from "@components/Dimmed/Dimmed";

const ScheduleRegister = () => {
  const { selectedDates, onChangeSelectedDate } = useCalendar();
  const { onShowDetail, isOpenDetail, toggleIsOpenDetail } = useSchedule();

  return (
    <StyledContainer>
      <Header title="일정 등록" />
      <ScheduleCalendar onChangeSelectedDate={onChangeSelectedDate} />
      <StyledSelectedScheduleItemWrap>
        {selectedDates ? (
          <>
            {selectedDates.map((date, index) => (
              <div key={index}>
                <ScheduleItem
                  date={date}
                  onClick={() => onShowDetail(date as SelectedDate)}
                />
                {isOpenDetail && (
                  <>
                    <Dimmed dependency={toggleIsOpenDetail}></Dimmed>
                    <ScheduleDetail date={date} />
                  </>
                )}
              </div>
            ))}
            <UtilityButton />
          </>
        ) : (
          <NoScheduleItem text={"선택된 날짜가 없습니다."} />
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
