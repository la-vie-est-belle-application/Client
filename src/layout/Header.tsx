import styled from "styled-components";
import { ArrowBackIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  title?: string;
}

interface ViewProps {
  renderTitle?: () => JSX.Element | null;
  backgroundColor?: string;
  iconColor?: string;
  isHome?: boolean;
}

const Header = ({ title }: HeaderProps) => {
  const url = useLocation().pathname;
  const homeUrl = "/";
  const iconColor = url === homeUrl ? COLORS.white : COLORS.gray900;
  const backgroundColor = url === homeUrl ? COLORS.purple700 : COLORS.white;
  const isHome = url === homeUrl;

  const renderTitle = () => {
    return title ? (
      <>
        <ArrowBackIcon fontSize={25} />
        <Typography type="subtitle6">{title}</Typography>
      </>
    ) : null;
  };

  const props: ViewProps = {
    renderTitle,
    backgroundColor,
    iconColor,
    isHome,
  };

  return <HeaderView {...props} />;
};

const HeaderView = ({ renderTitle, iconColor, isHome }: ViewProps) => {
  return (
    <HeaderContainer isHome={isHome}>
      <TitleWrapper>{renderTitle && renderTitle()}</TitleWrapper>

      <IconWrapper>
        <BellIcon color={iconColor} fontSize={20} cursor="pointer" />
        <HamburgerIcon color={iconColor} fontSize={20} cursor="pointer" />
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<Pick<ViewProps, "isHome">>`
  position: relative;
  z-index: 99;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: ${(props) =>
    props.isHome ? "none" : "1px solid ${COLORS.gray300}"};
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
