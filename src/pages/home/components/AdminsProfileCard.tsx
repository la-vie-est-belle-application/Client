import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import ButtonItem from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import ckPhone from "@assets/ckPhone.svg";
import message from "@assets/AiFillMessage.svg";

interface AdminsProfileCardProps {
  name: string;
  position: string;
  phoneNumber: string;
}

const AdminsProfileCard = ({
  name,
  position,
  phoneNumber,
}: AdminsProfileCardProps) => {
  return (
    <Card borderRadius={"1.5rem"} pb={"3rem"}>
      <CardBody>
        <Wrap align={"center"} spacing={"1.4rem"}>
          <WrapItem>
            <Avatar size={"xl"} />
          </WrapItem>
          <Wrap direction={"column"}>
            <WrapItem alignItems={"center"} gap={".4rem"}>
              <Typography type="subtitle6" color="gray900">
                {name}
              </Typography>
              <Typography type="body3" color="gray700">
                {position}
              </Typography>
            </WrapItem>
            <Stack direction={"row"} h={"2rem"}>
              <Typography type="body3" color="gray600">
                {phoneNumber}
              </Typography>
            </Stack>
          </Wrap>
        </Wrap>
      </CardBody>
      <CardFooter>
        <Wrap spacing={".8rem"} flex={"1 1 0"}>
          <WrapItem flex={"1"}>
            <ButtonItem type="large" $gap={".8rem"}>
              <Image
                src={ckPhone}
                boxSize={"2.4rem"}
                objectFit={"cover"}
              ></Image>
              <Typography type="body3" color={"purple600"}>
                전화걸기
              </Typography>
            </ButtonItem>
          </WrapItem>
          <WrapItem flex={"1"}>
            <ButtonItem type="large" $gap={".8rem"}>
              <Image
                src={message}
                boxSize={"2.4rem"}
                objectFit={"cover"}
              ></Image>
              <Typography type="body3" color="purple600">
                대화하기
              </Typography>
            </ButtonItem>
          </WrapItem>
        </Wrap>
      </CardFooter>
    </Card>
  );
};

export default AdminsProfileCard;
