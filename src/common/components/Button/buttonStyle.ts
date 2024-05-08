import { COLORS } from "@constants/color";
import { css } from "styled-components";

export type ButtonDesignSystem = keyof typeof BUTTON_DESIGN_SYSTEM;
export type ButtonSizeSystem = keyof typeof BUTTON_SIZE_SYSTEM;

export const BUTTON_DESIGN_SYSTEM = {
  signIn: css`
    border-radius: 10px;
    background-color: ${COLORS.purple400};
    width: 100%;
    padding: 1.2rem;
    color: ${COLORS.white};
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  large: css`
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    color: ${COLORS.purple600};
    background-color: ${COLORS.purple200};
  `,
  headerIcon: css`
    background-color: ${COLORS.purple400};
    width: 3rem;
    height: 3rem;
  `,
  icon: css`
    background-color: ${COLORS.white};
    width: 3rem;
    height: 3rem;
  `,
  toggle: css`
    border-radius: 50%;
    background-color: ${COLORS.purple400};
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    bottom: 27px;
    right: 14px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  scheduleCancle: css`
    border-radius: 50%;
    background-color: ${COLORS.white};
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  signOut: css`
    background-color: ${COLORS.white};
    width: 8rem;
    height: 1.5rem;
  `,
};

export const BUTTON_SIZE_SYSTEM = {
  midium: css`
    width: 10rem;
    height: 2.5rem;
  `,
  large: css`
    width: 13rem;
    height: 3.5rem;
  `,
  toggleSmall: css`
    width: 3rem;
    height: 3rem;
  `,
  toggleMidium: css`
    width: 3.5rem;
    height: 3.5rem;
  `,
  toggleLarge: css`
    width: 4.5rem;
    height: 4.5rem;
  `,
};
