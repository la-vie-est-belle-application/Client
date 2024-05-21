import styled from "styled-components";
import useStore, { ModalType } from "@stores/store";
import React, { MouseEvent, useRef } from "react";
import ModalComponent from "./Modal";
import RegisterForm from "./RegisterForm/RegisterForm";

interface ViewBlurProps {
  modalType: ModalType;
  modalRef: React.MutableRefObject<null>;
  onClickOutside: (event: MouseEvent) => void;
}

const BackGroundBlur = () => {
  const { modalType, setModalType, isModal, setIsModal } = useStore();
  const modalRef = useRef(null);

  if (!isModal) {
    return null;
  }

  const onClickOutside = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      setIsModal(!isModal);
      setModalType("");
    }
  };

  const props = {
    modalType,
    modalRef,
    onClickOutside,
  };

  return <ViewBlur {...props} />;
};

const ViewBlur = ({ modalType, modalRef, onClickOutside }: ViewBlurProps) => {
  return (
    <Background ref={modalRef} onClick={onClickOutside}>
      {modalType === "modal" && <ModalComponent />}
      {modalType === "register" && <RegisterForm />}
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.528);
  z-index: 1;
`;

export default BackGroundBlur;
