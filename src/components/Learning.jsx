import React from "react";
import { SiDocker, SiKubernetes, SiOpenai, SiTrello } from "react-icons/si";

const iconMap = {
  Docker: <SiDocker size={40} color="#2496ED" />,
  kubernetes: <SiKubernetes size={40} color="#326CE5" />,
  "Generative AI": <SiOpenai size={40} color="#412991" />,
  "AI agents": <SiOpenai size={40} color="#412991" />,
  Rag: <SiTrello size={40} color="#0052CC" />,
};

const CurrentlyLearning = ({ tech }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold text-blue-500">Currently Learning</p>
      <div className="flex flex-col gap-3 w-full">
        {tech[3]?.learning?.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border border-slate-700 bg-slate-800 px-4 py-2 rounded-md shadow-md"
          >
            {iconMap[item.name] ? (
              iconMap[item.name]
            ) : (
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 40, height: 40 }}
              />
            )}
            <p className="text-slate-200 font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyLearning;
