import { THEME_COLORS } from "@constants/color";
import ScheduleDetail from "../detail/ScheduleDetail";
import { Stack } from "@chakra-ui/react";
import ScheduleRegisterItem from "./ScheduleRegisterItem";
import useIsOpenDetailStore from "@stores/useIsOpenDetailStore";

const ScheduleRegisterBody = () => {
  const isOpenDetail = useIsOpenDetailStore((state) => state.isOpenDetail);
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
      <ScheduleRegisterItem />
      {isOpenDetail && <ScheduleDetail />}
    </Stack>
  );
};

export default ScheduleRegisterBody;
