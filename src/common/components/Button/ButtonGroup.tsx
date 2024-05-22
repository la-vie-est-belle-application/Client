import ButtonItem from "@components/Button/Button.tsx";
import { AddIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useStore from "@stores/store.ts";
import { useLocation } from "react-router-dom";
import { COLORS } from "@constants/color.ts";
import React, { useState } from "react";
import ModalComponent from "@components/Modal/Modal.tsx";

interface ButtonGroupViewProps {
  isModal: boolean;
  onClickToggle: () => void;
  onClickShowModal: () => void;
  isForRegisterModal: boolean;
  setIsForRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonGroup = () => {
  const url = useLocation().pathname;
  const { setModalType, isModal, setIsModal } = useStore();
  const [isForRegisterModal, setIsForRegisterModal] = useState(false);

  const onClickToggle = () => {
    if (url === "/scheduleRegister") {
      setModalType("register");
    } else {
      setModalType("");
    }
    setIsModal(!isModal);
  };

  const onClickShowModal = () => {
    if (url === "/scheduleRegister") {
      setIsForRegisterModal(!isForRegisterModal);
    } else {
      setModalType("modal");
    }
  };

  const props = {
    isModal,
    onClickToggle,
    onClickShowModal,
    isForRegisterModal,
    setIsForRegisterModal,
  };
  return <ButtonGroupView {...props} />;
};

const ButtonGroupView = ({
  isModal,
  onClickShowModal,
  onClickToggle,
  isForRegisterModal,
  setIsForRegisterModal,
}: ButtonGroupViewProps) => {
  return (
    <>
      {isForRegisterModal && (
        <ModalComponent
          isForRegisterModal={isForRegisterModal}
          setIsForRegisterModal={setIsForRegisterModal}
        />
      )}
      {isModal && (
        <>
          <ButtonItem type="scheduleCancel" onClick={onClickShowModal}>
            <DeleteIcon color={COLORS.gray700} fontSize={25} />
          </ButtonItem>
          <ButtonItem
            style={{ bottom: "8rem" }}
            type="toggle"
            onClick={onClickShowModal}
          >
            <EditIcon color={COLORS.white} fontSize={25} />
          </ButtonItem>
        </>
      )}

      <ButtonItem type="toggle" onClick={onClickToggle}>
        {isModal ? (
          <CloseIcon color="white" fontSize={16} />
        ) : (
          <AddIcon color="white" fontSize={18} />
        )}
      </ButtonItem>
    </>
  );
};

export default ButtonGroup;
