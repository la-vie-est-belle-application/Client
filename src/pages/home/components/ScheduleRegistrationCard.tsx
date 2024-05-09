import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card, HStack, Image, Wrap, WrapItem } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { RGB_COLORS } from "@constants/color";
import scheduleGreen from "@assets/schedule-green.svg";
import { Link } from "react-router-dom";

const ScheduleRegistrationCard = () => {
  return (
    <Link to={"/"}>
      <Card
        borderRadius={"1.5rem"}
        backgroundColor={`rgba(${RGB_COLORS.white_01})`}
      >
        <HStack
          paddingY={"1.2rem"}
          paddingX={"1.8rem"}
          justifyContent={"space-between"}
        >
          <Wrap direction={"column"} spacing={"1rem"}>
            <WrapItem alignItems={"center"}>
              <Typography type="body3" color={"white"}>
                일정 등록
              </Typography>
              <ChevronRightIcon boxSize={"2.4rem"} color={"white"} />
            </WrapItem>
            <WrapItem>
              <Typography type="subtitle6" color="white">
                근무를 위한 스케줄 등록을 해주세요.
              </Typography>
            </WrapItem>
          </Wrap>
          <Wrap>
            <WrapItem>
              <Image src={scheduleGreen} alt="스케줄 달력" />
            </WrapItem>
          </Wrap>
        </HStack>
      </Card>
    </Link>
  );
};

export default ScheduleRegistrationCard;
