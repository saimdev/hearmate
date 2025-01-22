import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousal1 from "../assets/images/carousal_1.png";
import carousal2 from "../assets/images/carousel_2.png";

const HeroSection: React.FC = () => {
  const images = [
    { src: {carousal1}, alt: "Image 1" },
    { src: {carousal2}, alt: "Image 2" },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gray-100">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
