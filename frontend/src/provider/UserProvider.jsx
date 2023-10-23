import { useState } from "react";
import userContext from "../context/userContext";
import userAPI from "../api/userAPI";

const UserProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [loggedIn, setLoggedIn] = useState(!!storedUser);
  const [user, setUser] = useState(storedUser);
  const [error, setError] = useState("");

  /**
   * Handles the user login
   * @param {Object} data - The user's login data
   */
  const loginUser = async (data) => {
    try {
      //setError(""); // Clear any previous errors
      const response = await userAPI.post("/login", data);

      const userData = response.data.user;

      setUser(userData);
      setLoggedIn(true);

      // Store the user data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("no errors found");
    } catch (err) {
      console.log("errors found");
      setLoggedIn(false);
      console.log(err.response.status);

      if (err.response && err.response.status === 401) {
        setError("Either your email or password is incorrect");
      } else if (err.response && err.response.status === 403) {
        setError("You don't have permission to log in");
      } else {
        setError("An unknown error occurred while logging in");
      }

      return Promise.reject(err);
    }
  };

  /**
   * Handles the logout
   */
  const logout = async () => {
    try {
      await userAPI.get("/logout");
      setLoggedIn(false);

      // Remove user data from localStorage after logout
      localStorage.removeItem("user");
    } catch (err) {
      setError("An error occurred while logging out.");
      console.error(err.message);
    }
  };

  /**
   * Hanles User signup
   * @param {*} data
   */
  const registerUser = async (data) => {
    try {
      const response = await userAPI.post("/register", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  /*   const updateProfile = async (profile) => {}; */

  return (
    <userContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        loginUser,
        user,
        error,
        logout,
        registerUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
