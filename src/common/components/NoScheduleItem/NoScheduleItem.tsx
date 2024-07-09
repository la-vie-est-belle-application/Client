import Typography from "@components/Typography/Typography";
import styled from "styled-components";

const NoScheduleItem = () => {
  return (
    <Container>
      <StyledImg src="/assets/schedule-red.svg" alt="달력"></StyledImg>
      <Typography type="subtitle6" color="gray700">
        등록된 일정이 없습니다
      </Typography>
    </Container>
  );
};

export default NoScheduleItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledImg = styled.img`
  width: 8rem;
  height: 8rem;
`;
