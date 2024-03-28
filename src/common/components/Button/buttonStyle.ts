import { COLORS } from "@constants/color";
import { css } from "styled-components";

export type ButtonDesignSystem = keyof typeof BUTTON_DESIGN_SYSTEM;

export const BUTTON_DESIGN_SYSTEM = {
  signIn: css`
    border-radius: 10px;
    background-color: ${COLORS.purple400};
    width: 20.938rem;
    height: 3.25rem;
    color: ${COLORS.white};
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  large: css`
    width: 10rem;
    height: 2.813rem;
    border-radius: 10px;
    color: ${COLORS.purple600};
    background-color: ${COLORS.purple200};
  `,
  headerIcon: css`
    background-color: ${COLORS.purple400};
    width: 1.5rem;
    height: 1.5rem;
  `,
  icon: css`
    background-color: ${COLORS.white};
    width: 1.5rem;
    height: 1.5rem;
  `,
  toggle: css`
    border-radius: 50%;
    background-color: ${COLORS.purple400};
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  scheduleCancle: css`
    border-radius: 50%;
    background-color: ${COLORS.white};
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  `,
  signOut: css`
    background-color: ${COLORS.white};
    width: 6.5rem;
    height: 1.5rem;
  `,
};
