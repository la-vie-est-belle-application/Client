import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { User } from "src/types/schedule";

interface Props {
  userInfo: User | null;
}

const UserProfile = ({ userInfo }: Props) => {
  if (!userInfo) return;

  const { name } = userInfo;

  return (
    <Wrap align={"center"} spacing={".6rem"}>
      <WrapItem>
        <Avatar />
      </WrapItem>
      <WrapItem>
        <Typography type="subtitle6" color="white">
          {name}
        </Typography>
      </WrapItem>
    </Wrap>
  );
};

export default UserProfile;
