import { Box, Stack } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";

const ScheduleWorkTime = () => {
  return (
    <Stack direction={"row"} border={`1px solid ${COLORS.gray400}`}>
      <Stack
        flex={"1 1 0"}
        borderRight={`1px solid ${COLORS.gray400}`}
        padding={"0.6rem 1.2rem"}
        cursor={"pointer"}
      >
        <Box>
          <Typography type="body3">출근 시간</Typography>
        </Box>
        <Box>
          <Typography type="body3">09:00</Typography>
        </Box>
      </Stack>
      <Stack flex={"1 1 0"} padding={"0.6rem 1.2rem"} cursor={"pointer"}>
        <Box>
          <Typography type="body3">퇴근 시간</Typography>
        </Box>
        <Box>
          <Typography type="body3">18:00</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ScheduleWorkTime;
