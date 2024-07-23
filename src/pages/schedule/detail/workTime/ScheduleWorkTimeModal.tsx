import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { HOURS, MINUTES } from "@constants/time";
import {
  Hours,
  Minutes,
  WorkTime,
  WorkTimeTuple,
  WorkTimeTypes,
} from "@interfaces/schedule";
import { WorkTimeActionTypes } from "@reducers/workTimeReducer";
import { useState } from "react";

interface Props extends Partial<UseDisclosureProps> {
  workTime: WorkTime;
  onUpdateWorkTime: (action: {
    type: WorkTimeTypes;
    payload: WorkTimeTuple;
  }) => void;
}

const ScheduleWorkTimeModal = ({
  isOpen,
  onClose,
  workTime,
  onUpdateWorkTime,
}: Props) => {
  const { startTime, endTime, type } = workTime;

  const isStartTime = type === WorkTimeActionTypes.START_TIME;

  const [selectedHour, setSelectedHour] = useState<Hours>(
    isStartTime ? startTime[0] : endTime[0],
  );
  const [selectedMinute, setSelectedMinute] = useState<Minutes>(
    isStartTime ? startTime[1] : endTime[1],
  );

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(event.target.value as Hours);
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinute(event.target.value as Minutes);
  };

  const onHandleSave = () => {
    const updatedTime: WorkTimeTuple = [selectedHour, selectedMinute];

    onUpdateWorkTime({
      type: isStartTime
        ? WorkTimeActionTypes.START_TIME
        : WorkTimeActionTypes.END_TIME,
      payload: updatedTime,
    });

    onClose && onClose();
  };

  return (
    <Modal isOpen={isOpen || false} onClose={onClose || (() => {})} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{type}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack flexDir={"row"}>
            <Select value={selectedHour} onChange={handleHourChange}>
              {HOURS.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </Select>
            <Select value={selectedMinute} onChange={handleMinuteChange}>
              {MINUTES.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </Select>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onHandleSave}>
            저장
          </Button>
          <Button variant="ghost" onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleWorkTimeModal;
