import { useState } from "react";
import cookBookContext from "../context/cookBookContext";
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

      if (response.status === 200) {
        setLoggedIn(true);
        setUser(response.data.user);
        setError(""); // Clear any previous error.
      } else if (response.status === 401) {
        setError("Either your email or password is incorrect");
      } else if (response.status === 403) {
        setError("You do not have permission to log in.");
      } else {
        setError("An unknown error occurred while logging in.");
      }
    } catch (err) {
      setError("An error occurred while logging in.");
      console.error(err.message);

      setLoggedIn(false);
      setUser("");
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
    <cookBookContext.Provider
      value={{ loggedIn, setLoggedIn, loginUser, user, error, logout }}
    >
      {children}
    </cookBookContext.Provider>
  );
};

export default UserProvider;
