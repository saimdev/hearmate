import Section from "./Section";
import Heading from "./Heading";
import { check, service1, } from "../assets";
import { brainmastertServices } from "../constants";
import Generating from "./Generating";
import { ScrollParallax } from "react-just-parallax";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Intelligent auditory solutions tailored specifically for your needs."
          text="HearMate utilizes cutting-edge technology to improve your auditory experience. Personalized Hearing Aid"
        />

        <div className="relative">
          {/* Service 1 */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-25 md:opacity-100"
                src={service1}
                alt="Smartest AI"
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h3 className="h4 mb-4">Personlized Hearing Aid</h3>
              <p className="body-2 mb-[3rem] text-n-3">
                Discover personalized and distinct audio quality with HearMate
              </p>
              <ul className="body-2">
                {brainmastertServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* <ScrollParallax isAbsolutelyPositioned>
              <Generating className="absolute left-4 right-4 bottom-6 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-24 lg:-translate-x-1/2" />
            </ScrollParallax> */}
          </div>

          {/* Service 2 */}
          {/* <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  alt="robot image"
                  width={630}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h3 className="h4 mb-4">Photo editing</h3>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div> */}

          {/* Service 3 */}
        </div>
        <Gradient />
      </div>
      {/* </div> */}
    </Section>
  );
};

export default Services;
