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
  title: string;
  description: string;
}

const ModalComponent = ({
  title = "제목",
  description = "설명",
}: Partial<ModalViewProps>) => {
  const { isModal, setIsModal } = useStore();

  const onClickCloseModal = () => {
    setIsModal(!isModal);
  };

  const props = {
    isModal,
    onClickCloseModal,
    title,
    description,
  };
  return <ModalView {...props} />;
};

const ModalView = ({
  isModal,
  onClickCloseModal,
  title,
  description,
}: ModalViewProps) => {
  return (
    <Modal
      size={"lg"}
      motionPreset="slideInBottom"
      isOpen={isModal}
      onClose={onClickCloseModal}
    >
      <ModalContent padding={"5px 0 0 0"} top={"10rem"} height={200}>
        <ModalHeader>
          <Typography type="subtitle5">{title}</Typography>
        </ModalHeader>
        <ModalCloseButton size={"lg"} onClick={onClickCloseModal} />
        <ModalBody>
          <Typography type="body2">{description}</Typography>
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
