import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { SelectedDate } from "@hooks/useCalendar";
import { formatDateWithDay } from "@utils/formatDate";
import styled from "styled-components";

interface Props {
  date: SelectedDate | null;
  onClick: (value: SelectedDate) => void;
}

const ScheduleItem = ({ date, onClick }: Props) => {
  return (
    <StyledContainer
      onClick={() => {
        onClick(date);
      }}
    >
      <Typography type="subtitle6" color="white">
        {formatDateWithDay(date)}
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
