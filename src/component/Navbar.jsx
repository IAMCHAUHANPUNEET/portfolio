import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between y-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/puneet-chauhan-0996962a6/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/IAMCHAUHANPUNEET" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/iamchauhanpuneet/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
