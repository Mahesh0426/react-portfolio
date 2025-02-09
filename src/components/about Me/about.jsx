import React from "react";
import "../body/body.css";
import { FaAward } from "react-icons/fa";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div
      id="about"
      className="max-w-7xl min-h-screen mx-auto py-20 px-8 flex flex-col justify-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]"
      >
        About me
      </motion.h2>

      {/* about me */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-center justify-center w-full"
      >
        <div className="md:w-1/2 text-white">
          {/* summary section */}
          <div className="about-content flex flex-wrap items-center justify-center gap-y-4 mb-6">
            <div className="w-full md:w-1/3 px-1 text-center flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-2">
                <FaAward className="text-2xl text-yellow-500" />
                <h5 className="text-2xl font-bold text-blue-500 leading-none">
                  IT Graduate
                </h5>
              </div>
              <small className="text-blue-500">Graduate</small>
            </div>

            {/* Experience */}
            <div className="w-full md:w-1/3 px-1 text-center flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-2">
                <FaCode className="text-2xl text-yellow-500" />
                <h5 className="text-2xl font-bold text-blue-500 leading-none">
                  Experience
                </h5>
              </div>
              <small className=" text-blue-500">1+ Yrs Coding</small>
            </div>

            {/* Projects */}
            <div className="w-full md:w-1/3 px-1 text-center flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                <FaProjectDiagram className="text-2xl text-yellow-500" />
                <h5 className="text-2xl font-bold text-blue-500 leading-none">
                  Projects
                </h5>
              </div>
              <small className=" text-blue-500">10+</small>
            </div>
          </div>

          {/* about me in details  */}
          <p className="mb-4 text-center md:text-left">
            I am{" "}
            <a href="#" className="text-blue-500">
              Mahesh Kunwar
            </a>
            , a dedicated web developer specializing in the MERN stack—MongoDB,
            Express.js, React.js, and Node.js. Passionate about creating
            user-friendly and efficient applications, I enjoy solving complex
            problems through clean and scalable code. My journey in web
            development has been shaped by hands-on projects that have enhanced
            my problem-solving skills and deepened my technical expertise.
          </p>

          <p className="mb-4 text-center md:text-left">
            With a dynamic mindset and a strong enthusiasm for technology, I am
            always eager to learn new technologies and adapt to emerging trends
            in the fast-evolving tech landscape. A quick learner, I thrive in
            collaborative environments, constantly seeking opportunities to
            contribute, grow, and innovate. My goal is to leverage my skills to
            develop impactful software solutions that enhance user experiences
            and drive meaningful progress.
          </p>

          {/* lets connect button */}
          <div className="flex justify-center items-center w-full mb-4">
            <a href="#contact">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <span>Let’s Connect</span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
