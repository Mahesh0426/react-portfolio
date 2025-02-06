import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from "react-icons/fa";

const DrawerSidebar = () => {
  return (
    <div className="fixed top-1/4 left-0 z-50">
      <motion.div
        className="bg-gray-700 text-white w-16 h-auto flex flex-col items-center py-4 space-y-6 rounded-r-lg shadow-lg"
        initial={{ width: "4rem" }}
        whileHover={{ width: "12rem" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <DrawerItem
          icon={<FaLinkedin size={24} />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/mahesh-kunwar-1b85a5301/
"
        />
        <DrawerItem
          icon={<FaGithub size={24} />}
          label="GitHub"
          href="https://github.com/Mahesh0426"
        />
        <DrawerItem
          icon={<FaEnvelope size={24} />}
          label="Email"
          href="mailto:kunwarmahesh29@gmail.com"
        />
      </motion.div>
    </div>
  );
};

const DrawerItem = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-4 py-2 hover:bg-gray-600 rounded-lg transition-colors duration-300 w-full"
    >
      <span className="p-2 bg-blue-500 rounded-full text-white flex items-center justify-center">
        {icon}
      </span>
      <motion.span
        className="text-white text-lg"
        initial={{ opacity: 0, x: -20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </a>
  );
};

export default DrawerSidebar;
