import { useState } from "react";
import userContext from "../context/userContext";
import userAPI from "../api/userAPI";

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  /**
   * Handles the user login
   * @param {*} data
   */
  const loginUser = async (data) => {
    try {
      const response = await userAPI.post("/login", data);
      setUser(response.data.user);
      setLoggedIn(true);
    } catch (err) {
      const { status } = err.response;

      setLoggedIn(false);

      if (status === 401) {
        setError("Either your email or password is incorrect");
      } else if (status === 403) {
        setError("You don't have permission to log in");
      } else {
        setError("An unknown error occurred while logging in.");
      }
    }
  };

  /**
   * Handles the logout
   */
  const logout = async () => {
    try {
      await userAPI.get("/logout");
      setLoggedIn(false);
    } catch (err) {
      setError("An error occurred while logging out.");
      console.error(err.message);
    }
  };

  return (
    <userContext.Provider
      value={{ loggedIn, setLoggedIn, loginUser, user, error, logout }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
