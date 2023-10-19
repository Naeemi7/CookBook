import logo from "../assets/images/navbar/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-footer  fixed bottom-0 left-0 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo} className="h-12 mr-3" alt="Cook book logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-cards">
              CookBook
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-cards sm:mb-0 dark:text-header">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-header">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
