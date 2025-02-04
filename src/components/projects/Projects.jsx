import React, { useState } from "react";
import projects from "../../assets/projects.json";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Slice the projects array based on current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <div
      id="projects"
      className="mx-auto max-w-7xl px-2 lg:px-8 flex flex-col sm:items-center "
    >
      <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-5 md:grid-cols-2 grid-cols-1 sm:max-w-5xl animate-fade duration-2000 delay-1000">
        {currentProjects.map((project) => (
          <div key={project.id} className="bg-slate-800 shadow sm:p-10 p-5">
            {/* Image */}
            <div className="group relative overflow-hidden h-72">
              <img
                src={project.src}
                alt=""
                className="w-full h-full object-cover object-top origin-top transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-md cursor-pointer"
              />
              {/* Hover */}
              <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                <a
                  href={project.live}
                  className="font-bold border-2 border-slate-100 hover:border-slate-50 hover:brightness-150 transition-all duration-500 ease-in-out text-slate-200 text-2xl bg-rose-900 px-5 py-1 rounded-xl"
                  target="_blank"
                >
                  Live
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    className="font-bold border-2 border-slate-100 hover:border-slate-50 hover:brightness-150 transition-all duration-500 ease-in-out text-slate-200 text-2xl bg-rose-900 px-5 py-1 rounded-xl"
                    target="_blank"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl text-amber-200 pt-2">
                {project.name}
              </p>
              <p className="text-slate-200">{project.description}</p>
              <div className="touch:block hidden text-slate-200">
                <a
                  href={project.live}
                  className="font-black text-slate-200 underline"
                  target="_blank"
                >
                  Live
                </a>{" "}
                /{" "}
                <a
                  href={project.repo}
                  className="font-black text-slate-200 underline"
                  target="_blank"
                >
                  Code
                </a>
              </div>
              <div className="flex gap-1 flex-wrap">
                {project.tech.map((tech, i) => (
                  <p
                    className="bg-rose-900 text-slate-50 font-semibold mt-2 text-xs py-0.5 px-1"
                    key={tech + i}
                  >
                    #{tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white bg-rose-900 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-rose-700"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-amber-500 text-black font-bold"
                : "bg-gray-700 text-white hover:bg-gray-500"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-white bg-rose-900 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-rose-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
