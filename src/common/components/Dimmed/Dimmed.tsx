import { DIMMED_COLORS } from "@constants/color";
import styled from "styled-components";

type DimmedTheme = keyof typeof DIMMED_COLORS;

interface Props {
  theme?: DimmedTheme;
  children: React.ReactNode;
}

const Dimmed = ({ theme = "default", children }: Props) => {
  return <StyledDimmed theme={theme}>{children}</StyledDimmed>;
};

export default Dimmed;

const StyledDimmed = styled.div<{ theme: DimmedTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => DIMMED_COLORS[props.theme as DimmedTheme]};
`;
