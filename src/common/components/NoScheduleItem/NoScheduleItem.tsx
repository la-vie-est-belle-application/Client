import Typography from "@components/Typography/Typography";
import styled from "styled-components";

interface Props {
  text: string;
}

const NoScheduleItem = ({ text }: Props) => {
  return (
    <Container>
      <StyledImg src="/assets/schedule-red.svg" alt="달력"></StyledImg>
      <Typography type="subtitle6" color="gray700">
        {text}
      </Typography>
    </Container>
  );
};

export default NoScheduleItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  min-height: 30rem;
`;

const StyledImg = styled.img`
  width: 8rem;
  height: 8rem;
`;