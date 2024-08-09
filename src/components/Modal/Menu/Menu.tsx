import MenuHeader from "@components/Modal/Menu/components/MenuHeader.tsx";
import MenuBody from "@components/Modal/Menu/components/MenuBody.tsx";
import MenuFooter from "@components/Modal/Menu/components/MenuFooter.tsx";
import styled from "styled-components";

const Menu = () => {
  return <MenuView />;
};

const MenuView = () => {
  return (
    <MenuContainer>
      <MenuHeader />
      <MenuBody />
      <MenuFooter />
    </MenuContainer>
  );
};

const MenuContainer = styled.section`
  background-color: white;
  position: absolute;
  padding: 1.5rem 1.8rem;
  right: 0;
  width: 70%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export default Menu;
