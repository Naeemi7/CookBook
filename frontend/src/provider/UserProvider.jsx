import { useState } from "react";
import userContext from "../context/userContext";
import userAPI from "../api/userAPI";

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const loginUser = async (data) => {
    try {
      const response = await userAPI.post("/login", data);
      console.log(response.data);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <userContext.Provider value={{ login, setLogin, loginUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
