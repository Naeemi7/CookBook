import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19,21 L23,21 L23,13 L19,13 L19,21 Z M15,21 L15,13 M9,21 L9,13 M1,3 L3,3 L3,1 L1,1 L1,3 Z M3,3 L21,3 L21,1 L3,1 L3,3 Z M5,13 L5,19 C5,20.1045695 5.8954305,21 7,21 L17,21 C18.1045695,21 19,20.1045695 19,19 L19,13 M12,21 L12,13" />
            </svg>

            <span className="ml-3">Add Recipe</span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              E-commerce
            </span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              ></path>
            </svg>
          </button>
          <ul id="dropdown-example" className="hidden py-2 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
              >
                Billing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
              >
                Invoice
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 2.05V12h9a10 10 0 0 1-2.8 6.96l-9-15.66a2 2 0 0 0-3.6 0l-9 15.66A10 10 0 0 1 2 12h9V2.05a1 1 0 0 1 2 0Z" />
            </svg>
            <span className="ml-3">Marketing</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-.146-4.354a1 1 0 0 0 1.414 0L14 13.414l3.854 3.853a1 1 0 0 0 1.415-1.414L15.414 12l3.853-3.854a1 1 0 0 0-1.414-1.415L14 10.586l-3.854-3.853a1 1 0 0 0-1.415 1.414L12.586 12l-3.853 3.854a1 1 0 0 0 0 1.415Z"
              ></path>
            </svg>
            <span className="ml-3">Reports</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
