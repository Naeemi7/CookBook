import { useRef, useState } from "react";
import useUserContext from "../../context/useUserContext";
import { IoMdPerson } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa";

const ProfileCard = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const { user } = useUserContext();

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  return (
    <div className="w-full max-w-sm bg-white  shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover-bg-gray-200 opacity-60 dark:text-gray-200 dark-hover-text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-200 dark-hover-text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-200 dark-hover-text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Profile card */}

      <div className="flex flex-col items-center pb-10">
        <div onClick={handleImageClick} className="relative">
          {image ? (
            <div className="group relative w-40 h-40 mb-3 rounded-full shadow-lg">
              <img
                className="w-full h-full rounded-full absolute"
                src={URL.createObjectURL(image)}
                alt=""
              />
              <div className="opacity-0 group-hover:opacity-60 w-full h-full rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                <FaPaperclip className="hidden group-hover:block text-4xl text-gray-300" />
                {/* Use React Icons component */}
              </div>
            </div>
          ) : (
            <div className="group relative w-40 h-40 mb-3 rounded-full shadow-lg">
              <IoMdPerson className="w-full h-full rounded-full absolute text-4xl text-gray-500" />
              {/* Default user icon */}
              <div className="opacity-0 group-hover:opacity-60 w-full h-full rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                <FaPaperclip className="hidden group-hover:block text-4xl text-gray-300" />
                {/* Use React Icons component */}
              </div>
            </div>
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {`${user.firstname} ${user.lastname}`}
        </h5>
        <span className="text-sm text-gray-500 dark:text-white-black">
          {user.email}
        </span>

        <button
          type="button"
          className="text-gray-700 bg-button hover:bg-button mt-5 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-button dark:hover:bg-header "
        >
          Update
          <FaPaperclip className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
