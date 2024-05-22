import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import styled from "styled-components";
import MemberList from "./components/MemberList";
import ScheduleTable from "./components/ScheduleTable";
import ButtonGroup from "@components/Button/ButtonGroup.tsx";

const RegisterForm = () => {
  return <RegisterFormView />;
};

const RegisterFormView = () => {
  return (
    <>
      <Form>
        <FormHeader>
          <Typography type="subtitle4">날짜</Typography>
        </FormHeader>
        <ScheduleTable />
        <MemberList />
      </Form>
      <ButtonGroup />
    </>
  );
};

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 80dvh;
  max-width: 76rem;
  top: 12rem;
  background-color: ${COLORS.gray100};
  text-align: center;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 -20px 55px -30px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  z-index: 20;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FormHeader = styled.div`
  background-color: ${COLORS.gray100};
  position: sticky;
  top: 0;
  z-index: 55;
  border-radius: 50px 50px 0 0;
  padding: 1.5rem;
`;

export default RegisterForm;
