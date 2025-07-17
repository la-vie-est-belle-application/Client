import { Toaster } from "@admin/shared/shadcn-ui/components/index";
import { Container } from "@admin/widgets/container";
import { Header } from "@admin/widgets/header";
import { SideBar } from "@admin/widgets/side-bar";

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
