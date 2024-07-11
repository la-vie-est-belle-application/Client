import Dimmed from "@components/Dimmed/Dimmed";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { MAX_WIDTH } from "@constants/width";
import { SelectedDate } from "@hooks/useCalendar";
import { formatDateWithDay } from "@utils/formatDate";
import styled from "styled-components";
import ScheduleTable from "../table/ScheduleTable";
import NameTag from "@components/NameTag/NameTag";
import NameTagWithClose from "@components/NameTagWithClose/NameTagWithClose";
import useSchedule from "@hooks/useSchedule";

interface Props {
  date: SelectedDate;
}

const ScheduleDetail = ({ date }: Props) => {
  const formattedDate = formatDateWithDay(date);
  const { onAddUserToScheduleList } = useSchedule();

  return (
    <>
      <Dimmed>
        <StyledContainer>
          <StyledScheduleDetailItem>
            <StyledDate>
              <Typography type="subtitle6">{formattedDate}</Typography>
            </StyledDate>
            <ScheduleTable />
            <NameTag
              name="태관"
              onClick={() => onAddUserToScheduleList("팀장", "태관")}
            ></NameTag>
            <NameTagWithClose name="태관"></NameTagWithClose>
          </StyledScheduleDetailItem>
        </StyledContainer>
      </Dimmed>
    </>
  );
};

export default ScheduleDetail;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
`;

const StyledScheduleDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 90vh;
  border-top-right-radius: 8vw;
  border-top-left-radius: 8vw;
  box-shadow: 0px -4px 50px rgba(0, 0, 0, 0.25);
  background-color: ${COLORS.white};
  padding: 2rem 1.2rem;
`;

const StyledDate = styled.h2`
  display: flex;
  justify-content: center;
`;
