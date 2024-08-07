import { AddIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import { THEME_COLORS } from "@constants/color";
import useStore from "@stores/store";
import styled, { keyframes, css } from "styled-components";

const UtilityButton = () => {
  const { isModal, setIsModal } = useStore();

  const handleButtonClick = () => {
    setIsModal(!isModal);
  };

  return (
    <Container
      onClick={() => {
        console.log("##");
      }}
    >
      <StyledButtonWrap>
        <StyledButton onClick={handleButtonClick}>
          {isModal ? (
            <CloseIcon color={"white"} fontSize={"1.4rem"}></CloseIcon>
          ) : (
            <AddIcon color={"white"} fontSize={"1.4rem"}></AddIcon>
          )}
        </StyledButton>
      </StyledButtonWrap>
      {isModal && (
        <>
          <StyledButtonWrap $isModal={isModal}>
            <StyledButton>
              <EditIcon color={"white"} fontSize={"1.8rem"}></EditIcon>
            </StyledButton>
            <Typography type="body4" color="gray800">
              스케줄 등록
            </Typography>
          </StyledButtonWrap>
          <StyledButtonWrap $isModal={isModal}>
            <StyledButton>
              <DeleteIcon color={"white"} fontSize={"1.8rem"}></DeleteIcon>
            </StyledButton>
            <Typography type="body4" color="gray800">
              스케줄 삭제
            </Typography>
          </StyledButtonWrap>
        </>
      )}
    </Container>
  );
};

export default UtilityButton;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 5rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 1.2rem;
  z-index: 100;
`;

const StyledButtonWrap = styled.div<{ $isModal?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.7rem;

  ${({ $isModal }) =>
    $isModal &&
    css`
      animation: ${slideUp} 0.5s ease-out forwards;
    `}
`;

const StyledButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${THEME_COLORS.purple400};
  border: none;
  cursor: pointer;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15);
`;
