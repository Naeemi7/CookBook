import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUserContext from "../context/useUserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useUserContext();

  useEffect(() => {
    navigate("/login");

    setTimeout(() => {
      logout();
    }, 500);
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Logout;
