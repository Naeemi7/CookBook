import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCookBookContext from "../context/useCookBookContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useCookBookContext();

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
