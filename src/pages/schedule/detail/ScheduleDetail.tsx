import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { MAX_WIDTH } from "@constants/width";
import { SelectedDate } from "@hooks/useCalendar";
import { formatDateWithDay } from "@utils/formatDate";
import styled from "styled-components";
import ScheduleTable from "../table/ScheduleTable";
import NameTag from "@components/NameTag/NameTag";
import useSchedule from "@hooks/useSchedule";

interface Props {
  date: SelectedDate;
}

const ScheduleDetail = ({ date }: Props) => {
  const formattedDate = formatDateWithDay(date);
  const {
    scheduleList,
    selectedRoleRef,
    onSelectRole,
    onAddUserToScheduleList,
    onDeleteUserFromScheduleList,
  } = useSchedule();

  return (
    <StyledContainer>
      <StyledScheduleDetailItem>
        <StyledDate>
          <Typography type="subtitle6">{formattedDate}</Typography>
        </StyledDate>
        <ScheduleTable
          scheduleList={scheduleList}
          onSelectRole={onSelectRole}
          onDeleteUserFromScheduleList={onDeleteUserFromScheduleList}
        />
        {/* 지워야함 */}
        <NameTag
          name="태관"
          onClick={() => {
            onAddUserToScheduleList(selectedRoleRef.current!, "태관");
          }}
        ></NameTag>
      </StyledScheduleDetailItem>
    </StyledContainer>
  );
};

export default ScheduleDetail;

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  max-width: ${MAX_WIDTH};
  bottom: 0;
  z-index: 100;
`;

const StyledScheduleDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
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
