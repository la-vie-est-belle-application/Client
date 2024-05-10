import { COLORS } from "@constants/color";
import styled from "styled-components";
import scheduleRed from "/assets/schedule-red.svg";
import { Image } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import ButtonItem from "@components/Button/Button";
import useStore from "@stores/store";

interface ViewScheduleProps {
  isModal: boolean;
  onClickToggle: () => void;
  onClickShowModal: () => void;
}

const ViewSchedule = (): JSX.Element => {
  const { setModalType, isModal, setIsModal } = useStore();

  const onClickToggle = () => {
    setIsModal(!isModal);
    setModalType("");
  };

  const onClickShowModal = () => {
    setModalType("modal");
  };

  const props = {
    isModal,
    onClickToggle,
    onClickShowModal,
  };
  return <ScheduleView {...props} />;
};

const ScheduleView = ({
  isModal,
  onClickShowModal,
  onClickToggle,
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
          <ButtonItem type="scheduleCancle" onClick={onClickShowModal}>
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
    </ViewContainer>
  );
};

export default ViewSchedule;

const ViewContainer = styled.footer`
  position: relative;
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
