import { THEME_COLORS } from "@constants/color";
import { SelectedDate, SelectedDates } from "src/types/calendar";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import { OnHandleNavigate, SetIsOpenDetail } from "src/types/schedule";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import ScheduleDetail from "../detail/ScheduleDetail";
import { Stack } from "@chakra-ui/react";

interface Props {
  selectedDate: SelectedDate | null;
  selectedDates: SelectedDates;
  setIsOpenDetail: SetIsOpenDetail;
  isOpenDetail: boolean;
  onHandleNavigate: OnHandleNavigate;
}

const ScheduleRegisterBody = ({
  selectedDate,
  selectedDates,
  setIsOpenDetail,
  isOpenDetail,
  onHandleNavigate,
}: Props) => {
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
      {selectedDates.length > 0 ? (
        <>
          {selectedDates.map((date, idx) => (
            <ScheduleItem
              selectedDate={date}
              key={idx}
              onClick={() => {
                setIsOpenDetail(true);
                onHandleNavigate(date);
              }}
            />
          ))}
        </>
      ) : (
        <NoScheduleItem>등록된 스케줄이 없습니다</NoScheduleItem>
      )}
      {isOpenDetail && (
        <ScheduleDetail
          selectedDate={selectedDate}
          isOpenDetail={isOpenDetail}
        />
      )}
    </Stack>
  );
};

export default ScheduleRegisterBody;
