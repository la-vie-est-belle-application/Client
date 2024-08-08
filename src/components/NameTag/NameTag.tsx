import { HStack, Tag, TagLabel } from "@chakra-ui/react";
import { THEME_COLORS } from "@constants/color";
import { User } from "src/types/schedule";

interface Props extends Pick<User, "name"> {
  onClick?: () => void;
}

const NameTag = ({ name, onClick }: Props) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={"lg"}
        borderRadius="full"
        variant="solid"
        backgroundColor={THEME_COLORS.purple400}
        cursor={"pointer"}
        padding={".5rem 1.5rem"}
        onClick={onClick}
      >
        <TagLabel fontSize={12}>{name}</TagLabel>
      </Tag>
    </HStack>
  );
};

export default NameTag;
