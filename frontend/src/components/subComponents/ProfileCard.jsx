import useUserContext from "../../context/useUserContext";
import profile from "../../assets/images/profile.png";

const ProfileCard = () => {
  const { user } = useUserContext();
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 dark:text-gray-200 dark-hover-text-white"
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
        <img
          className="w-40 h-40 mb-3 rounded-full shadow-lg"
          src={profile}
          type="file"
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {`${user.firstname} ${user.lastname}`}
        </h5>
        <span className="text-sm text-gray-500 dark:text-white-black">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
