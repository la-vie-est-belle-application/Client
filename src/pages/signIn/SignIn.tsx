import { Flex } from "@chakra-ui/react";
import ButtonItem from "@components/Button/Button";
import Container from "@components/Container/Container";
import Typography from "@components/Typography/Typography";
import useKakaoAuth from "@hooks/useKakaoAuth";
import styled from "styled-components";

const SignIn = () => {
  const { onSignIn } = useKakaoAuth();

  return (
    <SignInContainer>
      <Container>
        <SignInBackgroundImg />
        <Flex
          direction={"column"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <SignInTexts>
            <h1>
              <Typography type="body2" color={"white"}>
                라비에벨 진행팀 애플리케이션
              </Typography>
            </h1>
            <SignInSubText>
              <Typography type="subtitle6" color={"white"}>
                내 일정에 맞게 원하는 날에 스케줄을 신청하고 급여를 계산할 수
                있습니다.
              </Typography>
            </SignInSubText>
          </SignInTexts>
          <ButtonItem type="signIn" onClick={onSignIn}>
            <SignInImg
              src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_large_wide.png"
              alt="카카오 로그인"
            />
          </ButtonItem>
        </Flex>
      </Container>
    </SignInContainer>
  );
};

export default SignIn;
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

const SignInBackgroundImg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: url("./public/assets/main.svg") no-repeat center center/cover;
  z-index: -2;
  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`;

const SignInTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const SignInSubText = styled.p`
  width: 17.8rem;
  word-break: keep-all;
`;

const SignInImg = styled.img`
  width: 100%;
`;
