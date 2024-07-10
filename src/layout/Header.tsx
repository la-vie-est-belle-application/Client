import styled from "styled-components";
import { ArrowBackIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "@stores/store.ts";

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
  const { isModal, setModalType, setIsModal } = useStore();
  const url = useLocation().pathname;
  const homeUrl = "/";
  const iconColor = url === homeUrl ? COLORS.white : COLORS.gray900;
  const $isHome = url === homeUrl;

  const onClickBackButton = () => {
    navigate(-1);
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
    setModalType("menu");
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
        <BellIcon color={iconColor} marginRight={0} />
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
  z-index: 50;
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border-bottom: ${(props) =>
    props.$isHome ? "none" : `1px solid ${COLORS.gray300}`};
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
