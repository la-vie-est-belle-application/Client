import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  UseDisclosureProps,
} from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import {
  HandleAddToPendingList,
  HandleOnClose,
  HandleRemoveFromPendingList,
} from "src/types/schedule";
import ScheduleTemporaryList from "./ScheduleTemporaryList/ScheduleTemporaryList";
import ScheduleApplicants from "./ScheduleApplicants/ScheduleApplicants";
import useSelectedRoleStore from "@stores/useSelectedRoleStore";

interface Props extends Partial<UseDisclosureProps> {
  handleAddToPendingList: HandleAddToPendingList;
  handleRemoveFromPendingList: HandleRemoveFromPendingList;
  saveScheduleChanges: () => void;
  handleOnClose: HandleOnClose;
}

const ScheduleTableModal = ({
  isOpen,
  onClose,
  handleAddToPendingList,
  handleRemoveFromPendingList,
  saveScheduleChanges,
  handleOnClose,
}: Props) => {
  const selectedRole = useSelectedRoleStore((state) => state.selectedRole);

  if (!selectedRole) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen || false}
      onClose={() => handleOnClose(onClose as () => void)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedRole && `${selectedRole} 선택`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Stack>
              <Typography>현재 선택된 인원</Typography>
              <ScheduleTemporaryList
                handleRemoveFromPendingList={handleRemoveFromPendingList}
              />
            </Stack>
            <Stack>
              <Typography>선택 가능한 인원</Typography>
              <ScheduleApplicants
                handleAddToPendingList={handleAddToPendingList}
              />
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              saveScheduleChanges();
              onClose && onClose();
            }}
          >
            저장
          </Button>
          <Button
            variant="ghost"
            onClick={() => handleOnClose(onClose as () => void)}
          >
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleTableModal;
