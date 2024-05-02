import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Colors } from "@constants/color";

export interface IconProps {
  icon?: JSX.Element;
  backgroundColor?: Colors;
  color?: Colors;
}
const Icon = ({ color, backgroundColor }: IconProps) => {
  return (
    <div>
      <BellIcon
        width={16}
        height={19.5}
        color={color}
        backgroundColor={backgroundColor}
        margin={5}
        padding={7}
      />
      <HamburgerIcon
        width={20.3}
        height={14}
        color={color}
        backgroundColor={backgroundColor}
        padding={7}
      />
    </div>
  );
};

export default Icon;
