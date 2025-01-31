import React from "react";
import { Link } from "react-scroll";
import "./header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <nav className="items-center max-w-full mx-auto fixed top-0 left-2/4 -translate-x-2/4 bg-slate-700 shadow-md shadow-[#06092e41] w-full z-50">
      <div className="flex justify-between max-w-7xl mx-auto px-8 py-4 text-white ">
        <h1 className="font-extralight text-3xl flex items-center">
          <Link
            to="home"
            className="flex items-center text-orange-400 font-medium "
          >
            Mahesh
          </Link>
        </h1>
        {/* mavigation menus  */}
        <Navigation />
      </div>
    </nav>
  );
}

export default Header;
