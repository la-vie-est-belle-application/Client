import { ROUTES } from "@constants/routes";
import useKakaoAuth from "@hooks/useKakaoAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useKakaoAuth();
  const currentLocation = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={ROUTES.SIGNIN}
      replace
      state={{ redirectFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;
