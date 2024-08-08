import { Button, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SelectedDates } from "src/types/calendar";

interface Props {
  selectedDates: SelectedDates;
  createSchedule: (selectedDates: SelectedDates) => void;
}

const ScheduleRegisterButton = ({ selectedDates }: Props) => {
  const [isNotClickable, setIsNotClickable] = useState<boolean>(true);
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
          console.log(selectedDates.length);
        }}
      >
        등록
      </Button>
    </Stack>
  );
};

export default ScheduleRegisterButton;
