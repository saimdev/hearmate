// import { MouseParallax } from "react-just-parallax";
// import { smallSphere, stars } from "../assets";
import Button from "./Button";
import Heading from "./Heading";
import GooglePlay from "../assets/mockups/google-play-button.svg"

import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

import Screen_1 from "../assets/mockups/Frame_1.jpg"
import Screen_2 from "../assets/mockups/Frame_2.jpg"
import Screen_3 from "../assets/mockups/Frame_3.jpg"
import Screen_4 from "../assets/mockups/Frame_4.jpg"
import Screen_5 from "../assets/mockups/Frame_5.jpg"



const AndriodMockUp = () => {

    const MockUps = [
        { name: "Screen 1", mockup: Screen_1 },
        { name: "Screen 3", mockup: Screen_3 },
        { name: "Screen 2", mockup: Screen_2 },
        { name: "Screen 4", mockup: Screen_4 },
        { name: "Screen 5", mockup: Screen_5 },
    ]
    return (
        <Section id="" className="overflow-hidden">
            <div className="container relative z-2">
                {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere}
                        alt="Sphere"
                        width={255}
                        height={255}
                        className="relative z-1 animate-spin-slow"
                    />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <MouseParallax strength={0.07}>
                            <img
                                src={stars}
                                alt="stars"
                                width={950}
                                height={400}
                                className="w-full"
                            />
                        </MouseParallax>
                    </div>
                </div> */}
                <Heading
                    title="Download App "
                    tag="Get started with "
                    accent="HearMate"
                />
                <div className="relative">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3">
                        {MockUps.map((mockup, index) => (
                            <div key={index} className=" lg:h-full h-5/6 overflow-hidden ">
                                <img src={mockup.mockup} alt={mockup.name} className="h-full w-full object-cover" loading="lazy" />
                            </div  >
                        ))}

                    </div>
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex justify-center mt-10">
                    <a href="https://play.google.com/store/apps/details?id=com.corise.hearmate"
                        role="link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        <img src={GooglePlay} alt="" className="w-80" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default AndriodMockUp;
