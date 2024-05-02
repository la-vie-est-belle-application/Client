import { Button, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { COLORS } from "@constants/color";

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ChakraProvider>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>모달 제목</ModalHeader>
            <ModalCloseButton />
            <ModalBody>모달 내용</ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                취소
              </Button>
              <Button
                backgroundColor={COLORS.purple400}
                color={COLORS.white}
                _hover={{ backgroundColor: COLORS.purple600 }}
              >
                등록
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default ModalComponent;
