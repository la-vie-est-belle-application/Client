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
  $gap?: CSSProperties["gap"];
  type: ButtonDesignSystem;
  onClick?: () => void;
}

const ButtonItem = styled.button<ButtonProps>(
  ({
    display = "flex",
    justifyContent = "center",
    alignItems = "center",
    border = "none",
    cursor = "pointer",
    $gap = "unset",
  }) => ({ display, justifyContent, alignItems, border, cursor, $gap }),
  ({ type }) => BUTTON_DESIGN_SYSTEM[type],
);

export default ButtonItem;
