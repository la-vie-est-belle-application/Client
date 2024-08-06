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
import { THEME_COLORS } from "@constants/color";
import useStore from "@stores/store";
import React from "react";

interface ModalViewProps {
  isModal: boolean;
  onClickCloseModal: () => void;
  title: string;
  description: string;
  isForRegisterModal?: boolean;
  setIsForRegisterModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent = ({
  title = "제목",
  description = "설명",
  isForRegisterModal,
  setIsForRegisterModal,
}: Partial<ModalViewProps>) => {
  const { isModal, setIsModal } = useStore();

  const onClickCloseModal = () => {
    setIsModal(!isModal);
    if (setIsForRegisterModal) {
      setIsForRegisterModal(!isForRegisterModal);
    }
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
            backgroundColor={THEME_COLORS.purple400}
            color={THEME_COLORS.white}
            _hover={{ backgroundColor: THEME_COLORS.purple600 }}
          >
            등록
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
