import { VStack } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import styled from "styled-components";
import ScheduleRegistrationCard from "./components/ScheduleRegistrationCard";
import Header from "@layout/Header";
import SwiperAdminsProfileCard from "./components/SwiperAdminsProfileCard";
import Menus from "./components/Menus";
import useKakaoAuth from "@hooks/useKakaoAuth";
import { THEME_COLORS } from "@constants/color";

const Home = () => {
  useKakaoAuth();
  return (
    <HomeWrap>
      <Header />
      <Container>
        <VStack align={"stretch"} gap={"1.2rem"}>
          <ScheduleRegistrationCard />
          <SwiperAdminsProfileCard />
          <Menus />
        </VStack>
      </Container>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  position: relative;
  padding-bottom: 5rem;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 283px;
    top: 0px;
    left: 0px;
    background: linear-gradient(
      180deg,
      ${THEME_COLORS.purple700} 0%,
      ${THEME_COLORS.purple400} 58%,
      ${THEME_COLORS.purple300} 100%
    );
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    z-index: -1;
    background-color: ${THEME_COLORS.purple100};
  }
`;
