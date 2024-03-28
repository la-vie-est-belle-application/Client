import {
  ButtonDesignSystem,
  BUTTON_DESIGN_SYSTEM,
} from "@components/Button/buttonStyle";
import styled, { CSSProperties } from "styled-components";

interface ButtonProps {
  display?: CSSProperties["display"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  border?: CSSProperties["border"];
  cursor?: CSSProperties["cursor"];
  type: ButtonDesignSystem;
}

export interface Props {
  label?: JSX.Element | JSX.Element[];
  type: ButtonDesignSystem;
  onClick?: () => void;
}

const Button = ({ type, label }: Props) => {
  return <ButtonItem type={type}>{label}</ButtonItem>;
};

const ButtonItem = styled.button<ButtonProps>(
  ({
    display = "flex",
    justifyContent = "center",
    alignItems = "center",
    border = "none",
    cursor = "pointer",
  }) => ({ display, justifyContent, alignItems, border, cursor }),
  ({ type }) => BUTTON_DESIGN_SYSTEM[type],
);

export default Button;
