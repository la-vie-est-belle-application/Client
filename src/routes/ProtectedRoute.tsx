import { ROUTES } from "@constants/routes";
import useAuthStore from "@stores/auth";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const currentLocation = useLocation();

  useEffect(() => {
    console.log("currentLocation : ", currentLocation);
  }, [currentLocation]);
  return isLoggedIn ? (
    <Outlet></Outlet>
  ) : (
    <Navigate
      to={ROUTES.SIGNIN}
      replace
      state={{ redirectFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;
