import { THEME_COLORS } from "@constants/color.ts";
import useCalendar from "@hooks/useCalendar";
import useSelectedDatesStore from "@stores/useSelectedDatesStore";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const ScheduleCalendar = () => {
  const { selectedDates, updateSelectedDates } = useSelectedDatesStore();
  const { markCalendarDates, getActiveMonth } = useCalendar();

  return (
    <StyledCalendarWrapper>
      <Calendar
        onChange={(date) => {
          updateSelectedDates(date as Date);
        }}
        calendarType="iso8601"
        showNeighboringMonth={true}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        formatDay={(locale = "en", date) => {
          return date.toLocaleString(locale, { day: "numeric" });
        }}
        tileClassName={({ date }) => {
          return markCalendarDates(date, selectedDates);
        }}
        onActiveStartDateChange={({ activeStartDate }) =>
          getActiveMonth(activeStartDate as Date)
        }
      />
    </StyledCalendarWrapper>
  );
};

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  padding: 0 0 4rem;
  .react-calendar {
    width: 100%;
    border: none;
  }
  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }
  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1.5rem;
  }
  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }
  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }
  /* 요일 폰트 설정 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.3rem;
    color: ${THEME_COLORS.gray500};
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${THEME_COLORS.error};
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
    color: ${THEME_COLORS.blue};
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${THEME_COLORS.gray700};
    padding: 2rem 0;
  }

  .react-calendar__tile abbr {
    padding: 1rem;
    border-radius: 50%;
  }

  /* 오늘의 날짜 색상 */
  .react-calendar__tile--now {
    background-color: ${THEME_COLORS.white};
  }
  .react-calendar__tile--now:hover {
    background-color: ${THEME_COLORS.gray300};
    color: ${THEME_COLORS.gray700};
  }

  /* 일 선택시  */
  .react-calendar__tile--active {
    background-color: ${THEME_COLORS.white} !important;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .highlight {
    position: relative;
    z-index: 2;
  }

  .highlight abbr {
    position: relative;
    z-index: 3;
    color: ${THEME_COLORS.white};
  }

  .highlight::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${THEME_COLORS.purple200};
  }

  .exist {
    color: red;
    width: 500px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
  }
`;

export default ScheduleCalendar;
