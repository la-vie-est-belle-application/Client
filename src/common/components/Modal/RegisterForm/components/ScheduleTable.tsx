import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { COLORS } from "@constants/color";
import position from "@datas/Position.json";
import MemberTag from "./MemberTag";

interface TableProps {
  renderPosition: () => JSX.Element[];
}

const ScheduleTable = () => {
  const renderPosition = () => {
    return position.map((list, index) => {
      return (
        <Tr key={index} padding={10}>
          <Td fontSize={13} fontWeight={"bold"} padding={10}>
            {list.position}
          </Td>
          <Td>{list.name ? <MemberTag name={list.name} /> : null}</Td>
          <Td fontSize={13} padding={6} isNumeric>
            {list.other}
          </Td>
        </Tr>
      );
    });
  };

  const props = {
    renderPosition,
  };

  return <ScheduleTableView {...props} />;
};

const ScheduleTableView = ({ renderPosition }: TableProps) => {
  return (
    <TableContainer
      marginTop={12}
      backgroundColor={COLORS.white}
      padding={"3rem 1.5rem"}
      borderRadius={12}
    >
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr padding={10}>
            <Th fontSize={13}>포지션</Th>
            <Th fontSize={13}>이름</Th>
            <Th fontSize={13} isNumeric>
              비고
            </Th>
          </Tr>
        </Thead>
        <Tbody>{renderPosition()}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
