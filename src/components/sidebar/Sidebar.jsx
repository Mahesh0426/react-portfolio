import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { RiArrowRightWideLine } from "react-icons/ri";

// Reusable Drawer Item
const DrawerItem = ({ icon, label, href }) => (
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

// Desktop version: always visible and expands on hover
const DesktopSidebar = () => {
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
          href="https://www.linkedin.com/in/mahesh-kunwar-1b85a5301/"
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

// Mobile version: shows a toggle button that opens a drawer
const MobileDrawerSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile drawer open/closed
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  // Variants for sliding the drawer in/out
  const drawerVariants = {
    hidden: { x: "-100%" },
    visible: { x: -5 },
  };

  return (
    <>
      {/* Toggle button shown when drawer is closed */}
      {!isOpen && (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
          <button
            onClick={toggleDrawer}
            className=" bg-gray-700 text-white rounded-r-md focus:outline-none"
          >
            <RiArrowRightWideLine size={20} />
          </button>
        </div>
      )}

      {/* The sliding drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  top-60 left-0 h-70 z-50 bg-gray-600 text-white w-20"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button at the top */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleDrawer}
                className="text-white focus:outline-none"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="flex flex-col items-start space-y-4 p-4">
              <DrawerItem
                icon={<FaLinkedin size={24} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/mahesh-kunwar-1b85a5301/"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Main Responsive Sidebar component
const ResponsiveSidebar = () => {
  return (
    <>
      {/* Desktop Sidebar: visible on md and larger */}
      <div className="hidden md:block">
        <DesktopSidebar />
      </div>

      {/* Mobile Sidebar: visible below md */}
      <div className="block md:hidden">
        <MobileDrawerSidebar />
      </div>
    </>
  );
};

export default ResponsiveSidebar;
