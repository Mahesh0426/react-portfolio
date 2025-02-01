import React from "react";
import "./home.css";
import "../body.css";
import "animate.css";
import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animations/AnimatedLetter";
import TypeAnimation from "../../animations/TypeAnimation";
import { FaDownload } from "react-icons/fa";
import ProfilePictureUpDown from "./ProfilePictureUpDown";
import hero from "../../../assets/myPicture.png";

const Home = () => {
  // custom hook for animatted letters
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();

  // Name and Job Title
  const nameArray = [
    " ",
    "M",
    "a",
    "h",
    "e",
    "s",
    "h",
    "",
    "K",
    "u",
    "n",
    "w",
    "a",
    "r",
  ];
  const HiArray = ["H", "i", "👋", ","];
  const IM = ["I", "'", "m"];
  const JobArr = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    "",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  return (
    <div
      id="home"
      className="relative mt-[14vh] max-w-7xl h-full mx-auto flex justify-between max-md:justify-center gap-3 items-center my-5 py-20 max-md:pb-0 px-8 max-md:gap-8 max-md:flex-wrap"
    >
      <div className="p-6 max-sm:p-3 flex flex-col items-start gap-4">
        <h1 className="font-extrabold text-5xl max-lg:text-4xl max-sm:text-4xl mb-3 leading-snug text-white opacity-90 relative">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={HiArray}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={IM}
            idx={8}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={11}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <br />
          <span className=" font-serif font-bold  pb-2 bg-gradient-to-r from-amber-200 to-rose-600 inline-block text-transparent bg-clip-text ">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={JobArr}
              idx={17}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </span>
        </h1>
        <h1 className="text-8xl">
          {" "}
          {/* Adjust the size as needed */}
          <TypeAnimation />
        </h1>
        <a
          href="/src//assets//resume.pdf"
          className="  btn-home border bg-yellow-300 border-blue-500 px-3 py-2 rounded-sm text-white-500 opacity-90
            hover:bg-blue-500 hover:text-white duration-300 active:scale-90"
          download
        >
          <button className="flex justify-center items-center gap-2">
            download Resume <FaDownload />
          </button>
        </a>
      </div>

      {/* <ProfilePictureUpDown /> */}
      <div className="p-10 relative max-sm:p-2">
        <div className="relative w-80 h-80 rounded-full bg-slate-900 overflow-hidden flex items-center justify-center shadow-lg">
          <img
            className="absolute inset-0 w-full h-full object-cover "
            src={hero}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
