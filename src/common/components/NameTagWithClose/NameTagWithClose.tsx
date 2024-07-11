import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { COLORS } from "@constants/color";
import { Roles } from "src/interfaces/schedule";

interface Props {
  name: string;
  role: Roles;
  onDeleteUserFromScheduleList: (selectedRole: Roles, name: string) => void;
}
const NameTagWithClose = ({
  name,
  role,
  onDeleteUserFromScheduleList,
}: Props) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={"lg"}
        borderRadius="full"
        variant="solid"
        backgroundColor={COLORS.purple400}
        cursor={"pointer"}
        onClick={() => onDeleteUserFromScheduleList(role, name)}
      >
        <TagLabel fontSize={12}>{name}</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  );
};

export default NameTagWithClose;
