import { COLORS } from "@constants/color.ts";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <StyledCalendarWrapper>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="gregory" // 일요일 부터 시작
          showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
          minDetail="year" // 10년단위 년도 숨기기
        />
      </StyledCalendarWrapper>
    </div>
  );
};

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 0;
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
    color: ${COLORS.gray500};
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${COLORS.error};
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
    color: ${COLORS.blue};
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${COLORS.gray700};
    padding: 2rem 0;
  }

  .react-calendar__tile abbr {
    padding: 1rem;
    border-radius: 50%;
  }

  /* 오늘의 날짜 색상 */
  .react-calendar__tile--now {
    background-color: ${COLORS.white};
  }
  .react-calendar__tile--now:hover {
    background-color: ${COLORS.gray300};
    color: ${COLORS.gray700};
  }

  /* 일 선택시  */
  .react-calendar__tile--active {
    background-color: ${COLORS.white} !important;
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
`;

export default Calender;
