import { Box, Stack, useDisclosure } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { formatTimeWithColon } from "@utils/formatTime";
import {
  WorkTime,
  WorkTimeTuple,
  WorkTimeTypes,
} from "src/interfaces/schedule";
import ScheduleWorkTimeModal from "./ScheduleWorkTimeModal";

interface Props {
  workTime: WorkTime;
  onUpdateWorkTime: React.Dispatch<{
    type: WorkTimeTypes;
    payload: WorkTimeTuple;
  }>;
}

const ScheduleWorkTime = ({ workTime, onUpdateWorkTime }: Props) => {
  const { startTime, endTime } = workTime;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack direction={"row"} border={`1px solid ${COLORS.gray400}`}>
      <Stack
        flex={"1 1 0"}
        borderRight={`1px solid ${COLORS.gray400}`}
        padding={"0.6rem 1.2rem"}
        cursor={"pointer"}
        onClick={() => {
          onOpen();
          onUpdateWorkTime({
            type: "출근 시간",
            payload: startTime,
          });
        }}
      >
        <Box>
          <Typography type="body3">출근 시간</Typography>
        </Box>
        <Box>
          <Typography type="body3">{formatTimeWithColon(startTime)}</Typography>
        </Box>
      </Stack>
      <Stack
        flex={"1 1 0"}
        padding={"0.6rem 1.2rem"}
        cursor={"pointer"}
        onClick={() => {
          onOpen();
          onUpdateWorkTime({
            type: "퇴근 시간",
            payload: endTime,
          });
        }}
      >
        <Box>
          <Typography type="body3">퇴근 시간</Typography>
        </Box>
        <Box>
          <Typography type="body3">{formatTimeWithColon(endTime)}</Typography>
        </Box>
      </Stack>
      {isOpen && (
        <ScheduleWorkTimeModal
          workTime={workTime}
          onUpdateWorkTime={onUpdateWorkTime}
          isOpen={isOpen}
          onClose={onClose}
        ></ScheduleWorkTimeModal>
      )}
    </Stack>
  );
};

export default ScheduleWorkTime;
