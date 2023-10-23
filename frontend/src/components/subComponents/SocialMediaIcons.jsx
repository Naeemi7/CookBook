import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <>
      <div className="flex items-center mt-3 md:mt-0">
        <a
          href="https://www.facebook.com/naeemi2021/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-h2Color hover:text-button mr-4 text-xl md:text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/Naeemi7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-h2Color hover:text-button mr-4 text-xl md:text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abdulwase-naeemi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-h2Color hover:text-button mr-4 text-xl md:text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://abdulwase-naeemi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-h2Color hover:text-button mr-4 text-xl md:text-2xl"
        >
          <FaGlobe />
        </a>
      </div>
    </>
  );
};

export default SocialMediaIcons;
