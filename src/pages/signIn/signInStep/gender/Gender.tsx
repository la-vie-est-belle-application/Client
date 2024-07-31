import { Button, Stack } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";

const Gender = () => {
  return (
    <>
      <Stack alignItems={"center"}>
        <Typography>성별을 선택해주세요.</Typography>
      </Stack>
      <Stack flexDir={"row"} mt={"2rem"} p={".5rem 0"}>
        <Button colorScheme="cyan" flexGrow={"1"}>
          남성
        </Button>
        <Button colorScheme="pink" flexGrow={"1"}>
          여성
        </Button>
      </Stack>
    </>
  );
};

export default Gender;
