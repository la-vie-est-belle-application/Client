import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Role } from "@constants/role";

const ScheduleTable = () => {
  const roles = Object.values(Role);

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
                console.log(role);
              }}
              cursor={"pointer"}
            >
              <Td fontSize={13} fontWeight={"bold"} padding={8}>
                {role}
              </Td>
              <Td fontSize={13} padding={8}>
                이름을 여기에 추가하세요
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
