import { Button, Stack } from "@chakra-ui/react";
import { useCreateSchedule } from "@hooks/mutations/mutations";
import useSelectedDatesStore from "@stores/useSelectedDatesStore";
import { useEffect, useState } from "react";
import { SelectedDates } from "src/types/calendar";

const ScheduleRegisterButton = () => {
  const [isNotClickable, setIsNotClickable] = useState<boolean>(true);
  const { selectedDates } = useSelectedDatesStore();
  const createScheduleMutation = useCreateSchedule();
  const handleCreateSchedule = (dates: SelectedDates) => {
    createScheduleMutation.mutate(dates);
  };

  useEffect(() => {
    if (selectedDates.length > 0) {
      setIsNotClickable(false);
    } else {
      setIsNotClickable(true);
    }
  }, [selectedDates]);

  return (
    <Stack
      display={"flex"}
      flexDirection={"inherit"}
      justifyContent={"right"}
      padding={"1.2rem 0  0"}
    >
      <Button
        size={"lg"}
        colorScheme="purple"
        isDisabled={isNotClickable}
        onClick={() => {
          handleCreateSchedule(selectedDates);
        }}
      >
        등록
      </Button>
    </Stack>
  );
};

export default ScheduleRegisterButton;
