import styled from "styled-components";
import useStore from "@stores/store";
import React, { MouseEvent, useRef } from "react";

interface ViewBlurProps {
  modalRef: React.MutableRefObject<null>;
  onClickOutside: (event: MouseEvent) => void;
}

const BackGroundBlur = () => {
  const { isModal, setIsModal } = useStore();
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
    modalRef,
    onClickOutside,
  };

  return <ViewBlur {...props} />;
};

const ViewBlur = ({ modalRef, onClickOutside }: ViewBlurProps) => {
  return <Background ref={modalRef} onClick={onClickOutside}></Background>;
};

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.528);
`;

export default BackGroundBlur;
