import styled from "styled-components";
import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "@stores/store.ts";
import { ROUTES } from "@constants/routes";
import { THEME_COLORS } from "@constants/color";

interface HeaderProps {
  title?: string;
}

interface HeaderViewProps {
  renderTitle?: () => JSX.Element | null;
  iconColor?: string;
  $isHome?: boolean;
  onClickHamburger: () => void;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const { isModal, setIsModal } = useStore();
  const url = useLocation().pathname;
  const homeUrl = "/";
  const iconColor = url === homeUrl ? THEME_COLORS.white : THEME_COLORS.gray900;
  const $isHome = url === homeUrl;

  const onClickBackButton = () => {
    navigate(ROUTES.HOME);
  };

  const renderTitle = () => {
    return title ? (
      <>
        <BackButton onClick={onClickBackButton}>
          <ArrowBackIcon fontSize={25} marginRight={4} />
        </BackButton>
        <Typography type="subtitle6">{title}</Typography>
      </>
    ) : null;
  };

  const onClickHamburger = () => {
    setIsModal(!isModal);
  };

  const props: HeaderViewProps = {
    renderTitle,
    iconColor,
    $isHome,
    onClickHamburger,
  };

  return <HeaderView {...props} />;
};

const HeaderView = ({
  renderTitle,
  iconColor,
  $isHome,
  onClickHamburger,
}: HeaderViewProps) => {
  return (
    <HeaderContainer $isHome={$isHome}>
      <TitleWrapper>{renderTitle && renderTitle()}</TitleWrapper>

      <IconWrapper>
        <HamburgerIcon
          color={iconColor}
          fontSize={20}
          cursor="pointer"
          marginLeft={3}
          onClick={onClickHamburger}
        />
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<Pick<HeaderViewProps, "$isHome">>`
  position: relative;
  flex: 0 0 auto;
  z-index: 1s;
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border-bottom: ${(props) =>
    props.$isHome ? "none" : `1px solid ${THEME_COLORS.gray300}`};
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

const BackButton = styled.button`
  display: flex;

  padding: 0 0.4rem 0 0;
  font-size: 2rem;
`;
export default Header;
