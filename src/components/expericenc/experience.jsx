import React from "react";
import { assets } from "../../assets/asset";

const Experience = () => {
  const workExp = [
    {
      icon: assets.RebbTechPhoto,
      companyName: "Rebb-Tech",
      startDate: "Nov 2024",
      endDate: "Present",
      position: "Full Stack Developer (internship)",
      description: `
        At Rebb-Tech, starting  my internship in  November 2024 as a full stack developer,  I have honed my expertise in building dynamic web applications using the MERN stack while working on scalable and efficient solutions.
        
        - Backend: Express.js, Node.js, JWT, Cookies, Middlewares (Joi, Auth), Cloudinary & Multer (File Uploads), Nodemailer (Emails), Passport.js, Stripe, Mongoose, MongoDB.
        
        - Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Redux, Bootstrap, React Router, Toastify, Axios, UI/UX Design, Google Fonts, FontAwesome.
        
        - Others: Git/GitHub, npm/yarn, Trello, Jira, Agile, AWS, Render, Vercel, Slack, Team Collaboration.
      `,
    },
  ];

  return (
    <div
      id="experience"
      className="max-w-7xl h-full mx-auto py-20 px-8 relative"
    >
      <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]">
        Experience
      </h2>
      <div className="flex flex-col">
        {workExp.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col shadow-md shadow-[#06092e41] p-5 rounded-md"
          >
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-2 my-3">
                <img
                  src={experience.icon}
                  alt=""
                  width={40}
                  className="rounded-full"
                />
                <p className="text-xl">{experience.companyName}</p>
              </div>
              <p className="text-lg text-blue-500">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <div>
              <p className="text-3xl text-blue-500">{experience.position}</p>
            </div>
            <div className="py-5">
              <h2 className="text-yellow-400 text-2xl mb-2">Overview:</h2>
              <div className="text-white mb-4">
                {experience.description.split("- ").map((section, index) => {
                  if (section.trim().startsWith("Backend:")) {
                    return (
                      <p key={index}>
                        <span className="text-yellow-400 text-2xl mb-2 block">
                          Backend:
                        </span>{" "}
                        {section.replace("Backend:", "").trim()}
                      </p>
                    );
                  } else if (section.trim().startsWith("Frontend:")) {
                    return (
                      <p key={index}>
                        <span className="text-yellow-400 text-2xl mb-2 block">
                          Frontend:
                        </span>{" "}
                        {section.replace("Frontend:", "").trim()}
                      </p>
                    );
                  } else if (section.trim().startsWith("Others:")) {
                    return (
                      <p key={index}>
                        <span className="text-yellow-400 text-2xl mb-2 block">
                          Others:
                        </span>{" "}
                        {section.replace("Others:", "").trim()}
                      </p>
                    );
                  } else {
                    return (
                      <p key={index} className="text-white">
                        {section.trim()}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
