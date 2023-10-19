import { useState } from "react";
import guestProfile from "../assets/images/navbar/profile.png";
import logo from "../assets/images/navbar/logo.png";

const Navbar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border border-gray-200 dark:bg-header relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo section */}
        <a href="#" className="flex items-center">
          <img src={logo} className="h-12 mr-3" alt="Cook book logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-button">
            CookBook
          </span>
        </a>

        {/* Input Search - Shown as Nav Items on Small Screens */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-cards rounded-lg hover:bg-cards focus:ring-2 focus:outline-none focus:ring-button dark:bg-button dark:hover-bg-cards"
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
                className="w-4 h-4 text-gray-500 dark:text-"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-button dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 2xl:w-[400px]"
              placeholder="Search Recipe..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-cards rounded-lg  hover:bg-cards focus:ring-2 focus:outline-none focus:ring-button dark:bg-button dark:hover-bg-cards"
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
              className="w-8 h-8 rounded-full"
              src={guestProfile}
              alt="user photo"
            />
          </button>
          {isProfileOpen && (
            <div className="z-50 absolute right-0 mt-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-footer dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>

              <ul>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-button dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-button dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-button dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-button dark:hover-bg-gray-600 dark:text-gray-200 dark:hover-text-white rounded-lg"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Burger Menu Button */}
        <button
          type="button"
          className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-00 rounded-lg md:hidden hover-bg-gray-100 focus-outline-none focus-ring-2 focus-ring-gray-200 dark-text-gray-400 dark-hover-bg-gray-700 dark-focus-ring-gray-600"
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
