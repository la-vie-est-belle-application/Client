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
  onClickShowModal: () => void;
}

const ViewSchedule = (): JSX.Element => {
  const { isModal, setIsModal } = useStore();

  const onClickShowModal = () => {
    setIsModal(!isModal);
  };

  const props = {
    isModal,
    onClickShowModal,
  };
  return <ScheduleView {...props} />;
};

const ScheduleView = ({ isModal, onClickShowModal }: ViewScheduleProps) => {
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
          <ButtonItem type="scheduleCancle">
            <DeleteIcon color={COLORS.gray700} fontSize={25} />
          </ButtonItem>
          <ButtonItem style={{ bottom: "8rem" }} type="toggle">
            <EditIcon color={COLORS.white} fontSize={25} />
          </ButtonItem>
        </>
      )}
      <ButtonItem type="toggle" onClick={onClickShowModal}>
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
