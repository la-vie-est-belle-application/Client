import { HStack, Tag, TagLabel } from "@chakra-ui/react";
import { COLORS } from "@constants/color";
import { User } from "@interfaces/schedule";

interface Props extends Pick<User, "userName"> {
  onClick?: () => void;
}

const NameTag = ({ userName, onClick }: Props) => {
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
        <TagLabel fontSize={12}>{userName}</TagLabel>
      </Tag>
    </HStack>
  );
};

export default NameTag;
