import { ReactElement } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { MainPage } from "@pages/main";
import { LoginPage } from "@pages/login";
import { AdditionalInfo } from "@pages/additional-info";

import { path } from "@shared/constants/path";

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const userData = sessionStorage.getItem("userData");
  const isLogin = !!userData;

  if (!isLogin) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: path.main,
    element: (
      <AuthGuard>
        <MainPage />
      </AuthGuard>
    ),
  },
  {
    path: path.login,
    element: <LoginPage />,
  },
  {
    path: path.additionalInfo,
    element: (
      <AuthGuard>
        <AdditionalInfo />
      </AuthGuard>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
