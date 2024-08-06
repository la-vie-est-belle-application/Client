import { Stack, Text } from "@chakra-ui/react";
import NameTagWithClose from "@components/NameTagWithClose/NameTagWithClose";
import {
  HandleRemoveFromPendingList,
  Roles,
  TemporaryScheduleList,
} from "src/types/schedule";

interface Props {
  temporaryScheduleList: TemporaryScheduleList;
  selectedRole: Roles;
  handleRemoveFromPendingList: HandleRemoveFromPendingList;
}

const ScheduleTemporaryList = ({
  temporaryScheduleList,
  selectedRole,
  handleRemoveFromPendingList,
}: Props) => {
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
