import { useRef, useEffect, useState } from "react";
import { curve } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import HeroImg from "../assets/hero/hero.png"
import HeroImg1 from "../assets/hero/hero1.jpg";
import HeroImg2 from "../assets/hero/hero2.jpg";
import HeroImg3 from "../assets/hero/hero3.jpg";
import HeroImg4 from "../assets/hero/hero4.jpg";
import CompanyLogos from "./CompanyLogos";

const heroImages = [HeroImg,HeroImg1, HeroImg2, HeroImg3,HeroImg4];

const Hero = () => {
  const parallaxRef = useRef();
  const [currentHeroImage, setCurrentHeroImage] = useState(heroImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setCurrentHeroImage(heroImages[randomIndex]);
  }, []);

  return (
    <Section
      id="hero"
      className="pt-[12rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div className="container realtive" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Introducing <span className="inline-block relative">
              <span style={{ color: "#B84646" }}>Hear</span>
              <span className="text-[#0058A5]">Mate</span>
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
          </h1>
          <h1 className="h2">
            <span>
              An Innovative and Economical Hearing Solution for Crystal Clear Sound
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mt-3 mb-6 text-n-4 lg:mb-8">
            HearMate provides an economical and convenient over-the-counter hearing solution by converting your earphones and headphones into customized hearing aids.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={currentHeroImage}
                  className="aspect-video object-cover w-full h-full rounded-2xl"
                  width={1024}
                  height={490}
                  alt="Hero image"
                  loading="lazy"
                />
              </div>
            </div>
            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
