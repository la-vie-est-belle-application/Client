import { THEME_COLORS } from "@constants/color";
import { css } from "styled-components";

export type ButtonDesignSystem = keyof typeof BUTTON_DESIGN_SYSTEM;
export type ButtonSizeSystem = keyof typeof BUTTON_SIZE_SYSTEM;

export const BUTTON_DESIGN_SYSTEM = {
  signIn: css`
    border-radius: 10px;
    background-color: ${THEME_COLORS.purple400};
    width: 100%;
    max-width: 35rem;
    color: ${THEME_COLORS.white};
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    align-self: center;
  `,
  large: css`
    flex: 1 1 0;
    padding: 1.2rem;
    border-radius: 10px;
    color: ${THEME_COLORS.purple600};
    background-color: ${THEME_COLORS.purple200};
  `,
  headerIcon: css`
    background-color: ${THEME_COLORS.purple400};
    width: 3rem;
    height: 3rem;
  `,
  icon: css`
    background-color: ${THEME_COLORS.white};
    width: 3rem;
    height: 3rem;
  `,
  toggle: css`
    border-radius: 50%;
    background-color: ${THEME_COLORS.purple400};
    width: 5rem;
    height: 5rem;
    position: fixed;
    bottom: 2.5rem;
    right: 1.4rem;
    z-index: 60;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  scheduleCancel: css`
    border-radius: 50%;
    background-color: ${THEME_COLORS.white};
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 13.6rem;
    right: 1.4rem;
    z-index: 60;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  signOut: css`
    background-color: ${THEME_COLORS.white};
    width: 8rem;
    height: 1.5rem;
  `,
};

export const BUTTON_SIZE_SYSTEM = {
  medium: css`
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
  toggleMedium: css`
    width: 3.5rem;
    height: 3.5rem;
  `,
  toggleLarge: css`
    width: 4.5rem;
    height: 4.5rem;
  `,
};
