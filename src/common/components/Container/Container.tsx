import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

export default Container;

const ContainerWrap = styled.div`
  position: relative;
  padding: 1.2rem 1.4rem;
  width: 100%;
  height: 100%;
`;
