import { VStack } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import UserProfile from "./components/UserProfile";
import ScheduleRegistrationCard from "./components/ScheduleRegistrationCard";
import Header from "@layout/Header";
import SwiperAdminsProfileCard from "./components/SwiperAdminsProfileCard";
import Menus from "./components/Menus";

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <Container>
        <VStack align={"stretch"} gap={"1.2rem"}>
          <UserProfile />
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
      ${COLORS.purple700} 0%,
      ${COLORS.purple400} 58%,
      ${COLORS.purple300} 100%
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
    background-color: ${COLORS.purple100};
  }
`;
