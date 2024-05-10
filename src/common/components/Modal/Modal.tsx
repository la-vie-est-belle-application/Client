import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import useStore from "@stores/store";

interface ModalViewProps {
  isModal: boolean;
  onClickCloseModal: () => void;
}

const ModalComponent = () => {
  const { isModal, setIsModal } = useStore();

  const onClickCloseModal = () => {
    setIsModal(!isModal);
  };

  const props = {
    isModal,
    onClickCloseModal,
  };
  return <ModalView {...props} />;
};

const ModalView = ({ isModal, onClickCloseModal }: ModalViewProps) => {
  return (
    <Modal
      size={"lg"}
      motionPreset="slideInBottom"
      isOpen={isModal}
      onClose={onClickCloseModal}
    >
      <ModalContent padding={"5px 0 0 0"} top={"18%"} height={200}>
        <ModalHeader>
          <Typography type="subtitle5">모달 제목</Typography>
        </ModalHeader>
        <ModalCloseButton size={"lg"} onClick={onClickCloseModal} />
        <ModalBody>
          <Typography type="body2">모달 내용</Typography>
        </ModalBody>

        <ModalFooter>
          <Button size={"lg"} mr={3} onClick={onClickCloseModal}>
            취소
          </Button>
          <Button
            size={"lg"}
            backgroundColor={COLORS.purple400}
            color={COLORS.white}
            _hover={{ backgroundColor: COLORS.purple600 }}
          >
            등록
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
