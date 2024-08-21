import ScheduleItem from "../scheduleItem/ScheduleItem";
import NoScheduleItem from "@components/NoScheduleItem/NoScheduleItem";
import useSchedule from "@hooks/useSchedule";
import { SelectedDates } from "src/types/calendar";

interface Props {
  selectedDates: SelectedDates | null;
}

const ScheduleRegisterItem = ({ selectedDates }: Props) => {
  const { handleClickScheduleItem } = useSchedule();

  return (
    <>
      {selectedDates && selectedDates.length > 0 ? (
        selectedDates.map((date, idx) => (
          <ScheduleItem
            selectedDate={date}
            key={idx}
            onClick={handleClickScheduleItem}
          />
        ))
      ) : (
        <NoScheduleItem>등록된 스케줄이 없습니다</NoScheduleItem>
      )}
    </>
  );
};

export default ScheduleRegisterItem;
