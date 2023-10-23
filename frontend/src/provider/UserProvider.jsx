import { useState, useEffect } from "react";
import userContext from "../context/userContext";
import userAPI from "../api/userAPI";

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Checks if the user is already logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);

  /**
   * Handles the user login
   * @param {Object} data - The user's login data
   */
  const loginUser = async (data) => {
    try {
      setError(""); // Clear any previous errors
      const response = await userAPI.post("/login", data);
      setUser(response.data.user);

      setLoggedIn(true);

      // Store the user data in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (err) {
      setLoggedIn(false);
      console.log(err.response.status);

      if (err.response.status === 401) {
        setError("Either your email or password is incorrect");
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

  const updateProfile = async (profile) => {};

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
