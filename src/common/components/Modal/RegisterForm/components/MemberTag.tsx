import { COLORS } from "@constants/color";
import { Tag, TagLabel, TagCloseButton, TagRightIcon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface TagProps {
  name: string[] | { name: string }[];
}

const MemberTag = ({ name }: TagProps) => {
  return (
    <>
      {name.map((member, index) => {
        return (
          <Tag
            key={index}
            size={"lg"}
            backgroundColor={COLORS.purple800}
            color={COLORS.white}
            padding={"0.2rem 1rem"}
            borderRadius={6}
            marginRight={3}
            cursor={"pointer"}
          >
            <TagLabel fontSize={12} fontWeight={"bold"}>
              {typeof member === "string" ? member : member.name}
            </TagLabel>
            {typeof member === "string" ? (
              <TagCloseButton />
            ) : (
              <TagRightIcon as={AddIcon} fontSize={7} />
            )}
          </Tag>
        );
      })}
    </>
  );
};

export default MemberTag;
