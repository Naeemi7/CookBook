import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../context/useUserContext";
import guestProfile from "../assets/images/navbar/profile.png";
import logo from "../assets/images/navbar/logo.png";

const Navbar = () => {
  const { loggedIn, user } = useUserContext();
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  //width of the drop down
  const dropdownWidth = "w-56";

  return (
    <nav className="bg-white border border-gray-200 dark:bg-header relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo section */}
        <a href="#" className="flex items-center">
          <img src={logo} className="h-12 mr-3" alt="Cookbook logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-cards">
            CookBook
          </span>
        </a>

        {/* Input Search - Shown as Nav Items on Small Screens */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-cards rounded-lg hover:bg-cards focus:ring-2 focus:outline-none focus:ring-button dark:bg-cards dark:hover:bg-cards"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>

        {/* Search Input - Displayed on Larger Screens */}
        <form className="hidden md:flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 2xl:w-[500px]"
              placeholder="Search Recipe..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-cards rounded-lg hover:bg-button focus:ring-2 focus:outline-none focus:ring-cards dark:bg-cards dark:hover-bg-cards"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        {/* Profile section with Border on Profile Image */}
        <div className="relative">
          <button
            type="button"
            className="flex mr-3 text-sm bg-header border border-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={() => setProfileOpen(!isProfileOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-12 h-12 rounded-full"
              src={guestProfile}
              alt="user photo"
            />
          </button>
          {isProfileOpen && (
            <div
              className={`z-50 absolute right-0 mt-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-footer ${dropdownWidth} dark:divide-gray-600`}
            >
              <div className="px-4 py-3 ">
                <span className="block text-base text-gray-900 dark:text-button font-weight:700">
                  {loggedIn ? `${user.firstname} ${user.lastname}` : "Guest"}
                </span>
                <span className="block text-base text-gray-900 dark:text-button font-weight:700">
                  {loggedIn ? `${user.email} ` : null}
                </span>
              </div>

              <ul>
                {loggedIn ? (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-cards dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                    >
                      <svg
                        className="w-4 h-4 inline mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 20a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h7l2-3h4a1 1 0 011 1v10z"
                        />
                      </svg>
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-cards dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                    >
                      <svg
                        className="w-4 h-4 inline mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 3.51a2.5 2.5 0 00-3.54 0l-6 6a2.5 2.5 0 00-.73 1.77v5a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-5a2.5 2.5 0 00-.73-1.77l-6-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2"
                        />
                      </svg>
                      Sign in
                    </NavLink>
                  </li>
                )}
                {loggedIn ? (
                  <li>
                    <NavLink
                      to="/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-cards dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                    >
                      <svg
                        className="w-4 h-4 inline mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 2l-5 5a5 5 0 007 7l-1.414 1.414a2 2 0 01-2.828 0L2 10"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 22l5-5a5 5 0 00-7-7l1.414-1.414a2 2 0 012.828 0L22 14"
                        />
                      </svg>
                      Sign out
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-cards dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                    >
                      <svg
                        className="w-4 h-4 inline mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Sign up
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Burger Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-00 rounded-lg md:hidden hover-bg-gray-100 focus-outline-none focus-ring-2 focus-ring-gray-200 dark-text-gray-400 dark-hover-bg-gray-700 dark-focus-ring-gray-600"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
