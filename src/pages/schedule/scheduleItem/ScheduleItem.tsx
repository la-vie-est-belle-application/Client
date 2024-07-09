import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { SelectedDate } from "@hooks/useCalendar";
import styled from "styled-components";

interface Props {
  date: SelectedDate;
  onSelectedDateChange: (date: SelectedDate) => void;
}

const ScheduleItem = ({ date, onSelectedDateChange }: Props) => {
  let dateString: string | undefined = undefined;

  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    dateString = `${year}.${month}.${day} (${dayOfWeek})`;
  }

  return (
    <StyledContainer onClick={() => onSelectedDateChange(date)}>
      <Typography type="subtitle6" color="white">
        {dateString}
      </Typography>
    </StyledContainer>
  );
};

export default ScheduleItem;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${COLORS.purple300};
  padding: 2rem 0;
  cursor: pointer;
`;
