import styled from "styled-components";

interface ButtonProps {
  label: JSX.Element | JSX.Element[];
  backgroundColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  textAlign?: string;
  fontSize?: string;
  color?: string;
  boxShadow?: string;
  onClick?: () => void;
}

export const Button = ({ ...props }: ButtonProps): JSX.Element => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;
