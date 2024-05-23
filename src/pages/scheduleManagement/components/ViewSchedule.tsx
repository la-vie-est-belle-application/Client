import { COLORS } from "@constants/color.ts";
import styled from "styled-components";
import scheduleRed from "/assets/schedule-red.svg";
import { Image } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography.tsx";
import ButtonGroup from "@components/Button/ButtonGroup.tsx";

const ViewSchedule = () => {
  return <ScheduleView />;
};

const ScheduleView = () => {
  return (
    <ViewContainer>
      <ImageWrapper>
        <Image src={scheduleRed} boxSize="80px" objectFit="cover" />
        <Typography type="subtitle6" color={"gray700"}>
          등록된 일정이 없습니다!
        </Typography>
      </ImageWrapper>
      <ButtonGroup />
    </ViewContainer>
  );
};

export default ViewSchedule;

const ViewContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.5;
  background-color: ${COLORS.gray100};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
