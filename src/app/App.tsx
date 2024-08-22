import { ReactElement } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { MainPage } from "@pages/main";
import { LoginPage } from "@pages/login";
import { useUserStore } from "@entities/user";

import "./App.css";

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const isLogin = useUserStore((state) => state.isLogin);

  if (!isLogin) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <MainPage />
      </AuthGuard>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
