import { Button, Stack } from "@chakra-ui/react";
import useSelectedDatesStore from "@stores/useSelectedDatesStore";
import { useEffect, useState } from "react";

const ScheduleRegisterButton = () => {
  const [isNotClickable, setIsNotClickable] = useState<boolean>(true);
  const selectedDates = useSelectedDatesStore((state) => state.selectedDates);

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
      <Button size={"lg"} colorScheme="purple" isDisabled={isNotClickable}>
        등록
      </Button>
    </Stack>
  );
};

export default ScheduleRegisterButton;
