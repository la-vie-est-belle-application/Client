import { Button, ChakraProvider } from "@chakra-ui/react";
import { COLORS } from "@constants/color";
import Typography from "@stories/Typography/Typography";

interface ButtonProps {
  color?: string;
  backgroundColor: string;
  label: string | JSX.Element;
}

const ButtonComponent = ({ color, backgroundColor, label }: ButtonProps) => {
  return (
    <ChakraProvider>
      <Button
        color={color ? color : COLORS.white}
        backgroundColor={backgroundColor}
      >
        <Typography>{label}</Typography>
      </Button>
    </ChakraProvider>
  );
};

export default ButtonComponent;
