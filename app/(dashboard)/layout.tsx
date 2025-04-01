import { Header } from "@/src/widgets/header/index";
import { SideBar } from "@/src/widgets/side-bar/index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <SideBar />
      {children}
    </>
  );
};

export default Layout;
