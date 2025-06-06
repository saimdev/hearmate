import { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import HeroImg from "../assets/hero/hero.png"
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef();

  return (
    <Section
      id="hero"
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
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
          {/* <Button href="#" white>
            Download Now
          </Button> */}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* <div className="h-[1.4rem] bg-n-6 rounded-t-[0.9rem]"></div> */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={HeroImg}
                  className="aspect-video object-cover w-full h-full rounded-2xl"
                  width={1024}
                  height={490}
                  alt="AI robot image"
                  loading="lazy"
                />
                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax> */}
                {/* <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="HearMate Users"
                  />
                </ScrollParallax> */}
              </div>
            </div>
            <Gradient />
          </div>
          {/* Hero background image */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero image"
            /> */}
          </div>
          <BackgroundCircles />
        </div>
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
