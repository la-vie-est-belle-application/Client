import { Stack, Text } from "@chakra-ui/react";
import NameTag from "@components/NameTag/NameTag";
import { useApplicantsStore } from "@stores/useApplicantsStore";
import { HandleAddToPendingList } from "src/types/schedule";

interface Props {
  handleAddToPendingList: HandleAddToPendingList;
}

const ScheduleApplicants = ({ handleAddToPendingList }: Props) => {
  const applicants = useApplicantsStore((state) => state.applicants);

  return (
    <Stack flexDir={"row"} flexWrap={"wrap"}>
      {applicants.applied.length > 0 ? (
        applicants.applied.map((user) => (
          <NameTag
            key={user.kakaoId}
            name={user.name}
            onClick={() => handleAddToPendingList(user)}
          />
        ))
      ) : (
        <Text>선택 가능한 인원이 없습니다.</Text>
      )}
    </Stack>
  );
};

export default ScheduleApplicants;
