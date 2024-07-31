import { Card, CardBody, CardHeader, Progress, Stack } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import useSignIn from "@hooks/useSignIn";

const SignInStep = () => {
  const { signInStep } = useSignIn();

  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Card w={"30rem"}>
          <CardHeader>
            <Progress />
          </CardHeader>
          <CardBody>{signInStep}</CardBody>
        </Card>
      </Stack>
    </Container>
  );
};

export default SignInStep;
