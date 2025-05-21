import { Container } from "@widgets/container";
import { Header } from "@widgets/header";
import { SideBar } from "@widgets/side-bar";
import { Toaster } from "@shared/shadcn-ui/components/index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        {children}
        <Toaster />
      </Container>
    </>
  );
};

export default Layout;
