import styled from "styled-components";
import useStore, { ModalType } from "@stores/store";
import React, { MouseEvent, useRef } from "react";
import ModalComponent from "./Modal";
import RegisterForm from "./RegisterForm/RegisterForm";
import Menu from "@components/Modal/Menu/Menu.tsx";

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
    <Background modalType={modalType} ref={modalRef} onClick={onClickOutside}>
      {modalType === "modal" && <ModalComponent />}
      {modalType === "register" && <RegisterForm />}
      {modalType === "menu" && <Menu />}
    </Background>
  );
};

const Background = styled.div<{ modalType: ModalType }>`
  position: absolute;
  inset: 0;
  background: ${(props) =>
    props.modalType === "menu"
      ? "rgba(0, 0, 0, 0.528)"
      : "rgba(255, 255, 255, 0.528)"};
  z-index: ${(props) => (props.modalType === "menu" ? 65 : 55)};
`;

export default BackGroundBlur;
