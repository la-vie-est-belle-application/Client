import { Button, Stack } from "@chakra-ui/react";
import { useCreateSchedule } from "@hooks/mutations";
import { useEffect, useState } from "react";
import { SelectedDates } from "src/types/calendar";

interface Props {
  selectedDates: SelectedDates | null;
}

const ScheduleRegisterButton = ({ selectedDates }: Props) => {
  const [isNotClickable, setIsNotClickable] = useState(true);
  const createScheduleMutation = useCreateSchedule();

  useEffect(() => {
    if (!selectedDates) return;

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
          selectedDates && createScheduleMutation.mutate(selectedDates);
        }}
      >
        등록
      </Button>
    </Stack>
  );
};

export default ScheduleRegisterButton;
