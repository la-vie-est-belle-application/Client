import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";

const UserProfile = () => {
  return (
    <Wrap align={"center"} spacing={".6rem"}>
      <WrapItem>
        <Avatar />
      </WrapItem>
      <WrapItem>
        <Typography type="subtitle6" color={COLORS.white}>
          전옥진
        </Typography>
      </WrapItem>
    </Wrap>
  );
};

export default UserProfile;
