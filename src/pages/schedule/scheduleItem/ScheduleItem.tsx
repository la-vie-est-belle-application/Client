import { Stack } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { THEME_COLORS } from "@constants/color";
import {} from "@hooks/useCalendar";
import { formatDateWithDay } from "@utils/formatDate";
import { SelectedDate } from "src/types/calendar";

interface Props {
  selectedDate: SelectedDate;
}

const ScheduleItem = ({ selectedDate }: Props) => {
  return (
    <Stack
      w={"100%"}
      p={"1.2rem"}
      borderLeft={`.4rem solid ${THEME_COLORS.purple300}`}
      backgroundColor={THEME_COLORS.white}
      borderRadius={".2rem"}
      cursor={"pointer"}
    >
      <Typography type="caption1" color="gray900">
        {formatDateWithDay(selectedDate)}
      </Typography>
    </Stack>
  );
};

export default ScheduleItem;
