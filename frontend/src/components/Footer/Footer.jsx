import SocialMediaIcons from "../subComponents/SocialMediaIcons";
const Footer = () => {
  return (
    <footer className="bg-white fixed bottom-0 z-50 w-full bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CookBook™
          </a>{" "}
          Created by: Abdulwase Naeemi
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <SocialMediaIcons />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
