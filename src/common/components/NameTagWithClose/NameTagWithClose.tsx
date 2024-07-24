import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { COLORS } from "@constants/color";
import { Roles, User } from "src/interfaces/schedule";

interface Props extends Pick<User, "userName"> {
  role: Roles;
  onClick: () => void;
}
const NameTagWithClose = ({ userName, onClick }: Props) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={"lg"}
        borderRadius="full"
        variant="solid"
        backgroundColor={COLORS.purple400}
        cursor={"pointer"}
        onClick={onClick}
      >
        <TagLabel fontSize={12}>{userName}</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  );
};

export default NameTagWithClose;
