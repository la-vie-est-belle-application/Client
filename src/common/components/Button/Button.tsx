import styled from "styled-components";

export interface ButtonProps {
  backgroundColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  textAlign?: string;
  fontSize?: string;
  color?: string;
  boxShadow?: string;
}

const Button = styled.button<ButtonProps>(() => ({}));

export default Button;
