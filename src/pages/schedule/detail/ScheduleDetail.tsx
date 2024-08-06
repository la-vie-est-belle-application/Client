import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { MAX_WIDTH } from "@constants/width";
import { formatDateWithDay } from "@utils/formatDate";
import styled from "styled-components";
import useSchedule from "@hooks/useSchedule";
import { useEffect, useState } from "react";
import ScheduleWorkTime from "./workTime/ScheduleWorkTime";
import ScheduleTable from "./scheduleTable/ScheduleTable";
import { Button, Stack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { SelectedDate } from "src/types/calendar";

interface Props {
  selectedDate: SelectedDate;
  isOpenDetail: boolean;
}

const ScheduleDetail = ({ selectedDate, isOpenDetail }: Props) => {
  const {
    scheduleList,
    onSelectRole,
    workTime,
    onUpdateWorkTime,
    selectedRole,
    temporaryScheduleList,
    applicants,
    temporaryApplicants,
    handleAddToPendingList,
    handleRemoveFromPendingList,
    saveScheduleChanges,
    handleOnClose,
    handleCloseScheduleDetail,
  } = useSchedule();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpenDetail);
  }, [isOpenDetail]);

  if (!selectedDate) return;

  return (
    <StyledContainer $isOpen={isOpen}>
      <StyledScheduleDetailItem>
        <Stack alignItems={"center"} position={"relative"}>
          <Button
            position={"absolute"}
            inset={"50% 0 0 0 "}
            transform={"translateY(-50%)"}
            display={"flex"}
            w={"3rem"}
            h={"3rem"}
            background={"transparent"}
            onClick={handleCloseScheduleDetail}
          >
            <CloseIcon fontSize={12} cursor={"pointer"} />
          </Button>
          <StyledDate>
            <Typography type="subtitle6">
              {formatDateWithDay(selectedDate)}
            </Typography>
          </StyledDate>
        </Stack>
        <ScheduleWorkTime
          workTime={workTime}
          onUpdateWorkTime={onUpdateWorkTime}
        />
        <ScheduleTable
          selectedRole={selectedRole}
          scheduleList={scheduleList}
          onSelectRole={onSelectRole}
          temporaryScheduleList={temporaryScheduleList}
          applicants={applicants}
          handleAddToPendingList={handleAddToPendingList}
          handleRemoveFromPendingList={handleRemoveFromPendingList}
          saveScheduleChanges={saveScheduleChanges}
          temporaryApplicants={temporaryApplicants}
          handleOnClose={handleOnClose}
        />
      </StyledScheduleDetailItem>
    </StyledContainer>
  );
};

export default ScheduleDetail;

const StyledContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  max-width: ${MAX_WIDTH};
  top: 0;
  left: 0;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
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
