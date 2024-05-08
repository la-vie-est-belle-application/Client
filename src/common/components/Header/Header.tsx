import styled from "styled-components";
import { ArrowBackIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <ArrowBackIcon fontSize={25} />
        <Typography type="subtitle6">{title}</Typography>
      </TitleWrapper>

      <IconWrapper>
        <BellIcon fontSize={20} cursor="pointer" />
        <HamburgerIcon fontSize={20} cursor="pointer" />
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #ffffff;
  color: #001f3f;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid ${COLORS.gray200};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
