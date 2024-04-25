import {
  ButtonDesignSystem,
  ButtonSizeSystem,
  BUTTON_DESIGN_SYSTEM,
  BUTTON_SIZE_SYSTEM,
} from "@components/Button/buttonStyle";
import { FontDesignSystem } from "@constants/typography";
import Typography from "@stories/Typography/Typography";
import styled, { CSSProperties } from "styled-components";

interface ButtonStyleProps {
  disabled?: boolean;
  size?: ButtonSizeSystem;
  type: ButtonDesignSystem;
  display?: CSSProperties["display"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  border?: CSSProperties["border"];
  cursor?: CSSProperties["cursor"];
}

export interface ButtonProps {
  disabled?: boolean;
  size?: ButtonSizeSystem;
  type: ButtonDesignSystem;
  fontType?: FontDesignSystem;
  label?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({ size, type, fontType, label, icon }: ButtonProps) => {
  return (
    <ButtonItem size={size} type={type}>
      {icon && icon}
      <Typography type={fontType}>{label}</Typography>
    </ButtonItem>
  );
};

const ButtonItem = styled.button<ButtonStyleProps>(
  ({
    display = "flex",
    justifyContent = "center",
    alignItems = "center",
    border = "none",
    cursor = "pointer",
  }) => ({
    display,
    justifyContent,
    alignItems,
    border,
    cursor,
  }),
  ({ type }) => BUTTON_DESIGN_SYSTEM[type],
  ({ size }) => BUTTON_SIZE_SYSTEM[size as ButtonSizeSystem],
);

export default Button;
