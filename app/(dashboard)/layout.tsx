import { Container } from "@widgets/container";
import { Header } from "@widgets/header";
import { SideBar } from "@widgets/side-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        {children}
      </Container>
    </>
  );
};

export default Layout;
