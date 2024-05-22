import { Avatar, HStack, Select } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import Typography from "@components/Typography/Typography";
import Header from "@layout/Header";

const ScheduleView = () => {
  return <ScheduleComponentView />;
};

const ScheduleComponentView = () => {
  return (
    <>
      <Header title="전체 스케줄 조회" />
      <Container>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Select w={"10rem"}>
            <option value="2024.03">2024.03</option>
            <option value="2024.04">2024.04</option>
            <option value="2024.05" selected>
              2024.05
            </option>
            <option value="2024.06">2024.06</option>
          </Select>
          <HStack>
            <HStack>
              <Avatar />
              <Avatar />
              <Avatar />
            </HStack>
            <Typography type="caption2" color="gray800">
              태관님 외 5명이 확인했습니다
            </Typography>
          </HStack>
        </HStack>
      </Container>
    </>
  );
};

export default ScheduleView;
