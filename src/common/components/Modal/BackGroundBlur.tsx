import styled from "styled-components";
import useStore, { ModalType } from "@stores/store";
import { MouseEvent, useRef } from "react";
import ModalComponent from "./Modal";

interface VeiwBlurProps {
  modalType: ModalType;
  modalRef: React.MutableRefObject<null>;
  onClickOutside: (event: MouseEvent) => void;
}

const BackGroundBlur = () => {
  const { modalType, isModal, setIsModal } = useStore();
  const modalRef = useRef(null);

  if (!isModal) {
    return null;
  }

  const onClickOutside = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      setIsModal(!isModal);
    }
  };

  const props = {
    modalType,
    modalRef,
    onClickOutside,
  };

  return <ViewBlur {...props} />;
};

const ViewBlur = ({ modalType, modalRef, onClickOutside }: VeiwBlurProps) => {
  return (
    <Background ref={modalRef} onClick={onClickOutside}>
      {modalType === "modal" && <ModalComponent />}
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  inset: 0;
  background: #ffffff;
  opacity: 0.7;
  z-index: 1;
`;

export default BackGroundBlur;
