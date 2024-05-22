import ButtonItem from "@components/Button/Button.tsx";
import { AddIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useStore, { ModalType } from "@stores/store.ts";
import { useLocation } from "react-router-dom";
import { COLORS } from "@constants/color.ts";
import React, { useState } from "react";
import ModalComponent from "@components/Modal/Modal.tsx";

interface ButtonGroupViewProps {
  modalType: ModalType;
  isModal: boolean;
  onClickToggle: () => void;
  onClickShowModal: () => void;
  isForRegisterModal: boolean;
  setIsForRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonGroup = () => {
  const url = useLocation().pathname;
  const { modalType, setModalType, isModal, setIsModal } = useStore();
  const [isForRegisterModal, setIsForRegisterModal] = useState(false);

  const onClickToggle = () => {
    if (url === "/scheduleRegister") {
      setModalType("register");
    } else {
      setModalType("toggle");
    }

    if (modalType === "register") {
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
    modalType,
    isModal,
    onClickToggle,
    onClickShowModal,
    isForRegisterModal,
    setIsForRegisterModal,
  };
  return <ButtonGroupView {...props} />;
};

const ButtonGroupView = ({
  modalType,
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
      {(isModal && modalType === "toggle") ||
        (modalType === "register" && (
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
        ))}

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
