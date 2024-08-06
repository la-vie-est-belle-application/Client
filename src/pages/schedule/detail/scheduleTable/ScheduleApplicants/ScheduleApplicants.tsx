import { Stack, Text } from "@chakra-ui/react";
import NameTag from "@components/NameTag/NameTag";
import { Applicants, HandleAddToPendingList } from "src/types/schedule";

interface Props {
  applicants: Applicants;
  handleAddToPendingList: HandleAddToPendingList;
}

const ScheduleApplicants = ({ applicants, handleAddToPendingList }: Props) => {
  return (
    <Stack flexDir={"row"} flexWrap={"wrap"}>
      {applicants.applied.length > 0 ? (
        applicants.applied?.map((user) => (
          <NameTag
            key={user.kakaoId}
            name={user.name}
            onClick={() => handleAddToPendingList(user)}
          ></NameTag>
        ))
      ) : (
        <Text>선택 가능한 인원이 없습니다.</Text>
      )}
    </Stack>
  );
};

export default ScheduleApplicants;
