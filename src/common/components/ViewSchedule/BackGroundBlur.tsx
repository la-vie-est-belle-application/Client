import styled from "styled-components";
import useStore from "@stores/store";
import { MouseEvent, useRef } from "react";

interface VeiwBlurProps {
  modalRef: React.MutableRefObject<null>;
  onClickOutside: (event: MouseEvent) => void;
}
const BackGroundBlur = () => {
  const { isModal, setIsModal } = useStore();
  const modalRef = useRef(null);
  const onClickOutside = (event: MouseEvent) => {
    if (modalRef.current === event.target) {
      setIsModal(!isModal);
    }
  };

  const props = {
    modalRef,
    onClickOutside,
  };
  if (!isModal) {
    return null;
  } else {
    return <ViewBlur {...props} />;
  }
};

const ViewBlur = ({ modalRef, onClickOutside }: VeiwBlurProps) => {
  return <Background ref={modalRef} onClick={onClickOutside}></Background>;
};

const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  opacity: 0.7;
  z-index: 1;
`;

export default BackGroundBlur;
