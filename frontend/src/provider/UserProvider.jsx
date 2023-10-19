import { useState } from "react";
import userContext from "../context/userContext";
import userAPI from "../api/userAPI";

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = async (data) => {
    try {
      const response = await userAPI.post("/login", data);
      console.log(response.data);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <userContext.Provider value={{ loggedIn, setLoggedIn, loginUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
