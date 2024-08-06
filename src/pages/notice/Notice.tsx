import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Container from "@components/Container/Container";
import ModalComponent from "@components/Modal/Modal";
import Typography from "@components/Typography/Typography";
import { THEME_COLORS } from "@constants/color";

import { MODAL_TEXT } from "@constants/modalText";
import Header from "@layout/Header";
import useStore from "@stores/store";

const Notice = () => {
  const { setIsModal } = useStore();

  return (
    <>
      <Header title="공지사항" />
      <Container>
        <Stack gap={"1.2rem"}>
          <HStack justifyContent={"space-between"}>
            <Box>
              <Select>
                <option value={"전체보기"}>
                  <Typography type="body3">전체보기</Typography>
                </option>
              </Select>
            </Box>
            <Box>
              <Button bg={THEME_COLORS.purple500}>
                <Typography type={"body4"} color="white">
                  글쓰기
                </Typography>
              </Button>
            </Box>
          </HStack>
          <TableContainer
            border={`1px solid ${THEME_COLORS.gray300}`}
            borderRadius={"1.2rem"}
            p={".5rem 0"}
          >
            <Table variant="simple">
              <TableCaption>12345</TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize={10}>카테고리</Th>
                  <Th fontSize={10}>제목</Th>
                  <Th fontSize={10} paddingRight={"2.1rem"} isNumeric>
                    삭제
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize={13}>inches</Td>
                  <Td fontSize={13}>millimetres (mm)</Td>
                  <Td fontSize={13} isNumeric>
                    <Button
                      bg={THEME_COLORS.purple500}
                      _hover={{ background: THEME_COLORS.purple300 }}
                      onClick={() => {
                        setIsModal(true);
                      }}
                    >
                      <DeleteIcon color={THEME_COLORS.white} />
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
        <ModalComponent
          title={MODAL_TEXT.notice.delete.title}
          description={MODAL_TEXT.notice.delete.description}
        ></ModalComponent>
      </Container>
    </>
  );
};

export default Notice;
