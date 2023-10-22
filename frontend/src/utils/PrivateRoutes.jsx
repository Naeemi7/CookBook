import { Outlet, Navigate } from "react-router-dom";
import useUserContext from "../context/useUserContext";

const PrivateRoutes = () => {
  const { loggedIn } = useUserContext();

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
