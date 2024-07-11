import { HStack, Tag, TagLabel } from "@chakra-ui/react";
import { COLORS } from "@constants/color";

interface Props {
  name: string;
  onClick: () => void;
}
const NameTag = ({ name, onClick }: Props) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={"lg"}
        borderRadius="full"
        variant="solid"
        backgroundColor={COLORS.purple400}
        cursor={"pointer"}
        padding={".5rem 1.5rem"}
        onClick={onClick}
      >
        <TagLabel fontSize={13}>{name}</TagLabel>
      </Tag>
    </HStack>
  );
};

export default NameTag;
