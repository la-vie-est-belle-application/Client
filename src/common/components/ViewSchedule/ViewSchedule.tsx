import { COLORS } from "@constants/color";
import styled from "styled-components";
import scheduleRed from "/assets/schedule-red.svg";
import { Image } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import ButtonItem from "@components/Button/Button";
import useStore, { ModalType } from "@stores/store";
import { useLocation } from "react-router-dom";

interface ViewScheduleProps {
  isModal: boolean;
  onClickToggle: () => void;
  onClickShowModal: () => void;
  pathName: string;
  modalType: ModalType;
}

const ViewSchedule = () => {
  const pathName = useLocation().pathname;
  const { modalType, setModalType, isModal, setIsModal } = useStore();

  const onClickToggle = () => {
    if (pathName === "/scheduleRegister") {
      setModalType("register");
      setIsModal(!isModal);
    } else {
      setIsModal(!isModal);
      setModalType("");
    }
  };

  const onClickShowModal = () => {
    setModalType("modal");
  };

  const props = {
    modalType,
    isModal,
    onClickToggle,
    onClickShowModal,
    pathName,
  };
  return <ScheduleView {...props} />;
};

const ScheduleView = ({
  modalType,
  isModal,
  onClickShowModal,
  onClickToggle,
  pathName,
}: ViewScheduleProps) => {
  return (
    <ViewContainer>
      <ImageWrapper>
        <Image src={scheduleRed} boxSize="80px" objectFit="cover" />
        <Typography type="subtitle6" color={"gray700"}>
          등록된 일정이 없습니다!
        </Typography>
      </ImageWrapper>
      {isModal && (
        <>
          {pathName === "/scheduleRegister" ? null : (
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
        </>
      )}

      {modalType === "register" ? null : (
        <>
          <ButtonItem type="toggle" onClick={onClickToggle}>
            {isModal ? (
              <CloseIcon color="white" fontSize={16} />
            ) : (
              <AddIcon color="white" fontSize={18} />
            )}
          </ButtonItem>
        </>
      )}
    </ViewContainer>
  );
};

export default ViewSchedule;

const ViewContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.gray100};
  height: 35.7vh;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

