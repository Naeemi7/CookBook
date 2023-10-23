import useRecipeContext from "../../context/useRecipeContext";

const PaginationButton = () => {
  const { setSkip, numberOfPages, skip } = useRecipeContext();

  const handlePageChange = (newSkip) => {
    setSkip(newSkip);
  };

  return (
    <ul className="flex items-center -space-x-px mt-12 h-8 text-sm">
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white"
          onClick={() => handlePageChange(0)}
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
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <li key={index}>
          <a
            href="#"
            onClick={() => handlePageChange(index * 3)}
            className={`${
              index * 3 === skip ? "active-style" : "inactive-style" // Define or replace these class names
            }`}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-button border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white"
          onClick={() => handlePageChange((numberOfPages - 1) * 3)}
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
