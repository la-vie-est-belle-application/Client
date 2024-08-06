import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { THEME_COLORS } from "@constants/color";
import { Roles, User } from "src/types/schedule";

interface Props extends Pick<User, "name"> {
  role: Roles;
  onClick: () => void;
}
const NameTagWithClose = ({ name, onClick }: Props) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={"lg"}
        borderRadius="full"
        variant="solid"
        backgroundColor={THEME_COLORS.purple400}
        cursor={"pointer"}
        onClick={onClick}
      >
        <TagLabel fontSize={12}>{name}</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  );
};

export default NameTagWithClose;
