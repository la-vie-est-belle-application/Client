import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { COLORS } from "@constants/color";

interface Props {
  name: string;
}
const NameTagWithClose = ({ name }: Props) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={"lg"}
        borderRadius="full"
        variant="solid"
        backgroundColor={COLORS.purple400}
        cursor={"pointer"}
      >
        <TagLabel fontSize={12}>{name}</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  );
};

export default NameTagWithClose;
