import Container from "@components/Container/Container";
import Typography from "@components/Typography/Typography";
import styled from "styled-components";
import MemberTag from "./MemberTag";
import Member from "@datas/Member.json";

const MemberList = () => {
  return (
    <Container>
      <Typography type="subtitle4">신청 인원</Typography>
      <List>
        <MemberTag name={Member} />
      </List>
    </Container>
  );
};

export default MemberList;

const List = styled.section`
  margin-top: 4rem;
`;
