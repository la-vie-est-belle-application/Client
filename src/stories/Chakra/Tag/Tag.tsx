import { Badge } from "@chakra-ui/react";
import { COLORS } from "@constants/color";
import { ChakraProvider } from "@chakra-ui/react";

export interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <ChakraProvider>
      <Badge
        style={{ padding: "2px 8px", borderRadius: "6px" }}
        backgroundColor={COLORS.purple400}
        color={COLORS.white}
      >
        {name}
      </Badge>
    </ChakraProvider>
  );
};

export default Tag;
