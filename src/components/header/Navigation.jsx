import React, { useState } from "react";

import "./header.css";
import Hamburger from "../animations/Hamburger";
import NavItem from "../animations/NavItem";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle the navigation menu
  const toggleMenu = () => setIsNavOpen((prevState) => !prevState);

  // Close the navigation menu when a nav item is clicked
  const clickNavItem = () => {
    setIsNavOpen(false);
  };

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "experience", label: "Work" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <div className="relative items-center flex">
      {/* Hamburger Icon */}
      <Hamburger isOpen={isNavOpen} toggleMenu={toggleMenu} />

      {/* Navigation Items */}
      <ul
        className={` flex justify-center gap-x-8 max-md:gap-x-5 max-sm:gap-y-10 max-sm:bg-slate-700 max-sm:fixed max-sm:flex-col max-sm:h-screen max-sm:top-0 max-sm:items-center max-sm:w-4/6 max-sm:z-20 ${
          isNavOpen ? "right-0" : "-right-full"
        }`}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            activeScroll="active-on-scroll"
            label={item.label}
            clickNavItem={clickNavItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
