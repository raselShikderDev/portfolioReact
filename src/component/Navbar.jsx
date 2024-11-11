import {
  FaFacebookMessenger,
  FaGithub,
  FaLinkedinIn,
  // FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "/assets/rasel_logo.png";
import logoRS from "/assets/rs.png";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const handleScrenSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScrenSize);
    return () => window.removeEventListener("resize", handleScrenSize);
  }, []);

  return (
    <nav
      onClick={handleScrenSize}
      className="py-6 mb-20 flex flex-shrink-0 items-center justify-between"
    >
      <div id="logo" className="flex flex-shrink-0 items-center md:flex-wrap">
        <img
          className={`${size < 570 ? "w-20" : "w-72"}`}
          src={size < 570 ? logoRS : logo}
          alt="RS"
        />
      </div>
      <div
        id="Navbar"
        className={`flex flex-shrink-0 ${
          size < 400 ? "gap-3" : "gap-5"
        } items-center`}
      >
        <a href="https://www.facebook.com/mr.alien.ahmed" target="_blank" rel="noopener noreferrer">
          <FaFacebookMessenger
          className={`${size < 570 ? "text-xl" : "text-2xl"}`}
        />
        </a>
        <a href="https://github.com/raselShikderDev" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${size < 570 ? "text-xl" : "text-2xl"}`} />
        </a>
        <a href="https://www.linkedin.com/in/raseldev/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className={`${size < 570 ? "text-xl" : "text-2xl"}`} />
        </a>
        <a href="https://x.com/raselShikderDev" target="_blank" rel="noopener noreferrer">
          <FaXTwitter
          className={`${size < 570 ? "text-xl hidden" : "text-2xl"} `}
        />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
