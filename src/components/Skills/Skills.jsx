import React from "react";
import "../body/body.css";
import tech from "../../assets/tech.json";

const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto  max-w-7xl px-2 lg:px-8 flex flex-col sm:items-center "
    >
      <h2
        data-aos="fade-right"
        className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]"
      >
        Tools
      </h2>

      {/* tech stack  */}
      <div
        data-aos="flip-up"
        className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
      >
        {/* Frontend Stack */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold text-blue-500">Frontend</p>
          <div className="flex flex-col gap-3 w-full">
            {tech[0].frontend.map((item) => (
              <div
                className="flex items-center gap-4 border border-slate-700 bg-slate-800 px-4 py-2 rounded-md shadow-md"
                key={item.id}
              >
                <img src={item.image} alt={item.name} className="h-10 w-10" />
                <p className="text-slate-200 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Stack */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold text-blue-500">Backend</p>
          <div className="flex flex-col gap-3 w-full">
            {tech[1].backend.map((item) => (
              <div
                className="flex items-center gap-4 border border-slate-700 bg-slate-800 px-4 py-2 rounded-md shadow-md"
                key={item.id}
              >
                <img src={item.image} alt={item.name} className="h-10 w-10" />
                <p className="text-slate-200 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Misc Stack */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold text-blue-500">Misc</p>
          <div className="flex flex-col gap-3 w-full">
            {tech[2].other.map((item) => (
              <div
                className="flex items-center gap-4 border border-slate-700 bg-slate-800 px-4 py-2 rounded-md shadow-md"
                key={item.id}
              >
                <img src={item.image} alt={item.name} className="h-10 w-10" />
                <p className="text-slate-200 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
