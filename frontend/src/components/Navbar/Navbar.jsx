import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../../context/useUserContext";
import guestProfile from "../../assets/images/profile.png";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { loggedIn, user } = useUserContext();
  const [isProfileOpen, setProfileOpen] = useState(false);

  // width of the drop-down
  const dropdownWidth = "w-56";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo section */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="h-12 mr-3" alt="Cookbook logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CookBook
          </span>
        </NavLink>

        {/* Search input */}
        {/*     <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-56 px-3 py-2 mr-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          />
          <button
            type="button"
            className="text-sm bg-button rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            Search
          </button>
        </div> */}

        {/* Profile section with Border on Profile Image */}
        <div className="relative">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
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
              className={`z-50 absolute right-0 mt-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700  ${dropdownWidth} dark:divide-gray-600`}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <div className="px-4 py-3">
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
                      User dashboard
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
                          d="M16 3.51a2.5 2.5 0 00-3.54 0l-6 6a2.5 2.5 0 00-.73 1.77v5a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-2"
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
                      className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100 dark:hover.bg-gray-600 dark:text-gray-200 dark:hover.text-white"
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
                      className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100 dark:hover.bg-gray-600 dark:text-gray-200 dark:hover.text-white"
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
      </div>
    </nav>
  );
};

export default Navbar;
