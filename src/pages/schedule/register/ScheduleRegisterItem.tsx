import useSelectedDatesStore from "@stores/useSelectedDatesStore";
import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import useSchedule from "@hooks/useSchedule";

const ScheduleRegisterItem = () => {
  const selectedDates = useSelectedDatesStore((state) => state.selectedDates);
  const { handleClickScheduleItem } = useSchedule();

  return (
    <>
      {selectedDates.length > 0 ? (
        selectedDates.map((date, idx) => (
          <ScheduleItem
            selectedDate={date}
            key={idx}
            onClick={() => handleClickScheduleItem(date)}
          />
        ))
      ) : (
        <NoScheduleItem>등록된 스케줄이 없습니다</NoScheduleItem>
      )}
    </>
  );
};

export default ScheduleRegisterItem;
