import React from "react";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Mahesh Kunwar</h2>
          <p className="text-gray-400">Crafting impactful digital solutions</p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex space-x-8 text-gray-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div data-aos="flip-down" className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/mahesh-kunwar-1b85a5301/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mahesh0426"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kunwarmahesh29@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/home?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <BsDiscord />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-blue-500 text-1xl">
        <p>
          &copy; {new Date().getFullYear()} Mahesh Kunwar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
