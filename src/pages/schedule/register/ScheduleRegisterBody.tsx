import { THEME_COLORS } from "@constants/color";
import ScheduleDetail from "../detail/ScheduleDetail";
import { Stack } from "@chakra-ui/react";
import ScheduleRegisterItem from "./ScheduleRegisterItem";
import useIsOpenDetailStore from "@stores/useIsOpenDetailStore";
import { SelectedDates } from "src/types/calendar";

interface Props {
  selectedDates: SelectedDates | null;
}

const ScheduleRegisterBody = ({ selectedDates }: Props) => {
  const { isOpenDetail } = useIsOpenDetailStore();
  return (
    <Stack
      flexDirection={"column"}
      flexWrap={"wrap"}
      gap={"1.2rem"}
      borderTop={`0.1rem solid ${THEME_COLORS.gray300}`}
      padding={"1.2rem"}
      backgroundColor={THEME_COLORS.gray100}
      minHeight={"30rem"}
    >
      <ScheduleRegisterItem selectedDates={selectedDates} />
      {isOpenDetail && <ScheduleDetail />}
    </Stack>
  );
};

export default ScheduleRegisterBody;
