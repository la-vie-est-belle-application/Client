import { Stack, Text } from "@chakra-ui/react";
import NameTag from "@components/NameTag/NameTag";
import { useGetApplicants } from "@hooks/queries/queries";
import { INITIAL_APPLICANTS } from "@reducers/applicantsReducer";
import useSelectedDateStore from "@stores/useSelectedDateStore";
import { HandleAddToPendingList } from "src/types/schedule";

interface Props {
  handleAddToPendingList: HandleAddToPendingList;
}

const ScheduleApplicants = ({ handleAddToPendingList }: Props) => {
  const selectedDate = useSelectedDateStore((state) => state.selectedDate);
  const applicantsQuery = useGetApplicants(selectedDate?.toString());
  const { isLoading, isError } = applicantsQuery;

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  return (
    <Stack flexDir={"row"} flexWrap={"wrap"}>
      {INITIAL_APPLICANTS.applied.length > 0 ? (
        INITIAL_APPLICANTS.applied.map((user) => (
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
