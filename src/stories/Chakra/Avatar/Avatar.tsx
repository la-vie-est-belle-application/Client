import { Avatar } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export interface AvatarProps {
  badge: JSX.Element | null;
}

const AvatarComponent = ({ badge }: AvatarProps) => {
  return (
    <ChakraProvider>
      <Avatar src="https://bit.ly/broken-link">{badge && badge}</Avatar>
    </ChakraProvider>
  );
};

export default AvatarComponent;
