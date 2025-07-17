import { Toaster } from "@admin/shared/shadcn-ui/components/index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Layout;
