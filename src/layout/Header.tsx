import styled from "styled-components";
import { ArrowBackIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  title?: string;
}

interface ViewProps {
  renderTitle?: () => JSX.Element;
  backgroundColor?: string;
  iconColor?: string;
}

const Header = ({ title }: HeaderProps) => {
  const url = useLocation().pathname;
  const iconColor = url === "/" ? COLORS.white : COLORS.gray900;
  const backgroundColor = url === "/" ? COLORS.purple700 : COLORS.white;

  const renderTitle = () => {
    return title ? (
      <>
        <ArrowBackIcon fontSize={25} />
        <Typography type="subtitle6">{title}</Typography>
      </>
    ) : (
      <></>
    );
  };

  const props: ViewProps = {
    renderTitle,
    backgroundColor,
    iconColor,
  };

  return <HeaderView {...props} />;
};

const HeaderView = ({ renderTitle, backgroundColor, iconColor }: ViewProps) => {
  return (
    <HeaderContainer backgroundcolor={backgroundColor as string}>
      <TitleWrapper>{renderTitle && renderTitle()}</TitleWrapper>

      <IconWrapper>
        <BellIcon color={iconColor} fontSize={20} cursor="pointer" />
        <HamburgerIcon color={iconColor} fontSize={20} cursor="pointer" />
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ backgroundcolor: string }>`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid ${COLORS.gray300};
  background-color: ${(props) => props.backgroundcolor};
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
