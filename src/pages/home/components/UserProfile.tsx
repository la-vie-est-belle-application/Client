import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";

const UserProfile = () => {
  return (
    <Wrap align={"center"} spacing={".6rem"}>
      <WrapItem>
        <Avatar />
      </WrapItem>
      <WrapItem>
        <Typography type="subtitle6" color="white">
          태관
        </Typography>
      </WrapItem>
    </Wrap>
  );
};

export default UserProfile;
