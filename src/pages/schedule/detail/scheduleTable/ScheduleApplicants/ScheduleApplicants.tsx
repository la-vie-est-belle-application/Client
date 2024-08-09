import { Stack } from "@chakra-ui/react";
import NameTag from "@components/NameTag/NameTag";
import { useGetApplicants } from "@hooks/queries/queries";
import { HandleAddToPendingList } from "src/types/schedule";

interface Props {
  handleAddToPendingList: HandleAddToPendingList;
}

const ScheduleApplicants = ({ handleAddToPendingList }: Props) => {
  const {} = useGetApplicants();

  return (
    <Stack flexDir={"row"} flexWrap={"wrap"}>
      {data.data.applied.map((user) => (
        <NameTag
          key={user.kakaoId}
          name={user.name}
          onClick={() => handleAddToPendingList(user)}
        />
      ))}
    </Stack>
  );
};

export default ScheduleApplicants;
