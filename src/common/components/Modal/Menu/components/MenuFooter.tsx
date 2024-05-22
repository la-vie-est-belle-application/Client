import styled from "styled-components";
import ButtonItem from "@components/Button/Button.tsx";
import Typography from "@components/Typography/Typography.tsx";
import signOut from "/assets/sign-out.svg";
import setting from "/assets/setting.svg";

const MenuFooter = () => {
  return (
    <FooterContainer>
      <ButtonItem type="signOut">
        <img src={signOut} alt="" />
        <Typography type="caption1">로그아웃</Typography>
      </ButtonItem>
      <img style={{ cursor: "pointer" }} src={setting} alt="" />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  border-top: 0.1px solid #d9d9d9;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default MenuFooter;
