import React from "react";
import { FaLocationArrow } from "react-icons/fa";

interface ProjectProps {
  name: string;
  profession: string;
  description: string;
  tools: string[];
  liveLink?: string;
  location?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  name,
  profession,
  description,
  // tools,
  liveLink,
  // repoLink,
  location,
  image,
}) => {
  return (
    <div className="relative overflow-hidden transition-transform duration-300 bg-white shadow-xl rounded-xl group dark:bg-gray-800 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 rounded-t-xl group-hover:scale-110"
        />
        <div className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900 via-transparent to-transparent group-hover:opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
          {name}
        </h3>
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
          {profession}
        </p>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {/* <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200"
            >
              {tool}
            </span>
          ))}
        </div> */}
        <div className="flex items-center justify-between">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 transition hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <FaLocationArrow /> {location}
            </a>
          )}
          {/* {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 transition dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
            >
              <FaGithub /> GitHub Repo
            </a>
          )} */}
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600">
        Featured
      </div>
    </div>
  );
};

export default ProjectCard;
