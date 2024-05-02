import { Tooltip } from "@chakra-ui/react";
import { COLORS } from "@constants/color";

interface TooltipProps {
  label: string;
}

const TooltipComponent = ({ label }: TooltipProps) => {
  return (
    <Tooltip
      hasArrow
      label={label}
      bg={COLORS.purple300}
      color={COLORS.white}
      padding={"3px 8px"}
    >
      <span>Hover Here!</span>
    </Tooltip>
  );
};

export default TooltipComponent;
