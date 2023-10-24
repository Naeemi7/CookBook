import { useState } from "react";
import useUserContext from "../../context/useUserContext";
import { IoMdPerson } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa";

const ProfileCard = () => {
  const [image, setImage] = useState(null);
  const { user, profileImage, updateProfile } = useUserContext();

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    console.log(selectedImage);
    setImage(selectedImage);
  };

  const handleSubmit = async () => {
    if (image) {
      const profile = new FormData();
      profile.append("image", image);

      try {
        await updateProfile(user._id, profile);
        console.log("The response is ", profileImage);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full max-w-sm bg-white shadow mt-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <div className="relative">
          <label htmlFor="profile-image">
            <div className="group relative w-40 h-40 mb-3 rounded-full shadow-lg">
              <IoMdPerson className="w-full h-full rounded-full absolute text-4xl text-gray-500" />
              <input
                id="profile-image"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <div className="opacity-0 group-hover:opacity-60 w-full h-full rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                <FaPaperclip className="hidden group-hover:block text-4xl text-gray-300" />
              </div>
            </div>
          </label>
        </div>

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {`${user.firstname} ${user.lastname}`}
        </h5>
        <span className="text-sm text-gray-500 dark:text-white-black">
          {user.email}
        </span>

        <button
          type="button"
          className="text-gray-700 bg-button hover:bg-button mt-5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-button dark:hover:bg-header"
          onClick={handleSubmit}
        >
          Update
          <FaPaperclip className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
