import React from "react";
import useRecipeContext from "../../context/useRecipeContext";

const PaginationButton = () => {
  const { setSkip, skip, limit, recipe } = useRecipeContext();

  const handlePageChange = (newSkip) => {
    setSkip(newSkip);
  };

  const totalPages = Math.ceil(recipe.length / limit);
  const currentPage = skip / limit + 1;

  return (
    <ul className="flex items-center -space-x-px mt-12 h-8 text-sm">
      <li>
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white ${
            skip === 0 ? "inactive-prev" : "active-prev"
          }`}
          onClick={() => handlePageChange(skip - limit)}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </a>
      </li>
      {Array.from({ length: totalPages }).map((_, index) => (
        <li key={index}>
          <a
            href="#"
            onClick={() => handlePageChange(index * limit)}
            className={`${
              index * limit === skip ? "active-style" : "inactive-style"
            }`}
          >
            {currentPage}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-button border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white ${
            skip + limit >= recipe.length ? "inactive-next" : "active-next"
          }`}
          onClick={() => handlePageChange(skip + limit)}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default PaginationButton;
