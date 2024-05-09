import { VStack } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import UserProfile from "./components/UserProfile";
import ScheduleRegistrationCard from "./components/ScheduleRegistrationCard";
import AdminsProfileCard from "./components/AdminsProfileCard";
import Header from "@layout/Header";

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <Container>
        <VStack align={"stretch"} gap={"1.2rem"}>
          <UserProfile />
          <ScheduleRegistrationCard />
          <AdminsProfileCard />
        </VStack>
      </Container>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  position: relative;
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
    height: 100vh;
    z-index: -1;
    background-color: ${COLORS.purple100};
  }
`;
