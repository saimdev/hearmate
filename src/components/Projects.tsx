import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import doctor1 from "../assets/images/doctor1.jpg";
// import EcommerceImg from "../assets/Projects/ecommerce.png";
// import ChatAppImg from "../assets/Projects/ChatApp.png";
const Projects: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Dr. Kamran Khan",
      profession: "ENT Specialist Malaysia",
      description:
        "I have been using HearMate for more than a month, and I am extremely satisfied with its performance, to the extent that I have forgotten where I placed my expensive hearing aid. I would certainly endorse HearMate.",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://myportfolio.com",
      location: "UAE",
      image: doctor1,
    },
    {
      name: "Michael",
      profession: "ENT Specialist",
      description:
        "For several years, I experienced hearing difficulties but hesitated to use hearing aids, as I found them to be quite unnatural. However, the experience of using HearMate was entirely intuitive. I just downloaded the application and started hearing better.",
      tools: ["Node.js", "Express", "React", "MongoDB"],
      liveLink: "https://myecommerce.com",
      location: "USA",
      image: doctor1,
    },
    {
      name: "Cristina",
      profession: "ENT Specialist",
      description: " I have consistently experienced discomfort when using hearing aids. However, HearMate provided a remarkably discreet solution that required no extra items to manage. From the very first use, it felt like the perfect fit. Kudos to HearMate.",
      tools: ["React", "Socket.io", "Node.js"],
      liveLink: "https://mychatapp.com",
      location: "Spain",
      image: doctor1,
    },
  ];

  return (
    <section
      id="approvals"
      className={`relative min-h-screen py-16 flex justify-center flex-col items-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 text-gray-100"
          : "bg-gradient-to-br from-light-blue-500 via-indigo-200 to-white text-gray-800"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {!darkMode && (
          <>
            <div className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-20 w-96 h-96 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 to-transparent opacity-20 w-96 h-96 bottom-10 right-10 animate-pulse"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          Approvals
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
