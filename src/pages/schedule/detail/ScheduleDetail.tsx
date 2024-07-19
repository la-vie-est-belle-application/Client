import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { MAX_WIDTH } from "@constants/width";
import { SelectedDate } from "@hooks/useCalendar";
import { formatDateWithDay } from "@utils/formatDate";
import styled from "styled-components";
import ScheduleTable from "../table/ScheduleTable";
import NameTag from "@components/NameTag/NameTag";
import useSchedule from "@hooks/useSchedule";
import { useEffect, useState } from "react";
import ScheduleWorkTime from "./ScheduleWorkTime";

interface Props {
  date: SelectedDate;
  isOpenDetail: boolean;
}

const ScheduleDetail = ({ date, isOpenDetail }: Props) => {
  const formattedDate = formatDateWithDay(date);
  const {
    scheduleList,
    selectedRoleRef,
    onSelectRole,
    onAddUserToScheduleList,
    onDeleteUserFromScheduleList,
    workTime,
    onUpdateWorkTime,
  } = useSchedule();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(isOpenDetail);
  }, [isOpenDetail]);

  return (
    <StyledContainer isOpen={isOpen}>
      <StyledScheduleDetailItem>
        <StyledDate>
          <Typography type="subtitle6">{formattedDate}</Typography>
        </StyledDate>
        <ScheduleWorkTime
          workTime={workTime}
          onUpdateWorkTime={onUpdateWorkTime}
        />
        <ScheduleTable
          scheduleList={scheduleList}
          onSelectRole={onSelectRole}
          onDeleteUserFromScheduleList={onDeleteUserFromScheduleList}
        />
        {/* 예시 NameTag들 */}
        <NameTag
          name="옥진"
          onClick={() => {
            onAddUserToScheduleList(selectedRoleRef.current!, "옥진");
          }}
        />
        <NameTag
          name="태관"
          onClick={() => {
            onAddUserToScheduleList(selectedRoleRef.current!, "태관");
          }}
        />
        <NameTag
          name="유정"
          onClick={() => {
            onAddUserToScheduleList(selectedRoleRef.current!, "유정");
          }}
        />
      </StyledScheduleDetailItem>
    </StyledContainer>
  );
};

export default ScheduleDetail;

const StyledContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  max-width: ${MAX_WIDTH};
  top: 0;
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.5s ease-out;
  z-index: 100;
`;

const StyledScheduleDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  max-width: ${MAX_WIDTH};
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
  background-color: ${COLORS.white};
  padding: 2rem 1.2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDate = styled.h2`
  display: flex;
  justify-content: center;
`;
