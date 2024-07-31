import { Button, Input, Stack } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";

const Pay = () => {
  return (
    <>
      <Stack alignItems={"center"}>
        <Typography>시급을 입력해주세요.</Typography>
      </Stack>
      <Stack flexDir={"row"} mt={"2rem"} p={".5rem 0"}>
        <Input type="number" min={10000} max={20000} step={1000}></Input>
        <Button flexGrow={"1"}>등록</Button>
      </Stack>
    </>
  );
};

export default Pay;
