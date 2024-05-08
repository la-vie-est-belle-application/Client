import { COLORS } from "@constants/color";
import styled from "styled-components";
import scheduleRed from "@assets/schedule-red.svg";
import { Image } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import ButtonItem from "@components/Button/Button";

const ViewSchedule = () => {
  return (
    <ViewContainer>
      <ImageWrapper>
        <Image src={scheduleRed} boxSize="80px" objectFit="cover" />
        <Typography type="subtitle6" color={"gray700"}>
          등록된 일정이 없습니다!
        </Typography>
      </ImageWrapper>
      <ButtonItem type="toggle">
        <AddIcon color="white" fontSize={14} />
      </ButtonItem>
    </ViewContainer>
  );
};

export default ViewSchedule;

const ViewContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.gray100};
  width: 375px;
  height: 410px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
