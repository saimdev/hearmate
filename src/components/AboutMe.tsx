import React, { useEffect, useState } from "react";
import {
  FaAward,
  FaBriefcase,
  FaSmile,
  FaLaptopCode,
} from "react-icons/fa";
import carousal1 from "../assets/images/carousal_1.png";

const AboutMe: React.FC = () => {
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

  return (
    <section
      id="solution"
      className={`relative py-16 overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-light-blue-500 via-indigo-200 to-white text-gray-800"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {!darkMode && (
          <>
            <div className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-20 w-96 h-96 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 to-transparent opacity-20 w-96 h-96 bottom-10 right-10 animate-pulse"></div>
          </>
        )}
      </div>

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          Solution
        </h2>

        {/* Short Bio */}
        <p
          className={`text-lg text-center leading-relaxed mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <span className="font-bold text-cyan-400">HearMate</span> is a smartphone app for iOS and Android that uses artificial intelligence to suppress noise and increase speech intelligibility. It works with every wired and
wireless earphones, including Apple Airpods, Samsung Buds, Sony Earbuds, Boss Buds. HearMate uses latest codecs and technologies to filter out the surrounding noises and bring you a clearer and enhanced sounds from your surroundings so you can live better.
        </p>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaAward className="text-3xl text-cyan-500" /> Key Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaBriefcase
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                Effortlessly engage in conversations and never feel left out
again.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaSmile
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                Relish the beauty of nature, listen to the birds chirping and your cat meow.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaLaptopCode
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                Delight in watching movies and immerse yourself in your
favorite music.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaLaptopCode
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                Stay safe by clearly hearing the sounds around you, including cars on the road
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <img src={carousal1} alt="" className="w-full object-cover h-full rounded-xl"/>
          </div>
        </div>

        {/* Additional Skills */}
        {/* <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaEye className="text-3xl text-cyan-500" /> Attention to Detail
            </h3>
            <p>
              My keen eye for detail ensures that every pixel is perfectly
              placed, enhancing the user experience with precision.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaThumbsUp className="text-3xl text-cyan-500" /> Teamwork
            </h3>
            <p>
              Collaboration is key! I thrive in team environments where ideas
              are shared and innovative solutions are created together.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaAward className="text-3xl text-cyan-500" /> Certifications
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaAward
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>Certified Front-End Web Developer</span>
              </li>
              <li className="flex items-center gap-4">
                <FaAward
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>UI/UX Design Specialist</span>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
