import React from "react";
import "../body/body.css";
// import thakurImg from "../../../image/ProfilePic.jpg";

import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../animations/AnimatedLetter";

function AboutMe() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const aboutUs = ["A", "b", "o", "u", "t", "", "M", "e"];

  return (
    <div id="about" className="max-w-7xl h-full mx-auto py-20 px-8 relative">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutUs}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div
            data-aos="fade-right"
            className="h-0.5 bg-blue-500 inline-block ml-2 align-middle"
          ></div>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 text-white">
          <div className="about-content">
            <div className="about-content flex items-center mb-4">
              <div className="w-1/3 px-1 text-center">
                <div className="about-card">
                  <i className="fas fa-award about-icon text-2xl text-blue-500"></i>
                  <h5 className="text-2xl font-bold text-blue-500 leading-none mb-1">
                    IT
                  </h5>
                  <small className="block text-blue-500">Graduate</small>
                </div>
              </div>
              <div className="w-1/3 px-1 text-center">
                <div className="about-card">
                  <i className="fas fa-code about-icon text-2xl text-blue-500"></i>
                  <h5 className="text-2xl font-bold text-blue-500 leading-none mb-1">
                    Experience
                  </h5>
                  <small className="block text-blue-500">1+ Yrs Coding</small>
                </div>
              </div>
              <div className="w-1/3 px-1 text-center">
                <div className="about-card">
                  <i className="fas fa-diagram-project about-icon text-2xl text-blue-500"></i>
                  <h5 className="text-2xl font-bold text-blue-500 leading-none mb-1">
                    Projects
                  </h5>
                  <small className="block text-blue-500">10+</small>
                </div>
              </div>
            </div>

            <p className="mb-4">
              I am{" "}
              <a href="#" className="text-blue-500">
                Thakur Neupane
              </a>
              , a recent graduate specializing in the MERN stack for web
              development. I'm passionate about creating effective and
              user-friendly applications using MongoDB, Express.js, React.js,
              and Node.js. During my studies, I enjoyed tackling coding
              challenges and projects that enhanced my skills in problem-solving
              and software development.
            </p>

            <p className="mb-4">
              I excel in collaborative environments and am eager to contribute
              to real-world projects using my skills. Learning and adapting to
              new technologies is essential in this fast-paced industry, and I'm
              motivated to stay updated. With a strong understanding of the MERN
              stack, I'm enthusiastic about starting my career and making a
              positive impact by creating innovative software solutions.
            </p>

            <div className="flex justify-center mb-4">
              {" "}
              <a href="#contact">
                <button className="vvd bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <span>Let’s Connect</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="md:w-1/2 pl-4 md:pl-0 flex justify-center align-baseline">
          {" "}
          <div className="about-me">
            <img
              src={thakurImg}
              alt="img"
              className="rounded-full w-64 md:w-80 self-end mb-4 md:mb-0"
              style={{ marginLeft: "5rem" }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutMe;
