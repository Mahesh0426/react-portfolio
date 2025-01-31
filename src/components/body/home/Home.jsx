// import React from "react";
// import "./home.css";
// import "../body.css";
// import "animate.css";
// import {
//   AnimatedLetters,
//   useAnimatedLetters,
// } from "../../animations/AnimatedLetter";
// import TypeAnimation from "../../animations/TypeAnimation";

// const Home = () => {
//   // custom hook for animatted letters
//   const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
//     useAnimatedLetters();

//   // Name and Job Title
//   const nameArray = [
//     " ",
//     "M",
//     "a",
//     "h",
//     "e",
//     "s",
//     "h",
//     "",
//     "K",
//     "u",
//     "n",
//     "w",
//     "a",
//     "r",
//   ];
//   const HiArray = ["H", "i", "👋", ","];
//   const IM = ["I", "'", "m"];
//   const JobArr = [
//     "S",
//     "o",
//     "f",
//     "t",
//     "w",
//     "a",
//     "r",
//     "e",
//     "",
//     "E",
//     "n",
//     "g",
//     "i",
//     "n",
//     "e",
//     "e",
//     "r",
//   ];

//   return (
//     <div
//       id="home"
//       className="relative mt-[14vh] max-w-7xl h-full mx-auto flex justify-between max-md:justify-center gap-3 items-center my-5 py-20 max-md:pb-0 px-8 max-md:gap-8 max-md:flex-wrap"
//     >
//       <div className="p-6 max-sm:p-3 flex flex-col items-start gap-4">
//         <h1 className="font-extrabold text-5xl max-lg:text-4xl max-sm:text-4xl mb-3 leading-snug text-white opacity-90 relative">
//           <AnimatedLetters
//             letterClass={letterClass}
//             strArray={HiArray}
//             idx={5}
//             isHovering={isHovering}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           />
//           <br />
//           <AnimatedLetters
//             letterClass={letterClass}
//             strArray={IM}
//             idx={8}
//             isHovering={isHovering}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           />
//           <AnimatedLetters
//             letterClass={letterClass}
//             strArray={nameArray}
//             idx={11}
//             isHovering={isHovering}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}

//           />
//           <br />
//           <span className="text-yellow-400 ">
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={JobArr}
//               idx={17}
//               isHovering={isHovering}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             />
//           </span>
//         </h1>
//         <h1 className="text-8xl">
//           {" "}
//           {/* Adjust the size as needed */}
//           <TypeAnimation />
//         </h1>
//         <a
//           href="https://drive.google.com/file/d/1gPfUEOq5nFQ3ov4AWcocnN0hpwauGLIg/view?usp=sharing"
//           className="btn-home border border-blue-500 px-3 py-2 rounded-sm text-blue-500 opacity-90
//             hover:bg-blue-500 hover:text-white duration-300 active:scale-90"
//         >
//           Resume
//         </a>
//       </div>
//       {/* <ProfilePictureUpDown /> */}
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "./home.css"; // Optional if you have custom styling
// import "../body.css"; // Remove if no longer needed
import "animate.css";
import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animations/AnimatedLetter";
import TypeAnimation from "../../animations/TypeAnimation";

const Home = () => {
  // Use your custom hook for animated letters
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();

  // Name and Job Title arrays
  const HiArray = ["H", "i", "👋", ","];
  const IM = ["I", "'", "m"];
  const nameArray = [
    " ",
    "M",
    "a",
    "h",
    "e",
    "s",
    "h",
    " ",
    "K",
    "u",
    "n",
    "w",
    "a",
    "r",
  ];
  const JobArr = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
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
    <section
      id="home"
      // A full-screen hero with a beautiful gradient background
      className="
        relative w-full h-screen 
        flex items-center justify-center 
        bg-gradient-to-br from-[#1e1e2f] via-[#2a2a45] to-[#1e1e2f]
        overflow-hidden
      "
    >
      {/* Glass-like container */}
      <div
        className="
          relative max-w-3xl w-full mx-4 
          bg-white/10 backdrop-blur-md 
          rounded-md p-8 shadow-lg
          flex flex-col items-center justify-center gap-6
        "
      >
        {/* Animated greeting & name */}
        <h1
          className="
            font-extrabold text-5xl 
            text-white text-center leading-tight
          "
        >
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
          />{" "}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={11}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <br />
          {/* Job Title in a highlight color */}
          <span className="text-[#ffbc42]">
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

        {/* Typing animation (below the name) */}
        <div className="text-2xl text-white font-semibold">
          <TypeAnimation />
        </div>

        {/* Resume button */}
        <div className="mt-4">
          <a
            href="https://drive.google.com/file/d/1gPfUEOq5nFQ3ov4AWcocnN0hpwauGLIg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              rounded-full px-6 py-2 
              text-white font-medium tracking-wide
              bg-gradient-to-r from-[#ffbc42] to-[#ff914d]
              hover:opacity-90 transition-all duration-300
              shadow-md hover:shadow-lg
              active:scale-95
            "
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
