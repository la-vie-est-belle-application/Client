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
import NameTagWithClose from "@components/NameTagWithClose/NameTagWithClose";
import { Role } from "@constants/role";

import { Roles, ScheduleList } from "src/interfaces/schedule";
import ScheduleTableModal from "./ScheduleTableModal";

interface Props {
  selectedRole: Roles | null;
  scheduleList: ScheduleList;
  onSelectRole: (role: Roles) => void;
  onDeleteUserFromScheduleList: (selectedRole: Roles, userName: string) => void;
}

const ScheduleTable = ({
  selectedRole,
  onSelectRole,
  scheduleList,
  onDeleteUserFromScheduleList,
}: Props) => {
  const roles = Object.values(Role) as Roles[];
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                onSelectRole(role);
                onOpen();
              }}
              cursor={"pointer"}
            >
              <Td fontSize={13} fontWeight={"bold"} padding={8}>
                {role}
              </Td>
              <Td fontSize={13} padding={8}>
                {scheduleList.role && scheduleList.role[role]!.length > 0
                  ? scheduleList.role[role]!.map((name, idx) => (
                      <NameTagWithClose
                        key={idx}
                        name={name}
                        role={role}
                        onDeleteUserFromScheduleList={
                          onDeleteUserFromScheduleList
                        }
                      />
                    ))
                  : "없어요"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isOpen && (
        <ScheduleTableModal
          isOpen={isOpen}
          onClose={onClose}
          selectedRole={selectedRole}
        />
      )}
    </TableContainer>
  );
};

export default ScheduleTable;
