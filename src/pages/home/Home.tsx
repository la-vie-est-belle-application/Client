import { VStack } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import UserProfile from "./components/UserProfile";
import ScheduleRegistrationCard from "./components/ScheduleRegistrationCard";
import UserProfileCard from "./components/UserProfileCard";

const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <VStack align={"stretch"}>
          <UserProfile />
          <ScheduleRegistrationCard />
          <UserProfileCard />
        </VStack>
      </Container>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  position: relative;
  height: 100%;
  background-color: ${COLORS.purple100};
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 283px;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      180deg,
      ${COLORS.purple700} 0%,
      ${COLORS.purple400} 58%,
      ${COLORS.purple300} 100%
    );
  }
`;
