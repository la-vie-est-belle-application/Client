import { Stack, Text } from "@chakra-ui/react";
import NameTagWithClose from "@components/NameTagWithClose/NameTagWithClose";
import { useTemporaryScheduleListStore } from "@stores/useScheduleListStore";
import useSelectedRoleStore from "@stores/useSelectedRoleStore";
import { HandleRemoveFromPendingList } from "src/types/schedule";

interface Props {
  handleRemoveFromPendingList: HandleRemoveFromPendingList;
}

const ScheduleTemporaryList = ({ handleRemoveFromPendingList }: Props) => {
  const selectedRole = useSelectedRoleStore((state) => state.selectedRole);
  const temporaryScheduleList = useTemporaryScheduleListStore(
    (state) => state.temporaryScheduleList,
  );

  if (!selectedRole) return;

  return (
    <Stack flexDir={"row"} flexWrap={"wrap"}>
      {temporaryScheduleList.role[selectedRole].length ? (
        temporaryScheduleList.role[selectedRole].map((user) => (
          <NameTagWithClose
            key={user.kakaoId}
            name={user.name}
            role={selectedRole}
            onClick={() => handleRemoveFromPendingList(user)}
          />
        ))
      ) : (
        <Text>선택된 인원이 없습니다.</Text>
      )}
    </Stack>
  );
};

export default ScheduleTemporaryList;
