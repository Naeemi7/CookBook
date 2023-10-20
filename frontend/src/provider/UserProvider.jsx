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
      const response = await userAPI.post("/login", data);
      setUser(response.data.user);
      setLoggedIn(true);
      setError(""); // Clear any previous errors

      // Store the user data in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Store the authentication token in a cookie
      document.cookie = `token=${response.data.token}; path=/`;
    } catch (err) {
      const { status } = err.response || {};
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

      // Remove user data from localStorage after logout
      localStorage.removeItem("user");

      // Remove the authentication token from the cookie
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (err) {
      setError("An error occurred while logging out.");
      console.error(err.message);
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await userAPI.post("/register", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
