import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { FONT_DESIGN_SYSTEM } from "@constants/typography";
import styled from "styled-components";

interface Props {
  type?: keyof typeof FONT_DESIGN_SYSTEM;
  color?: keyof typeof COLORS;
  children: string;
}

const NoScheduleItem = ({
  type = "subtitle6",
  color = "gray700",
  children,
}: Props) => (
  <Container>
    <StyledImg src="/assets/schedule-red.svg" alt="달력" />
    <Typography type={type} color={color}>
      {children}
    </Typography>
  </Container>
);

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
