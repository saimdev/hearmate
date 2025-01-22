import React, { useState, useEffect } from "react";
import { FaVolumeUp,FaWaveSquare ,FaDeaf, FaMicrophone, FaHeadphonesAlt, FaSlidersH,  FaMusic } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Skills: React.FC = () => {
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

  const carouselData = [
    {
      icon: <FaVolumeUp />,
      title: "Volume Enhancement",
      description:
        "A robust and adjustable hearing amplifier to help you connect with your surroundings",
    },
    {
      icon: <FaWaveSquare />,
      title: "Real Time Noise Reduction",
      description:
        "Hear clear voices free from any background noise such as wind, footsteps, or cluttering sounds.",
    },
    {
      icon: <FaDeaf />,
      title: "Hearing Test",
      description: "Take professional audiometry tests with quick results and track hearing loss over time",
    },
    {
      icon: <FaMicrophone />,
      title: "Microphone Selection",
      description: "Choose a microphone of your choice, whether it's the one on your phone or your earphones",
    },
    {
      icon: <FaHeadphonesAlt />,
      title: "Any Earbuds",
      description:
        "Support bluetooth earbuds and other wired and wireless audio devices.",
    },
    {
      icon: <FaSlidersH />,
      title: "Treble & Bass Adjustment",
      description:
        "Individually adjust treble & bass settings for each ear by fine-tuning the equalizer.",
    },
    {
      icon: <FaMusic />,
      title: "Music & TV Mode",
      description: "Experience music and TV with enhanced and amplified sound for a truly immersive experience",
    },
  ];

  const carousals = Array.from({ length: 2 }, (_, carouselIndex) =>
    carouselData.slice(carouselIndex * 6, (carouselIndex + 1) * 6)
  );

  return (
    <section
      id="features"
      className={`relative py-12 md:py-16 min-h-screen justify-center flex flex-col items-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 text-gray-100"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800"
      }`}
    >
      <div className="relative px-6 mx-auto md:px-20 ">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          Features
        </h2>

        <Carousel
          showArrows
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="w-full"
        >
          {carousals.map((cards, carouselIndex) => (
            <div key={carouselIndex} className="grid py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {cards.map((card: { icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, cardIndex: React.Key | null | undefined) => (
                <div
                  key={cardIndex}
                  className="flex flex-col items-center p-6 mx-3 text-center transition-all duration-300 transform rounded-lg shadow-lg bg-white hover:scale-105"
                >
                  <div className="mb-4 text-4xl text-blue-500">{card.icon}</div>
                  <h4 className="text-xl font-bold">{card.title}</h4>
                  <p className="mt-2 text-lg">{card.description}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
