import useSelectedDatesStore from "@stores/useSelectedDatesStore";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import useSelectedDateStore from "@stores/useSelectedDateStore";
import useIsOpenDetailStore from "@stores/useIsOpenDetailStore";

const ScheduleRegisterItem = () => {
  const selectedDates = useSelectedDatesStore((state) => state.selectedDates);
  const updateSelectedDate = useSelectedDateStore(
    (state) => state.updateSelectedDate,
  );

  const updateIsOpenDetail = useIsOpenDetailStore(
    (state) => state.updateIsOpenDetail,
  );

  return (
    <>
      {selectedDates.length > 0 ? (
        selectedDates.map((date, idx) => (
          <ScheduleItem
            selectedDate={date}
            key={idx}
            onClick={() => {
              updateIsOpenDetail(true);
              updateSelectedDate(date);
            }}
          />
        ))
      ) : (
        <NoScheduleItem>등록된 스케줄이 없습니다</NoScheduleItem>
      )}
    </>
  );
};

export default ScheduleRegisterItem;
