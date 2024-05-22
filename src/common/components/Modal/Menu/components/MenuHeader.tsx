import { CloseIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import Typography from "@components/Typography/Typography.tsx";
import styled from "styled-components";
import useStore from "@stores/store.ts";

interface MenuHeaderViewProps {
  onClickCloseIcon: () => void;
}

const MenuHeader = () => {
  const { setModalType, isModal, setIsModal } = useStore();
  const onClickCloseIcon = () => {
    setIsModal(!isModal);
    setModalType("");
  };

  const props = {
    onClickCloseIcon,
  };
  return <MenuHeaderView {...props} />;
};

const MenuHeaderView = ({ onClickCloseIcon }: MenuHeaderViewProps) => {
  return (
    <HeaderContainer>
      <TopArea>
        <CloseIcon
          color="#2D3748"
          fontSize={16}
          cursor={"pointer"}
          onClick={onClickCloseIcon}
        />
      </TopArea>
      <UserArea>
        <Avatar
          src="https://bit.ly/broken-link"
          width={"4.8rem"}
          height={"4.8rem"}
          marginRight={11}
        ></Avatar>
        <UserInfoArea>
          <Typography type="subtitle6">이름</Typography>
          <Typography type="caption1">youp456@naver.com</Typography>
        </UserInfoArea>
      </UserArea>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  flex: 1;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 0 2.5rem 0;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MenuHeader;
