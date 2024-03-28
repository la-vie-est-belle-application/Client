import { COLORS } from "@constants/color";
import { ButtonProps } from "./Button";

type ButtonStyles = {
  [key: string]: ButtonProps;
};

const ButtonStyles: ButtonStyles = {
  signIn: {
    borderRadius: "10px",
    backgroundColor: COLORS.purple400,
    width: "20.938rem",
    height: "3.25rem",
    color: COLORS.white,
    boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
  },
  large: {
    width: "10rem",
    height: "2.813rem",
    borderRadius: "10px",
    color: COLORS.purple600,
    backgroundColor: COLORS.purple200,
  },
  icon: {
    backgroundColor: COLORS.purple400,
    width: "1.5rem",
    height: "1.5rem",
  },
  toggle: {
    borderRadius: "50%",
    backgroundColor: COLORS.purple400,
    width: "2.5rem",
    height: "2.5rem",
    boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
  },
  scheduleCancle: {
    borderRadius: "50%",
    backgroundColor: COLORS.white,
    width: "2.5rem",
    height: "2.5rem",
    boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
  },
  signOut: { backgroundColor: COLORS.white, width: "6.5rem", height: "1.5rem" },
};

export default ButtonStyles;
