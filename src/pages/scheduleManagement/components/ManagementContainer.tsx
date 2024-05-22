import styled from "styled-components";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const ManagementContainer = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

export default ManagementContainer;
