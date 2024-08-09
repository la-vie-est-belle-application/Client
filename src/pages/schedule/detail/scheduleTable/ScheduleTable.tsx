import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { ROLES } from "@constants/role";

import ScheduleTableModal from "./ScheduleTableModal";
import NameTag from "@components/NameTag/NameTag";
import { AppliedScheduleUser, Roles } from "src/types/schedule";
import useSelectedRoleStore from "@stores/useSelectedRoleStore";
import { useScheduleListStore } from "@stores/useScheduleListStore";

interface Props {
  handleAddToPendingList: (user: AppliedScheduleUser) => void;
  handleRemoveFromPendingList: (user: AppliedScheduleUser) => void;
  saveScheduleChanges: () => void;
  handleOnClose: (onClose: () => void) => void;
}

const ScheduleTable = ({
  handleAddToPendingList,
  handleRemoveFromPendingList,
  saveScheduleChanges,
  handleOnClose,
}: Props) => {
  const roles = Object.values(ROLES) as Roles[];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const updateSelectedRole = useSelectedRoleStore(
    (state) => state.updateSelectedRole,
  );
  const scheduleList = useScheduleListStore((state) => state.scheduleList);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th fontSize={13}>포지션</Th>
            <Th fontSize={13}>이름</Th>
          </Tr>
        </Thead>
        <Tbody>
          {roles.map((role, index) => (
            <Tr
              key={index}
              onClick={() => {
                updateSelectedRole(role);
                onOpen();
              }}
              cursor={"pointer"}
            >
              <Td fontSize={13} fontWeight={"bold"} padding={8}>
                {role}
              </Td>
              <Td
                fontSize={13}
                padding={8}
                display={"flex"}
                flexDir={"row"}
                gap={".5rem"}
                flexWrap={"wrap"}
              >
                {scheduleList.role && scheduleList.role[role].length > 0
                  ? scheduleList.role[role].map((user, idx) => (
                      <NameTag key={idx} name={user.name} />
                    ))
                  : "인원을 등록해주세요."}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isOpen && (
        <ScheduleTableModal
          isOpen={isOpen}
          onClose={onClose}
          handleAddToPendingList={handleAddToPendingList}
          handleRemoveFromPendingList={handleRemoveFromPendingList}
          saveScheduleChanges={saveScheduleChanges}
          handleOnClose={handleOnClose}
        />
      )}
    </TableContainer>
  );
};

export default ScheduleTable;
