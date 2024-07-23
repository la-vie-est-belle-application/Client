import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { Roles } from "@interfaces/schedule";

interface Props extends Partial<UseDisclosureProps> {
  selectedRole: Roles | null;
}

const ScheduleTableModal = ({ isOpen, onClose, selectedRole }: Props) => {
  return (
    <Modal isOpen={isOpen || false} onClose={onClose || (() => {})} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedRole}</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
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

export default ScheduleTableModal;
