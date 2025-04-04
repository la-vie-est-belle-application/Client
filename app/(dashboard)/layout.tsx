import { Container } from "@/src/widgets/container/index";
import { Header } from "@/src/widgets/header/index";
import { SideBar } from "@/src/widgets/side-bar";

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
